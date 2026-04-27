from pathlib import Path

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Flowable,
    Frame,
    Image,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parent
OUTPUT_PATH = ROOT / "personal-ai-clone-worksheet.pdf"
WORKSHEET_ART = ROOT / "assets" / "worksheet-cover-art.png"

PALETTE = {
    "bg": colors.HexColor("#fbf6ef"),
    "ink": colors.HexColor("#1e2a28"),
    "ink_soft": colors.HexColor("#4a5754"),
    "forest": colors.HexColor("#26433d"),
    "teal": colors.HexColor("#4f8078"),
    "terracotta": colors.HexColor("#bf6e4b"),
    "gold": colors.HexColor("#d7ae66"),
    "cream": colors.HexColor("#fffaf3"),
    "line": colors.HexColor("#ddd1c2"),
    "card": colors.HexColor("#fffdf9"),
}


class WritingLines(Flowable):
    def __init__(self, lines=3, width=6.4 * inch, gap=18, color=PALETTE["line"]):
        super().__init__()
        self.num_lines = lines
        self.line_width = width
        self.gap = gap
        self.color = color
        self.height = max(10, (lines - 1) * gap + 10)

    def wrap(self, availWidth, availHeight):
        self.line_width = min(self.line_width, availWidth)
        return self.line_width, self.height

    def draw(self):
        self.canv.saveState()
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(0.7)
        y = self.height - 4
        for _ in range(self.num_lines):
            self.canv.line(0, y, self.line_width, y)
            y -= self.gap
        self.canv.restoreState()


class ChecklistBlock(Flowable):
    def __init__(self, items, columns=1, width=6.5 * inch):
        super().__init__()
        self.items = items
        self.columns = columns
        self.target_width = width
        rows = (len(items) + columns - 1) // columns
        self.height = rows * 20 + 2

    def wrap(self, availWidth, availHeight):
        self.target_width = min(availWidth, self.target_width)
        rows = (len(self.items) + self.columns - 1) // self.columns
        self.height = rows * 20 + 2
        return self.target_width, self.height

    def draw(self):
        self.canv.saveState()
        self.canv.setStrokeColor(PALETTE["line"])
        self.canv.setFillColor(PALETTE["ink"])
        self.canv.setFont("Helvetica", 9.5)
        col_width = self.target_width / self.columns
        rows = (len(self.items) + self.columns - 1) // self.columns
        y = self.height - 14
        index = 0
        for _ in range(rows):
            for col in range(self.columns):
                if index >= len(self.items):
                    break
                x = col * col_width
                self.canv.rect(x, y - 2, 10, 10, stroke=1, fill=0)
                self.canv.drawString(x + 16, y, self.items[index])
                index += 1
            y -= 20
        self.canv.restoreState()


