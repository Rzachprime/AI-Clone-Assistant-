const views = {
  overview: {
    eyebrow: "Overview",
    title: "A useful AI clone is a bounded assistant, not a digital twin.",
    lede:
      "This project exists to show what AI cloning can realistically offer: better help with repetitive, low-risk work, not a revolution in judgment, identity, or human responsibility.",
    note: {
      label: "What this really offers",
      body: "Planning, drafting, organizing, and follow-through support with human review still in place.",
    },
    jumps: [
      { id: "why-it-matters", label: "Why It Matters" },
      { id: "what-it-is", label: "Reality Check" },
      { id: "what-it-helps", label: "What It Helps With" },
      { id: "what-you-get", label: "What You Get" },
    ],
    sections: [
      {
        id: "why-it-matters",
        eyebrow: "Why it matters",
        title: "The real value is small, repeated relief.",
        body: [
          "Life is rarely exhausting because of one dramatic responsibility. It is the steady stream of reminders, lists, follow-ups, and loose ends that fills every spare corner of the day.",
          "A personal AI clone becomes useful when it helps with those smaller patterns honestly, without pretending it can replace a person's judgment or run a whole life.",
        ],
        layout: "split",
        cards: [
          {
            title: "What wears people down",
            list: [
              "sorting a messy to-do list",
              "planning around a real calendar",
              "replying to routine messages",
              "remembering small recurring tasks",
            ],
          },
          {
            title: "What this gives back",
            text:
              "A calmer kind of support. More breathing room. More time for the work, relationships, and responsibilities that actually deserve your full attention.",
            tone: "warm",
          },
        ],
      },
      {
        id: "what-it-is",
        eyebrow: "Reality check",
        title: "What AI cloning can actually do, and what it cannot.",
        layout: "split",
        cards: [
          {
            title: "What it can offer",
            list: [
              "faster first drafts",
              "better organization",
              "more consistent planning support",
              "help with repetitive, low-risk tasks",
            ],
          },
          {
            title: "What it cannot honestly promise",
            list: [
              "thinking exactly like you",
              "replacing real judgment",
              "fully autonomous life management",
              "guaranteed accuracy in high-stakes work",
            ],
            tone: "soft",
          },
        ],
      },
      {
        id: "what-it-helps",
        eyebrow: "Good first use cases",
        title: "Start where AI is genuinely useful.",
        body: [
          "This works best when the task is repetitive, low-risk, and easy to review. That is where the time savings are real and the downside is manageable.",
        ],
        layout: "grid",
        cards: [
          { title: "Planning", text: "Turn a rough day into a realistic plan." },
          { title: "Lists", text: "Sort loose tasks into today, this week, and later." },
          { title: "Email", text: "Draft routine replies in a tone that sounds like you." },
          { title: "Weekly review", text: "Prepare a calm reset instead of carrying everything in your head." },
        ],
      },
      {
        id: "what-you-get",
        eyebrow: "Included",
        title: "Everything you need to start simply and safely.",
        layout: "resources",
        resources: [
          {
            kicker: "New Guide",
            title: "Context Engineering Guide",
            text:
              "A practical guide to capturing and reusing transcripts, notes, decisions, and recurring context so the clone becomes more proactive over time.",
            href: "../pdf/context-engineering-guide.pdf",
          },
          {
            kicker: "Workflow Guide",
            title: "Agentic Workflow Foundations",
            text:
              "A calm introduction to progressive autonomy, workflow design, review points, boundaries, and low-risk forward motion.",
            href: "../pdf/agentic-workflow-foundations.pdf",
          },
          {
            kicker: "Planning Pack",
            title: "Weekly Planning Clone Pack",
            text:
              "A practical weekly reset system for backlog triage, realistic priorities, overload detection, and calmer weekly starts.",
            href: "../pdf/weekly-planning-clone-pack.pdf",
          },
          {
            kicker: "Admin Pack",
            title: "Daily Admin Clone Pack",
            text:
              "A practical system for planning, task sorting, reminders, and routine follow-ups with less mental clutter.",
            href: "../pdf/daily-admin-clone-pack.pdf",
          },
          {
            kicker: "Prompt Pack",
            title: "Prompt Starter Pack",
            text:
              "Learn how to structure better prompts with clearer roles, stronger tone choices, better formats, and practical boundaries.",
            href: "../pdf/prompt-starter-pack.pdf",
          },
          {
            kicker: "Guide",
            title: "Step-by-step handbook",
            text:
              "Learn how to define your clone, set healthy limits, test one use case, and improve it without overbuilding.",
            href: "../pdf/personal-ai-clone-guide.pdf",
          },
          {
            kicker: "Worksheet",
            title: "Printable workbook",
            text:
              "Capture your tone, priorities, no-go areas, and first prompt in a format that is easy to fill in and reuse.",
            href: "../pdf/personal-ai-clone-worksheet.pdf",
          },
          {
            kicker: "Copy",
            title: "Messaging pack",
            text:
              "Browse the copy hooks and positioning language behind the project if you want to share or teach it.",
            href: "../personal-ai-clone-copy-pack.md",
          },
        ],
      },
    ],
  },
  start: {
    eyebrow: "Start Here",
    title: "If you are new to AI, this is the path to follow.",
    lede:
      "This view is for people with little or no experience using AI. Start small, stay realistic, and use the documents in an order that builds understanding instead of confusion.",
    note: {
      label: "Best first move",
      body: "Begin with one low-risk use case and one clear prompt. Do not try to automate your whole life on day one.",
    },
    jumps: [
      { id: "beginner-path", label: "Beginner Path" },
      { id: "what-to-read", label: "What To Read" },
      { id: "what-to-save", label: "What To Save" },
    ],
    sections: [
      {
        id: "beginner-path",
        eyebrow: "The path",
        title: "A simple order that makes the material easier to understand.",
        layout: "timeline",
        timeline: [
          "Read the Personal AI Clone Guide first so you understand what this can and cannot realistically do.",
          "Read the Prompt Starter Pack next so you know how to ask for useful work clearly.",
          "Use the in-site Worksheet to turn your own goals, rules, and tone into usable instructions.",
          "Try the Daily Admin Clone Pack on one real low-risk task such as planning, list cleanup, or routine email drafting.",
          "Move to Weekly Planning only after the daily workflow starts feeling useful.",
          "Read Context Engineering and Agentic Workflow Foundations later, after the basics already make sense.",
        ],
      },
      {
        id: "what-to-read",
        eyebrow: "Recommended reading order",
        title: "These are the most helpful documents for a beginner.",
        layout: "resources",
        resources: [
          {
            kicker: "Step 1",
            title: "Personal AI Clone Guide",
            text:
              "Start here if you want the honest big picture: what AI cloning is, what it is not, and where it helps most in real life.",
            href: "../pdf/personal-ai-clone-guide.pdf",
          },
          {
            kicker: "Step 2",
            title: "Prompt Starter Pack",
            text:
              "Read this next if you do not yet know how to write useful prompts or understand why some prompts work better than others.",
            href: "../pdf/prompt-starter-pack.pdf",
          },
          {
            kicker: "Step 3",
            title: "Interactive Worksheet",
            text:
              "Use this when you are ready to turn your own goals, beliefs, audience, and tone into Custom Instructions and a deeper Clone Profile.",
            href: "#worksheet",
          },
          {
            kicker: "Step 4",
            title: "Daily Admin Clone Pack",
            text:
              "This is the easiest practical first build because it focuses on repetitive, low-risk tasks like planning, tasks, and routine follow-ups.",
            href: "../pdf/daily-admin-clone-pack.pdf",
          },
          {
            kicker: "Step 5",
            title: "Weekly Planning Clone Pack",
            text:
              "Use this after the daily workflow works. It adds a weekly rhythm without jumping too quickly into more complex systems.",
            href: "../pdf/weekly-planning-clone-pack.pdf",
          },
        ],
      },
      {
        id: "what-to-save",
        eyebrow: "Keep it practical",
        title: "What to save in a file as you learn.",
        layout: "grid",
        cards: [
          {
            title: "Save working prompts",
            text:
              "Keep prompts in a text file, Word document, notes app, Google Doc, or markdown file so you can refine and reuse them instead of rebuilding from memory.",
          },
          {
            title: "Save examples that sound right",
            text:
              "When the AI returns a draft or structure that feels useful, save it. Good examples often teach more than abstract advice.",
            tone: "soft",
          },
          {
            title: "Save your rules",
            text:
              "Write down things like tone, boundaries, priorities, and what the system must never do. These are part of the clone, not extra notes.",
            tone: "warm",
          },
        ],
      },
    ],
  },
  worksheet: {
    eyebrow: "Worksheet",
    title: "Build a profile that improves output, not a fantasy clone.",
    lede:
      "This worksheet helps people write better Custom Instructions and a deeper AI Clone Profile while staying honest about what profile text can and cannot do.",
    note: {
      label: "What actually matters",
      body: "Specific goals, decision rules, audience context, and tone preferences usually matter more than biography fluff.",
    },
    jumps: [
      { id: "worksheet-why", label: "Why It Works" },
      { id: "worksheet-builder", label: "Fill It Out" },
      { id: "worksheet-output", label: "Outputs" },
      { id: "worksheet-tips", label: "Writing Tips" },
    ],
    sections: [
      {
        id: "worksheet-why",
        eyebrow: "Use it well",
        title: "This improves defaults. It does not magically clone a mind.",
        body: [
          "A good profile helps the model make better guesses when a prompt leaves things unsaid. It can improve tone, audience awareness, and practical relevance.",
          "What it cannot do is replace judgment, transfer deep memory, or make the system think exactly like the person who filled it out.",
        ],
        layout: "triptych",
        cards: [
          {
            title: "What helps most",
            list: [
              "specific 90-day goals",
              "clear decision rules",
              "audience reality",
              "practical tone preferences",
            ],
          },
          {
            title: "What helps less",
            list: [
              "vague inspirational claims",
              "long origin stories",
              "generic values without behavior",
              "identity details with no task relevance",
            ],
            tone: "soft",
          },
          {
            title: "The honest outcome",
            text:
              "This creates better defaults and stronger prompts. Examples, documents, and real workflows still matter even more.",
            tone: "feature",
          },
        ],
      },
      {
        id: "worksheet-builder",
        eyebrow: "Interactive worksheet",
        title: "Fill this out in plain language, then let the site turn it into two usable versions.",
        layout: "worksheet",
      },
      {
        id: "worksheet-output",
        eyebrow: "What it generates",
        title: "One short version for settings. One deeper version for projects.",
        body: [
          "The short version is for everyday defaults in ChatGPT settings. The deeper version is better for project prompts, custom GPTs, or a personal assistant system.",
        ],
        layout: "grid",
        cards: [
          {
            title: "Custom Instructions",
            text:
              "Short, stable, and best for tone, response style, goals, and audience context that should apply most of the time.",
          },
          {
            title: "AI Clone Profile",
            text:
              "Longer and more detailed. Better for specific projects, brand voice, personal systems, and repeated assistant behavior.",
          },
        ],
      },
      {
        id: "worksheet-tips",
        eyebrow: "Writing tips",
        title: "Use language the AI can actually use.",
        layout: "grid",
        cards: [
          {
            title: "Good language",
            list: [
              "Prefer direct, practical answers.",
              "Flag tradeoffs clearly.",
              "My audience is skeptical and short on time.",
              "Do not use hypey marketing language.",
            ],
          },
          {
            title: "Weak language",
            list: [
              "I am passionate about transformation.",
              "I value authenticity and excellence.",
              "I help people unlock their potential.",
              "I want to grow my business.",
            ],
            tone: "soft",
          },
          {
            title: "Best rule",
            text:
              "Write observable preferences, real goals, and decision rules. If a sentence would not change the output, it probably does not belong here.",
            tone: "warm",
          },
        ],
      },
    ],
  },
  levels: {
    eyebrow: "The Ladder",
    title: "The ladder from prompts to realistic support.",
    lede:
      "The clone becomes more useful in stages. This is not instant mind cloning. It is a progression from better prompting to better context to more prepared, bounded support.",
    note: {
      label: "The key shift",
      body: "Context Engineering is what makes agentic support possible. Without enough context, an agent guesses.",
    },
    jumps: [
      { id: "prompt-engineering", label: "Level 1" },
      { id: "context-sandwich", label: "Level 2" },
      { id: "context-engineering", label: "Level 3" },
      { id: "agentic-bridge", label: "Agentic Bridge" },
    ],
    sections: [
      {
        id: "ladder-map",
        eyebrow: "The progression",
        title: "A clear path from first prompts to realistic, proactive support.",
        body: [
          "Each level gives the clone something it was missing before: first direction, then framing, then continuity. That is what makes the system more useful over time instead of just more marketable.",
        ],
        layout: "ladder",
        stages: [
          {
            level: "Level 1",
            title: "Prompt Engineering",
            summary: "Learn how to ask clearly so the clone gives stronger, more structured answers.",
            outcome: "Better prompts produce better help.",
            accent: "forest",
          },
          {
            level: "Level 2",
            title: "Context Sandwich",
            summary: "Learn how to surround the prompt with the situation, background, request, and constraints.",
            outcome: "Better framing creates better fit.",
            accent: "terracotta",
          },
          {
            level: "Level 3",
            title: "Context Engineering",
            summary: "Learn how to capture and reuse context so the clone can support recurring work more proactively.",
            outcome: "Better context creates proactive support.",
            accent: "teal",
          },
        ],
      },
      {
        id: "prompt-engineering",
        eyebrow: "Level 1",
        title: "Prompt Engineering teaches you how to ask.",
        body: [
          "This is where most people begin. They learn how to give the AI a clear role, ask for the right format, and set better boundaries.",
          "The promise at this level is simple: better prompts produce better help.",
        ],
        layout: "triptych",
        cards: [
          {
            title: "What you learn",
            list: [
              "how to define the role",
              "how to request the right output",
              "how to improve tone",
              "how to reduce vague responses",
            ],
          },
          {
            title: "What changes",
            text:
              "The user stops treating AI like a slot machine. They start getting more consistent, more usable results.",
            tone: "soft",
          },
          {
            title: "Best first win",
            text:
              "Daily planning, routine email drafting, and simple task sorting are the fastest places to feel improvement.",
            tone: "feature",
          },
        ],
      },
      {
        id: "context-sandwich",
        eyebrow: "Level 2",
        title: "The Context Sandwich teaches you how to frame.",
        body: [
          "A good result is not just about the prompt. It is also about what surrounds the prompt: the situation, the background, the request, the constraints, and the desired format.",
          "This is the level where AI starts helping in a way that feels more fitted to real life.",
        ],
        layout: "steps",
        steps: [
          {
            number: "01",
            title: "Situation",
            text: "What is happening right now, and why does this matter?",
          },
          {
            number: "02",
            title: "Background",
            text: "What context does the system need so it does not answer too generically?",
          },
          {
            number: "03",
            title: "Request",
            text: "What exactly do you want the clone to do with that context?",
          },
          {
            number: "04",
            title: "Constraints",
            text: "What should it avoid, protect, or stay inside of?",
          },
        ],
      },
      {
        id: "context-engineering",
        eyebrow: "Level 3",
        title: "Context Engineering is where the clone starts feeling like a system.",
        body: [
          "At this level, the user stops relying on one-off prompts and starts shaping repeatable context. The goal is to feed the clone the right information repeatedly so support becomes more consistent, more personal, and more proactive.",
          "This often begins with passive use cases like transcribing meetings, summarizing conversations, extracting decisions, and preparing follow-ups.",
        ],
        layout: "split",
        cards: [
          {
            title: "Passive beginning",
            list: [
              "record a meeting",
              "transcribe the conversation",
              "summarize decisions",
              "extract action items",
              "prepare follow-ups",
            ],
          },
          {
            title: "Deeper payoff",
            text:
              "Once context is captured well, the clone can help with planning, recurring reviews, follow-through, and organizing what matters before the user feels overloaded.",
            tone: "warm",
          },
        ],
      },
      {
        id: "agentic-bridge",
        eyebrow: "What comes next",
        title: "Context Engineering becomes the bridge into agentic support.",
        body: [
          "This is where the clone starts carrying work forward in low-risk, bounded ways. It can prepare tomorrow's planning context, collect open loops, organize recurring notes, and surface what needs attention before it gets buried.",
          "That is the real path from interesting AI to useful AI.",
        ],
        layout: "quotes",
        quotes: [
          "Prompt Engineering teaches you how to ask.",
          "The Context Sandwich teaches you how to frame.",
          "Context Engineering teaches you how to build the conditions for proactive support.",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "Build one useful assistant before you believe any bigger claims.",
    lede:
      "A good first version is enough. Start with one low-risk job, one set of rules, and one real-life test. Expand only if it clearly saves time and stays trustworthy.",
    note: {
      label: "Why this matters",
      body: "This site is meant to educate first and protect people from inflated claims, not sell magic.",
    },
    jumps: [
      { id: "three-steps", label: "Three Steps" },
      { id: "growth-path", label: "Growth Path" },
      { id: "daily-admin", label: "Use Case" },
      { id: "trial", label: "7-Day Trial" },
    ],
    sections: [
      {
        id: "three-steps",
        eyebrow: "The process",
        title: "Three grounded steps.",
        layout: "steps",
        steps: [
          {
            number: "01",
            title: "Pick one low-risk use case",
            text: "Choose something that quietly takes energy every day, like planning, list cleanup, or routine email drafting.",
          },
          {
            number: "02",
            title: "Train it on your preferences",
            text: "Give it your tone, priorities, and examples so it feels useful in your real life rather than generic.",
          },
          {
            number: "03",
            title: "Test, review, and refine",
            text: "Only expand the system if it saves time, feels lighter, and stays within healthy boundaries.",
          },
        ],
      },
      {
        id: "growth-path",
        eyebrow: "Growth path",
        title: "The system becomes more useful in a believable order.",
        layout: "timeline",
        timeline: [
          "Start with Prompt Engineering so the clone responds better to direct requests.",
          "Add the Context Sandwich so responses fit real situations, not just abstract questions.",
          "Move into Context Engineering by capturing recurring notes, transcripts, decisions, and follow-ups.",
          "Only then introduce agentic workflows that prepare work proactively within clear boundaries.",
        ],
      },
      {
        id: "daily-admin",
        eyebrow: "Starter use case",
        title: "A daily admin clone is where many people feel the relief fastest.",
        layout: "triptych",
        cards: [
          {
            title: "What the user gives it",
            list: [
              "today's appointments",
              "a rough task list",
              "errands and follow-ups",
              "emails that need short replies",
            ],
          },
          {
            title: "What the clone returns",
            list: [
              "top priorities",
              "today / this week / later sorting",
              "short draft replies",
              "clear questions about missing details",
            ],
          },
          {
            title: "Why it works",
            text:
              "It is practical, low-risk, and easy to feel immediately. It gives people breathing room before AI is asked to do anything more ambitious.",
            tone: "feature",
          },
        ],
      },
      {
        id: "trial",
        eyebrow: "Try it for a week",
        title: "A simple 7-day trial tells you whether this is worth keeping.",
        layout: "timeline",
        timeline: [
          "Day 1: pick one use case and gather sample material.",
          "Day 2: write simple rules and boundaries.",
          "Day 3: create the first prompt.",
          "Day 4: use it on one real day of admin.",
          "Day 5: note what felt helpful, wrong, or awkward.",
          "Day 6: simplify the prompt and remove unnecessary complexity.",
          "Day 7: decide whether it saved enough time to deserve expansion.",
        ],
      },
    ],
  },
  limits: {
    eyebrow: "Limits",
    title: "What AI cloning can realistically offer, and where it stops.",
    lede:
      "The point is not to hand your life to AI. The point is to get meaningful help with clearer expectations, stronger review, and less vulnerability to hype.",
    note: {
      label: "Keep it human",
      body: "Sensitive decisions, commitments, and anything high stakes should stay with the person living the life.",
    },
    jumps: [
      { id: "good-fit", label: "Good Fit" },
      { id: "not-fit", label: "Not a Fit" },
      { id: "guardrails", label: "Guardrails" },
    ],
    sections: [
      {
        id: "good-fit",
        eyebrow: "Fit check",
        title: "This is a good fit if...",
        layout: "split",
        cards: [
          {
            title: "Signs it can help",
            list: [
              "you repeat similar admin every week",
              "you are comfortable reviewing drafts",
              "saving 15 to 30 minutes would genuinely help",
              "you want support more than autonomy",
            ],
          },
          {
            title: "What success feels like",
            text:
              "Routine tasks start faster. Drafts need only light editing. Fewer small things get forgotten. Life feels a little lighter.",
            tone: "soft",
          },
        ],
      },
      {
        id: "not-fit",
        eyebrow: "Know when not to use it",
        title: "This is not a good fit if...",
        layout: "grid",
        cards: [
          { title: "Guaranteed accuracy matters", text: "If the cost of being wrong is high, do not delegate the task." },
          { title: "You want unsupervised sending", text: "External actions and commitments should stay human-reviewed." },
          { title: "Your tasks are mostly sensitive", text: "Regulated, personal, or high-risk information needs extra care." },
          { title: "You do not want to review output", text: "This works when drafts are checked, not blindly trusted." },
        ],
      },
      {
        id: "guardrails",
        eyebrow: "Guardrails",
        title: "What this will not do.",
        layout: "grid",
        cards: [
          {
            title: "It can sound certain when it is wrong",
            text: "Dates, details, and commitments still need your eyes before anything goes out into the world.",
          },
          {
            title: "It does not truly know context",
            text: "Relationships, hidden priorities, and consequences still belong to the person, not the tool.",
          },
          {
            title: "Privacy still matters",
            text: "Schedules, notes, and inbox content can be sensitive. Share carefully and intentionally.",
          },
          {
            title: "Overbuilding creates drag",
            text: "If the setup becomes heavier than the problem, it is time to simplify.",
          },
        ],
      },
    ],
  },
  resources: {
    eyebrow: "Resources",
    title: "Use this like a calm library, not a hype funnel.",
    lede:
      "This view is meant to help people find what is useful, what is credible, and what is worth learning next without getting pulled into inflated promises.",
    note: {
      label: "A simple rule",
      body: "Prefer beginner guides, official documentation, and practical examples over personalities selling certainty.",
    },
    jumps: [
      { id: "downloads", label: "Downloads" },
      { id: "learning-path", label: "Learn Next" },
      { id: "credible-sources", label: "Credible Sources" },
      { id: "copy-ideas", label: "Copy Ideas" },
      { id: "next-steps", label: "Next Steps" },
    ],
    sections: [
      {
        id: "downloads",
        eyebrow: "Downloads",
        title: "Open the polished PDFs.",
        layout: "resources",
        resources: [
          {
            kicker: "PDF",
            title: "Context Engineering Guide",
            text: "A polished guide to building the context layer that makes proactive clone support possible.",
            href: "../pdf/context-engineering-guide.pdf",
          },
          {
            kicker: "PDF",
            title: "Agentic Workflow Foundations",
            text: "A polished guide to moving from prompts to bounded workflows with clear triggers, review points, and stop conditions.",
            href: "../pdf/agentic-workflow-foundations.pdf",
          },
          {
            kicker: "Framework",
            title: "Progressive Clone Workflow Pitch",
            text: "The 3-level messaging framework for Prompt Engineering, the Context Sandwich, and Context Engineering.",
            href: "../products/progressive-clone-workflow-pitch.md",
          },
          {
            kicker: "Landing Page",
            title: "Context Engineering Landing Page",
            text: "A short-form landing page draft built around the 3-level ladder and the new Context Engineering guide.",
            href: "../products/context-engineering-landing-page.md",
          },
          {
            kicker: "Email Sequence",
            title: "Context Engineering Email Sequence",
            text: "A five-email nurture sequence that introduces the breakthrough, the passive use case, and the bridge to agentic support.",
            href: "../products/context-engineering-email-sequence.md",
          },
          {
            kicker: "PDF",
            title: "Weekly Planning Clone Pack",
            text: "A polished handbook for weekly review, priority setting, backlog triage, and protecting attention before the week fills up.",
            href: "../pdf/weekly-planning-clone-pack.pdf",
          },
          {
            kicker: "PDF",
            title: "Daily Admin Clone Pack",
            text: "A polished handbook for using your clone to handle everyday planning, lists, and low-risk follow-ups.",
            href: "../pdf/daily-admin-clone-pack.pdf",
          },
          {
            kicker: "PDF",
            title: "Prompt Starter Pack",
            text: "A polished quick-start handbook for writing better prompts for your personal AI clone.",
            href: "../pdf/prompt-starter-pack.pdf",
          },
          {
            kicker: "PDF",
            title: "Personal AI Clone Guide",
            text: "The polished handbook version with cover art, quick start, and section pacing.",
            href: "../pdf/personal-ai-clone-guide.pdf",
          },
          {
            kicker: "PDF",
            title: "Personal AI Clone Worksheet",
            text: "A printable workbook with checkboxes, scorecards, prompt space, and weekly planning pages.",
            href: "../pdf/personal-ai-clone-worksheet.pdf",
          },
          {
            kicker: "Markdown",
            title: "Original copy pack",
            text: "The headline and messaging library behind the site if you want to reuse or revise the words.",
            href: "../personal-ai-clone-copy-pack.md",
          },
        ],
      },
      {
        id: "learning-path",
        eyebrow: "What to learn next",
        title: "If you are still early, focus on fundamentals before advanced workflow ideas.",
        layout: "grid",
        cards: [
          {
            title: "Learn what AI is and is not",
            text:
              "Focus on the difference between useful pattern-based support and magical claims about replacing judgment or identity.",
          },
          {
            title: "Learn prompting before automation",
            text:
              "If someone cannot yet get good results from a direct prompt, adding workflows or agents will usually create more confusion, not less.",
            tone: "soft",
          },
          {
            title: "Learn context before autonomy",
            text:
              "The reason advanced systems sometimes feel better is not magic. It is usually because they have better context and better boundaries.",
            tone: "warm",
          },
        ],
      },
      {
        id: "credible-sources",
        eyebrow: "Credible beginner resources",
        title: "Look these up by name instead of following random AI hype.",
        body: [
          "These are official or high-credibility sources that are beginner-friendly and more grounded than most sales-driven AI content.",
          "This section tells people what to search for rather than sending them to direct links, so they can learn the names and recognize the sources themselves.",
        ],
        layout: "grid",
        cards: [
          {
            title: "OpenAI Academy",
            text:
              "Look up: OpenAI Academy getting started with ChatGPT, OpenAI Academy AI fundamentals, and OpenAI Academy Codex for beginners. These are useful for practical beginner explanations and real product onboarding.",
          },
          {
            title: "OpenAI Help Center",
            text:
              "Look up: OpenAI Help Center prompt writing, OpenAI Help Center ChatGPT basics, and OpenAI Help Center AI literacy resources. This is useful for straightforward product guidance and setup questions.",
            tone: "soft",
          },
          {
            title: "Anthropic Prompt Library",
            text:
              "Look up: Anthropic Prompt Library. It is useful for seeing how prompts are structured across many everyday and professional tasks.",
          },
          {
            title: "Microsoft AI for Beginners",
            text:
              "Look up: Microsoft AI for Beginners. This is a credible place to build basic AI vocabulary if someone wants more structured foundational learning.",
            tone: "soft",
          },
          {
            title: "What to avoid",
            text:
              "Be cautious with creators or businesses promising mind cloning, full autonomy, guaranteed passive income, or life-changing automation without tradeoffs. Those are stronger signs of marketing than education.",
            tone: "warm",
          },
        ],
      },
      {
        id: "copy-ideas",
        eyebrow: "Messaging",
        title: "A few lines that anchor the project.",
        layout: "quotes",
        quotes: [
          "The real power of AI is not replacing your life. It is helping carry the little things that have been weighing on you.",
          "The real breakthrough is not better prompts. It is better context.",
          "Build one small thing that helps, then let that be enough.",
          "A good first clone is not flashy. It is the one that quietly makes everyday life easier.",
          "Context Engineering is what makes agentic support possible.",
        ],
      },
      {
        id: "next-steps",
        eyebrow: "Next steps",
        title: "Natural ways this can grow.",
        layout: "grid",
        cards: [
          { title: "Add a signup flow", text: "Turn the site into a lead magnet once the browsing experience feels right." },
          { title: "Create a branded PDF set", text: "Swap in your own name, logo, and contact information for public sharing." },
          { title: "Add more spa-like imagery", text: "Introduce calmer supporting art if you want the whole experience to feel more immersive." },
        ],
      },
    ],
  },
};

const nav = document.querySelector("#spa-nav");
const viewEyebrow = document.querySelector("#view-eyebrow");
const viewTitle = document.querySelector("#view-title");
const viewLede = document.querySelector("#view-lede");
const viewJumps = document.querySelector("#view-jumps");
const viewContent = document.querySelector("#view-content");
const viewNote = document.querySelector("#view-note");

let activeView = window.location.hash.replace("#", "") || "overview";
if (!views[activeView]) activeView = "overview";

const worksheetStorageKey = "personal-ai-clone-instructions-worksheet";
const worksheetFieldGroups = [
  {
    title: "Who they are",
    description: "Keep this short and relevant. The model does not need a dramatic biography. It needs enough context to understand the person behind the work.",
    fields: [
      { id: "name", label: "Name", type: "text", placeholder: "First Name, Surname" },
      { id: "role", label: "Role", type: "text", placeholder: "Consultant, founder, teacher, manager..." },
      { id: "location", label: "Location", type: "text", placeholder: "City, Country" },
      { id: "background", label: "Background", type: "textarea", placeholder: "2-4 sentences about the experiences or responsibilities that shaped how you think and work." },
    ],
  },
  {
    title: "Current goals",
    description: "Specific goals help more than broad ambitions. Write what matters over the next 90 days.",
    fields: [
      { id: "goal_1", label: "Goal 1", type: "textarea", placeholder: "Most important goal. Be specific." },
      { id: "goal_2", label: "Goal 2", type: "textarea", placeholder: "Second goal." },
      { id: "goal_3", label: "Goal 3", type: "textarea", placeholder: "Third goal. Personal goals are fine too." },
    ],
  },
  {
    title: "Values and decision style",
    description: "This is often the highest-impact part. Focus on beliefs and operating principles that change how the assistant should answer.",
    fields: [
      { id: "belief_1", label: "Belief 1", type: "textarea", placeholder: "Clear communication solves most problems." },
      { id: "belief_2", label: "Belief 2", type: "textarea", placeholder: "People perform better when they feel trusted." },
      { id: "belief_3", label: "Belief 3", type: "textarea", placeholder: "Useful drafts matter more than polished fluff." },
      { id: "frustrations", label: "What frustrates them", type: "textarea", placeholder: "Meetings without decisions. Advice that sounds smart but creates more work." },
    ],
  },
  {
    title: "Audience and outcomes",
    description: "If the person creates anything client-facing, this shapes the usefulness of drafts far more than abstract self-description.",
    fields: [
      { id: "audience", label: "Ideal audience", type: "textarea", placeholder: "Who they help, what they are trying to achieve, and what frustrates them." },
      { id: "transformations", label: "Promises or transformations", type: "textarea", placeholder: "What outcome they help deliver in practical terms." },
    ],
  },
  {
    title: "Response preferences",
    description: "This is where the assistant learns how to sound and what to optimize for.",
    fields: [
      { id: "response_style", label: "Preferred language style", type: "textarea", placeholder: "Direct, practical, calm, warm, structured, skeptical of hype..." },
      { id: "optimize_for", label: "What to optimize for", type: "textarea", placeholder: "Clarity, time savings, better decisions, better systems, stronger follow-through..." },
      { id: "avoid", label: "What to avoid", type: "textarea", placeholder: "Fluff, fake certainty, hype, vague advice, theatrical tone..." },
    ],
  },
];

let worksheetState = loadWorksheetState();

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function loadWorksheetState() {
  try {
    const stored = window.localStorage.getItem(worksheetStorageKey);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveWorksheetState() {
  try {
    window.localStorage.setItem(worksheetStorageKey, JSON.stringify(worksheetState));
  } catch {}
}

function normalizeMultiline(value) {
  return value
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function asBullets(value, fallback = "Not specified yet.") {
  const items = normalizeMultiline(value);
  return items.length ? items.map((item) => `- ${item}`).join("\n") : `- ${fallback}`;
}

function joinGoals(state) {
  const goals = [state.goal_1, state.goal_2, state.goal_3].map((item) => item?.trim()).filter(Boolean);
  return goals.length ? goals.map((goal, index) => `${index + 1}. ${goal}`).join("\n") : "1. Define a more specific 90-day goal.";
}

function buildCustomInstructions(state) {
  return `About me

I am ${state.role?.trim() || "[role]"}${state.location?.trim() ? ` based in ${state.location.trim()}` : ""}. ${state.background?.trim() || "[Short background that matters for how I think and work.]"}

My current priorities over the next 90 days are:
${joinGoals(state)}

How I want you to respond

Use ${state.response_style?.trim() || "direct, practical, and clear"} language. Be useful more than impressive. If there are tradeoffs, name them. If something is uncertain, say so. Avoid ${state.avoid?.trim() || "hype, fluff, and fake certainty"}.

How I think and work

I believe:
${asBullets([state.belief_1, state.belief_2, state.belief_3].filter(Boolean).join("\n"), "Add 2-3 real beliefs or operating principles.")}

What frustrates me:
${asBullets(state.frustrations || "", "Add the patterns or working styles that create friction.")}

What to optimize for

Help me:
${asBullets(state.optimize_for || "", "Clarity, better decisions, and practical outputs.")}

My audience

When helping me create client-facing material, assume I am speaking to:
${state.audience?.trim() || "[Describe the audience, their goal, and their frustration.]"}

The outcomes I want to help them achieve are:
${asBullets(state.transformations || "", "Describe the practical result or transformation.")}`.trim();
}

function buildCloneProfile(state) {
  return `AI Clone Profile

Identity and role

Name: ${state.name?.trim() || "[Name]"}
Role: ${state.role?.trim() || "[Role]"}
Location: ${state.location?.trim() || "[Location]"}

Background

${state.background?.trim() || "[2-5 sentences about what shaped how I think and work.]"}

Current goals

Over the next 90 days, I am focused on:
${joinGoals(state)}

Decision-making style

When helping me, assume I prefer:
${asBullets(state.response_style || "", "Direct, practical, grounded support.")}

Values and beliefs

I believe:
${asBullets([state.belief_1, state.belief_2, state.belief_3].filter(Boolean).join("\n"), "Add 2-3 beliefs that change how the assistant should respond.")}

Frustrations and anti-patterns

I get frustrated by:
${asBullets(state.frustrations || "", "Add the patterns that waste time, reduce trust, or create unnecessary noise.")}

Avoid these patterns when helping me:
${asBullets(state.avoid || "", "Hype, fake certainty, generic advice, or overlong answers without action.")}

Audience and client context

The people I serve are:
${state.audience?.trim() || "[Describe the audience in practical terms.]"}

The outcomes I want to help them achieve are:
${asBullets(state.transformations || "", "Add practical outcomes or promised transformations.")}

What to optimize for

When helping me create content or systems, optimize for:
${asBullets(state.optimize_for || "", "Clarity, relevance, follow-through, and practical usefulness.")}

Boundaries

Do not assume I want AI to replace judgment, overstate certainty, or automate sensitive decisions without review.

Instead, assume I want bounded, useful support that saves time, improves clarity, and keeps people in control.`.trim();
}

function copyText(text, button) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (button) {
        const original = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = original;
        }, 1400);
      }
    });
  }
}

