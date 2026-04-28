const handbookChapters = [
  {
    "id": "chapter-1",
    "number": 1,
    "part": "Part I: What Agentic Agents Are",
    "title": "Chapter 1: From Chatbots to Agents",
    "summary": "Most people meet AI through a chatbot.",
    "blocks": [
      {
        "type": "h3",
        "text": "1.1 The Shift Most People Notice First"
      },
      {
        "type": "p",
        "text": "Most people meet AI through a chatbot."
      },
      {
        "type": "p",
        "text": "They type something in."
      },
      {
        "type": "p",
        "text": "The system answers."
      },
      {
        "type": "p",
        "text": "That is useful. It can explain, summarize, draft, brainstorm, translate, rewrite, or answer questions."
      },
      {
        "type": "p",
        "text": "But the relationship is still fairly simple."
      },
      {
        "type": "p",
        "text": "The user asks. The model responds."
      },
      {
        "type": "p",
        "text": "This is the foundation most people are already familiar with."
      },
      {
        "type": "p",
        "text": "An agent is different because the system is no longer limited to producing a single response to a single request."
      },
      {
        "type": "p",
        "text": "Instead, it can work toward a goal across multiple steps."
      },
      {
        "type": "p",
        "text": "That may include:"
      },
      {
        "type": "ul",
        "items": [
          "deciding what subtask comes first"
        ]
      },
      {
        "type": "ul",
        "items": [
          "choosing a tool to use"
        ]
      },
      {
        "type": "ul",
        "items": [
          "checking a result"
        ]
      },
      {
        "type": "ul",
        "items": [
          "revising its plan"
        ]
      },
      {
        "type": "ul",
        "items": [
          "handing work to another specialist agent or tool"
        ]
      },
      {
        "type": "ul",
        "items": [
          "pausing for review before doing something risky"
        ]
      },
      {
        "type": "p",
        "text": "That is why the word `agent` is used."
      },
      {
        "type": "p",
        "text": "It suggests a system that can act, not just answer."
      },
      {
        "type": "h3",
        "text": "1.2 A Useful Beginner Definition"
      },
      {
        "type": "p",
        "text": "A beginner-friendly definition of an agent might be this:"
      },
      {
        "type": "p",
        "text": "An agent is an AI system that works toward a goal by reasoning through steps, using tools, and carrying work forward beyond a single reply."
      },
      {
        "type": "p",
        "text": "That definition is deliberately modest."
      },
      {
        "type": "p",
        "text": "It does not assume the agent is autonomous in every sense."
      },
      {
        "type": "p",
        "text": "It does not assume the agent is wise."
      },
      {
        "type": "p",
        "text": "It does not assume the agent should be trusted without review."
      },
      {
        "type": "p",
        "text": "It simply describes the shift from one-turn response generation to multi-step goal pursuit."
      },
      {
        "type": "p",
        "text": "OpenAI's practical guide describes an agent in terms of three core pieces: a model, tools, and instructions. That is a very useful framing for beginners because it keeps the picture concrete instead of mystical. An agent is not magic. It is a system made out of understandable parts. [Source note: OpenAI, `A practical guide to building AI agents` and `Agents SDK` docs.]"
      },
      {
        "type": "h3",
        "text": "1.3 Agents Are Not Just Better Chatbots"
      },
      {
        "type": "p",
        "text": "This distinction matters."
      },
      {
        "type": "p",
        "text": "A lot of marketing talks about agents as if they are just smarter chatbots."
      },
      {
        "type": "p",
        "text": "That is too shallow."
      },
      {
        "type": "p",
        "text": "A stronger model alone does not automatically create an agent."
      },
      {
        "type": "p",
        "text": "An agent typically adds:"
      },
      {
        "type": "ul",
        "items": [
          "a goal or task structure"
        ]
      },
      {
        "type": "ul",
        "items": [
          "tool use"
        ]
      },
      {
        "type": "ul",
        "items": [
          "orchestration across steps"
        ]
      },
      {
        "type": "ul",
        "items": [
          "some state or memory"
        ]
      },
      {
        "type": "ul",
        "items": [
          "rules for when to continue, stop, or escalate"
        ]
      },
      {
        "type": "p",
        "text": "A chatbot may tell you how to draft a follow-up email."
      },
      {
        "type": "p",
        "text": "An agent may:"
      },
      {
        "type": "ul",
        "items": [
          "review notes from a meeting"
        ]
      },
      {
        "type": "ul",
        "items": [
          "identify open action items"
        ]
      },
      {
        "type": "ul",
        "items": [
          "draft the follow-up email"
        ]
      },
      {
        "type": "ul",
        "items": [
          "create a structured checklist"
        ]
      },
      {
        "type": "ul",
        "items": [
          "ask for approval before sending anything"
        ]
      },
      {
        "type": "p",
        "text": "That is a different kind of system."
      },
      {
        "type": "h3",
        "text": "1.4 Assistants, Workflows, and Agents"
      },
      {
        "type": "p",
        "text": "One of the clearest distinctions comes from Anthropic's discussion of agentic systems."
      },
      {
        "type": "p",
        "text": "They separate `workflows` from `agents`."
      },
      {
        "type": "p",
        "text": "A workflow is more prescriptive. The steps are more predefined. The code path is more deliberate."
      },
      {
        "type": "p",
        "text": "An agent has more freedom to decide how to proceed inside a defined lane."
      },
      {
        "type": "p",
        "text": "This is a powerful distinction because beginners often throw both ideas together."
      },
      {
        "type": "p",
        "text": "If we do not separate them, we end up asking the wrong system to do the wrong job."
      },
      {
        "type": "p",
        "text": "A simple workflow might always do this:"
      },
      {
        "type": "ol",
        "items": [
          "read an inbox item"
        ]
      },
      {
        "type": "ol",
        "items": [
          "classify it"
        ]
      },
      {
        "type": "ol",
        "items": [
          "draft a reply"
        ]
      },
      {
        "type": "ol",
        "items": [
          "pause for review"
        ]
      },
      {
        "type": "p",
        "text": "A more agentic system might decide:"
      },
      {
        "type": "ul",
        "items": [
          "whether the inbox item needs retrieval from a knowledge base"
        ]
      },
      {
        "type": "ul",
        "items": [
          "whether it should ask clarifying questions first"
        ]
      },
      {
        "type": "ul",
        "items": [
          "whether it should call a scheduling tool"
        ]
      },
      {
        "type": "ul",
        "items": [
          "whether it should escalate instead of drafting"
        ]
      },
      {
        "type": "p",
        "text": "Both can be useful."
      },
      {
        "type": "p",
        "text": "But they are not the same thing."
      },
      {
        "type": "h3",
        "text": "1.5 Why the Distinction Matters in Real Life"
      },
      {
        "type": "p",
        "text": "For beginners, the safest path is often:"
      },
      {
        "type": "ol",
        "items": [
          "start with prompt-based support"
        ]
      },
      {
        "type": "ol",
        "items": [
          "move into repeatable workflows"
        ]
      },
      {
        "type": "ol",
        "items": [
          "move into agents only when the workflow is already well understood"
        ]
      },
      {
        "type": "p",
        "text": "That order matters because many failures blamed on `AI` are really failures of system design."
      },
      {
        "type": "p",
        "text": "People often expect adaptability before they have defined the task well enough for the system to stay inside it."
      },
      {
        "type": "p",
        "text": "The more loosely the task is defined, the more likely an agent is to guess badly."
      },
      {
        "type": "h3",
        "text": "1.6 The Real Promise of Agents"
      },
      {
        "type": "p",
        "text": "The real promise of agentic systems is not that they become tiny artificial employees who can run your life."
      },
      {
        "type": "p",
        "text": "The real promise is that they can carry low-risk, structured work forward with more continuity and less repeated prompting."
      },
      {
        "type": "p",
        "text": "That can be valuable."
      },
      {
        "type": "p",
        "text": "Examples include:"
      },
      {
        "type": "ul",
        "items": [
          "preparing a daily planning draft"
        ]
      },
      {
        "type": "ul",
        "items": [
          "reviewing meeting transcripts and extracting actions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "organizing open loops into a weekly review packet"
        ]
      },
      {
        "type": "ul",
        "items": [
          "gathering context before a conversation or decision"
        ]
      },
      {
        "type": "ul",
        "items": [
          "drafting routine operational follow-ups"
        ]
      },
      {
        "type": "p",
        "text": "That is enough to matter."
      },
      {
        "type": "p",
        "text": "It is also much more believable than the grander promises people often hear."
      },
      {
        "type": "h3",
        "text": "1.7 Chapter Summary"
      },
      {
        "type": "p",
        "text": "An agent is not just a better chatbot."
      },
      {
        "type": "p",
        "text": "It is a system that pursues a goal across multiple steps, usually with tools, instructions, and some kind of state or memory."
      },
      {
        "type": "p",
        "text": "That does not make it magical."
      },
      {
        "type": "p",
        "text": "It makes it a different class of system."
      },
      {
        "type": "p",
        "text": "The next question is what gives that system its `agentic` qualities in the first place."
      }
    ]
  },
  {
    "id": "chapter-2",
    "number": 2,
    "part": "Part I: What Agentic Agents Are",
    "title": "Chapter 2: What Makes an Agent Agentic",
    "summary": "The word `agentic` can sound abstract, but the underlying idea is not that complicated.",
    "blocks": [
      {
        "type": "h3",
        "text": "2.1 The Word `Agentic`"
      },
      {
        "type": "p",
        "text": "The word `agentic` can sound abstract, but the underlying idea is not that complicated."
      },
      {
        "type": "p",
        "text": "Something is agentic when it shows a degree of goal-directed initiative."
      },
      {
        "type": "p",
        "text": "In AI systems, that usually means the system is not only generating text. It is choosing steps, using tools, responding to context, and carrying a task forward."
      },
      {
        "type": "p",
        "text": "That does not mean infinite autonomy."
      },
      {
        "type": "p",
        "text": "It means bounded initiative."
      },
      {
        "type": "p",
        "text": "This phrase is important."
      },
      {
        "type": "p",
        "text": "A good beginner definition of agentic behavior is:"
      },
      {
        "type": "p",
        "text": "bounded initiative in pursuit of a defined goal."
      },
      {
        "type": "h3",
        "text": "2.2 The Core Capabilities"
      },
      {
        "type": "p",
        "text": "There are several capabilities people often associate with agents."
      },
      {
        "type": "p",
        "text": "Not every agent needs all of them to the same degree, but together they help explain the concept."
      },
      {
        "type": "h4",
        "text": "Goal Orientation"
      },
      {
        "type": "p",
        "text": "An agent is working toward an outcome, not just producing an answer."
      },
      {
        "type": "p",
        "text": "That outcome might be:"
      },
      {
        "type": "ul",
        "items": [
          "prepare a daily agenda"
        ]
      },
      {
        "type": "ul",
        "items": [
          "summarize a meeting and identify decisions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "triage support tickets"
        ]
      },
      {
        "type": "ul",
        "items": [
          "compare options and present a recommendation structure"
        ]
      },
      {
        "type": "h4",
        "text": "Planning"
      },
      {
        "type": "p",
        "text": "The system can break work into steps."
      },
      {
        "type": "p",
        "text": "Even if the planning is simple, the important shift is that the system is doing more than answering a surface-level request."
      },
      {
        "type": "h4",
        "text": "Tool Use"
      },
      {
        "type": "p",
        "text": "The system can call external tools."
      },
      {
        "type": "p",
        "text": "That might include:"
      },
      {
        "type": "ul",
        "items": [
          "retrieval from files or notes"
        ]
      },
      {
        "type": "ul",
        "items": [
          "calendars"
        ]
      },
      {
        "type": "ul",
        "items": [
          "databases"
        ]
      },
      {
        "type": "ul",
        "items": [
          "web search"
        ]
      },
      {
        "type": "ul",
        "items": [
          "shells or coding tools"
        ]
      },
      {
        "type": "ul",
        "items": [
          "email or CRM integrations"
        ]
      },
      {
        "type": "p",
        "text": "Tools matter because they turn the model from something that only talks into something that can interact with information and systems."
      },
      {
        "type": "h4",
        "text": "State or Memory"
      },
      {
        "type": "p",
        "text": "The agent can hold onto some useful continuity."
      },
      {
        "type": "p",
        "text": "This may be very short-term, such as remembering the current conversation and previous steps."
      },
      {
        "type": "p",
        "text": "It may also be longer-term, such as preferences, recurring context, or stored summaries."
      },
      {
        "type": "h4",
        "text": "Adaptation Within Rules"
      },
      {
        "type": "p",
        "text": "The agent is not blindly following one fixed script. It has some ability to adjust inside defined boundaries."
      },
      {
        "type": "p",
        "text": "That is where it starts to feel less like a macro and more like an adaptive workflow participant."
      },
      {
        "type": "h3",
        "text": "2.3 The Three-Part View: Model, Instructions, Tools"
      },
      {
        "type": "p",
        "text": "OpenAI's documentation is helpful here because it reduces the system to three clear components:"
      },
      {
        "type": "ul",
        "items": [
          "model"
        ]
      },
      {
        "type": "ul",
        "items": [
          "instructions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "tools"
        ]
      },
      {
        "type": "p",
        "text": "This is a very good teaching framework."
      },
      {
        "type": "p",
        "text": "The model gives reasoning and language ability."
      },
      {
        "type": "p",
        "text": "The instructions define goals, tone, boundaries, and rules."
      },
      {
        "type": "p",
        "text": "The tools give reach into the outside world."
      },
      {
        "type": "p",
        "text": "If any of these are weak, the agent becomes weak in a predictable way."
      },
      {
        "type": "p",
        "text": "A poor model may reason badly."
      },
      {
        "type": "p",
        "text": "Poor instructions may create confusion or risky behavior."
      },
      {
        "type": "p",
        "text": "Poor tools, or too many tools, may make the system ineffective or unsafe."
      },
      {
        "type": "h3",
        "text": "2.4 Workflows Versus Agents"
      },
      {
        "type": "p",
        "text": "Anthropic's distinction between workflows and agents is especially useful for beginners because it helps avoid category errors."
      },
      {
        "type": "p",
        "text": "A workflow is often the right first step."
      },
      {
        "type": "p",
        "text": "Why?"
      },
      {
        "type": "p",
        "text": "Because predefined sequences are easier to test, easier to debug, and easier to trust."
      },
      {
        "type": "p",
        "text": "An agent becomes more appropriate when:"
      },
      {
        "type": "ul",
        "items": [
          "there is some variability in the task"
        ]
      },
      {
        "type": "ul",
        "items": [
          "tool selection may need to change based on context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "rigid code paths become too brittle"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the system has enough context and enough boundaries to adapt safely"
        ]
      },
      {
        "type": "p",
        "text": "Anthropic also notes that many successful systems are built from simple, composable patterns rather than unnecessary complexity. That is a healthy lesson for beginners. You do not need the most advanced architecture to create useful agentic behavior. [Source note: Anthropic, `Building Effective AI Agents`.]"
      },
      {
        "type": "h3",
        "text": "2.5 When an Agent Is More Than a Workflow"
      },
      {
        "type": "p",
        "text": "A workflow becomes more agent-like when the system starts deciding things such as:"
      },
      {
        "type": "ul",
        "items": [
          "which tool to use first"
        ]
      },
      {
        "type": "ul",
        "items": [
          "whether it has enough information"
        ]
      },
      {
        "type": "ul",
        "items": [
          "whether a result is good enough"
        ]
      },
      {
        "type": "ul",
        "items": [
          "whether another pass is needed"
        ]
      },
      {
        "type": "ul",
        "items": [
          "whether to escalate to a human"
        ]
      },
      {
        "type": "p",
        "text": "This does not mean the system is fully independent."
      },
      {
        "type": "p",
        "text": "It means its path is not fully hard-coded."
      },
      {
        "type": "p",
        "text": "That is the essence of agentic behavior."
      },
      {
        "type": "h3",
        "text": "2.6 Single-Agent and Multi-Agent Patterns"
      },
      {
        "type": "p",
        "text": "Some systems use one agent."
      },
      {
        "type": "p",
        "text": "That one agent may:"
      },
      {
        "type": "ul",
        "items": [
          "hold the main goal"
        ]
      },
      {
        "type": "ul",
        "items": [
          "reason through steps"
        ]
      },
      {
        "type": "ul",
        "items": [
          "call tools"
        ]
      },
      {
        "type": "ul",
        "items": [
          "ask for approvals"
        ]
      },
      {
        "type": "ul",
        "items": [
          "return a final result"
        ]
      },
      {
        "type": "p",
        "text": "Other systems use multiple agents."
      },
      {
        "type": "p",
        "text": "In those cases, one agent might act like a coordinator while others act like specialists."
      },
      {
        "type": "p",
        "text": "Examples of specialist roles might include:"
      },
      {
        "type": "ul",
        "items": [
          "research"
        ]
      },
      {
        "type": "ul",
        "items": [
          "writing"
        ]
      },
      {
        "type": "ul",
        "items": [
          "classification"
        ]
      },
      {
        "type": "ul",
        "items": [
          "scheduling"
        ]
      },
      {
        "type": "ul",
        "items": [
          "extraction"
        ]
      },
      {
        "type": "ul",
        "items": [
          "verification"
        ]
      },
      {
        "type": "p",
        "text": "This can be powerful, but it also adds complexity."
      },
      {
        "type": "p",
        "text": "A beginner should not assume multi-agent automatically means better."
      },
      {
        "type": "p",
        "text": "It often means more moving parts, more failure points, and more need for good orchestration."
      },
      {
        "type": "h3",
        "text": "2.7 Agentic Does Not Mean Safe by Default"
      },
      {
        "type": "p",
        "text": "This is where people can get into trouble."
      },
      {
        "type": "p",
        "text": "An agent may appear confident, resourceful, and active."
      },
      {
        "type": "p",
        "text": "That does not mean it is reliable enough to act without boundaries."
      },
      {
        "type": "p",
        "text": "Agentic systems can:"
      },
      {
        "type": "ul",
        "items": [
          "misunderstand context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "choose the wrong tool"
        ]
      },
      {
        "type": "ul",
        "items": [
          "mishandle ambiguous instructions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "follow malicious prompt injections"
        ]
      },
      {
        "type": "ul",
        "items": [
          "surface or pass along information they should not"
        ]
      },
      {
        "type": "p",
        "text": "OpenAI's safety guidance is direct on this point: prompt injection, private data leakage, and unsafe tool use are real risks when building agents. That is why structured outputs, approvals, guardrails, and evaluations matter so much. [Source note: OpenAI, `Safety in building agents`.]"
      },
      {
        "type": "h3",
        "text": "2.8 Chapter Summary"
      },
      {
        "type": "p",
        "text": "An agent is agentic because it shows bounded initiative in pursuit of a goal."
      },
      {
        "type": "p",
        "text": "That initiative usually comes from a combination of:"
      },
      {
        "type": "ul",
        "items": [
          "reasoning"
        ]
      },
      {
        "type": "ul",
        "items": [
          "tool use"
        ]
      },
      {
        "type": "ul",
        "items": [
          "memory or state"
        ]
      },
      {
        "type": "ul",
        "items": [
          "adaptable next-step choice"
        ]
      },
      {
        "type": "ul",
        "items": [
          "clear instructions and boundaries"
        ]
      },
      {
        "type": "p",
        "text": "The more freedom you give an agent, the more important structure and safeguards become."
      },
      {
        "type": "p",
        "text": "The next chapter looks at the real limits of these systems."
      }
    ]
  },
  {
    "id": "chapter-3",
    "number": 3,
    "part": "Part I: What Agentic Agents Are",
    "title": "Chapter 3: The Real Limits of Agentic Systems",
    "summary": "A lot of people first meet agents through demos.",
    "blocks": [
      {
        "type": "h3",
        "text": "3.1 Why Limits Matter More Than Demos"
      },
      {
        "type": "p",
        "text": "A lot of people first meet agents through demos."
      },
      {
        "type": "p",
        "text": "Demos are useful, but demos hide friction."
      },
      {
        "type": "p",
        "text": "They rarely show:"
      },
      {
        "type": "ul",
        "items": [
          "brittle edge cases"
        ]
      },
      {
        "type": "ul",
        "items": [
          "unclear instructions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "bad tool outputs"
        ]
      },
      {
        "type": "ul",
        "items": [
          "permission mistakes"
        ]
      },
      {
        "type": "ul",
        "items": [
          "prompt injection"
        ]
      },
      {
        "type": "ul",
        "items": [
          "confusion caused by missing context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "review burdens after the system acts"
        ]
      },
      {
        "type": "p",
        "text": "A beginner who only sees demos may come away believing the system is more stable than it really is."
      },
      {
        "type": "p",
        "text": "This chapter exists to correct that."
      },
      {
        "type": "h3",
        "text": "3.2 Agents Still Depend on Context"
      },
      {
        "type": "p",
        "text": "One of the most important truths about agentic AI is that the system is only as good as the context it can use well."
      },
      {
        "type": "p",
        "text": "Without enough context, agents guess."
      },
      {
        "type": "p",
        "text": "That guesswork can look polished."
      },
      {
        "type": "p",
        "text": "It can even sound strategic."
      },
      {
        "type": "p",
        "text": "But a polished wrong answer is still wrong."
      },
      {
        "type": "p",
        "text": "That is why context engineering matters so much."
      },
      {
        "type": "p",
        "text": "The more a system needs to act across steps, the more harmful missing context becomes."
      },
      {
        "type": "h3",
        "text": "3.3 More Autonomy Means More Surface Area for Failure"
      },
      {
        "type": "p",
        "text": "A standard chatbot can fail in a contained way."
      },
      {
        "type": "p",
        "text": "It gives a weak answer."
      },
      {
        "type": "p",
        "text": "An agent can fail across a chain of steps."
      },
      {
        "type": "p",
        "text": "That may look like:"
      },
      {
        "type": "ul",
        "items": [
          "misreading the task"
        ]
      },
      {
        "type": "ul",
        "items": [
          "choosing the wrong tool"
        ]
      },
      {
        "type": "ul",
        "items": [
          "producing a flawed result"
        ]
      },
      {
        "type": "ul",
        "items": [
          "using that flawed result as the basis for the next step"
        ]
      },
      {
        "type": "ul",
        "items": [
          "compounding the error before anyone notices"
        ]
      },
      {
        "type": "p",
        "text": "This is one of the core reasons why agent design should start with bounded tasks."
      },
      {
        "type": "h3",
        "text": "3.4 Tool Use Is Powerful and Risky"
      },
      {
        "type": "p",
        "text": "Tools are one of the reasons agents matter."
      },
      {
        "type": "p",
        "text": "Tools are also one of the reasons agents become risky."
      },
      {
        "type": "p",
        "text": "When an agent can access calendars, files, shells, web search, CRMs, or internal systems, the stakes rise quickly."
      },
      {
        "type": "p",
        "text": "If the model reasons badly, the tool multiplies the consequences."
      },
      {
        "type": "p",
        "text": "For that reason, a beginner should learn an important design principle early:"
      },
      {
        "type": "p",
        "text": "Do not give the agent more reach than the task requires."
      },
      {
        "type": "p",
        "text": "The smallest useful permission set is usually the safest starting point."
      },
      {
        "type": "h3",
        "text": "3.5 Prompt Injection Is Not a Niche Problem"
      },
      {
        "type": "p",
        "text": "Prompt injection sounds technical, but the core idea is simple."
      },
      {
        "type": "p",
        "text": "An agent reads untrusted text."
      },
      {
        "type": "p",
        "text": "That text tries to manipulate the agent into ignoring its real rules."
      },
      {
        "type": "p",
        "text": "If the agent is connected to tools, the consequences can be serious."
      },
      {
        "type": "p",
        "text": "OpenAI's agent safety guidance warns directly about this. Untrusted text can cause misaligned actions, tool misuse, or data leakage if the workflow is not designed carefully. Their guidance emphasizes structured outputs, careful handling of user input, tool approvals, and strong instructions. [Source note: OpenAI, `Safety in building agents`.]"
      },
      {
        "type": "p",
        "text": "This matters even for beginners."
      },
      {
        "type": "p",
        "text": "Why?"
      },
      {
        "type": "p",
        "text": "Because many first agent projects involve exactly the kinds of inputs that can become untrusted:"
      },
      {
        "type": "ul",
        "items": [
          "emails"
        ]
      },
      {
        "type": "ul",
        "items": [
          "support tickets"
        ]
      },
      {
        "type": "ul",
        "items": [
          "websites"
        ]
      },
      {
        "type": "ul",
        "items": [
          "copied notes"
        ]
      },
      {
        "type": "ul",
        "items": [
          "transcripts"
        ]
      },
      {
        "type": "ul",
        "items": [
          "uploaded documents"
        ]
      },
      {
        "type": "h3",
        "text": "3.6 Agents Do Not Replace Judgment"
      },
      {
        "type": "p",
        "text": "This point needs repeating."
      },
      {
        "type": "p",
        "text": "Agents can support judgment."
      },
      {
        "type": "p",
        "text": "They do not replace it."
      },
      {
        "type": "p",
        "text": "An agent can:"
      },
      {
        "type": "ul",
        "items": [
          "organize facts"
        ]
      },
      {
        "type": "ul",
        "items": [
          "compare options"
        ]
      },
      {
        "type": "ul",
        "items": [
          "draft possibilities"
        ]
      },
      {
        "type": "ul",
        "items": [
          "prepare a review packet"
        ]
      },
      {
        "type": "ul",
        "items": [
          "highlight tradeoffs"
        ]
      },
      {
        "type": "p",
        "text": "But when real stakes are involved, a person still needs to decide."
      },
      {
        "type": "p",
        "text": "That includes situations involving:"
      },
      {
        "type": "ul",
        "items": [
          "money"
        ]
      },
      {
        "type": "ul",
        "items": [
          "compliance"
        ]
      },
      {
        "type": "ul",
        "items": [
          "hiring"
        ]
      },
      {
        "type": "ul",
        "items": [
          "contracts"
        ]
      },
      {
        "type": "ul",
        "items": [
          "sensitive relationships"
        ]
      },
      {
        "type": "ul",
        "items": [
          "health or safety"
        ]
      },
      {
        "type": "p",
        "text": "The more serious the consequences, the less wise it is to confuse assistance with authority."
      },
      {
        "type": "h3",
        "text": "3.7 Many Failures Are Design Failures, Not Model Failures"
      },
      {
        "type": "p",
        "text": "This is a hopeful point."
      },
      {
        "type": "p",
        "text": "When agents fail, it is easy to blame the model alone."
      },
      {
        "type": "p",
        "text": "But many common failures come from design problems such as:"
      },
      {
        "type": "ul",
        "items": [
          "vague goals"
        ]
      },
      {
        "type": "ul",
        "items": [
          "too many tools"
        ]
      },
      {
        "type": "ul",
        "items": [
          "weak instructions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "no review point"
        ]
      },
      {
        "type": "ul",
        "items": [
          "missing context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "badly chosen tasks"
        ]
      },
      {
        "type": "ul",
        "items": [
          "no evaluation process"
        ]
      },
      {
        "type": "p",
        "text": "This matters because design can be improved."
      },
      {
        "type": "p",
        "text": "A beginner does not need a perfect system."
      },
      {
        "type": "p",
        "text": "They need a system they can understand, inspect, and refine."
      },
      {
        "type": "h3",
        "text": "3.8 The Right Goal for a Beginner"
      },
      {
        "type": "p",
        "text": "The right beginner goal is not:"
      },
      {
        "type": "p",
        "text": "`Build a fully autonomous AI worker.`"
      },
      {
        "type": "p",
        "text": "The right beginner goal is closer to:"
      },
      {
        "type": "p",
        "text": "`Build one bounded agent that handles one repeated low-risk job well enough to save time without creating more risk than value.`"
      },
      {
        "type": "p",
        "text": "That is realistic."
      },
      {
        "type": "p",
        "text": "It is also enough to learn the field well."
      },
      {
        "type": "h3",
        "text": "3.9 Chapter Summary"
      },
      {
        "type": "p",
        "text": "Agentic systems are useful, but they are not automatically reliable."
      },
      {
        "type": "p",
        "text": "Their limits include:"
      },
      {
        "type": "ul",
        "items": [
          "dependence on context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "compounding error across steps"
        ]
      },
      {
        "type": "ul",
        "items": [
          "risky tool use"
        ]
      },
      {
        "type": "ul",
        "items": [
          "prompt injection"
        ]
      },
      {
        "type": "ul",
        "items": [
          "data leakage"
        ]
      },
      {
        "type": "ul",
        "items": [
          "weak judgment in high-stakes situations"
        ]
      },
      {
        "type": "p",
        "text": "That does not make them useless."
      },
      {
        "type": "p",
        "text": "It makes design, task selection, and guardrails central to success."
      },
      {
        "type": "p",
        "text": "## Part Introduction"
      },
      {
        "type": "p",
        "text": "Now that we have a grounded mental model, we can move into construction."
      },
      {
        "type": "p",
        "text": "This part is not just about code."
      },
      {
        "type": "p",
        "text": "It is about design."
      },
      {
        "type": "p",
        "text": "A beginner-friendly build process should answer questions like:"
      },
      {
        "type": "ul",
        "items": [
          "What parts does the agent need?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "What is the first useful version?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "What should the instructions include?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "When do tools help?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "How should memory be handled?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "Where should the system pause for review?"
        ]
      },
      {
        "type": "p",
        "text": "The most important principle in this part is simple:"
      },
      {
        "type": "p",
        "text": "Build for clarity before you build for power."
      },
      {
        "type": "p",
        "text": "A system you understand is much easier to trust, test, and improve."
      }
    ]
  },
  {
    "id": "chapter-4",
    "number": 4,
    "part": "Part II: How to Build Them",
    "title": "Chapter 4: The Basic Architecture of an Agent",
    "summary": "A beginner does not need to hold the whole ecosystem in their head at once.",
    "blocks": [
      {
        "type": "h3",
        "text": "4.1 Start with the Simplest Working Mental Model"
      },
      {
        "type": "p",
        "text": "A beginner does not need to hold the whole ecosystem in their head at once."
      },
      {
        "type": "p",
        "text": "Start with this architecture:"
      },
      {
        "type": "ol",
        "items": [
          "goal"
        ]
      },
      {
        "type": "ol",
        "items": [
          "model"
        ]
      },
      {
        "type": "ol",
        "items": [
          "instructions"
        ]
      },
      {
        "type": "ol",
        "items": [
          "tools"
        ]
      },
      {
        "type": "ol",
        "items": [
          "context or memory"
        ]
      },
      {
        "type": "ol",
        "items": [
          "output format"
        ]
      },
      {
        "type": "ol",
        "items": [
          "review point"
        ]
      },
      {
        "type": "p",
        "text": "If those seven pieces are reasonably clear, the first design can usually move forward."
      },
      {
        "type": "h3",
        "text": "4.2 Goal First"
      },
      {
        "type": "p",
        "text": "The goal comes before the technology."
      },
      {
        "type": "p",
        "text": "A weak goal sounds like this:"
      },
      {
        "type": "p",
        "text": "`Help with my business.`"
      },
      {
        "type": "p",
        "text": "A stronger goal sounds like this:"
      },
      {
        "type": "p",
        "text": "`Each evening, prepare a short next-day planning draft from my task list, calendar, and open follow-ups.`"
      },
      {
        "type": "p",
        "text": "That stronger goal is specific enough to design around."
      },
      {
        "type": "p",
        "text": "Good agent goals are:"
      },
      {
        "type": "ul",
        "items": [
          "concrete"
        ]
      },
      {
        "type": "ul",
        "items": [
          "bounded"
        ]
      },
      {
        "type": "ul",
        "items": [
          "repeated often enough to matter"
        ]
      },
      {
        "type": "ul",
        "items": [
          "low-risk enough to test safely"
        ]
      },
      {
        "type": "h3",
        "text": "4.3 Instructions Define the Lane"
      },
      {
        "type": "p",
        "text": "Instructions are where the agent learns what its job is and how to behave."
      },
      {
        "type": "p",
        "text": "Good instructions often include:"
      },
      {
        "type": "ul",
        "items": [
          "role"
        ]
      },
      {
        "type": "ul",
        "items": [
          "task goal"
        ]
      },
      {
        "type": "ul",
        "items": [
          "boundaries"
        ]
      },
      {
        "type": "ul",
        "items": [
          "tone if relevant"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what inputs to expect"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what outputs to return"
        ]
      },
      {
        "type": "ul",
        "items": [
          "when to ask for help"
        ]
      },
      {
        "type": "ul",
        "items": [
          "when to stop"
        ]
      },
      {
        "type": "p",
        "text": "For beginners, the most common mistake is writing instructions that are too vague."
      },
      {
        "type": "p",
        "text": "The second most common mistake is writing instructions that are too broad."
      },
      {
        "type": "p",
        "text": "An agent does not need a dramatic identity."
      },
      {
        "type": "p",
        "text": "It needs a clear lane."
      },
      {
        "type": "h3",
        "text": "4.4 Tools Extend the Agent Beyond Conversation"
      },
      {
        "type": "p",
        "text": "Tools are what allow the agent to act on or retrieve information beyond its internal model."
      },
      {
        "type": "p",
        "text": "Examples include:"
      },
      {
        "type": "ul",
        "items": [
          "file retrieval"
        ]
      },
      {
        "type": "ul",
        "items": [
          "search"
        ]
      },
      {
        "type": "ul",
        "items": [
          "calendars"
        ]
      },
      {
        "type": "ul",
        "items": [
          "spreadsheets"
        ]
      },
      {
        "type": "ul",
        "items": [
          "knowledge bases"
        ]
      },
      {
        "type": "ul",
        "items": [
          "CRM systems"
        ]
      },
      {
        "type": "ul",
        "items": [
          "code execution"
        ]
      },
      {
        "type": "ul",
        "items": [
          "messaging systems"
        ]
      },
      {
        "type": "p",
        "text": "The important beginner lesson is not `add more tools.`"
      },
      {
        "type": "p",
        "text": "It is `add only the tools this task truly needs.`"
      },
      {
        "type": "p",
        "text": "Tool overload creates confusion."
      },
      {
        "type": "p",
        "text": "LangChain's agent documentation makes this point in a practical way: too many tools can overwhelm context and increase errors, while too few limit capability. Dynamic tool selection can be useful, but it should be deliberate. [Source note: LangChain agent docs.]"
      },
      {
        "type": "h3",
        "text": "4.5 State and Memory"
      },
      {
        "type": "p",
        "text": "An agent often needs some way to carry forward continuity."
      },
      {
        "type": "p",
        "text": "This may be very simple."
      },
      {
        "type": "p",
        "text": "For example:"
      },
      {
        "type": "ul",
        "items": [
          "the current conversation"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the last tool result"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a few user preferences"
        ]
      },
      {
        "type": "ul",
        "items": [
          "today's task list"
        ]
      },
      {
        "type": "p",
        "text": "It may also be more persistent."
      },
      {
        "type": "p",
        "text": "For example:"
      },
      {
        "type": "ul",
        "items": [
          "recurring planning patterns"
        ]
      },
      {
        "type": "ul",
        "items": [
          "known writing tone"
        ]
      },
      {
        "type": "ul",
        "items": [
          "stable business rules"
        ]
      },
      {
        "type": "ul",
        "items": [
          "previous summaries"
        ]
      },
      {
        "type": "ul",
        "items": [
          "stored decisions"
        ]
      },
      {
        "type": "p",
        "text": "A beginner should not think of memory as one giant bucket."
      },
      {
        "type": "p",
        "text": "A better approach is to ask:"
      },
      {
        "type": "p",
        "text": "What does the agent need to remember for this job, and for how long?"
      },
      {
        "type": "p",
        "text": "That question leads to cleaner design."
      },
      {
        "type": "h3",
        "text": "4.6 Output Format Matters More Than Many Beginners Expect"
      },
      {
        "type": "p",
        "text": "A system that returns answers in a loose, freeform way is harder to test and harder to trust."
      },
      {
        "type": "p",
        "text": "Structured output improves reliability."
      },
      {
        "type": "p",
        "text": "Examples include:"
      },
      {
        "type": "ul",
        "items": [
          "`Top priorities / Risks / Questions`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "JSON with fixed fields"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a table with `task / owner / due date`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`today / this week / later`"
        ]
      },
      {
        "type": "p",
        "text": "OpenAI's safety guidance explicitly recommends structured outputs because they constrain how information moves through the system and reduce the freeform channels through which risky behavior can spread. [Source note: OpenAI, `Safety in building agents`.]"
      },
      {
        "type": "h3",
        "text": "4.7 Review Points"
      },
      {
        "type": "p",
        "text": "The question is not whether review is needed."
      },
      {
        "type": "p",
        "text": "The question is where review belongs."
      },
      {
        "type": "p",
        "text": "Typical review points include:"
      },
      {
        "type": "ul",
        "items": [
          "before an external action"
        ]
      },
      {
        "type": "ul",
        "items": [
          "after retrieving sensitive data"
        ]
      },
      {
        "type": "ul",
        "items": [
          "before sending a message"
        ]
      },
      {
        "type": "ul",
        "items": [
          "before deleting or updating records"
        ]
      },
      {
        "type": "ul",
        "items": [
          "after a confidence drop or ambiguity"
        ]
      },
      {
        "type": "p",
        "text": "A good beginner agent is usually not fully autonomous."
      },
      {
        "type": "p",
        "text": "It is review-aware."
      },
      {
        "type": "h3",
        "text": "4.8 A Very Simple Example Architecture"
      },
      {
        "type": "p",
        "text": "Imagine a meeting-follow-up agent."
      },
      {
        "type": "p",
        "text": "Goal:"
      },
      {
        "type": "p",
        "text": "Prepare a follow-up packet after a meeting."
      },
      {
        "type": "p",
        "text": "Inputs:"
      },
      {
        "type": "ul",
        "items": [
          "transcript"
        ]
      },
      {
        "type": "ul",
        "items": [
          "participants"
        ]
      },
      {
        "type": "ul",
        "items": [
          "calendar details"
        ]
      },
      {
        "type": "ul",
        "items": [
          "prior related notes"
        ]
      },
      {
        "type": "p",
        "text": "Instructions:"
      },
      {
        "type": "ul",
        "items": [
          "summarize the meeting"
        ]
      },
      {
        "type": "ul",
        "items": [
          "extract decisions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "list open questions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "identify action items"
        ]
      },
      {
        "type": "ul",
        "items": [
          "draft a follow-up email"
        ]
      },
      {
        "type": "ul",
        "items": [
          "do not send anything"
        ]
      },
      {
        "type": "p",
        "text": "Tools:"
      },
      {
        "type": "ul",
        "items": [
          "transcript retrieval"
        ]
      },
      {
        "type": "ul",
        "items": [
          "notes retrieval"
        ]
      },
      {
        "type": "ul",
        "items": [
          "drafting output formatter"
        ]
      },
      {
        "type": "p",
        "text": "Output:"
      },
      {
        "type": "ul",
        "items": [
          "summary"
        ]
      },
      {
        "type": "ul",
        "items": [
          "decisions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "action items"
        ]
      },
      {
        "type": "ul",
        "items": [
          "draft email"
        ]
      },
      {
        "type": "ul",
        "items": [
          "questions for review"
        ]
      },
      {
        "type": "p",
        "text": "Review point:"
      },
      {
        "type": "p",
        "text": "human checks before anything is shared"
      },
      {
        "type": "p",
        "text": "That is already a meaningful agent design."
      },
      {
        "type": "p",
        "text": "It is also simple enough for a beginner to understand."
      },
      {
        "type": "h3",
        "text": "4.9 Chapter Summary"
      },
      {
        "type": "p",
        "text": "A good first architecture is not complicated."
      },
      {
        "type": "p",
        "text": "It needs:"
      },
      {
        "type": "ul",
        "items": [
          "a clear goal"
        ]
      },
      {
        "type": "ul",
        "items": [
          "useful instructions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a small toolset"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the right context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a structured output"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a defined review point"
        ]
      },
      {
        "type": "p",
        "text": "Once those pieces are stable, the next question is how to choose the first agent worth building."
      }
    ]
  },
  {
    "id": "chapter-5",
    "number": 5,
    "part": "Part II: How to Build Them",
    "title": "Chapter 5: Designing a First Useful Agent",
    "summary": "The best first agent is usually not the one that sounds most impressive.",
    "blocks": [
      {
        "type": "h3",
        "text": "5.1 Start with Repetition, Not Prestige"
      },
      {
        "type": "p",
        "text": "The best first agent is usually not the one that sounds most impressive."
      },
      {
        "type": "p",
        "text": "It is the one that solves a repeated, low-risk, annoying problem."
      },
      {
        "type": "p",
        "text": "That might be:"
      },
      {
        "type": "ul",
        "items": [
          "inbox triage"
        ]
      },
      {
        "type": "ul",
        "items": [
          "daily planning prep"
        ]
      },
      {
        "type": "ul",
        "items": [
          "meeting summary packets"
        ]
      },
      {
        "type": "ul",
        "items": [
          "follow-up organization"
        ]
      },
      {
        "type": "ul",
        "items": [
          "task cleanup"
        ]
      },
      {
        "type": "ul",
        "items": [
          "weekly review drafting"
        ]
      },
      {
        "type": "p",
        "text": "These may sound modest."
      },
      {
        "type": "p",
        "text": "That is a strength."
      },
      {
        "type": "p",
        "text": "They are practical enough to test and important enough to matter."
      },
      {
        "type": "h3",
        "text": "5.2 The Four-Part Task Filter"
      },
      {
        "type": "p",
        "text": "A useful beginner filter is:"
      },
      {
        "type": "ol",
        "items": [
          "Does this task happen often?"
        ]
      },
      {
        "type": "ol",
        "items": [
          "Is it low-risk enough to test safely?"
        ]
      },
      {
        "type": "ol",
        "items": [
          "Can the task be described clearly?"
        ]
      },
      {
        "type": "ol",
        "items": [
          "Would success save real time or mental load?"
        ]
      },
      {
        "type": "p",
        "text": "If the answer is no to most of those questions, it is probably not the right first agent."
      },
      {
        "type": "h3",
        "text": "5.3 Good First Agent Candidates"
      },
      {
        "type": "h4",
        "text": "Daily Admin Agent"
      },
      {
        "type": "p",
        "text": "This agent helps with:"
      },
      {
        "type": "ul",
        "items": [
          "task sorting"
        ]
      },
      {
        "type": "ul",
        "items": [
          "reminders"
        ]
      },
      {
        "type": "ul",
        "items": [
          "planning drafts"
        ]
      },
      {
        "type": "ul",
        "items": [
          "routine follow-up prep"
        ]
      },
      {
        "type": "p",
        "text": "Why it is good:"
      },
      {
        "type": "ul",
        "items": [
          "repetitive"
        ]
      },
      {
        "type": "ul",
        "items": [
          "easy to review"
        ]
      },
      {
        "type": "ul",
        "items": [
          "low-risk"
        ]
      },
      {
        "type": "ul",
        "items": [
          "immediately useful"
        ]
      },
      {
        "type": "h4",
        "text": "Meeting Follow-Up Agent"
      },
      {
        "type": "p",
        "text": "This agent helps with:"
      },
      {
        "type": "ul",
        "items": [
          "summaries"
        ]
      },
      {
        "type": "ul",
        "items": [
          "action items"
        ]
      },
      {
        "type": "ul",
        "items": [
          "decisions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "draft follow-up notes"
        ]
      },
      {
        "type": "p",
        "text": "Why it is good:"
      },
      {
        "type": "ul",
        "items": [
          "grounded in real source material"
        ]
      },
      {
        "type": "ul",
        "items": [
          "high perceived usefulness"
        ]
      },
      {
        "type": "ul",
        "items": [
          "reviewable before external action"
        ]
      },
      {
        "type": "h4",
        "text": "Weekly Planning Agent"
      },
      {
        "type": "p",
        "text": "This agent helps with:"
      },
      {
        "type": "ul",
        "items": [
          "backlog triage"
        ]
      },
      {
        "type": "ul",
        "items": [
          "priority selection"
        ]
      },
      {
        "type": "ul",
        "items": [
          "overload detection"
        ]
      },
      {
        "type": "ul",
        "items": [
          "weekly focus framing"
        ]
      },
      {
        "type": "p",
        "text": "Why it is good:"
      },
      {
        "type": "ul",
        "items": [
          "repeated rhythm"
        ]
      },
      {
        "type": "ul",
        "items": [
          "meaningful time savings"
        ]
      },
      {
        "type": "ul",
        "items": [
          "good fit for structured outputs"
        ]
      },
      {
        "type": "h3",
        "text": "5.4 Poor First Agent Candidates"
      },
      {
        "type": "p",
        "text": "A poor first build often has one or more of these traits:"
      },
      {
        "type": "ul",
        "items": [
          "high stakes"
        ]
      },
      {
        "type": "ul",
        "items": [
          "vague goals"
        ]
      },
      {
        "type": "ul",
        "items": [
          "too much autonomy"
        ]
      },
      {
        "type": "ul",
        "items": [
          "unclear source of truth"
        ]
      },
      {
        "type": "ul",
        "items": [
          "emotional or legal sensitivity"
        ]
      },
      {
        "type": "ul",
        "items": [
          "many external systems involved"
        ]
      },
      {
        "type": "p",
        "text": "Examples of poor beginner starting points:"
      },
      {
        "type": "ul",
        "items": [
          "autonomous customer negotiation"
        ]
      },
      {
        "type": "ul",
        "items": [
          "sensitive HR decision support with action authority"
        ]
      },
      {
        "type": "ul",
        "items": [
          "financial execution without approval"
        ]
      },
      {
        "type": "ul",
        "items": [
          "personal relationship management with unsupervised messaging"
        ]
      },
      {
        "type": "h3",
        "text": "5.5 Write the Task as a Workflow First"
      },
      {
        "type": "p",
        "text": "Before building the agent, write the human workflow."
      },
      {
        "type": "p",
        "text": "This is one of the best habits a beginner can learn."
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "ul",
        "items": [
          "what starts this process?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what information is needed?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what decisions occur?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what result should exist at the end?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "where does a human still need to review?"
        ]
      },
      {
        "type": "p",
        "text": "If you cannot describe the human workflow clearly, the AI version will usually be weak."
      },
      {
        "type": "h3",
        "text": "5.6 Prototype Manually Before Automating"
      },
      {
        "type": "p",
        "text": "A very good practice is to run the workflow manually with AI first."
      },
      {
        "type": "p",
        "text": "That means:"
      },
      {
        "type": "ul",
        "items": [
          "you provide the inputs"
        ]
      },
      {
        "type": "ul",
        "items": [
          "you give the prompt"
        ]
      },
      {
        "type": "ul",
        "items": [
          "you see the output"
        ]
      },
      {
        "type": "ul",
        "items": [
          "you review what works and what does not"
        ]
      },
      {
        "type": "p",
        "text": "Only after that should you add more orchestration."
      },
      {
        "type": "p",
        "text": "This keeps the system understandable."
      },
      {
        "type": "p",
        "text": "It also prevents premature automation of a bad process."
      },
      {
        "type": "h3",
        "text": "5.7 Define Success Before You Build"
      },
      {
        "type": "p",
        "text": "A beginner should define success in plain language before they start."
      },
      {
        "type": "p",
        "text": "Examples:"
      },
      {
        "type": "ul",
        "items": [
          "`The agent saves me 20 minutes on meeting follow-up.`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`The draft is usually 80 percent usable with light edits.`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`The agent catches open loops I would otherwise forget.`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`The weekly review feels clearer and lighter, not more complicated.`"
        ]
      },
      {
        "type": "p",
        "text": "If success is not defined, the system can feel busy without actually being helpful."
      },
      {
        "type": "h3",
        "text": "5.8 Chapter Summary"
      },
      {
        "type": "p",
        "text": "The best first agent is:"
      },
      {
        "type": "ul",
        "items": [
          "repeated"
        ]
      },
      {
        "type": "ul",
        "items": [
          "low-risk"
        ]
      },
      {
        "type": "ul",
        "items": [
          "clearly describable"
        ]
      },
      {
        "type": "ul",
        "items": [
          "easy to review"
        ]
      },
      {
        "type": "ul",
        "items": [
          "useful enough to save time or mental load"
        ]
      },
      {
        "type": "p",
        "text": "Start with a task that is modest but real."
      },
      {
        "type": "p",
        "text": "That is how trust is earned."
      }
    ]
  },
  {
    "id": "chapter-6",
    "number": 6,
    "part": "Part II: How to Build Them",
    "title": "Chapter 6: Memory, Context, Tools, and Guardrails",
    "summary": "Memory, context, tools, and guardrails are often taught separately.",
    "blocks": [
      {
        "type": "h3",
        "text": "6.1 Why These Four Topics Belong Together"
      },
      {
        "type": "p",
        "text": "Memory, context, tools, and guardrails are often taught separately."
      },
      {
        "type": "p",
        "text": "For beginners, it helps to see them as one system."
      },
      {
        "type": "p",
        "text": "Why?"
      },
      {
        "type": "p",
        "text": "Because each one answers a different question:"
      },
      {
        "type": "ul",
        "items": [
          "Memory: What should the system remember?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "Context: What should the system know right now?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "Tools: What can the system reach or do?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "Guardrails: What must the system stay inside of?"
        ]
      },
      {
        "type": "p",
        "text": "A useful agent needs all four."
      },
      {
        "type": "h3",
        "text": "6.2 Memory Should Be Deliberate"
      },
      {
        "type": "p",
        "text": "Not everything should become memory."
      },
      {
        "type": "p",
        "text": "Useful memory often includes:"
      },
      {
        "type": "ul",
        "items": [
          "stable preferences"
        ]
      },
      {
        "type": "ul",
        "items": [
          "recurring style rules"
        ]
      },
      {
        "type": "ul",
        "items": [
          "repeated workflow context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "ongoing project facts"
        ]
      },
      {
        "type": "ul",
        "items": [
          "summaries of previous steps"
        ]
      },
      {
        "type": "p",
        "text": "Unhelpful memory often includes:"
      },
      {
        "type": "ul",
        "items": [
          "noisy raw logs with no purpose"
        ]
      },
      {
        "type": "ul",
        "items": [
          "stale details that no longer matter"
        ]
      },
      {
        "type": "ul",
        "items": [
          "every interaction ever recorded"
        ]
      },
      {
        "type": "ul",
        "items": [
          "unreviewed personal information collected without reason"
        ]
      },
      {
        "type": "p",
        "text": "Memory should serve a task."
      },
      {
        "type": "p",
        "text": "It should not exist just because it can."
      },
      {
        "type": "h3",
        "text": "6.3 Context Is Usually the Missing Ingredient"
      },
      {
        "type": "p",
        "text": "Many weak agent results are not caused by a weak model."
      },
      {
        "type": "p",
        "text": "They are caused by missing context."
      },
      {
        "type": "p",
        "text": "Good context may include:"
      },
      {
        "type": "ul",
        "items": [
          "current situation"
        ]
      },
      {
        "type": "ul",
        "items": [
          "previous actions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "constraints"
        ]
      },
      {
        "type": "ul",
        "items": [
          "deadlines"
        ]
      },
      {
        "type": "ul",
        "items": [
          "relevant history"
        ]
      },
      {
        "type": "ul",
        "items": [
          "source documents"
        ]
      },
      {
        "type": "p",
        "text": "Microsoft's agent introduction emphasizes that agents operate on inputs such as prompts, alerts, and messages, and that they use instructions and tools to participate in workflows. It also draws a useful distinction between assistants, which support people, and agents, which complete goals. That helps beginners understand why context matters: an agent cannot complete a goal well if it does not understand the situation around it. [Source note: Microsoft Learn, `Introduction to Agents for Startups`.]"
      },
      {
        "type": "h3",
        "text": "6.4 Context Engineering as a Practical Habit"
      },
      {
        "type": "p",
        "text": "A beginner-friendly way to think about context engineering is this:"
      },
      {
        "type": "p",
        "text": "Prepare the information the agent needs before you expect the agent to behave well."
      },
      {
        "type": "p",
        "text": "That might mean:"
      },
      {
        "type": "ul",
        "items": [
          "saving recurring notes in a reusable structure"
        ]
      },
      {
        "type": "ul",
        "items": [
          "keeping transcripts in a clean folder"
        ]
      },
      {
        "type": "ul",
        "items": [
          "maintaining a current task list"
        ]
      },
      {
        "type": "ul",
        "items": [
          "summarizing previous decisions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "writing a short context block before running a workflow"
        ]
      },
      {
        "type": "p",
        "text": "This is one of the strongest habits a builder can learn."
      },
      {
        "type": "h3",
        "text": "6.5 Tools Should Match the Job"
      },
      {
        "type": "p",
        "text": "The temptation with tools is to keep adding more."
      },
      {
        "type": "p",
        "text": "Resist that temptation."
      },
      {
        "type": "p",
        "text": "The better question is:"
      },
      {
        "type": "p",
        "text": "Which tools make this job possible, and which tools merely make it noisier?"
      },
      {
        "type": "p",
        "text": "A daily planning agent may need:"
      },
      {
        "type": "ul",
        "items": [
          "calendar access"
        ]
      },
      {
        "type": "ul",
        "items": [
          "task list access"
        ]
      },
      {
        "type": "ul",
        "items": [
          "note retrieval"
        ]
      },
      {
        "type": "p",
        "text": "It probably does not need:"
      },
      {
        "type": "ul",
        "items": [
          "shell access"
        ]
      },
      {
        "type": "ul",
        "items": [
          "broad external search"
        ]
      },
      {
        "type": "ul",
        "items": [
          "file deletion capability"
        ]
      },
      {
        "type": "ul",
        "items": [
          "unrestricted write access to multiple systems"
        ]
      },
      {
        "type": "h3",
        "text": "6.6 Guardrails Are a Design Discipline"
      },
      {
        "type": "p",
        "text": "Guardrails are not just a compliance topic."
      },
      {
        "type": "p",
        "text": "They are part of making the agent usable."
      },
      {
        "type": "p",
        "text": "Useful guardrails include:"
      },
      {
        "type": "ul",
        "items": [
          "approval before external actions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "structured outputs"
        ]
      },
      {
        "type": "ul",
        "items": [
          "limited tool permissions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "redaction rules for sensitive data"
        ]
      },
      {
        "type": "ul",
        "items": [
          "escalation rules when confidence is low"
        ]
      },
      {
        "type": "ul",
        "items": [
          "stop conditions when ambiguity is high"
        ]
      },
      {
        "type": "p",
        "text": "OpenAI's safety guidance adds practical tactics beginners should pay attention to: do not place untrusted variables into high-priority system or developer instructions, prefer structured outputs between nodes, keep approvals on for risky tool use, and run evals so you understand how the system behaves. [Source note: OpenAI, `Safety in building agents`.]"
      },
      {
        "type": "h3",
        "text": "6.7 Evaluations Are Not Optional for Serious Use"
      },
      {
        "type": "p",
        "text": "A beginner may not need a giant testing framework on day one."
      },
      {
        "type": "p",
        "text": "But they do need some way to ask:"
      },
      {
        "type": "ul",
        "items": [
          "did the agent do the right thing?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "where did it go wrong?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what patterns of failure are repeating?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "is the workflow getting better?"
        ]
      },
      {
        "type": "p",
        "text": "Even a simple manual review checklist is a form of evaluation."
      },
      {
        "type": "p",
        "text": "Without evaluation, people often confuse novelty with usefulness."
      },
      {
        "type": "h3",
        "text": "6.8 Chapter Summary"
      },
      {
        "type": "p",
        "text": "A capable agent needs more than a model."
      },
      {
        "type": "p",
        "text": "It needs:"
      },
      {
        "type": "ul",
        "items": [
          "the right memory"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the right context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the right tools"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the right guardrails"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the habit of evaluation"
        ]
      },
      {
        "type": "p",
        "text": "Once those pieces exist, the question shifts from construction to use."
      },
      {
        "type": "p",
        "text": "## Part Introduction"
      },
      {
        "type": "p",
        "text": "A technically functional agent is not automatically a successful one."
      },
      {
        "type": "p",
        "text": "Success depends on where the agent is used, how its role is bounded, how it is reviewed, and whether it is truly making life easier rather than more complicated."
      },
      {
        "type": "p",
        "text": "This final part is about the operational side of success."
      },
      {
        "type": "p",
        "text": "It answers questions like:"
      },
      {
        "type": "ul",
        "items": [
          "What jobs are actually good for agents?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "How should people supervise them?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "How do you grow from one agent into a useful system without creating chaos?"
        ]
      }
    ]
  },
  {
    "id": "chapter-7",
    "number": 7,
    "part": "Part III: How to Use Them Successfully",
    "title": "Chapter 7: Choosing the Right Jobs for Agents",
    "summary": "The best jobs for agents tend to be:",
    "blocks": [
      {
        "type": "h3",
        "text": "7.1 The Best Jobs Share a Few Traits"
      },
      {
        "type": "p",
        "text": "The best jobs for agents tend to be:"
      },
      {
        "type": "ul",
        "items": [
          "repeated"
        ]
      },
      {
        "type": "ul",
        "items": [
          "structured enough to describe"
        ]
      },
      {
        "type": "ul",
        "items": [
          "low or moderate risk"
        ]
      },
      {
        "type": "ul",
        "items": [
          "reviewable"
        ]
      },
      {
        "type": "ul",
        "items": [
          "context-rich enough to support"
        ]
      },
      {
        "type": "ul",
        "items": [
          "valuable enough to justify setup"
        ]
      },
      {
        "type": "p",
        "text": "When those traits are present, agents can be genuinely helpful."
      },
      {
        "type": "h3",
        "text": "7.2 Good Use Cases for Beginners"
      },
      {
        "type": "h4",
        "text": "Planning and Review"
      },
      {
        "type": "p",
        "text": "Agents are often good at:"
      },
      {
        "type": "ul",
        "items": [
          "daily planning drafts"
        ]
      },
      {
        "type": "ul",
        "items": [
          "weekly review packets"
        ]
      },
      {
        "type": "ul",
        "items": [
          "open-loop collection"
        ]
      },
      {
        "type": "ul",
        "items": [
          "backlog triage support"
        ]
      },
      {
        "type": "p",
        "text": "Why?"
      },
      {
        "type": "p",
        "text": "Because these tasks are repeated, structured, and easy to review."
      },
      {
        "type": "h4",
        "text": "Meeting and Conversation Support"
      },
      {
        "type": "p",
        "text": "Agents are often good at:"
      },
      {
        "type": "ul",
        "items": [
          "transcript summaries"
        ]
      },
      {
        "type": "ul",
        "items": [
          "action item extraction"
        ]
      },
      {
        "type": "ul",
        "items": [
          "decision logs"
        ]
      },
      {
        "type": "ul",
        "items": [
          "follow-up drafts"
        ]
      },
      {
        "type": "p",
        "text": "Why?"
      },
      {
        "type": "p",
        "text": "Because source material exists and the output can be checked."
      },
      {
        "type": "h4",
        "text": "Routine Communication Preparation"
      },
      {
        "type": "p",
        "text": "Agents are often good at:"
      },
      {
        "type": "ul",
        "items": [
          "first drafts"
        ]
      },
      {
        "type": "ul",
        "items": [
          "options for tone"
        ]
      },
      {
        "type": "ul",
        "items": [
          "response outlines"
        ]
      },
      {
        "type": "ul",
        "items": [
          "follow-up reminders"
        ]
      },
      {
        "type": "p",
        "text": "Why?"
      },
      {
        "type": "p",
        "text": "Because the system is assisting, not making final commitments."
      },
      {
        "type": "h3",
        "text": "7.3 Weak Use Cases for Beginners"
      },
      {
        "type": "p",
        "text": "Weak use cases often include:"
      },
      {
        "type": "ul",
        "items": [
          "high legal or financial consequences"
        ]
      },
      {
        "type": "ul",
        "items": [
          "emotionally delicate decisions with poor context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "open-ended leadership decisions presented as simple automation"
        ]
      },
      {
        "type": "ul",
        "items": [
          "any task where the user will not review the output"
        ]
      },
      {
        "type": "p",
        "text": "If the job has high stakes and low tolerance for error, the threshold for trust should be much higher."
      },
      {
        "type": "h3",
        "text": "7.4 A Helpful Decision Rule"
      },
      {
        "type": "p",
        "text": "Ask this question:"
      },
      {
        "type": "p",
        "text": "If the agent gets this wrong, what happens?"
      },
      {
        "type": "p",
        "text": "If the answer is:"
      },
      {
        "type": "ul",
        "items": [
          "`I lose a few minutes`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`I need to edit the result`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`I postpone the task`"
        ]
      },
      {
        "type": "p",
        "text": "then it may be acceptable as a beginner use case."
      },
      {
        "type": "p",
        "text": "If the answer is:"
      },
      {
        "type": "ul",
        "items": [
          "`someone could be harmed`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`money could move incorrectly`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`trust could break badly`"
        ]
      },
      {
        "type": "ul",
        "items": [
          "`sensitive information could leak`"
        ]
      },
      {
        "type": "p",
        "text": "then the use case needs stronger safeguards or should not be delegated at all."
      },
      {
        "type": "h3",
        "text": "7.5 Chapter Summary"
      },
      {
        "type": "p",
        "text": "Agents do best on jobs that are repeated, bounded, and reviewable."
      },
      {
        "type": "p",
        "text": "A good beginner does not ask, `What can the agent do?`"
      },
      {
        "type": "p",
        "text": "They ask, `Which jobs make sense to give it first?`"
      }
    ]
  },
  {
    "id": "chapter-8",
    "number": 8,
    "part": "Part III: How to Use Them Successfully",
    "title": "Chapter 8: Running Agents Safely in Real Life",
    "summary": "A lot of safety advice sounds abstract until a system touches real information, real calendars, real inboxes, or real records.",
    "blocks": [
      {
        "type": "h3",
        "text": "8.1 Safety Is Operational, Not Theoretical"
      },
      {
        "type": "p",
        "text": "A lot of safety advice sounds abstract until a system touches real information, real calendars, real inboxes, or real records."
      },
      {
        "type": "p",
        "text": "Then safety becomes concrete very quickly."
      },
      {
        "type": "p",
        "text": "Running an agent safely means designing the day-to-day operating rules around it."
      },
      {
        "type": "h3",
        "text": "8.2 Human Review Should Be Intentional"
      },
      {
        "type": "p",
        "text": "A common mistake is saying, `A human will review it,` without defining when or how."
      },
      {
        "type": "p",
        "text": "Better review design asks:"
      },
      {
        "type": "ul",
        "items": [
          "what must always be reviewed?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what only needs spot-checking?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what should require explicit approval?"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what should never happen automatically?"
        ]
      },
      {
        "type": "p",
        "text": "For many real-world beginner systems, a sensible rule is:"
      },
      {
        "type": "p",
        "text": "All external-facing actions require approval."
      },
      {
        "type": "p",
        "text": "That includes:"
      },
      {
        "type": "ul",
        "items": [
          "sending messages"
        ]
      },
      {
        "type": "ul",
        "items": [
          "changing records"
        ]
      },
      {
        "type": "ul",
        "items": [
          "triggering sensitive workflows"
        ]
      },
      {
        "type": "ul",
        "items": [
          "disclosing information"
        ]
      },
      {
        "type": "h3",
        "text": "8.3 Permissions Should Be Narrow"
      },
      {
        "type": "p",
        "text": "Do not give the agent full access to everything just because that feels convenient."
      },
      {
        "type": "p",
        "text": "Start narrow."
      },
      {
        "type": "p",
        "text": "Examples:"
      },
      {
        "type": "ul",
        "items": [
          "read access before write access"
        ]
      },
      {
        "type": "ul",
        "items": [
          "one folder before the whole drive"
        ]
      },
      {
        "type": "ul",
        "items": [
          "one sandbox tool before live production tools"
        ]
      },
      {
        "type": "ul",
        "items": [
          "one approval-gated connector before broad system integration"
        ]
      },
      {
        "type": "p",
        "text": "Microsoft's Windows developer materials describe agent connectors, auditable environments, and isolated workspaces precisely because real agents need controlled environments and traceable actions, not unlimited reach. [Source note: Microsoft Developer, `The secure, open platform for AI and agents`.]"
      },
      {
        "type": "h3",
        "text": "8.4 Logging and Traceability Matter"
      },
      {
        "type": "p",
        "text": "If the agent makes a decision, calls a tool, or produces a high-impact output, you should be able to inspect what happened."
      },
      {
        "type": "p",
        "text": "This does not require enterprise software on day one."
      },
      {
        "type": "p",
        "text": "But it does require some habit of traceability."
      },
      {
        "type": "p",
        "text": "That may mean saving:"
      },
      {
        "type": "ul",
        "items": [
          "prompt inputs"
        ]
      },
      {
        "type": "ul",
        "items": [
          "context blocks"
        ]
      },
      {
        "type": "ul",
        "items": [
          "tool outputs"
        ]
      },
      {
        "type": "ul",
        "items": [
          "approval checkpoints"
        ]
      },
      {
        "type": "ul",
        "items": [
          "final outputs"
        ]
      },
      {
        "type": "ul",
        "items": [
          "corrections made by the human reviewer"
        ]
      },
      {
        "type": "p",
        "text": "Without traceability, mistakes are harder to understand and fix."
      },
      {
        "type": "h3",
        "text": "8.5 Risk Grows with Reach"
      },
      {
        "type": "p",
        "text": "There is a simple pattern worth remembering:"
      },
      {
        "type": "p",
        "text": "the farther the agent can reach, the more carefully it must be controlled."
      },
      {
        "type": "p",
        "text": "A local planning agent is one thing."
      },
      {
        "type": "p",
        "text": "An agent that can read external documents, make live API calls, update records, message users, or act across multiple tools is something else entirely."
      },
      {
        "type": "p",
        "text": "This does not mean you should avoid building such systems forever."
      },
      {
        "type": "p",
        "text": "It means capability should grow more slowly than enthusiasm."
      },
      {
        "type": "h3",
        "text": "8.6 Use a Safety Ladder"
      },
      {
        "type": "p",
        "text": "A practical safety ladder looks like this:"
      },
      {
        "type": "ol",
        "items": [
          "prompt-only support"
        ]
      },
      {
        "type": "ol",
        "items": [
          "structured workflow support"
        ]
      },
      {
        "type": "ol",
        "items": [
          "read-only tool use"
        ]
      },
      {
        "type": "ol",
        "items": [
          "approval-gated actions"
        ]
      },
      {
        "type": "ol",
        "items": [
          "limited autonomous action in low-risk settings"
        ]
      },
      {
        "type": "p",
        "text": "That is a much better path than jumping from simple prompting straight into freeform autonomy."
      },
      {
        "type": "h3",
        "text": "8.7 Chapter Summary"
      },
      {
        "type": "p",
        "text": "Safe real-world use depends on:"
      },
      {
        "type": "ul",
        "items": [
          "deliberate review points"
        ]
      },
      {
        "type": "ul",
        "items": [
          "narrow permissions"
        ]
      },
      {
        "type": "ul",
        "items": [
          "traceability"
        ]
      },
      {
        "type": "ul",
        "items": [
          "gradual capability growth"
        ]
      },
      {
        "type": "ul",
        "items": [
          "caution when reach increases"
        ]
      },
      {
        "type": "p",
        "text": "Those are not secondary concerns."
      },
      {
        "type": "p",
        "text": "They are part of what makes the agent usable at all."
      }
    ]
  },
  {
    "id": "chapter-9",
    "number": 9,
    "part": "Part III: How to Use Them Successfully",
    "title": "Chapter 9: Growing from One Agent to a Useful System",
    "summary": "The most useful agent systems often begin with one narrow workflow that works well.",
    "blocks": [
      {
        "type": "h3",
        "text": "9.1 Success Usually Starts Small"
      },
      {
        "type": "p",
        "text": "The most useful agent systems often begin with one narrow workflow that works well."
      },
      {
        "type": "p",
        "text": "That workflow teaches the builder:"
      },
      {
        "type": "ul",
        "items": [
          "what inputs matter"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what outputs help"
        ]
      },
      {
        "type": "ul",
        "items": [
          "what mistakes repeat"
        ]
      },
      {
        "type": "ul",
        "items": [
          "where review is needed"
        ]
      },
      {
        "type": "ul",
        "items": [
          "how much context is enough"
        ]
      },
      {
        "type": "p",
        "text": "From there, growth becomes more informed."
      },
      {
        "type": "h3",
        "text": "9.2 Add Breadth Slowly"
      },
      {
        "type": "p",
        "text": "Once one workflow works, a second may make sense."
      },
      {
        "type": "p",
        "text": "For example:"
      },
      {
        "type": "ul",
        "items": [
          "daily planning"
        ]
      },
      {
        "type": "ul",
        "items": [
          "then weekly planning"
        ]
      },
      {
        "type": "ul",
        "items": [
          "then meeting follow-up"
        ]
      },
      {
        "type": "ul",
        "items": [
          "then communication preparation"
        ]
      },
      {
        "type": "p",
        "text": "This is better than creating five brittle systems all at once."
      },
      {
        "type": "h3",
        "text": "9.3 Multi-Agent Systems Should Solve a Real Coordination Problem"
      },
      {
        "type": "p",
        "text": "Multiple agents are not automatically a sign of maturity."
      },
      {
        "type": "p",
        "text": "They are useful when different roles truly help."
      },
      {
        "type": "p",
        "text": "Examples:"
      },
      {
        "type": "ul",
        "items": [
          "a coordinator agent that routes work"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a research agent that gathers context"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a draft agent that produces structured output"
        ]
      },
      {
        "type": "ul",
        "items": [
          "a verification agent that checks for policy or format issues"
        ]
      },
      {
        "type": "p",
        "text": "But if one agent can do the job clearly, one agent is usually easier to maintain."
      },
      {
        "type": "h3",
        "text": "9.4 The Real Growth Pattern: From Useful to Trusted"
      },
      {
        "type": "p",
        "text": "A healthy growth pattern often looks like this:"
      },
      {
        "type": "ol",
        "items": [
          "useful once"
        ]
      },
      {
        "type": "ol",
        "items": [
          "useful repeatedly"
        ]
      },
      {
        "type": "ol",
        "items": [
          "reviewable and trustworthy"
        ]
      },
      {
        "type": "ol",
        "items": [
          "integrated into a recurring workflow"
        ]
      },
      {
        "type": "ol",
        "items": [
          "capable of carrying some low-risk work forward"
        ]
      },
      {
        "type": "p",
        "text": "Notice what is missing from that list:"
      },
      {
        "type": "p",
        "text": "`becoming fully autonomous as fast as possible`"
      },
      {
        "type": "p",
        "text": "That is not the growth pattern that matters most."
      },
      {
        "type": "p",
        "text": "Trust and usefulness matter more than theatrical autonomy."
      },
      {
        "type": "h3",
        "text": "9.5 When to Stop Expanding"
      },
      {
        "type": "p",
        "text": "This is an under-discussed skill."
      },
      {
        "type": "p",
        "text": "Sometimes the right move is not to add more."
      },
      {
        "type": "p",
        "text": "Stop expanding when:"
      },
      {
        "type": "ul",
        "items": [
          "review costs more than it saves"
        ]
      },
      {
        "type": "ul",
        "items": [
          "context is too unstable"
        ]
      },
      {
        "type": "ul",
        "items": [
          "permissions would need to grow too much"
        ]
      },
      {
        "type": "ul",
        "items": [
          "mistakes become too hard to understand"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the system adds complexity without real relief"
        ]
      },
      {
        "type": "p",
        "text": "A good builder knows when enough is enough."
      },
      {
        "type": "h3",
        "text": "9.6 A Realistic Long-Term Vision"
      },
      {
        "type": "p",
        "text": "A realistic long-term vision for agentic systems is not `AI runs everything.`"
      },
      {
        "type": "p",
        "text": "A better long-term vision is:"
      },
      {
        "type": "ul",
        "items": [
          "AI supports repeated work well"
        ]
      },
      {
        "type": "ul",
        "items": [
          "context is captured cleanly"
        ]
      },
      {
        "type": "ul",
        "items": [
          "tools are narrow and purposeful"
        ]
      },
      {
        "type": "ul",
        "items": [
          "risky actions stay supervised"
        ]
      },
      {
        "type": "ul",
        "items": [
          "the human has more clarity and less avoidable drag"
        ]
      },
      {
        "type": "p",
        "text": "That is not a small outcome."
      },
      {
        "type": "p",
        "text": "It is a meaningful one."
      },
      {
        "type": "h3",
        "text": "9.7 Final Chapter Summary"
      },
      {
        "type": "p",
        "text": "Growing from one agent to a system should be gradual, practical, and trust-based."
      },
      {
        "type": "p",
        "text": "The sequence is not:"
      },
      {
        "type": "p",
        "text": "more agents, more autonomy, more complexity."
      },
      {
        "type": "p",
        "text": "The healthier sequence is:"
      },
      {
        "type": "p",
        "text": "clearer use case, better context, stronger review, slower expansion, better judgment."
      }
    ]
  }
];
let activeHandbookChapter = 0;

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
      body: "If agents are still new to you, read the handbook first. This view works best after that mental model is in place.",
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
    title: "A tighter library for the files, handbook, and sources that matter most.",
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
            kicker: "Handbook",
            title: "Agentic Agents Beginner Handbook",
            text: "The in-site book mode for understanding agents before you try to use them in cloning systems.",
            href: "#handbook",
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

