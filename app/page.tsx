import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects-data";

const skillGroups = [
  { label: "LANGUAGES", items: ["Go", "Python", "TypeScript", "JavaScript"] },
  { label: "SOFTWARE ENGINEERING", items: ["Backend development", "API design", "Software architecture", "Database design", "Maintainable code", "Debugging"] },
  { label: "BACKEND & DATA", items: ["REST APIs", "PostgreSQL", "pgvector", "MongoDB", "Redis", "Authentication", "Background processing"] },
  { label: "AI SYSTEMS", items: ["Whisper", "Speaker diarization", "Vector embeddings", "Semantic search", "RAG", "Local inference", "LLM integrations"] },
  { label: "SYSTEMS", items: ["Docker", "Linux", "FFmpeg", "Networking", "Virtualization", "Git"] },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "↗"}</span>;
}

function ProjectArtwork({ id, name }: { id: string; name: string }) {
  if (["jobsmart", "sensory", "afterword", "synccorp"].includes(id)) {
    const src = id === "jobsmart" ? "/jobsmart-ui-3.png" : id === "sensory" ? "/sensory-landing-page.png" : id === "afterword" ? "/afterword-dashboard.png" : "/synccorp-dashboard.png";
    return <div className={`home-project-image ${id}`}><Image src={src} alt={`${name} application interface`} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>;
  }
  return <div className={`home-artwork api-art ${id}`}><span className="api-art-label">{id === "hls-transcoder" ? "MEDIA PIPELINE" : "PAYMENT FLOW"}</span><div className="api-art-flow">{projects.find(p=>p.id===id)?.workflow?.map((step,i)=><span key={step}>{step}{i<((projects.find(p=>p.id===id)?.workflow?.length??0)-1)&&<b>→</b>}</span>)}</div><span className="api-art-mark">{id === "hls-transcoder" ? "HLS / 144—1080P" : "LEDGER / POSTGRESQL"}</span></div>;
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return <article className={`home-project-card home-project-${project.id}`}>
    <Link className="home-project-art-link" href={`/projects/${project.id}`} aria-label={`View ${project.name} project details`}><ProjectArtwork id={project.id} name={project.name} /><span className="art-open">View project ↗</span></Link>
    <div className="home-project-info"><div className="home-project-meta"><span>0{index + 1}</span><span>{project.category.replace(" · ", "  /  ")}</span></div><Link href={`/projects/${project.id}`} className="home-project-title"><h3>{project.name}</h3><Arrow /></Link><p>{project.description}</p><div className="home-project-tags">{project.stack.slice(0,4).map(item=><span key={item}>{item}</span>)}</div></div>
  </article>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#top">Skip to content</a>
    <header className="site-header portfolio-header"><Link className="wordmark" href="#top" aria-label="Esan Samuel, home">ES<span>.</span></Link><nav aria-label="Main navigation"><Link href="#top">Home</Link><Link href="#about">About</Link><Link href="#work">Work</Link><Link href="#experience">Experience</Link></nav><div className="header-socials"><a href="https://github.com/EsanSamuel" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://drive.google.com/file/d/1Zz6gPfGZm9cJQ2LIfDv4a9VY8wiCzu47/view?usp=drive_link" target="_blank" rel="noreferrer">Resume <Arrow /></a></div></header>
    <main id="top">
      <section className="personal-hero shell"><div className="hero-intro"><span className="hero-hello">HEY, I’M SAMUEL <i>✳</i></span><h1>Backend &amp; AI<br /><em>Engineer</em></h1><p>I build thoughtful software, reliable backend systems, and practical AI products.</p><div className="hero-buttons"><a className="personal-button" href="#work">See selected work <Arrow /></a><a className="personal-text-link" href="mailto:esansamuel555@gmail.com">Let’s talk <Arrow /></a></div></div><div className="hero-profile"><div className="profile-orbit orbit-one"/><div className="profile-orbit orbit-two"/><div className="profile-monogram">ES<span>.</span></div><span className="profile-caption">LAGOS, NIGERIA<br />AVAILABLE FOR OPPORTUNITIES</span><span className="profile-spark">✳</span></div><div className="hero-bottomline"><span>SOFTWARE · AI · INFRASTRUCTURE</span><a href="#about">A little about me <Arrow /></a><span>SCROLL TO EXPLORE ↓</span></div></section>

      <section className="personal-about" id="about"><div className="shell personal-about-grid"><div><span className="personal-eyebrow">A LITTLE ABOUT ME</span><h2>Curious by nature.<br /><em>Builder by choice.</em></h2></div><div><p className="about-lede">I’m Samuel, a Nigerian Backend &amp; AI Engineer who enjoys understanding how software works end to end.</p><p>I work across backend applications, AI-powered products, and the infrastructure that supports them. I’m especially interested in system design, data, local AI, and making complex systems dependable and clear to use.</p><a className="personal-text-link" href="https://www.linkedin.com/in/samuel-esan-139b05267" target="_blank" rel="noreferrer">More about my work <Arrow /></a></div></div></section>

      <section className="personal-work" id="work"><div className="shell"><div className="personal-section-heading"><div><span className="personal-eyebrow">A FEW THINGS I’VE BEEN BUILDING</span><h2>Selected <em>work</em></h2></div><p>Software shaped by real problems, from meeting intelligence to the infrastructure behind reliable services.</p></div><div className="home-project-grid">{projects.map((project,index)=><ProjectCard key={project.id} project={project} index={index}/>)}</div><div className="work-footnote"><span>MORE CODE &amp; EXPERIMENTS</span><a href="https://github.com/EsanSamuel" target="_blank" rel="noreferrer">Find me on GitHub <Arrow /></a></div></div></section>

      <section className="personal-experience" id="experience"><div className="shell"><div className="personal-section-heading"><div><span className="personal-eyebrow">WHERE I’VE CONTRIBUTED</span><h2>Work <em>experience</em></h2></div><p>Different environments, shared focus: making the underlying software work well.</p></div><div className="personal-timeline"><article><span>FEB — MAY 2026</span><div><h3>Backend Developer</h3><small>AIKi</small></div><p>Contributed to backend development for a productivity application, including API development and application functionality.</p></article><article><span>SOFTWARE · AI · INFRASTRUCTURE</span><div><h3>Software, AI &amp; Infrastructure</h3><small>Techyz Limited</small></div><p>Developing software and AI engineering skills in backend development, API design, database fundamentals, applied AI, and maintainable code alongside practical infrastructure experience.</p></article></div></div></section>

      <section className="personal-toolkit"><div className="shell toolkit-grid"><div><span className="personal-eyebrow">WHAT I WORK WITH</span><h2>Tools follow<br /><em>the problem.</em></h2><p>A practical toolkit shaped by the systems I build.</p></div><div className="toolkit-list">{skillGroups.map((group,index)=><div key={group.label}><span>0{index+1} / {group.label}</span><p>{group.items.join(" · ")}</p></div>)}</div></div></section>

      <section className="personal-contact" id="contact"><div className="shell contact-wrap"><span className="personal-eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s make<br /><em>something useful.</em></h2><p>I’m available for remote engineering opportunities and thoughtful technical collaborations.</p><a className="contact-email" href="mailto:esansamuel555@gmail.com">esansamuel555@gmail.com <Arrow /></a><div className="contact-socials"><a href="https://github.com/EsanSamuel" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/samuel-esan-139b05267" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://drive.google.com/file/d/1Zz6gPfGZm9cJQ2LIfDv4a9VY8wiCzu47/view?usp=drive_link" target="_blank" rel="noreferrer">Resume ↗</a></div></div><footer className="shell personal-footer"><Link className="wordmark" href="#top">ES<span>.</span></Link><span>ESAN SAMUEL · BACKEND &amp; AI ENGINEER</span><span>© 2026</span></footer></section>
    </main>
  </>;
}
