# How to Add Content in the Future

This website is designed to grow with your career. You do not need to rebuild the site for every update.

Open this file:

```text
content-data.js
```

## 1. Add a new skill / capability

Find this section:

```js
capabilities: [
```

Copy one capability object and paste it before the closing `]`.

Template:

```js
{
  icon: "✦",
  title: "New Capability Name",
  summary: "Short 1-2 line explanation of what you do in this area.",
  proof: [
    "Proof point 1",
    "Proof point 2",
    "Proof point 3",
    "Proof point 4"
  ]
},
```

Example:

```js
{
  icon: "◎",
  title: "AI Governance & Evaluation",
  summary: "LLM evaluation, prompt regression, hallucination checks, content safety and production monitoring.",
  proof: [
    "Evaluation datasets",
    "Groundedness checks",
    "Prompt regression strategy",
    "Human review workflow"
  ]
},
```

## 2. Add a new project / use case

Find this section:

```js
projects: [
```

Copy this template:

```js
{
  id: "unique-project-id",
  title: "Project or Use Case Name",
  category: "AI / Azure / Data / QA / Migration / Leadership",
  status: "Completed / Active / Prototype / Learning",
  summary: "One-line summary of the project.",
  businessProblem: "What business or engineering problem did this solve?",
  solution: "What approach did you take?",
  technologies: ["Tool 1", "Tool 2", "Tool 3"],
  highlights: [
    "Important highlight 1",
    "Important highlight 2",
    "Important highlight 3"
  ],
  learning: "What did you learn or prove through this work?"
},
```

Rules:

- `id` must be unique.
- Use simple lowercase words separated by hyphens.
- Do not use quotation marks inside text unless you escape them.

## 3. Add a new blog

Find this section:

```js
blogs: [
```

Copy this template:

```js
{
  id: "unique-blog-id",
  title: "Blog Title",
  category: "AI / Azure / Data / QA / Career / Leadership",
  date: "2026-06-26",
  source: "New blog / LinkedIn post / Learning note",
  summary: "Short summary shown on the blog card.",
  tags: ["Tag 1", "Tag 2", "Tag 3"],
  body: [
    "Paragraph 1.",
    "Paragraph 2.",
    "Paragraph 3.",
    "Paragraph 4."
  ]
},
```

## 4. Add a new architecture item

Find this section:

```js
architectures: [
```

Template:

```js
{
  title: "Architecture Name",
  area: "AI / Cloud / Data / BI / Automation",
  description: "Short explanation of the architecture."
},
```

## 5. Publish changes

After editing:

```bash
git add .
git commit -m "Add new content"
git push
```

Vercel will automatically deploy the new version.

## 6. Recommended content pattern

For every future project, write in this structure:

1. Business problem
2. Solution approach
3. Technologies used
4. What you personally contributed
5. Outcome / learning
6. Screenshots or diagram, if available

This keeps the website professional and avoids becoming just a tool list.