function renderBookBlocks(blocks) {
  const article = el("article", "book-page__content");
  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (block.type === "h3") {
      article.append(el("h4", "book-heading", block.text));
      continue;
    }
    if (block.type === "h4") {
      article.append(el("h5", "book-subheading", block.text));
      continue;
    }
    if (block.type === "p") {
      article.append(el("p", "book-copy", block.text));
      continue;
    }
    if (block.type === "ul") {
      const list = el("ul", "book-list");
      while (index < blocks.length && blocks[index].type === "ul") {
        blocks[index].items.forEach((item) => list.append(el("li", "", item)));
        index += 1;
      }
      index -= 1;
      article.append(list);
      continue;
    }
    if (block.type === "ol") {
      const list = el("ol", "book-list book-list--ordered");
      while (index < blocks.length && blocks[index].type === "ol") {
        blocks[index].items.forEach((item) => list.append(el("li", "", item)));
        index += 1;
      }
      index -= 1;
      article.append(list);
    }
  }
  return article;
}

function renderBook() {
  const chapter = handbookChapters[activeHandbookChapter];
  const shell = el("div", "book-shell");

  const chapterRail = el("div", "book-chapter-strip");
  handbookChapters.forEach((item, index) => {
    const button = el("button", `book-chapter-button${index === activeHandbookChapter ? " is-active" : ""}`);
    button.type = "button";
    button.innerHTML = `<span>Chapter ${item.number}</span><strong>${item.title.replace(/^Chapter\s+\d+:\s*/, "")}</strong>`;
    button.addEventListener("click", () => {
      activeHandbookChapter = index;
      renderView();
    });
    chapterRail.append(button);
  });
  shell.append(chapterRail);

  const reader = el("div", "book-reader");
  const prev = el("button", `book-arrow${activeHandbookChapter === 0 ? " is-disabled" : ""}`);
  prev.innerHTML = "&larr;";
  prev.type = "button";
  prev.disabled = activeHandbookChapter === 0;
  prev.addEventListener("click", () => {
    if (activeHandbookChapter > 0) {
      activeHandbookChapter -= 1;
      renderView();
    }
  });

  const next = el("button", `book-arrow${activeHandbookChapter === handbookChapters.length - 1 ? " is-disabled" : ""}`);
  next.innerHTML = "&rarr;";
  next.type = "button";
  next.disabled = activeHandbookChapter === handbookChapters.length - 1;
  next.addEventListener("click", () => {
    if (activeHandbookChapter < handbookChapters.length - 1) {
      activeHandbookChapter += 1;
      renderView();
    }
  });

  const page = el("article", "book-page");
  const progress = Math.round(((chapter.number) / handbookChapters.length) * 100);
  page.innerHTML = `
    <div class="book-page__meta">
      <span class="book-page__part">${chapter.part}</span>
      <span class="book-page__counter">Chapter ${chapter.number} of ${handbookChapters.length}</span>
    </div>
    <div class="book-progress" aria-label="Chapter progress">
      <div class="book-progress__bar"><span style="width: ${progress}%"></span></div>
      <strong class="book-progress__label">${progress}% through the handbook</strong>
    </div>
    <div class="book-page__header">
      <h3>${chapter.title}</h3>
      <p class="book-page__summary">${chapter.summary}</p>
    </div>
  `;
  page.append(renderBookBlocks(chapter.blocks));

  reader.append(prev, page, next);
  shell.append(reader);
  return shell;
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
  if (section.layout === "book") node.append(renderBook());

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
  if (key === "handbook" && activeView !== "handbook") activeHandbookChapter = 0;
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

window.addEventListener("keydown", (event) => {
  if (activeView !== "handbook") return;
  if (event.key === "ArrowLeft" && activeHandbookChapter > 0) {
    activeHandbookChapter -= 1;
    renderView();
  }
  if (event.key === "ArrowRight" && activeHandbookChapter < handbookChapters.length - 1) {
    activeHandbookChapter += 1;
    renderView();
  }
});

renderView();


