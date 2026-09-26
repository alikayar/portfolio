import SystemDiagram from "@/app/_components/home/systems/system-diagram";
import SystemSection from "@/app/_components/home/sections/system-section";

const stack = [
  { icon: "/icons/openai.svg", label: "OpenAI" },
  { icon: "/icons/redis.svg", label: "Redis" },
  { icon: "/icons/postgresql.svg", label: "pgvector" },
  { icon: "/icons/typescript.svg", label: "TypeScript" },
  { icon: "/icons/nodedotjs.svg", label: "Node.js" },
  { icon: "/icons/websocket.svg", label: "WebSocket" },
];

export default function KnowledgeSupport() {
  return (
    <SystemSection
      diagram={
        <SystemDiagram
          description="Knowledge support system flow"
          height={1212}
          src="/diagrams/knowledge-support.svg"
          width={707}
        />
      }
      impactItems={[
        {
          value: "~90%",
          label: "Lower recurring support costs",
        },
        {
          value: "24/7",
          label: "Automated first-line support",
        },
        {
          value: "Lower Load",
          label: "Reduced routine support workload",
        },
      ]}
      problem={[
        "The existing third-party chatbot lacked sufficient company context and required an ongoing subscription.",
        "The support team struggled to keep up with incoming requests during high-volume periods.",
        "Visitors often had to wait for an available agent, even for common questions.",
      ]}
      solution={[
        "Collected, normalized, and indexed company content to build a retrieval-augmented support system.",
        "Integrated existing authentication mechanisms to identify returning users and preserve conversation context.",
        "Automated first-line support while keeping human escalation available when needed.",
      ]}
      stack={stack}
      title="Knowledge Support System"
    />
  );
}
