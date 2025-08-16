import { SITE } from "../site.config";

export default function Footer() {
  return (
    <footer className="section py-12 text-sm text-white/60">
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={SITE.socials.github} target="_blank" className="hover:text-white">GitHub</a>
          <a href={SITE.socials.linkedin} target="_blank" className="hover:text-white">LinkedIn</a>
          <a href={SITE.socials.x} target="_blank" className="hover:text-white">X</a>
          <a href={`mailto:${SITE.email}`} className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
