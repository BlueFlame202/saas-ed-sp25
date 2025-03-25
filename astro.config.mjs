// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import tailwindcss from '@tailwindcss/vite';

import vercel from "@astrojs/vercel";

import db from '@astrojs/db';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://saas-ed-sp25.vercel.app/',
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), db(), auth()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: "server",
  adapter: vercel()
});