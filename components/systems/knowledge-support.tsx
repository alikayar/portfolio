import Image from "next/image";
import SystemSection from "@/components/systems/system-section";

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
        <figure className="relative h-[400px] w-full overflow-hidden bg-transparent sm:h-[500px] lg:h-[680px]">
          <figcaption className="sr-only">Knowledge support system flow</figcaption>
          <Image
            alt=""
            aria-hidden
            className="object-contain object-center lg:object-right"
            fill
            src="/diagrams/knowledge-support.svg"
            sizes="(min-width: 1024px) 65vw, 100vw"
          />
        </figure>
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
      title="Knowledge Support Automation"
    />
  );
}
