import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectMetadata {
  title: string;
  description: string;
  link: string;
  live?: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  slug: string;
}

export interface ProjectPost {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

export function getAllProjectSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string): ProjectPost | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: {
        ...data,
        slug,
      } as ProjectMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getAllProjects(): ProjectPost[] {
  const slugs = getAllProjectSlugs();
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectPost => project !== null)
    .sort((a, b) => a.metadata.title.localeCompare(b.metadata.title));
}

export function getProjectMetadata(slug: string): ProjectMetadata | null {
  const project = getProjectBySlug(slug);
  return project?.metadata || null;
}