function createField(field) {
  const wrap = el("label", "worksheet-field");
  wrap.htmlFor = field.id;
  wrap.append(el("span", "worksheet-field__label", field.label));
  const input =
    field.type === "textarea"
      ? document.createElement("textarea")
      : document.createElement("input");
  input.id = field.id;
  input.className = "worksheet-input";
  input.placeholder = field.placeholder || "";
  if (field.type !== "textarea") input.type = field.type || "text";
  input.value = worksheetState[field.id] || "";
  input.addEventListener("input", () => {
    worksheetState[field.id] = input.value;
    saveWorksheetState();
    refreshWorksheetOutputs();
  });
  wrap.append(input);
  return wrap;
}

function renderWorksheet() {
  const shell = el("div", "worksheet-shell");

  const explanation = el("article", "worksheet-intro");
  explanation.innerHTML = `
    <div class="worksheet-intro__copy">
      <span class="eyebrow">How to use this</span>
      <h4>Fill in real preferences, not polished branding language.</h4>
      <p>Better worksheet answers are specific, behavioral, and useful in a real task. If a sentence would not change the output, it probably does not belong here.</p>
    </div>
    <div class="worksheet-intro__panel">
      <strong>Best pattern</strong>
      <p>Goals, beliefs, audience, frustrations, and tone preferences usually matter much more than biography alone.</p>
    </div>
  `;
  shell.append(explanation);

  const groups = el("div", "worksheet-groups");
  worksheetFieldGroups.forEach((group) => {
    const card = el("section", "worksheet-group");
    const header = el("div", "worksheet-group__header");
    header.innerHTML = `<h4>${group.title}</h4><p>${group.description}</p>`;
    card.append(header);
    const grid = el("div", "worksheet-fields");
    group.fields.forEach((field) => grid.append(createField(field)));
    card.append(grid);
    groups.append(card);
  });
  shell.append(groups);

  const outputs = el("section", "worksheet-outputs");
  outputs.id = "worksheet-output-panel";
  outputs.innerHTML = `
    <div class="worksheet-outputs__header">
      <div>
        <span class="eyebrow">Generated outputs</span>
        <h4>Copy the version that fits the job.</h4>
      </div>
      <div class="worksheet-actions">
        <button type="button" class="button button--ghost" id="worksheet-reset">Reset worksheet</button>
      </div>
    </div>
    <div class="worksheet-output-grid">
      <article class="worksheet-output-card">
        <div class="worksheet-output-card__top">
          <div>
            <span class="resource-card__kicker">Short version</span>
            <h4>Custom Instructions</h4>
          </div>
          <button type="button" class="button button--ghost worksheet-copy" id="copy-custom">Copy</button>
        </div>
        <p>Best for ChatGPT settings and everyday defaults.</p>
        <textarea readonly class="worksheet-output" id="custom-output"></textarea>
      </article>
      <article class="worksheet-output-card">
        <div class="worksheet-output-card__top">
          <div>
            <span class="resource-card__kicker">Deep version</span>
            <h4>AI Clone Profile</h4>
          </div>
          <button type="button" class="button button--ghost worksheet-copy" id="copy-clone">Copy</button>
        </div>
        <p>Best for project prompts, custom GPTs, and deeper assistant setups.</p>
        <textarea readonly class="worksheet-output" id="clone-output"></textarea>
      </article>
    </div>
  `;
  shell.append(outputs);

  window.setTimeout(() => {
    refreshWorksheetOutputs();
    const resetButton = document.querySelector("#worksheet-reset");
    const copyCustom = document.querySelector("#copy-custom");
    const copyClone = document.querySelector("#copy-clone");
    resetButton?.addEventListener("click", () => {
      worksheetState = {};
      saveWorksheetState();
      renderView();
    });
    copyCustom?.addEventListener("click", () => copyText(buildCustomInstructions(worksheetState), copyCustom));
    copyClone?.addEventListener("click", () => copyText(buildCloneProfile(worksheetState), copyClone));
  });

  return shell;
}

