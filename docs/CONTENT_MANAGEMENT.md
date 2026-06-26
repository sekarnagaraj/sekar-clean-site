# Content Management Guide

This file is for repository maintenance only. It is not shown on the website.

## Main file to edit

Most website content lives in:

```text
content-data.js
```

The website automatically renders the arrays inside that file:

```text
profile
capabilities
projects
architectures
blogs
learningNotes
```

## Add a new capability or skill

Open `content-data.js`, find `capabilities`, copy one existing object and change:

```js
{
  icon: "✦",
  title: "New Capability Name",
  summary: "One strong paragraph explaining the capability.",
  proof: [
    "Specific proof point 1",
    "Specific proof point 2",
    "Specific proof point 3"
  ]
}
```

Keep each capability outcome-focused. Avoid generic tool lists unless they support a clear capability.

## Add a new project or use case

Open `content-data.js`, find `projects`, copy one existing project object and change:

```js
{
  id: "unique-project-id",
  title: "Project Title",
  category: "AI & Copilot Platforms",
  status: "Completed / Active / Architecture / Learning",
  summary: "Short executive summary.",
  businessProblem: "What problem existed?",
  solution: "What was designed or delivered?",
  technologies: ["Tool 1", "Tool 2"],
  highlights: ["Outcome 1", "Outcome 2", "Outcome 3"],
  learning: "One clear lesson or architecture insight."
}
```

Use categories consistently so filters remain clean.

## Add a new technical article

Open `content-data.js`, find `blogs`, copy one existing article object and change:

```js
{
  id: "unique-article-id",
  title: "Article Title",
  category: "Data Platforms & Fabric",
  date: "YYYY-MM-DD",
  summary: "Short article summary.",
  tags: ["Tag 1", "Tag 2", "Tag 3"],
  body: [
    "Paragraph 1.",
    "Paragraph 2.",
    "Paragraph 3.",
    "Paragraph 4."
  ]
}
```

Recommended article structure:

1. Start with the problem or observation.
2. Explain why it matters in enterprise delivery.
3. Add a practical architecture or delivery viewpoint.
4. End with a clear lesson.

## Add a new learning hub item

Open `content-data.js`, find `learningNotes`, copy one existing object and change:

```js
{
  title: "New Learning Area",
  items: [
    "Concept 1",
    "Concept 2",
    "Concept 3"
  ]
}
```

## Push updates

After editing files locally:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will redeploy automatically after the GitHub push.
