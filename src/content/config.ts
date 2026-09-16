import { defineCollection, z } from "astro:content";

// The "guides" collection powers the Learning Hub at /learn.
// Add a new article by dropping a .md file into src/content/guides/
// (see any existing file for the front-matter fields).
const guides = defineCollection({
  type: "content",
  schema: z.object({
    // Shown as the article <h1>, the browser tab title, and the hub card title.
    title: z.string(),
    // One or two sentences. Used as the meta description (Google/AI snippet)
    // and the card summary on the hub. Aim for 120-160 characters.
    description: z.string(),
    // Publish date, e.g. 2026-09-16
    date: z.coerce.date(),
    // Optional: set when you meaningfully update an old article.
    updated: z.coerce.date().optional(),
    // Short topic tags, e.g. ["Feasibility", "Costs"].
    tags: z.array(z.string()).default([]),
    // Grouping label shown on the card, e.g. "Guide", "Explainer".
    category: z.string().default("Guide"),
    // Optional reading-time label, e.g. "6 min read".
    readingTime: z.string().optional(),
    // Set true to keep an article out of the build while you draft it.
    draft: z.boolean().default(false),
    // Optional call-to-action linking the article to a service.
    cta: z
      .object({ label: z.string(), href: z.string() })
      .optional(),
  }),
});

export const collections = { guides };
