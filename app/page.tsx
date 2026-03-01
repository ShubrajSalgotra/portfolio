import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Badge from "../components/Badge";
import { projects } from "../data/data.projects";
import { experience } from "../data/data.experience";
import { skills } from "../data/data.skills";
import { SITE } from "../site.config";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm tracking-wider text-white/60">Based in {SITE.location}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {SITE.name}
            </h1>
            <p className="text-xl text-white/80">{SITE.role}</p>
            <p className="text-white/70">{SITE.headline}</p>
            <div className="flex gap-3 pt-2">
              <a href="#contact" className="btn btn-primary">Work with me</a>
              <a href="/Shubraj-Resume.pdf" className="btn btn-ghost">Download Resume</a>
            </div>
          </div>
          <div className="card">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-brand/30 to-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl">🤖</div>
                <p className="mt-3 text-white/70">AI • Full‑Stack • Data</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "BigQuery", "Firebase", "OpenAI"].map(s => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Selected Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.company} className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{e.role} — <span className="text-white/80">{e.company}</span></h3>
                </div>
                <p className="text-white/60">{e.period}</p>
              </div>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-white/80">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="text-lg font-semibold mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">{skills.languages.map(s => <Badge key={s}>{s}</Badge>)}</div>
          </div>
          <div className="card">
            <h4 className="text-lg font-semibold mb-3">Frontend</h4>
            <div className="flex flex-wrap gap-2">{skills.frontend.map(s => <Badge key={s}>{s}</Badge>)}</div>
          </div>
          <div className="card">
            <h4 className="text-lg font-semibold mb-3">Backend & Tools</h4>
            <div className="flex flex-wrap gap-2">{[...skills.backend, ...skills.tools].map(s => <Badge key={s}>{s}</Badge>)}</div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="card">
          <p className="text-white/80">Want to collaborate or hire me for a project? Email me directly or reach out on LinkedIn.</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a className="btn btn-primary" href={`mailto:${SITE.email}`}>Email {SITE.name.split(' ')[0]}</a>
            <a className="btn btn-ghost" href={SITE.socials.linkedin} target="_blank">Connect on LinkedIn</a>
          </div>
        </div>
      </Section>
    </>
  );
}
