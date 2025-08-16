import { PropsWithChildren } from "react";

export default function Section({ id, title, children }: PropsWithChildren<{ id?: string; title?: string }>) {
  return (
    <section id={id} className="section py-16 md:py-24">
      {title && <h2 className="text-3xl md:text-4xl font-semibold mb-8">{title}</h2>}
      {children}
    </section>
  );
}
