"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <div className="mobile-menu">
    <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu-panel" onClick={() => setOpen(!open)}>
      <span>{open ? "Close" : "Menu"}</span><i className={open ? "menu-icon is-open" : "menu-icon"} aria-hidden="true"><b/><b/></i>
    </button>
    {open && <div className="mobile-menu-panel" id="mobile-menu-panel">
      <span className="mobile-menu-label">EXPLORE</span>
      <nav aria-label="Mobile navigation">
        <Link href="#top" onClick={close}>Home <span>01</span></Link>
        <Link href="#about" onClick={close}>About <span>02</span></Link>
        <Link href="#work" onClick={close}>Selected work <span>03</span></Link>
        <Link href="#experience" onClick={close}>Experience <span>04</span></Link>
        <Link href="#contact" onClick={close}>Contact <span>05</span></Link>
      </nav>
      <div className="mobile-menu-socials">
        <a href="https://github.com/EsanSamuel" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://drive.google.com/file/d/1Zz6gPfGZm9cJQ2LIfDv4a9VY8wiCzu47/view?usp=drive_link" target="_blank" rel="noreferrer">Resume ↗</a>
      </div>
    </div>}
  </div>;
}
