import { defineCollection, z } from "astro:content";

// The "guides" collection powers the Guides hub at /guides.
// It holds two kinds of page, per the content plan (pillars + clusters):
//   - kind: "pillar"  = a flagship, authoritative guide on a broad topic.
//   - kind: "cluster" = a narrower article answering one real question,
//                       which links UP to its pillar and ACROSS to a service.
// Add a page by dropping a .md file into src/content/guides/
// (copy the front-matter from any existing file).
const guides = defineCollection({
  type: "content",
  schema: z.object({
    // Shown as the <h1>, browser title, and card title.
    title: z.string(),
    // One or two sentences; used as the meta description (Google/AI snippet)
    // and the card summary. Aim for 120-160 characters.
    description: z.string(),
    // Publish date, e.g. 2026-09-16
    date: z.coerce.date(),
    // Optional: set when you meaningfully update an old page.
    updated: z.coerce.date().optional(),
    // "pillar" or "cluster". Defaults to cluster.
    kind: z.enum(["pillar", "cluster"]).default("cluster"),
    // For a cluster: the slug (file name, no .md) of the pillar it belongs to.
    pillar: z.string().optional(),
    // Sort order: pillars on the hub, and clusters within a pillar. Lower first.
    order: z.number().default(0),
    // Short topic tags, e.g. ["Feasibility", "Costs"].
    tags: z.array(z.string()).default([]),
    // Grouping label on the card, e.g. "Guide", "Explainer".
    category: z.string().default("Guide"),
    // Optional reading-time label, e.g. "6 min read".
    readingTime: z.string().optional(),
    // Set true to keep a page out of the build while you draft it.
    draft: z.boolean().default(false),
    // Optional call-to-action button, linking the page to a service.
    cta: z.object({ label: z.string(), href: z.string() }).optional(),
  }),
});

export const collections = { guides };
