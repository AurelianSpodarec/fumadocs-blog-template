import { sourceBlog } from '@/lib/source';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = sourceBlog.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <div>
      <MDXContent
        components={getMDXComponents({
          // this allows you to link to other pages with relative file paths
          a: createRelativeLink(sourceBlog, page),
        })}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return sourceBlog.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = sourceBlog.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
