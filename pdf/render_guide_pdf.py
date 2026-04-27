from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, StyleSheet1, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    ListFlowable,
    ListItem,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Preformatted,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parent
GUIDE_PATH = ROOT.parent / "personal-ai-clone-guide.md"
OUTPUT_PATH = ROOT / "personal-ai-clone-guide.pdf"
COVER_ART = ROOT / "assets" / "cover-art.png"
DIVIDER_ART = ROOT / "assets" / "divider-art.png"


PALETTE = {
    "bg": colors.HexColor("#fbf6ef"),
    "ink": colors.HexColor("#1e2a28"),
    "ink_soft": colors.HexColor("#4a5754"),
    "forest": colors.HexColor("#26433d"),
    "teal": colors.HexColor("#4f8078"),
    "terracotta": colors.HexColor("#bf6e4b"),
    "gold": colors.HexColor("#d7ae66"),
    "cream": colors.HexColor("#fffaf3"),
    "line": colors.HexColor("#d9cec0"),
}


def fit_image_dimensions(path: Path, max_width: float, max_height: float) -> tuple[float, float]:
    with PILImage.open(path) as img:
        width, height = img.size
    scale = min(max_width / width, max_height / height)
    return width * scale, height * scale


def build_styles() -> StyleSheet1:
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15.5,
            textColor=PALETTE["ink_soft"],
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Lead",
            parent=styles["Body"],
            fontSize=12,
            leading=18,
            textColor=PALETTE["ink"],
            spaceAfter=12,
        )
    )
    styles.add(
        ParagraphStyle(
            name="H1",
            parent=styles["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=25,
            leading=30,
            textColor=PALETTE["forest"],
            spaceBefore=20,
            spaceAfter=12,
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
            spaceBefore=16,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="H3",
            parent=styles["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=13.5,
            leading=18,
            textColor=PALETTE["terracotta"],
            spaceBefore=10,
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SmallCaps",
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
            name="SectionLabel",
            parent=styles["Body"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=13.8,
            textColor=PALETTE["terracotta"],
            spaceBefore=10,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Callout",
            parent=styles["Body"],
            fontName="Helvetica-Oblique",
            fontSize=10.3,
            leading=14.3,
            textColor=PALETTE["ink"],
            spaceBefore=8,
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BulletBody",
            parent=styles["Body"],
            leftIndent=12,
            firstLineIndent=0,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CodeBlock",
            parent=styles["Body"],
            fontName="Courier",
            fontSize=8.8,
            leading=12,
            leftIndent=12,
            rightIndent=12,
            borderPadding=(10, 10, 10),
            borderColor=PALETTE["line"],
            borderWidth=1,
            backColor=colors.HexColor("#f4efe7"),
            textColor=PALETTE["ink"],
            spaceBefore=6,
            spaceAfter=12,
        )
    )
    return styles


def draw_cover(canvas, doc):
    canvas.saveState()
    width, height = doc.pagesize
    canvas.setFillColor(PALETTE["bg"])
    canvas.rect(0, 0, width, height, stroke=0, fill=1)

    canvas.setFillColor(PALETTE["gold"])
    canvas.circle(width - 70, height - 70, 105, stroke=0, fill=1)
    canvas.setFillColor(PALETTE["teal"])
    canvas.circle(78, 120, 58, stroke=0, fill=1)
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
    canvas.drawString(doc.leftMargin, height - 34, "PERSONAL AI CLONE GUIDE")

    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(PALETTE["ink_soft"])
    page_no = canvas.getPageNumber()
    canvas.drawRightString(width - doc.rightMargin, 28, f"Page {page_no - 1}")
    canvas.restoreState()


def parse_markdown(markdown_text: str, styles: StyleSheet1):
    story = []
    lines = markdown_text.splitlines()
    paragraph_lines: list[str] = []
    bullet_lines: list[str] = []
    code_lines: list[str] = []
    in_code = False

    def flush_paragraph():
        nonlocal paragraph_lines
        if not paragraph_lines:
            return
        text = " ".join(part.strip() for part in paragraph_lines).strip()
        if not text:
            paragraph_lines = []
            return
        style_name = "SectionLabel" if text.endswith(":") and len(text) < 48 else "Body"
        if not story:
            style_name = "Lead"
        story.append(Paragraph(escape(text), styles[style_name]))
        paragraph_lines = []

    def flush_bullets():
        nonlocal bullet_lines
        if not bullet_lines:
            return
        items = []
        for bullet in bullet_lines:
            paragraph = Paragraph(escape(bullet), styles["BulletBody"])
            items.append(
                ListItem(
                    paragraph,
                    leftIndent=0,
                    value="circle",
                )
            )
        story.append(
            ListFlowable(
                items,
                bulletType="bullet",
                start="circle",
                leftIndent=12,
                bulletFontName="Helvetica",
                bulletFontSize=9,
                bulletColor=PALETTE["terracotta"],
                spaceBefore=2,
                spaceAfter=8,
            )
        )
        bullet_lines = []

    def flush_code():
        nonlocal code_lines
        if not code_lines:
            return
        story.append(Preformatted("\n".join(code_lines), styles["CodeBlock"]))
        code_lines = []

    for raw_line in lines:
        line = raw_line.rstrip("\n")

        if line.strip().startswith("```"):
            flush_paragraph()
            flush_bullets()
            if in_code:
                flush_code()
                in_code = False
            else:
                in_code = True
            continue

        if in_code:
            code_lines.append(line)
            continue

        if not line.strip():
            flush_paragraph()
            flush_bullets()
            continue

        if line.startswith("# "):
            flush_paragraph()
            flush_bullets()
            story.append(Paragraph(escape(line[2:].strip()), styles["H1"]))
            continue

        if line.startswith("## "):
            flush_paragraph()
            flush_bullets()
            text = line[3:].strip()
            if story and not isinstance(story[-1], PageBreak):
                story.append(PageBreak())
            story.append(Paragraph(escape(text), styles["H2"]))
            continue

        if line.startswith("### "):
            flush_paragraph()
            flush_bullets()
            story.append(Paragraph(escape(line[4:].strip()), styles["H3"]))
            continue

        if line.startswith("- "):
            flush_paragraph()
            bullet_lines.append(line[2:].strip())
            continue

        if line[:2].isdigit() and line[1:3] == ". ":
            flush_paragraph()
            bullet_lines.append(line[3:].strip())
            continue

        paragraph_lines.append(line)

    flush_paragraph()
    flush_bullets()
    flush_code()
    return story


def build_cover(styles: StyleSheet1):
    story = [NextPageTemplate("Body")]
    story.append(Spacer(1, 0.45 * inch))
    story.append(Paragraph("FREE GUIDE", styles["SmallCaps"]))
    story.append(
        Paragraph(
            "Personal AI Clone Guide",
            ParagraphStyle(
                "CoverTitle",
                parent=styles["H1"],
                fontSize=27,
                leading=31,
                textColor=PALETTE["forest"],
                alignment=TA_CENTER,
                spaceBefore=0,
                spaceAfter=10,
            ),
        )
    )
    story.append(
        Paragraph(
            "A practical step-by-step handbook for building a simple AI assistant for planning, lists, reminders, and routine email.",
            ParagraphStyle(
                "CoverSub",
                parent=styles["Lead"],
                alignment=TA_CENTER,
                textColor=PALETTE["ink_soft"],
                spaceAfter=18,
            ),
        )
    )
    if COVER_ART.exists():
        width, height = fit_image_dimensions(COVER_ART, 6.1 * inch, 5.3 * inch)
        story.append(Image(str(COVER_ART), width=width, height=height))
        story.append(Spacer(1, 0.24 * inch))
    story.append(
        Paragraph(
            "The best clone is the one that quietly makes everyday life easier.",
            ParagraphStyle(
                "CoverNote",
                parent=styles["Body"],
                alignment=TA_CENTER,
                textColor=PALETTE["terracotta"],
                fontName="Helvetica-Bold",
                spaceAfter=6,
            ),
        )
    )
    story.append(
        Paragraph(
            "Designed for everyday users. Focused on low-risk, high-friction tasks. Built to save time without giving up control.",
            ParagraphStyle(
                "CoverFooter",
                parent=styles["Body"],
                alignment=TA_CENTER,
                fontSize=9.4,
                leading=14,
                textColor=PALETTE["ink_soft"],
                spaceAfter=0,
            ),
        )
    )
    story.append(PageBreak())
    return story


def build_quick_start(styles: StyleSheet1):
    rows = [
        ["1", "Pick one low-risk task", "Start with planning, lists, or routine email."],
        ["2", "Give the assistant your preferences", "Add tone, priorities, and examples from real life."],
        ["3", "Set clear boundaries", "Keep sensitive decisions and external actions human."],
        ["4", "Test it on a real day", "See whether it saves time or just creates more work."],
        ["5", "Simplify before you expand", "Only grow the system if the first use case is genuinely useful."],
    ]

    table = Table(
        [["STEP", "QUICK START", "WHY IT MATTERS"], *rows],
        colWidths=[0.6 * inch, 2.15 * inch, 3.55 * inch],
        repeatRows=1,
    )
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PALETTE["forest"]),
                ("TEXTCOLOR", (0, 0), (-1, 0), PALETTE["cream"]),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, 0), 8.8),
                ("BOTTOMPADDING", (0, 0), (-1, 0), 8),
                ("TOPPADDING", (0, 0), (-1, 0), 8),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f8f2e9")]),
                ("TEXTCOLOR", (0, 1), (-1, -1), PALETTE["ink"]),
                ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
                ("FONTNAME", (1, 1), (1, -1), "Helvetica-Bold"),
                ("FONTSIZE", (0, 1), (-1, -1), 9.2),
                ("LEADING", (0, 1), (-1, -1), 12),
                ("BOX", (0, 0), (-1, -1), 1, PALETTE["line"]),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, PALETTE["line"]),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 1), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 1), (-1, -1), 8),
            ]
        )
    )

    story = [
        Paragraph("Quick Start", styles["H2"]),
        Paragraph(
            "Use this page as a fast reference before you work through the full guide. The goal is not to build a perfect digital twin. The goal is to build one calm, useful assistant for the small things.",
            styles["Lead"],
        ),
        table,
        Spacer(1, 16),
        Paragraph(
            "A good first win is enough. If the first version saves time and mental energy, then it has earned the right to grow.",
            styles["Callout"],
        ),
        PageBreak(),
    ]
    return story


def main():
    styles = build_styles()
    markdown_text = GUIDE_PATH.read_text(encoding="utf-8")

    doc = BaseDocTemplate(
        str(OUTPUT_PATH),
        pagesize=letter,
        leftMargin=0.8 * inch,
        rightMargin=0.8 * inch,
        topMargin=0.82 * inch,
        bottomMargin=0.72 * inch,
        title="Personal AI Clone Guide",
        author="OpenAI Codex",
    )

    cover_frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height,
        id="cover-frame",
        topPadding=0,
        bottomPadding=0,
    )
    body_frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height - 0.15 * inch,
        id="body-frame",
    )
    doc.addPageTemplates(
        [
            PageTemplate(id="Cover", frames=[cover_frame], onPage=draw_cover),
            PageTemplate(id="Body", frames=[body_frame], onPage=draw_body),
        ]
    )

    story = []
    story.extend(build_cover(styles))
    story.extend(build_quick_start(styles))
    story.extend(parse_markdown(markdown_text, styles))
    doc.build(story)
    print(f"Created {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
