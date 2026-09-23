import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import { contact } from "@/content/contact";

const links = [
  { label: "Email", href: `mailto:${contact.email}` },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "GitHub", href: contact.github },
  { label: "Instagram", href: contact.instagram },
  { label: "WhatsApp", href: contact.whatsapp },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-section flex scroll-mt-24 items-center border-t border-obsidian/15 py-20"
    >
      <Container>
        <Reveal>
          <SectionHeading title="Contact" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="max-w-xl text-lg leading-relaxed text-obsidian/80">
            Working on a product, a realtime system, or a mobile experience?
            Let&apos;s talk about building software people can actually feel.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel={l.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="rounded-sm border border-obsidian/30 px-5 py-2.5 font-mono text-sm text-obsidian transition-colors hover:border-terracotta hover:text-terracotta"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10">
            <a
              href="/pdf/deck"
              className="inline-flex items-center gap-2 rounded-sm bg-terracotta px-6 py-3 font-mono text-sm font-medium text-ivory transition-colors hover:bg-obsidian"
            >
              DOWNLOAD PORTFOLIO PDF
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