function refreshWorksheetOutputs() {
  const customOutput = document.querySelector("#custom-output");
  const cloneOutput = document.querySelector("#clone-output");
  if (customOutput) customOutput.value = buildCustomInstructions(worksheetState);
  if (cloneOutput) cloneOutput.value = buildCloneProfile(worksheetState);
}

function renderNav() {
  nav.replaceChildren(
    ...Object.entries(views).map(([key, view]) => {
      const button = el("button", `spa-nav__button${key === activeView ? " is-active" : ""}`);
      button.type = "button";
      button.innerHTML = `<span>${view.eyebrow}</span><strong>${view.title}</strong>`;
      button.addEventListener("click", () => setView(key));
      return button;
    }),
  );
}

function renderJumps(view) {
  viewJumps.replaceChildren(
    ...view.jumps.map((jump) => {
      const button = el("button", "jump-chip", jump.label);
      button.type = "button";
      button.addEventListener("click", () => {
        const target = viewContent.querySelector(`#${jump.id}`);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return button;
    }),
  );
}

function renderCards(cards, className = "content-grid", cardClass = "content-card") {
  const grid = el("div", className);
  cards.forEach((card) => {
    const article = el("article", `${cardClass}${card.tone ? ` ${cardClass}--${card.tone}` : ""}`);
    article.append(el("h4", "", card.title));
    if (card.text) article.append(el("p", "", card.text));
    if (card.list) {
      const list = el("ul", "bullet-list");
      card.list.forEach((item) => list.append(el("li", "", item)));
      article.append(list);
    }
    grid.append(article);
  });
  return grid;
}

function renderResources(resources) {
  const grid = el("div", "resource-grid");
  resources.forEach((resource) => {
    const link = el("a", "resource-card");
    link.href = resource.href;
    link.innerHTML = `<span class="resource-card__kicker">${resource.kicker}</span><h4>${resource.title}</h4><p>${resource.text}</p>`;
    grid.append(link);
  });
  return grid;
}

function renderTimeline(items) {
  const wrap = el("div", "timeline");
  items.forEach((item, index) => {
    const row = el("article", "timeline__item");
    row.innerHTML = `<span class="timeline__number">${index + 1}</span><p>${item}</p>`;
    wrap.append(row);
  });
  return wrap;
}

function renderQuotes(items) {
  const wrap = el("div", "quote-stack");
  items.forEach((item) => {
    const block = el("blockquote", "quote-card");
    block.textContent = item;
    wrap.append(block);
  });
  return wrap;
}

function renderSteps(steps) {
  const grid = el("div", "steps-grid");
  steps.forEach((step) => {
    const card = el("article", "step-card");
    card.innerHTML = `<span class="step-card__number">${step.number}</span><h4>${step.title}</h4><p>${step.text}</p>`;
    grid.append(card);
  });
  return grid;
}

function renderLadder(stages) {
  const wrap = el("div", "ladder");
  stages.forEach((stage, index) => {
    const card = el("article", `ladder-card ladder-card--${stage.accent || "forest"}`);
    card.innerHTML = `
      <div class="ladder-card__top">
        <span class="ladder-card__level">${stage.level}</span>
        <span class="ladder-card__index">0${index + 1}</span>
      </div>
      <h4>${stage.title}</h4>
      <p>${stage.summary}</p>
      <strong class="ladder-card__outcome">${stage.outcome}</strong>
    `;
    wrap.append(card);
  });
  return wrap;
}

function renderSection(section) {
  const node = el("section", "content-section");
  node.id = section.id;

  const header = el("div", "content-section__header");
  header.innerHTML = `<p class="eyebrow">${section.eyebrow}</p><h3>${section.title}</h3>`;
  node.append(header);

  if (section.body) {
    section.body.forEach((paragraph) => node.append(el("p", "content-copy", paragraph)));
  }

  if (section.layout === "split") node.append(renderCards(section.cards, "content-grid content-grid--split"));
  if (section.layout === "grid") node.append(renderCards(section.cards, "content-grid"));
  if (section.layout === "triptych") node.append(renderCards(section.cards, "content-grid content-grid--triptych"));
  if (section.layout === "resources") node.append(renderResources(section.resources));
  if (section.layout === "timeline") node.append(renderTimeline(section.timeline));
  if (section.layout === "quotes") node.append(renderQuotes(section.quotes));
  if (section.layout === "steps") node.append(renderSteps(section.steps));
  if (section.layout === "ladder") node.append(renderLadder(section.stages));
  if (section.layout === "worksheet") node.append(renderWorksheet());

  return node;
}

function renderView() {
  const view = views[activeView];
  viewEyebrow.textContent = view.eyebrow;
  viewTitle.textContent = view.title;
  viewLede.textContent = view.lede;
  viewNote.innerHTML = `<span>${view.note.label}</span><strong>${view.note.body}</strong>`;
  renderJumps(view);

  viewContent.replaceChildren(...view.sections.map(renderSection));
  viewContent.scrollTo({ top: 0, behavior: "auto" });
  viewContent.focus();
  renderNav();
}

function setView(key) {
  activeView = key;
  window.location.hash = key;
  renderView();
}

window.addEventListener("hashchange", () => {
  const next = window.location.hash.replace("#", "");
  if (views[next] && next !== activeView) {
    activeView = next;
    renderView();
  }
});

renderView();
