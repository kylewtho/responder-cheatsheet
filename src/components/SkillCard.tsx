import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Panel } from './Panel';

export function SkillCard({ body }: { body: string }) {
  return (
    <Panel className="px-4 py-2">
      <div className="prose-skill">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      </div>
    </Panel>
  );
}