def fit_image_dimensions(path: Path, max_width: float, max_height: float):
    with PILImage.open(path) as img:
        width, height = img.size
    scale = min(max_width / width, max_height / height)
    return width * scale, height * scale


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15.2,
            textColor=PALETTE["ink_soft"],
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Lead",
            parent=styles["Body"],
            fontSize=11.5,
            leading=17,
            textColor=PALETTE["ink"],
            spaceAfter=12,
        )
    )
    styles.add(
        ParagraphStyle(
            name="H1",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=26,
            leading=30,
            textColor=PALETTE["forest"],
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            name="H2",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=PALETTE["forest"],
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="H3",
            parent=styles["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=12.5,
            leading=16,
            textColor=PALETTE["terracotta"],
            spaceBefore=6,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Eyebrow",
            parent=styles["Body"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=10,
            alignment=TA_CENTER,
            textColor=PALETTE["terracotta"],
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Prompt",
            parent=styles["Body"],
            fontName="Helvetica-Bold",
            textColor=PALETTE["ink"],
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Small",
            parent=styles["Body"],
            fontSize=9,
            leading=13,
        )
    )
    return styles


def draw_cover(canvas, doc):
    canvas.saveState()
    width, height = doc.pagesize
    canvas.setFillColor(PALETTE["bg"])
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    canvas.setFillColor(PALETTE["gold"])
    canvas.circle(width - 72, height - 76, 95, stroke=0, fill=1)
    canvas.setFillColor(PALETTE["teal"])
    canvas.circle(84, 122, 54, stroke=0, fill=1)
    canvas.restoreState()


def draw_body(canvas, doc):
    canvas.saveState()
    width, height = doc.pagesize
    canvas.setFillColor(PALETTE["bg"])
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    canvas.setStrokeColor(colors.HexColor("#eadfce"))
    canvas.setLineWidth(0.8)
    canvas.line(doc.leftMargin, height - 42, width - doc.rightMargin, height - 42)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.setFillColor(PALETTE["terracotta"])
    canvas.drawString(doc.leftMargin, height - 34, "PERSONAL AI CLONE WORKSHEET")
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(PALETTE["ink_soft"])
    canvas.drawRightString(width - doc.rightMargin, 28, f"Page {canvas.getPageNumber() - 1}")
    canvas.restoreState()


def section_header(title, subtitle, styles):
    return [
        Paragraph(title, styles["H2"]),
        Paragraph(subtitle, styles["Lead"]),
    ]


def card(title, elements):
    body = [[Paragraph(f"<b>{title}</b>", getSampleStyleSheet()["BodyText"])]]
    return body


def build_cover(styles):
    story = [NextPageTemplate("Body"), Spacer(1, 0.45 * inch)]
    story.append(Paragraph("FREE WORKSHEET", styles["Eyebrow"]))
    story.append(
        Paragraph(
            "Personal AI Clone Worksheet",
            ParagraphStyle(
                "CoverTitle",
                parent=styles["H1"],
                alignment=TA_CENTER,
                textColor=PALETTE["forest"],
            ),
        )
    )
    story.append(
        Paragraph(
            "A printable companion for defining your first use case, setting boundaries, and building a clone that helps without taking over.",
            ParagraphStyle(
                "CoverSub",
                parent=styles["Lead"],
                alignment=TA_CENTER,
            ),
        )
    )
    if WORKSHEET_ART.exists():
        width, height = fit_image_dimensions(WORKSHEET_ART, 6.0 * inch, 5.1 * inch)
        story.append(Image(str(WORKSHEET_ART), width=width, height=height))
        story.append(Spacer(1, 0.22 * inch))
    story.append(
        Paragraph(
            "Use plain language. Keep it simple. Start with one low-risk job.",
            ParagraphStyle(
                "CoverFooter",
                parent=styles["Body"],
                alignment=TA_CENTER,
                textColor=PALETTE["terracotta"],
                fontName="Helvetica-Bold",
            ),
        )
    )
    story.append(PageBreak())
    return story


def panel_table(title, subtitle, content, width=6.7 * inch):
    inner = [[Paragraph(f"<font name='Helvetica-Bold' color='#26433d'>{title}</font>", getSampleStyleSheet()["BodyText"])]]
    if subtitle:
        inner.append([Paragraph(f"<font color='#4a5754'>{subtitle}</font>", getSampleStyleSheet()["BodyText"])])
    for item in content:
        inner.append([item])
    table = Table(inner, colWidths=[width])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALETTE["card"]),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("ROUNDEDCORNERS", [18, 18, 18, 18]),
                ("LEFTPADDING", (0, 0), (-1, -1), 14),
                ("RIGHTPADDING", (0, 0), (-1, -1), 14),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return table


def build_story(styles):
    story = []
    story.extend(build_cover(styles))

    story.extend(section_header("How to Use This Worksheet", "This worksheet is designed to help you build one practical AI assistant for everyday admin. Short answers are enough.", styles))
    intro_table = Table(
        [
            ["Best first use cases", "daily planning, routine email drafts, lists, weekly review"],
            ["What to avoid at first", "medical, legal, financial, or highly sensitive decisions"],
            ["Success test", "Does this save time and make life feel lighter within one week?"],
        ],
        colWidths=[1.8 * inch, 4.8 * inch],
    )
    intro_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("ROWBACKGROUNDS", (0, 0), (-1, -1), [colors.white, colors.HexColor("#f7f1e9")]),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, PALETTE["line"]),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("TEXTCOLOR", (0, 0), (-1, -1), PALETTE["ink"]),
                ("FONTSIZE", (0, 0), (-1, -1), 9.4),
                ("LEADING", (0, 0), (-1, -1), 12),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(intro_table)
    story.append(Spacer(1, 14))

    story.extend(section_header("Part 1: Why Build This?", "Clarify what you want help with and what would make this worth using.", styles))
    story.append(Paragraph("1. What do you want help with most?", styles["Prompt"]))
    story.append(ChecklistBlock(["planning my day", "organizing tasks", "drafting emails", "weekly review", "errands and shopping lists", "other"], columns=2))
    story.append(Spacer(1, 10))
    story.append(Paragraph("2. What feels frustrating or time-consuming right now?", styles["Prompt"]))
    story.append(WritingLines(lines=4))
    story.append(Spacer(1, 8))
    story.append(Paragraph("3. What would make this worth it?", styles["Prompt"]))
    story.append(Paragraph("Examples: save 20 minutes a day, fewer forgotten tasks, faster replies, less mental clutter.", styles["Small"]))
    story.append(WritingLines(lines=3))
    story.append(PageBreak())

    story.extend(section_header("Parts 2-4: Scope and Boundaries", "Pick one starting use case, decide what the clone should do, and define what it should never do.", styles))
    story.append(Paragraph("Part 2. My starting use case", styles["Prompt"]))
    story.append(Paragraph("Examples: turn messy notes into a clean to-do list, draft routine replies, create a realistic daily plan, prepare a weekly checklist.", styles["Small"]))
    story.append(WritingLines(lines=3))
    story.append(Spacer(1, 8))
    story.append(Paragraph("Why I picked it", styles["Prompt"]))
    story.append(WritingLines(lines=3))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 3. What I want the clone to do", styles["Prompt"]))
    story.append(ChecklistBlock(["prioritize tasks", "sort into today / this week / later", "draft short email replies", "create shopping or errand lists", "summarize notes", "identify missing information", "suggest reminders"], columns=2))
    story.append(Spacer(1, 10))
    story.append(WritingLines(lines=3))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 4. What it must never do", styles["Prompt"]))
    story.append(ChecklistBlock(["send emails without review", "reschedule appointments", "make promises to other people", "give medical advice", "give legal advice", "make financial decisions", "handle sensitive personal matters", "store highly private information"], columns=2))
    story.append(Spacer(1, 10))
    story.append(WritingLines(lines=3))
    story.append(PageBreak())

    story.extend(section_header("Parts 5-7: Voice, Examples, and Rules", "Capture how the assistant should sound and the rules it should follow.", styles))
    story.append(Paragraph("Part 5. My preferred tone", styles["Prompt"]))
    story.append(Paragraph("Examples: short and friendly, warm but direct, calm and practical, clear and not too formal.", styles["Small"]))
    story.append(WritingLines(lines=2))
    story.append(Spacer(1, 8))
    story.append(Paragraph("How long should outputs be?", styles["Prompt"]))
    story.append(Paragraph("Examples: very short, short unless I ask for detail, bullet points only, brief summary plus action list.", styles["Small"]))
    story.append(WritingLines(lines=2))
    story.append(Spacer(1, 8))
    story.append(Paragraph("What should it prioritize?", styles["Prompt"]))
    story.append(Paragraph("Examples: urgent first, easiest wins first, appointments first, anything overdue first.", styles["Small"]))
    story.append(WritingLines(lines=2))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 6. What real examples can I give it?", styles["Prompt"]))
    story.append(Paragraph("Examples: 5 to 10 emails I already wrote, old to-do lists, planning notes, reminders I send myself, scheduling habits.", styles["Small"]))
    story.append(WritingLines(lines=4))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 7. Finish these sentences", styles["Prompt"]))
    rule_table = Table(
        [
            ["Always", ""],
            ["Never", ""],
            ["Ask me before", ""],
        ],
        colWidths=[1.4 * inch, 5.2 * inch],
        rowHeights=[0.9 * inch, 0.9 * inch, 0.9 * inch],
    )
    rule_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#f2e8db")),
                ("TEXTCOLOR", (0, 0), (-1, -1), PALETTE["ink"]),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, PALETTE["line"]),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    story.append(rule_table)
    story.append(PageBreak())

    story.extend(section_header("Parts 8-10: Prompt, Test, and Score", "Turn your decisions into a first prompt, then evaluate how useful the results really are.", styles))
    prompt_table = Table(
        [[
            Paragraph(
                "<b>You are my personal AI assistant.</b> Help me with [main task].<br/><br/>"
                "<b>My preferences:</b><br/>"
                "- Tone: [tone]<br/>"
                "- Length: [length]<br/>"
                "- Priorities: [what matters first]<br/><br/>"
                "<b>Your job:</b><br/>"
                "- [job 1]<br/>- [job 2]<br/>- [job 3]<br/><br/>"
                "<b>Rules:</b><br/>"
                "- Always [rule]<br/>- Always [rule]<br/>- Never [rule]<br/>- Never [rule]<br/>- Ask me before [rule]<br/><br/>"
                "<b>When I give you notes or tasks, return:</b><br/>"
                "1. Top priorities<br/>2. Quick wins<br/>3. Drafts or lists<br/>4. Questions for me",
                styles["Small"],
            )
        ]],
        colWidths=[6.55 * inch],
    )
    prompt_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f5efe6")),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 12),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ]
        )
    )
    story.append(Paragraph("Part 8. Prompt template", styles["Prompt"]))
    story.append(prompt_table)
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 9. Test on a real example", styles["Prompt"]))
    story.append(Paragraph("Use one real-life batch such as today's schedule, loose tasks, errands, and two emails needing replies.", styles["Small"]))
    story.append(WritingLines(lines=3))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 10. Score the output from 1 to 5", styles["Prompt"]))
    score_table = Table(
        [
            ["Question", "Score", "Notes"],
            ["Was it useful?", "", ""],
            ["Was it accurate?", "", ""],
            ["Did it sound like me?", "", ""],
            ["Did it save time?", "", ""],
            ["Did it stay within limits?", "", ""],
        ],
        colWidths=[2.6 * inch, 0.8 * inch, 3.15 * inch],
    )
    score_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PALETTE["forest"]),
                ("TEXTCOLOR", (0, 0), (-1, 0), PALETTE["cream"]),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#faf5ed")]),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, PALETTE["line"]),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(score_table)
    story.append(PageBreak())

    story.extend(section_header("Parts 11-13: Troubleshooting and First Week Plan", "Use this page to adjust the system and decide whether it deserves to become part of your routine.", styles))
    story.append(Paragraph("Part 11. If the output is weak, check the likely issue", styles["Prompt"]))
    story.append(ChecklistBlock(["too broad: narrow the use case", "too vague: add clearer rules", "wrong tone: add real examples", "too much guessing: tell it to ask for missing details", "too much work to review: reduce scope"], columns=1))
    story.append(Spacer(1, 8))
    story.append(Paragraph("What I should change next", styles["Prompt"]))
    story.append(WritingLines(lines=3))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 12. Fit and risk check", styles["Prompt"]))
    story.append(ChecklistBlock(["Are the tasks repetitive?", "Are they low risk?", "Can I review before using the output?", "Would saving a small amount of time consistently help me?", "Am I comfortable not sharing highly sensitive information?"], columns=1))
    story.append(Spacer(1, 12))
    story.append(Paragraph("Part 13. My first week plan", styles["Prompt"]))
    week_table = Table(
        [
            ["Day 1", "I will test it on"],
            ["Day 2", "I will improve"],
            ["Day 3", "I will add"],
            ["Day 4", "I will review whether it helped with"],
            ["Day 5", "I will decide whether to keep using it for"],
        ],
        colWidths=[0.9 * inch, 5.7 * inch],
        rowHeights=[0.7 * inch] * 5,
    )
    week_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#f2e8db")),
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("TEXTCOLOR", (0, 0), (-1, -1), PALETTE["ink"]),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, PALETTE["line"]),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    story.append(week_table)
    story.append(Spacer(1, 14))
    closing = Table(
        [[Paragraph("<b>Final reminder:</b> This clone should help with friction, not replace judgment. If it does not make life simpler, it is not the right setup yet.", styles["Body"])]],
        colWidths=[6.55 * inch],
    )
    closing.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 12),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ]
        )
    )
    story.append(closing)
    return story


def main():
    styles = build_styles()
    doc = BaseDocTemplate(
        str(OUTPUT_PATH),
        pagesize=letter,
        leftMargin=0.78 * inch,
        rightMargin=0.78 * inch,
        topMargin=0.82 * inch,
        bottomMargin=0.72 * inch,
        title="Personal AI Clone Worksheet",
        author="OpenAI Codex",
    )
    cover_frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="cover")
    body_frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height - 0.15 * inch, id="body")
    doc.addPageTemplates(
        [
            PageTemplate(id="Cover", frames=[cover_frame], onPage=draw_cover),
            PageTemplate(id="Body", frames=[body_frame], onPage=draw_body),
        ]
    )
    story = build_story(styles)
    doc.build(story)
    print(f"Created {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
