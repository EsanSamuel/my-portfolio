import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../projects-data";

const galleries: Record<string, { src: string; title: string; alt: string }[]> = {
  synccorp: [
    { src: "/synccorp-dashboard.png", title: "Workspace dashboard", alt: "SyncCorp workspace dashboard with project and task overview and recent projects." },
    { src: "/synccorp-tasks-table.png", title: "Task list", alt: "SyncCorp task table with status, priority, assignees, due dates, and projects." },
    { src: "/synccorp-tasks-kanban.png", title: "Kanban board", alt: "SyncCorp Kanban board showing tasks organized by workflow status." },
    { src: "/synccorp-task-detail.png", title: "Task details", alt: "SyncCorp task detail page with assignee, due date, status, description, and discussion." },
    { src: "/synccorp-members.png", title: "Workspace members", alt: "SyncCorp workspace membership and invite management screen; invite link has been hidden." },
  ],
  afterword: [
    { src: "/afterword-dashboard.png", title: "Meeting workspace", alt: "Techyz meeting notetaker home with recent conversations and meeting actions." },
    { src: "/afterword-meeting-detail.png", title: "Conversation and meeting notes", alt: "Meeting detail page with transcript, summary, decisions, participants, and action items." },
    { src: "/afterword-notetaker-invite.png", title: "Invite a notetaker", alt: "Dialog for inviting a meeting notetaker to Google Meet, Microsoft Teams, or Zoom." },
  ],
  jobsmart: [
    { src: "/jobsmart-ui-3.png", title: "Find jobs", alt: "JobSmart job search dashboard with open roles and job details." },
    { src: "/jobsmart-saved-jobs.png", title: "Saved jobs", alt: "JobSmart saved jobs page with application statistics." },
    { src: "/jobsmart-ai-matches.png", title: "AI matches", alt: "JobSmart recommended jobs ranked by AI match." },
    { src: "/jobsmart-compatibility-upload.png", title: "Resume compatibility", alt: "JobSmart resume upload and profile resume options." },
    { src: "/jobsmart-compatibility-result.png", title: "Match analysis", alt: "JobSmart compatibility score and AI summary." },
  ],
  sensory: [
    { src: "/sensory-landing-page.png", title: "Sensory landing page", alt: "Sensory landing page introducing the log monitoring and infrastructure platform." },
    { src: "/sensory-dashboard.png", title: "Dashboard overview", alt: "Sensory dashboard with log totals, error and warning events, activity chart, and filters." },
    { src: "/sensory-logs.png", title: "Logs", alt: "Sensory log search, severity filters, and application log rows." },
    { src: "/sensory-projects.png", title: "Projects", alt: "Sensory projects dashboard showing monitored projects." },
    { src: "/sensory-reverse-proxy.png", title: "Reverse proxy", alt: "Sensory reverse proxy route configuration and request metrics." },
  ],
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.id === slug);
  const previous = projects[(index + projects.length - 1) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const gallery = galleries[project.id] ?? [];

  return <main className="project-page">
    <header className="project-page-header"><Link className="wordmark" href="/#top" aria-label="Esan Samuel, home">ES<span>.</span></Link><Link className="back-link" href="/#work">← All projects</Link><a href="mailto:esansamuel555@gmail.com" className="project-contact-link">Get in touch ↗</a></header>
    <section className="project-detail-hero"><div className="project-detail-shell"><div className="project-breadcrumb"><Link href="/#top">HOME</Link><span>/</span><Link href="/#work">WORK</Link><span>/</span><span>{project.name.toUpperCase()}</span></div><div className="project-detail-title-row"><div><span className="personal-eyebrow">PROJECT 0{index + 1} · {project.category}</span><h1>{project.name}<span>.</span></h1></div><div className="project-detail-actions">{project.live && <a className="detail-primary-link" href={project.live} target="_blank" rel="noreferrer">Visit live project ↗</a>}{project.github && <a className="detail-secondary-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.repositories?.map((repo)=><a className="detail-secondary-link" href={repo.url} key={repo.url} target="_blank" rel="noreferrer">{repo.name} ↗</a>)}{project.sourcePrivate && <span className="private-source-label">PRIVATE PROJECT</span>}</div></div><p className="project-detail-lede">{project.description}</p>{project.stack.length > 0 && <div className="detail-tags">{project.stack.map((item)=><span key={item}>{item}</span>)}</div>}</div></section>
    <section className="project-detail-content project-detail-shell">
      {gallery.length > 0 ? <div className="detail-gallery">{gallery.map((screen,index)=><figure className={index === 0 ? "gallery-feature" : ""} key={screen.src}><div className="gallery-image"><Image src={screen.src} alt={screen.alt} fill sizes={index===0?"(max-width: 800px) 100vw, 1100px":"(max-width: 800px) 100vw, 540px"}/></div><figcaption><span>0{index+1}</span>{screen.title}</figcaption></figure>)}</div> : <div className={`detail-process-art ${project.id}`}><span>{project.workflowTitle ?? "SYSTEM OVERVIEW"}</span><div>{(project.workflow ?? ["Recording", "Transcription", "Speaker alignment", "Meeting intelligence", "Searchable context"]).map((step,i)=><div key={step}><i>0{i+1}</i><b>{step}</b>{i < (project.workflow?.length ?? 5)-1 && <span>→</span>}</div>)}</div><small>{project.id === "afterword" ? "LOCAL-FIRST MEETING INTELLIGENCE" : "API · BACKEND SYSTEM"}</small></div>}
      <div className="detail-story-grid"><section><span className="personal-eyebrow">THE CHALLENGE</span><h2>Why this<br/><em>needed to exist.</em></h2><p>{project.problem}</p></section><section><span className="personal-eyebrow">THE APPROACH</span><h2>Designed around<br/><em>the real work.</em></h2><p>{project.approach}</p></section></div>
      <section className="detail-features"><div><span className="personal-eyebrow">A CLOSER LOOK</span><h2>What it <em>does</em></h2></div><ul>{project.features.map((feature,i)=><li key={feature}><span>0{i+1}</span>{feature}</li>)}</ul></section>
      {project.workflow && <section className="detail-workflow"><span className="personal-eyebrow">UNDER THE HOOD</span><h2>{project.workflowTitle}</h2><div>{project.workflow.map((step,i)=><article key={step}><span>0{i+1}</span><b>{step}</b>{i<project.workflow!.length-1&&<i>→</i>}</article>)}</div></section>}
      {project.sourcePrivate && <p className="detail-private-note">The source repository is private. This page shares the product concept and engineering approach without exposing source code.</p>}
      <nav className="project-pagination" aria-label="Other projects"><Link href={`/projects/${previous.id}`}><span>PREVIOUS PROJECT</span><b>← {previous.name}</b></Link><Link href={`/projects/${next.id}`}><span>NEXT PROJECT</span><b>{next.name} →</b></Link></nav>
    </section>
    <footer className="project-page-footer"><Link className="wordmark" href="/#top">ES<span>.</span></Link><span>ESAN SAMUEL · SELECTED WORK</span><Link href="/#contact">Say hello ↗</Link></footer>
  </main>;
}
