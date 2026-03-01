type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  topics: string[];

};

export type Goal = {
  id: string;
  title: string;
  slug: string; // e.g., "road-to-40lpa" for the URL
  description: string;
  icon: string;
  steps: RoadmapStep[];
};

export const journeyGoals: Goal[] = [
  {
    id: '40lpa',
    title: 'Road to 40LPA',
    slug: 'road-to-40lpa',
    description: 'Mastering AI systems, LLMs, RAG, and modern data engineering to reach the next level of impact',
    icon: '🚀',
    steps: [
      // =========================
      // PHASE 1 — Foundations (Month 1–3)
      // =========================

      {
        id: 'm1-1',
        title: 'Advanced Python – Production Level',
        status: 'current',
        topics: [
          'Deep OOP principles',
          'Decorators',
          'Context managers',
          'Async programming (async/await)',
          'Logging & error handling',
          'Packaging & project structure',
          'Writing modular scalable code',
          'Virtual environments',
          'Dependency management with pip & poetry'
        ],
        description: 'Master Python at production level for building scalable AI backends.'
      },

      {
        id: 'm1-2',
        title: 'Data Modeling & Warehousing',
        status: 'upcoming',
        topics: [
          'OLTP vs OLAP',
          'Star schema',
          'Snowflake schema',
          'Fact & dimension tables',
          'Partitioning & clustering',
          'Data normalization vs denormalization'
        ],
        description: 'Build strong understanding of warehouse architecture for AI-ready data systems.'
      },

      {
        id: 'm2-1',
        title: 'BigQuery – Advanced SQL',
        status: 'upcoming',
        topics: [
          'Window functions',
          'Performance optimization',
          'Partitioning strategies',
          'Clustering techniques',
          'Query cost optimization',
          'Complex joins & aggregations'
        ],
        description: 'Deep dive into scalable analytics and performance-focused SQL.'
      },

      {
        id: 'm2-2',
        title: 'System Design Fundamentals',
        status: 'upcoming',
        topics: [
          'Scalability basics',
          'Load balancing',
          'Caching strategies',
          'Rate limiting',
          'API architecture',
          'Microservices vs monolith',
          'Message queues basics'
        ],
        description: 'Learn how large-scale systems are designed and optimized.'
      },

      {
        id: 'm3-1',
        title: 'ETL / ELT Pipelines',
        status: 'upcoming',
        topics: [
          'Batch processing',
          'Streaming basics',
          'Data ingestion patterns',
          'Data validation',
          'Pipeline monitoring',
          'Error handling in pipelines'
        ],
        description: 'Design reliable data pipelines that feed AI systems.'
      },

      // =========================
      // PHASE 2 — AI Systems Core (Month 4–6)
      // =========================

      {
        id: 'm4-1',
        title: 'LLM Architecture & Internals',
        status: 'upcoming',
        topics: [
          'Transformer overview',
          'Tokenization',
          'Embeddings',
          'Context windows',
          'Temperature & sampling',
          'Hallucination causes',
          'Fine-tuning vs RAG'
        ],
        description: 'Understand how LLMs work internally to design reliable AI systems.'
      },

      {
        id: 'm4-2',
        title: 'Embeddings & Vector Databases',
        status: 'upcoming',
        topics: [
          'Cosine similarity',
          'Vector indexing',
          'ANN search',
          'FAISS',
          'Chroma',
          'Pinecone basics'
        ],
        description: 'Learn semantic search and retrieval system foundations.'
      },

      {
        id: 'm5-1',
        title: 'RAG Systems – Advanced',
        status: 'upcoming',
        topics: [
          'Chunking strategies',
          'Context ranking',
          'Metadata filtering',
          'Hybrid search',
          'Multi-document retrieval',
          'Prompt templating'
        ],
        description: 'Build production-grade Retrieval-Augmented Generation systems.'
      },

      {
        id: 'm5-2',
        title: 'FastAPI – Production Backend',
        status: 'upcoming',
        topics: [
          'Async APIs',
          'Streaming responses',
          'Background tasks',
          'WebSockets',
          'Authentication',
          'Middleware',
          'Error handling'
        ],
        description: 'Develop scalable AI backend APIs.'
      },

      {
        id: 'm6-1',
        title: 'Docker & Deployment',
        status: 'upcoming',
        topics: [
          'Docker basics',
          'Dockerizing FastAPI apps',
          'Container networking',
          'Environment variables',
          'CI/CD pipelines',
          'Cloud deployment basics'
        ],
        description: 'Deploy AI systems reliably in production environments.'
      },

      // =========================
      // PHASE 3 — Hybrid Level (Month 7–9)
      // =========================

      {
        id: 'm7-1',
        title: 'Modern Data Stack',
        status: 'upcoming',
        topics: [
          'dbt transformations',
          'Airflow / Prefect',
          'Orchestration',
          'Data lineage',
          'Data testing',
          'Monitoring pipelines'
        ],
        description: 'Build orchestration pipelines that integrate with AI workflows.'
      },

      {
        id: 'm8-1',
        title: 'AI + SQL Integration',
        status: 'upcoming',
        topics: [
          'Natural language to SQL',
          'Secure query generation',
          'Context-aware SQL prompts',
          'User isolation strategies',
          'Query validation layers'
        ],
        description: 'Connect LLM systems with structured enterprise data.'
      },

      {
        id: 'm8-2',
        title: 'AI Agents & Tool Usage',
        status: 'upcoming',
        topics: [
          'Function calling',
          'Tool chaining',
          'External API integration',
          'Multi-step reasoning',
          'Fallback mechanisms'
        ],
        description: 'Design intelligent AI agents that can execute real-world tasks.'
      },

      {
        id: 'm9-1',
        title: 'Cloud Architecture (GCP Focus)',
        status: 'upcoming',
        topics: [
          'Cloud Run',
          'IAM & security',
          'Secrets management',
          'Storage integration',
          'Scalable API deployment'
        ],
        description: 'Build scalable AI infrastructure in the cloud.'
      },

      // =========================
      // PHASE 4 — Senior Layer (Month 10–12)
      // =========================

      {
        id: 'm10-1',
        title: 'AI Observability & Monitoring',
        status: 'upcoming',
        topics: [
          'Prompt versioning',
          'Tracing & logging',
          'Model evaluation metrics',
          'Latency tracking',
          'Token cost monitoring'
        ],
        description: 'Make AI systems reliable, observable, and measurable.'
      },

      {
        id: 'm11-1',
        title: 'Performance Optimization',
        status: 'upcoming',
        topics: [
          'Embedding caching',
          'Context compression',
          'Rate limiting strategies',
          'Retry mechanisms',
          'Cost optimization'
        ],
        description: 'Optimize AI systems for speed and cost efficiency.'
      },

      {
        id: 'm12-1',
        title: 'Enterprise AI Architecture',
        status: 'upcoming',
        topics: [
          'Multi-tenant AI systems',
          'Scalable vector infra',
          'Security best practices',
          'Production SLA design',
          'Failure recovery strategies'
        ],
        description: 'Design senior-level AI infrastructure suitable for enterprise use.'
      }
    ]
  }
  //   slug: 'building-edtech',
  //   description: 'Creating an AI-powered learning platform.',
  //   icon: '🎓',
  //   steps: [
  //     { id: 'et-1', title: 'AI Math Tutor', status: 'completed', topics: ['LLMs', 'Prompt Engineering'], description: 'Setting up the base environment.' } // Based on your current project
  //   ]
  // }
];