import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const TOPICS_DIR = path.join(process.cwd(), 'content', 'topics');

export interface TopicFrontmatter {
  title: string;
  slug: string;
  summary: string;
  aliases: string[];
}

export interface Topic extends TopicFrontmatter {
  body: string;
}

function readTopicFile(filename: string): Topic {
  const raw = fs.readFileSync(path.join(TOPICS_DIR, filename), 'utf-8');
  const { data, content } = matter(raw);
  return {
    title: data.title,
    slug: data.slug,
    summary: data.summary ?? '',
    aliases: data.aliases ?? [],
    body: content.trim(),
  };
}

export function getAllTopics(): Topic[] {
  const files = fs.readdirSync(TOPICS_DIR).filter((f) => f.endsWith('.md'));
  return files.map(readTopicFile).sort((a, b) => a.title.localeCompare(b.title));
}

export function getTopic(slug: string): Topic | undefined {
  return getAllTopics().find((t) => t.slug === slug);
}
