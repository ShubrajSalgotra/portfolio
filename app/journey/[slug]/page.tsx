import { journeyGoals } from "../../../data/data.journey";
import Section from "../../../components/Section";
import Badge from "../../../components/Badge";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function GoalDetailPage({ params }: Props) {
    const { slug } = await params;
    const goal = journeyGoals.find(g => g.slug === slug);

    if (!goal) return (
        <Section>
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold mb-4">Goal not found</h1>
                <Link href="/journey" className="btn btn-primary">Back to Journey</Link>
            </div>
        </Section>
    );

    return (
        <>
            <Section>
                <div className="mb-6">
                    <Link href="/journey" className="text-white/60 hover:text-white transition inline-flex items-center gap-2">
                        ← Back to Journey
                    </Link>
                </div>
                <div className="space-y-6 mb-12">
                    <div className="text-6xl mb-4">{goal.icon}</div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight flex items-center gap-4">
                        {goal.title}
                    </h1>
                    <p className="text-xl text-white/70">{goal.description}</p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Roadmap</h2>
                    <div className="space-y-6 border-l-2 border-brand/30 ml-3 pl-8 relative">
                        {goal.steps.map((step) => (
                            <div key={step.id} className="relative">
                                {/* Timeline dot */}
                                <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#0a0a0a] ${step.status === 'completed' ? 'bg-green-500' :
                                        step.status === 'current' ? 'bg-brand' : 'bg-white/20'
                                    }`}></div>

                                <div className="card">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                                        <h3 className="text-xl font-semibold">{step.title}</h3>
                                        <div className="flex gap-2">
                                            <span className={`text-sm px-2 py-1 rounded-full ${step.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                                    step.status === 'current' ? 'bg-brand/20 text-brand' : 'bg-white/10 text-white/50'
                                                }`}>
                                                {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-white/70 mb-4">{step.description}</p>
                                    {step.topics && step.topics.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {step.topics.map(topic => (
                                                <Badge key={topic}>{topic}</Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}