import Link from "next/link";
import { journeyGoals } from "../../data/data.journey";
import Section from "../../components/Section";
import Badge from "../../components/Badge";

export default function JourneyPage() {
  return (
    <>
      <Section id="journey" title="My Journey">
        <div className="grid md:grid-cols-2 gap-6">
          {journeyGoals.map((goal) => (
            <Link key={goal.id} href={`/journey/${goal.slug}`} className="block card hover:-translate-y-1 transition will-change-transform">
              <div className="flex flex-col gap-4">
                <div className="text-4xl">{goal.icon}</div>
                <h3 className="text-xl font-semibold">{goal.title}</h3>
                <p className="text-white/70">{goal.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge>{goal.steps.length} Steps</Badge>
                  {goal.steps.some(s => s.status === 'current') && <Badge>In Progress</Badge>}
                  {goal.steps.every(s => s.status === 'completed') && <Badge>Completed</Badge>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}