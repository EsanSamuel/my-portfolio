export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  features: string[];
  problem: string;
  approach: string;
  live?: string;
  github?: string;
  repositories?: { name: string; url: string }[];
  sourcePrivate?: boolean;
  workflowTitle?: string;
  workflow?: string[];
};

export const projects: Project[] = [
  {
    id: "afterword", name: "Afterword (Techyz)", category: "MEETING INTELLIGENCE · FLAGSHIP",
    description: "A local-first meeting intelligence platform with a notetaker bot that joins online meetings and turns conversations into searchable transcripts, decisions, and next steps.",
    stack: ["Go", "Python", "PostgreSQL", "pgvector", "Whisper", "pyannote.audio", "Ollama", "Google Gemini", "React", "TypeScript", "Wails", "FFmpeg"],
    features: ["Invite a notetaker bot to join and capture Google Meet, Microsoft Teams, or Zoom meetings", "Local speech recognition with Whisper models", "Machine-learning speaker diarization with pyannote.audio and single-speaker fallback", "Time-aligned transcript segments attributed to speakers", "Generate summaries, decisions, and action items with a local Ollama LLM, with Google Gemini as an option", "384-dimensional vector embeddings with pgvector for semantic search and question answering", "Privacy-focused local inference, organization-scoped data, HttpOnly sessions, and role-based access"],
    problem: "Meeting recordings hold useful context, but finding a decision or remembering who owns a task means replaying and manually sorting through long conversations.",
    approach: "A notetaker bot can join a supported online meeting and capture the conversation; recordings can also be imported. Whisper handles local speech recognition, while pyannote.audio machine-learning models identify speakers and align them with transcript segments. A local Ollama LLM can produce summaries, decisions, and action items, with Google Gemini available as an alternate provider. pgvector embeddings make meeting history searchable with semantic retrieval and question answering.",
    sourcePrivate: true,
    workflowTitle: "From live meeting to searchable knowledge",
    workflow: ["Bot joins meeting", "Capture or import audio", "Whisper transcription", "pyannote diarization", "Local LLM insights", "Embeddings & search"],
  },
  {
    id: "jobsmart", name: "JobSmart", category: "AI · CAREER TECHNOLOGY",
    description: "An AI-powered job discovery platform that helps people find relevant roles through profile-aware matching and semantic recommendations.",
    stack: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Google Gemini", "Redis", "BullMQ", "Socket.IO"],
    features: ["AI-powered job matching", "Compatibility scoring", "Personalized recommendations", "Embedding-based semantic matching", "Job seeker and company workflows"],
    problem: "Keyword-based search can miss relevant roles when a candidate’s experience and an employer’s wording don’t line up exactly.",
    approach: "JobSmart uses profile-aware AI and embedding-based similarity to make job discovery more personalized. The application includes job seeker and company experiences; its frontend and backend stacks were verified in the available source repositories.",
    live: "https://jobsmart-two.vercel.app/",
    repositories: [
      { name: "Frontend", url: "https://github.com/EsanSamuel/JobSmart-Frontend" },
      { name: "Backend", url: "https://github.com/EsanSamuel/JobSmart-Backend" },
    ],
  },
  {
    id: "sensory", name: "Sensory", category: "OBSERVABILITY · DEVELOPER INFRASTRUCTURE",
    description: "An application infrastructure tool combining real-time log monitoring with reverse proxy functionality.",
    stack: ["Go", "MongoDB", "Redis", "Gin"],
    features: ["Real-time application log streaming", "Structured log levels", "File, function, and line-level source context", "Centralized visibility for debugging production issues", "Reverse proxy functionality"],
    problem: "When application behavior is spread across services and environments, the context needed to understand an issue is easy to lose.",
    approach: "Sensory brings structured logs into one dashboard, preserves source-level context for investigation, and also provides reverse proxy functionality.",
    live: "https://sensory-frontend.vercel.app/",
    repositories: [
      { name: "Sensory", url: "https://github.com/EsanSamuel/sensory" },
      { name: "Reverse proxy", url: "https://github.com/EsanSamuel/sensory-reverse-proxy" },
    ],
  },
  {
    id: "synccorp", name: "SyncCorp", category: "TEAM MANAGEMENT · COLLABORATION",
    description: "A team management platform for creating workspaces, inviting members, assigning tasks, and tracking team progress.",
    stack: [],
    features: ["Create team workspaces", "Invite members to collaborate", "Create projects and assign tasks", "Track task status in table and Kanban views", "Review workspace and project progress"],
    problem: "Teams need a shared space to organize projects, coordinate ownership, and understand progress without losing track of individual tasks.",
    approach: "SyncCorp organizes collaboration around workspaces, projects, members, and tasks, with both table and Kanban views for following work through to completion.",
    live: "https://synccorp.vercel.app/",
  },
  {
    id: "hls-transcoder", name: "Go HLS Transcoder", category: "VIDEO INFRASTRUCTURE · API",
    description: "A Go video-processing API that prepares uploaded videos for HLS playback, extracts a preview image, and generates a transcript with AssemblyAI.",
    stack: ["Go", "FFmpeg", "AssemblyAI", "HLS", "S3-compatible storage"],
    features: ["Save uploaded videos to the local uploads directory", "Concatenate each upload with the test trademark clip", "Extract a thumbnail snapshot at a customizable timestamp", "Extract audio from the combined video", "Transcribe audio through AssemblyAI", "Generate HLS playlists and segments at multiple quality levels", "Optionally upload generated HLS output to S3-compatible storage when AWS settings are configured"],
    problem: "A video upload needs to move through preparation, preview generation, transcription, and HLS packaging before it can be served as a stream.",
    approach: "The server saves each upload locally, appends the test trademark video, extracts a thumbnail at a customizable timestamp and the audio, then sends the audio to AssemblyAI. It generates HLS playlists and segments at multiple quality levels, with an optional S3-compatible upload when AWS settings are present.",
    github: "https://github.com/EsanSamuel/go-hls-transcoder",
    workflowTitle: "Transcoding flow",
    workflow: ["Save upload", "Append trademark clip", "Customizable thumbnail", "Extract audio", "AssemblyAI transcript", "Generate HLS variants", "Optional S3 upload"],
  },
  {
    id: "payment-infra", name: "Go Payment Infrastructure", category: "FINTECH · BACKEND API",
    description: "A Go fintech backend that models core banking operations with transactional transfers, scheduled payroll, and double-entry ledger accounting.",
    stack: ["Go", "PostgreSQL", "Background jobs"],
    features: ["Secure money transfer flows", "Scheduled payroll processing", "Double-entry ledger accounting", "PostgreSQL transactions with row-level locking", "Idempotency for reliable request handling", "Background job scheduling"],
    problem: "Payment operations need consistent ledger state under concurrent requests, while scheduled work must run reliably and avoid duplicate processing.",
    approach: "The service combines PostgreSQL transactions, row-level locks, idempotency, double-entry accounting, and scheduled background jobs to handle payment and payroll workflows safely under concurrency.",
    github: "https://github.com/EsanSamuel/Go-Payment-Infrastructure",
    workflowTitle: "Payment flow",
    workflow: ["API request", "Idempotency", "Transaction + row lock", "Double-entry ledger", "Scheduled jobs"],
  },
];
