import { blog } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const sourceBlog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blog)
});
