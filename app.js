const views = {
  overview: {
    eyebrow: "Directory",
    title: "Start here: a central directory for learning this the safe way.",
    lede:
      "This landing view is meant to help a beginner understand what to read first, what each document is for, and how to move through the project in an order that improves the odds of real success.",
    note: {
      label: "Recommended path",
      body: "Guide first, prompt basics second, worksheet third, one practical workflow fourth. Save advanced workflow ideas for later.",
    },
    jumps: [
      { id: "recommended-flow", label: "Recommended Flow" },
      { id: "pick-your-document", label: "Pick A Document" },
      { id: "brand-new", label: "If You Are New" },
      { id: "reality-check", label: "Reality Check" },
    ],
    sections: [
      {
        id: "recommended-flow",
        eyebrow: "Recommended flow",
        title: "Follow this order if you want the best chance of actually understanding and using the material.",
        body: [
          "Most people get better results when they move through this in a calm sequence instead of bouncing straight into advanced terms like context engineering or agentic workflows.",
        ],
        layout: "steps",
        steps: [
          {
            number: "01",
            title: "Understand the promise and the limits",
            text: "Read the Personal AI Clone Guide first so you know what AI cloning can realistically do and where the hype usually begins.",
          },
          {
            number: "02",
            title: "Learn to prompt clearly",
            text: "Use the Prompt Starter Pack so you can ask for useful work before you judge whether AI is helping or not.",
          },
          {
            number: "03",
            title: "Define your own rules and tone",
            text: "Use the worksheet to turn your goals, preferences, audience, and boundaries into something reusable.",
          },
          {
            number: "04",
            title: "Try one low-risk workflow",
            text: "Start with Daily Admin or Weekly Planning before you explore context-heavy or agentic ideas.",
          },
        ],
      },
      {
        id: "pick-your-document",
        eyebrow: "Pick the right document",
        title: "Each document has a different job. Start with the one that matches where you are.",
        layout: "resources",
        resources: [
          {
            kicker: "Best first read",
            title: "Personal AI Clone Guide",
            text:
              "Choose this if you want the honest overview first: what this is, what it is not, and where it helps most in real life.",
            href: "./pdf/personal-ai-clone-guide.pdf",
          },
          {
            kicker: "Best first skill",
            title: "Prompt Starter Pack",
            text:
              "Choose this if you are not yet comfortable getting useful work from AI and want patient explanations, examples, and structure.",
            href: "./pdf/prompt-starter-pack.pdf",
          },
          {
            kicker: "Best first exercise",
            title: "Interactive Worksheet",
            text:
              "Choose this if you are ready to write your own instructions, tone preferences, and working rules in a reusable format.",
            href: "#worksheet",
          },
          {
            kicker: "Best first build",
            title: "Daily Admin Clone Pack",
            text:
              "Choose this if you want a low-risk practical starting point like planning, task sorting, reminders, and routine follow-ups.",
            href: "./pdf/daily-admin-clone-pack.pdf",
          },
          {
            kicker: "Next step",
            title: "Weekly Planning Clone Pack",
            text:
              "Choose this after the daily workflow feels useful and you want a calmer weekly rhythm with less mental clutter.",
            href: "./pdf/weekly-planning-clone-pack.pdf",
          },
          {
            kicker: "Later",
            title: "Context Engineering Guide",
            text:
              "Choose this later, after the basics make sense, if you want to understand how recurring notes, transcripts, and context make support more proactive.",
            href: "./pdf/context-engineering-guide.pdf",
          },
        ],
      },
      {
        id: "brand-new",
        eyebrow: "If you are brand new",
        title: "What to do in your first week with AI.",
        layout: "timeline",
        timeline: [
          "Day 1: read the guide and highlight what feels realistic and what does not.",
          "Day 2: read the Prompt Starter Pack and try one prompt on a real task.",
          "Day 3: fill out the worksheet so your preferences are written down instead of floating in your head.",
          "Day 4: use Daily Admin on one real day of planning, lists, or follow-ups.",
          "Day 5: notice what was useful, what felt awkward, and what still needed your judgment.",
          "Day 6: simplify your prompt instead of making it more complicated.",
          "Day 7: decide whether this saved enough time or mental load to keep going.",
        ],
      },
      {
        id: "reality-check",
        eyebrow: "Reality check",
        title: "The real value is support, not magic.",
        layout: "split",
        cards: [
          {
            title: "What it can honestly help with",
            list: [
              "planning and organization",
              "drafting and summarizing",
              "routine follow-ups",
              "low-risk repeated work",
            ],
          },
          {
            title: "What it should not promise",
            list: [
              "thinking exactly like you",
              "replacing judgment",
              "running your life autonomously",
              "guaranteed accuracy in high-stakes situations",
            ],
            tone: "soft",
          },
        ],
      },
    ],
  },
  start: {
    eyebrow: "Start Here",
    title: "If you are new to AI Assistants or AI Cloning, this is the path to follow.",
    lede:
      "Start small, stay realistic, and move through the material in an order that builds understanding instead of confusion.",
    note: {
      label: "Best first move",
      body: "Use the guide, prompt pack, worksheet, and one low-risk workflow before you explore advanced systems.",
    },
    jumps: [
      { id: "beginner-path", label: "Beginner Path" },
      { id: "what-to-read", label: "Pick A Starting Point" },
      { id: "learn-later", label: "Learn Later" },
    ],
    sections: [
      {
        id: "beginner-path",
        eyebrow: "The path",
        title: "A simple order that gives beginners the best chance of success.",
        layout: "steps",
        steps: [
          {
            number: "01",
            title: "Read the guide",
            text: "Start with the Personal AI Clone Guide so you understand the promise and the limits first.",
          },
          {
            number: "02",
            title: "Learn prompting",
            text: "Use the Prompt Starter Pack so you can ask for useful work clearly before you judge AI by weak outputs.",
          },
          {
            number: "03",
            title: "Use the worksheet",
            text: "Turn your own tone, rules, and goals into something reusable instead of trying to hold it all in your head.",
          },
          {
            number: "04",
            title: "Try one practical workflow",
            text: "Start with Daily Admin, then move to Weekly Planning only if the first workflow actually helps.",
          },
        ],
      },
      {
        id: "what-to-read",
        eyebrow: "Pick a starting point",
        title: "Choose the document that matches where you are right now.",
        layout: "resources",
        resources: [
          {
            kicker: "Start here",
            title: "Personal AI Clone Guide",
            text:
              "The honest overview for understanding what AI cloning is, what it is not, and where it helps most.",
            href: "./pdf/personal-ai-clone-guide.pdf",
          },
          {
            kicker: "Learn the skill",
            title: "Prompt Starter Pack",
            text:
              "The best place to begin if you want clearer prompts, better output, and patient explanations.",
            href: "./pdf/prompt-starter-pack.pdf",
          },
          {
            kicker: "Do the exercise",
            title: "Interactive Worksheet",
            text:
              "The best first exercise if you want to write your own instructions, preferences, and boundaries.",
            href: "#worksheet",
          },
          {
            kicker: "Build one thing",
            title: "Daily Admin Clone Pack",
            text:
              "The easiest practical starting point for planning, lists, reminders, and routine follow-ups.",
            href: "./pdf/daily-admin-clone-pack.pdf",
          },
        ],
      },
      {
        id: "learn-later",
        eyebrow: "Learn later",
        title: "Save these for after the basics make sense.",
        layout: "grid",
        cards: [
          {
            title: "Weekly Planning",
            text: "Add this once the daily workflow feels useful and you want a calmer weekly rhythm.",
          },
          {
            title: "Context Engineering",
            text: "Use this later when you are ready to understand how recurring notes and transcripts make support more proactive.",
            tone: "soft",
          },
          {
            title: "Agentic Workflows",
            text: "Treat these as advanced material that depends on good prompting, good context, and clear boundaries first.",
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
  messaging: {
    eyebrow: "Messaging",
    title: "Keep the words honest, calm, and useful.",
    lede:
      "This view turns the old markdown copy pack into a proper in-site page. It is here to help you talk about AI cloning without slipping into exaggerated promises or vague transformation language.",
    note: {
      label: "Best messaging rule",
      body: "Describe what the system helps with in daily life. Avoid promising identity transfer, perfect judgment, or revolutionary autonomy.",
    },
    jumps: [
      { id: "messaging-principles", label: "Principles" },
      { id: "messaging-lines", label: "Core Lines" },
      { id: "workflow-ladder", label: "3 Levels" },
      { id: "how-to-use-copy", label: "How To Use It" },
    ],
    sections: [
      {
        id: "messaging-principles",
        eyebrow: "Positioning principles",
        title: "Good messaging protects the reader from hype.",
        body: [
          "Most people do not need more grand promises around AI. They need clearer language about what it can help with today, what it still cannot do, and where human review still matters.",
          "When the words stay grounded, the product feels more trustworthy. That matters even more for beginners, because they are often the people most vulnerable to exaggerated claims.",
        ],
        layout: "grid",
        cards: [
          {
            title: "Lead with relief",
            text: "Talk about planning, lists, follow-ups, and mental load before talking about advanced systems or autonomy.",
          },
          {
            title: "Name the limits",
            text: "Say clearly that a useful clone is a bounded assistant, not a digital twin and not a replacement for judgment.",
            tone: "soft",
          },
          {
            title: "Teach before you sell",
            text: "Explain what prompts, context, and workflows actually do so the reader can make an informed decision instead of reacting to excitement alone.",
            tone: "warm",
          },
        ],
      },
      {
        id: "messaging-lines",
        eyebrow: "Core language",
        title: "These lines hold the tone of the project together.",
        layout: "quotes",
        quotes: [
          "The real power of AI is not replacing your life. It is helping carry the little things that have been weighing on you.",
          "A useful AI clone is a bounded assistant, not a digital twin.",
          "The goal is not to automate your humanity. It is to reduce the drag of repetitive, low-risk work.",
          "Build one small thing that helps, then let that be enough for now.",
          "Clear expectations protect people better than dramatic promises do.",
        ],
      },
      {
        id: "workflow-ladder",
        eyebrow: "The 3-level ladder",
        title: "This is the teaching arc behind the site and the broader product line.",
        body: [
          "The ladder works because it gives beginners a believable path. It starts with direct prompting, moves into better framing, and only then introduces the idea of building a stronger context layer.",
        ],
        layout: "ladder",
        stages: [
          {
            level: "Level 1",
            title: "Prompt Engineering",
            summary: "Learn how to ask clearly, define the task, and request a useful format.",
            outcome: "This teaches the basics of getting more usable output.",
            accent: "forest",
          },
          {
            level: "Level 2",
            title: "Context Sandwich",
            summary: "Learn to surround a prompt with the right background, goal, and constraints so the answer actually fits the situation.",
            outcome: "This improves relevance, tone, and fit.",
            accent: "sand",
          },
          {
            level: "Level 3",
            title: "Context Engineering",
            summary: "Learn how to capture and reuse recurring context so AI can support you more proactively over time.",
            outcome: "This is the bridge into bounded workflow and agentic support.",
            accent: "clay",
          },
        ],
      },
      {
        id: "how-to-use-copy",
        eyebrow: "How to use this",
        title: "Use this page as a working style guide, not a script you follow blindly.",
        body: [
          "If you are writing a homepage, email sequence, webinar, or client explanation, start here first. Pull one or two core lines, then rewrite them in a way that fits the actual audience and promise.",
          "If you want the source files for reference, keep the markdown documents in the repo. For published use, this web view is the cleaner and more beginner-friendly version.",
        ],
        layout: "steps",
        steps: [
          {
            number: "01",
            title: "Choose the reader's real problem",
            text: "Start with the friction they feel in daily life, not with AI vocabulary.",
          },
          {
            number: "02",
            title: "Choose one honest promise",
            text: "Focus on time, clarity, planning, or follow-through instead of life-changing claims.",
          },
          {
            number: "03",
            title: "Add one realistic boundary",
            text: "Say what still needs review, judgment, or care so trust stays intact.",
          },
        ],
      },
    ],
  },
  legacy: {
    eyebrow: "Placeholder",
    title: "Reserved space for future supporting material.",
    lede:
      "This view is intentionally quiet for now. If future supporting material belongs in the site, it can be added here without crowding the beginner path.",
    note: {
      label: "Not in active use",
      body: "This space is reserved so the public site can stay focused on the main learning path.",
    },
    jumps: [
      { id: "future-space", label: "Future Space" },
    ],
    sections: [
      {
        id: "future-space",
        eyebrow: "Reserved",
        title: "Future supporting material can live here later if it earns a place.",
        layout: "grid",
        cards: [
          {
            title: "Possible use",
            text: "Additional teaching notes, case studies, or support materials may be added here later.",
          },
          {
            title: "Why it is empty",
            text: "The main site is staying focused on the beginner journey instead of carrying older planning material.",
            tone: "soft",
          },
          {
            title: "Current priority",
            text: "Guide, prompt pack, worksheet, and practical workflows come first.",
            tone: "warm",
          },
        ],
      },
    ],
  },
  resources: {
    eyebrow: "Resources",
    title: "A tighter library for the files and sources that matter most.",
    lede:
      "Use this view when you want the core documents, credible beginner learning sources, and a few clear placeholders for what may come next.",
    note: {
      label: "Keep it simple",
      body: "Start with the guide, prompt pack, worksheet, and one practical workflow before you browse more deeply.",
    },
    jumps: [
      { id: "starter-library", label: "Starter Library" },
      { id: "credible-sources", label: "Credible Sources" },
      { id: "coming-soon", label: "Coming Soon" },
    ],
    sections: [
      {
        id: "starter-library",
        eyebrow: "Starter library",
        title: "These are the core files most people actually need.",
        layout: "resources",
        resources: [
          {
            kicker: "Guide",
            title: "Personal AI Clone Guide",
            text: "The best first read for understanding the promise, the limits, and the safest starting use cases.",
            href: "./pdf/personal-ai-clone-guide.pdf",
          },
          {
            kicker: "Prompting",
            title: "Prompt Starter Pack",
            text: "The best first skill-builder if you want clearer prompts and better output from everyday AI use.",
            href: "./pdf/prompt-starter-pack.pdf",
          },
          {
            kicker: "Worksheet",
            title: "Personal AI Clone Worksheet",
            text: "A printable workbook for writing down tone, boundaries, priorities, and your first working instructions.",
            href: "./pdf/personal-ai-clone-worksheet.pdf",
          },
          {
            kicker: "Workflow",
            title: "Daily Admin Clone Pack",
            text: "A practical first build for planning, tasks, reminders, and routine follow-ups.",
            href: "./pdf/daily-admin-clone-pack.pdf",
          },
          {
            kicker: "Workflow",
            title: "Weekly Planning Clone Pack",
            text: "A calmer next step once the daily workflow works and you want a weekly rhythm.",
            href: "./pdf/weekly-planning-clone-pack.pdf",
          },
          {
            kicker: "Advanced",
            title: "Context Engineering Guide",
            text: "A later-stage guide for people who are ready to work with recurring notes, transcripts, and richer context.",
            href: "./pdf/context-engineering-guide.pdf",
          },
        ],
      },
      {
        id: "credible-sources",
        eyebrow: "Credible beginner resources",
        title: "Look these up by name instead of following random AI hype.",
        body: [
          "These are the names worth learning if you want official or high-credibility explanations without the usual inflated promises.",
        ],
        layout: "grid",
        cards: [
          {
            title: "OpenAI Academy",
            text:
              "Look up: OpenAI Academy getting started with ChatGPT, OpenAI Academy AI fundamentals, and OpenAI Academy Codex for beginners.",
          },
          {
            title: "OpenAI Help Center",
            text:
              "Look up: OpenAI Help Center prompt writing, OpenAI Help Center ChatGPT basics, and OpenAI Help Center AI literacy resources.",
            tone: "soft",
          },
          {
            title: "Anthropic Prompt Library",
            text:
              "Look up: Anthropic Prompt Library for prompt structure examples across everyday and professional tasks.",
          },
          {
            title: "Microsoft AI for Beginners",
            text:
              "Look up: Microsoft AI for Beginners if you want more structured foundational vocabulary.",
            tone: "soft",
          },
        ],
      },
      {
        id: "coming-soon",
        eyebrow: "Coming soon",
        title: "Placeholder areas for future expansion.",
        layout: "grid",
        cards: [
          {
            title: "Quickstart checklist",
            text: "A shorter beginner handout may live here later as a one-page start guide.",
          },
          {
            title: "Case-study examples",
            text: "Real examples of low-risk workflows may be added here later once the core learning path is stable.",
            tone: "soft",
          },
          {
            title: "Messaging toolkit",
            text: "A public-facing version of the copy and positioning material may be added later if it still serves the project.",
            tone: "warm",
          },
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

let activeView = window.location.hash.replace("#", "") || "start";
if (!views[activeView]) activeView = "start";

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
    ...Object.entries(views).filter(([key]) => !["overview", "legacy"].includes(key)).map(([key, view]) => {
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


