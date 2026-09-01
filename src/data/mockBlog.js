export const BLOG_POSTS = [
  {
    id: '1',
    slug: 'why-short-links-matter',
    title: 'Why Short Links Matter More Than You Think',
    excerpt: 'Long URLs are ugly, hard to remember, and impossible to fit in a tweet. Here\'s why smart link management is a superpower for marketers and developers alike.',
    category: 'Marketing',
    author: { name: 'Sarah Chen', avatar: 'S', role: 'Head of Growth' },
    date: 'May 2, 2026',
    readTime: '5 min read',
    coverColor: 'from-indigo-500 to-indigo-700',
    featured: true,
    content: `
## The problem with long URLs

We've all been there. You're about to share a link in an email, a tweet, or a Slack message, and the URL looks like this:

\`https://www.example.com/blog/2024/05/why-short-links-matter-for-your-marketing-strategy?utm_source=newsletter&utm_medium=email&utm_campaign=spring2024\`

That's 125 characters — and it tells your audience absolutely nothing useful.

## Short links aren't just cosmetic

The real power of a short link is what happens behind it. Every click is a data point: where the user came from, what device they're on, where in the world they are. That intelligence is what separates brands that grow intentionally from ones that grow randomly.

## What Curtio gives you

With Curtio, you can:
- Turn any URL into a clean, branded link in under a second
- Track every click with real-time analytics
- See exactly which channels drive the most traffic
- Build trust with your audience by using consistent, recognizable links

## The bottom line

Short links are table stakes in 2026. If you're not using them — and more importantly, if you're not *tracking* them — you're flying blind. Start free today, no credit card required.
    `,
  },
  {
    id: '2',
    slug: 'utm-parameters-guide',
    title: 'The Complete Guide to UTM Parameters',
    excerpt: 'UTM parameters are the secret weapon of every data-driven marketer. Learn how to tag every link you share and finally understand where your traffic really comes from.',
    category: 'Analytics',
    author: { name: 'Marcus Webb', avatar: 'M', role: 'Data Engineer' },
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    coverColor: 'from-orange-400 to-orange-600',
    featured: false,
    content: `
## What is a UTM parameter?

UTM stands for *Urchin Tracking Module* — a legacy name from before Google acquired the analytics company Urchin in 2005. Today, UTM parameters are five URL query tags that tell your analytics platform *where* a visitor came from and *why* they clicked.

## The five UTM tags

| Parameter | Required? | Purpose |
|-----------|-----------|---------|
| utm_source | Yes | The platform (e.g. twitter, newsletter) |
| utm_medium | Yes | The channel type (e.g. social, email, cpc) |
| utm_campaign | Yes | The campaign name |
| utm_term | No | Paid search keyword |
| utm_content | No | A/B test differentiator |

## A real-world example

Say you're running a launch campaign across Twitter, LinkedIn, and a newsletter. Without UTM tags, your analytics will show a pile of "direct" traffic and you'll never know which channel worked.

With UTM tags:
- Twitter post → \`?utm_source=twitter&utm_medium=social&utm_campaign=launch\`
- LinkedIn post → \`?utm_source=linkedin&utm_medium=social&utm_campaign=launch\`
- Newsletter → \`?utm_source=newsletter&utm_medium=email&utm_campaign=launch\`

Now you know *exactly* what drove conversions.

## Use Curtio's UTM Builder

Curtio includes a built-in UTM builder so you never have to manually construct these strings again. Just fill in the fields, copy your tagged short link, and go.
    `,
  },
  {
    id: '3',
    slug: 'qr-codes-in-2026',
    title: 'QR Codes Are Back — And They\'re More Powerful Than Ever',
    excerpt: 'After years of being a punchline, QR codes had a pandemic-era revival and never looked back. Here\'s how to use them effectively in your campaigns.',
    category: 'Tips & Tricks',
    author: { name: 'Priya Nair', avatar: 'P', role: 'Product Designer' },
    date: 'Apr 20, 2026',
    readTime: '4 min read',
    coverColor: 'from-violet-500 to-purple-700',
    featured: false,
    content: `
## QR codes: from gimmick to essential

Remember when QR codes were on every bus shelter ad and nobody scanned them? Then the pandemic hit, restaurant menus went digital, and suddenly everyone had a QR scanner in their pocket.

## Why QR codes + short links = 🔥

A QR code is just a visual representation of a URL. But if that URL is a *short link*, you get something magical: a QR code you can update.

Change the destination of your short link, and every QR code pointing to it updates automatically — without reprinting a single thing.

## Best use cases in 2026

1. **Print materials** — business cards, flyers, posters
2. **Packaging** — link to tutorials, warranty registration, support
3. **Events** — link to schedules, maps, check-in forms
4. **Restaurants & retail** — menus, loyalty programs, promotions

## Generating QR codes with Curtio

Every link you create in Curtio automatically gets a downloadable QR code. Export it as SVG or PNG, drop it into your designs, and track scans just like any other click.
    `,
  },
  {
    id: '4',
    slug: 'link-analytics-for-beginners',
    title: 'Link Analytics for Beginners: What to Track and Why',
    excerpt: 'You don\'t need a data science degree to make sense of your link analytics. This plain-English guide covers the metrics that actually matter.',
    category: 'Analytics',
    author: { name: 'Sarah Chen', avatar: 'S', role: 'Head of Growth' },
    date: 'Apr 14, 2026',
    readTime: '6 min read',
    coverColor: 'from-green-500 to-emerald-700',
    featured: false,
    content: `
## You're already tracking — just not the right things

Most people check their follower count or email open rate and call it analytics. But if you're not tracking what happens *after* the click, you're missing the most important part of the story.

## The metrics that matter

### Total clicks
The obvious one. How many times was your link clicked? This is your headline number.

### Click-over-time
When were people clicking? A spike on Tuesday afternoon might tell you that your audience is most active mid-week, or that a specific post went viral.

### Top referrers
Where did clicks come from? Direct (typed the URL or tapped a push notification), social, search, email. This tells you which channels are actually working.

### Device breakdown
Mobile vs desktop. If 80% of your clicks are mobile, your landing page better be optimized for mobile.

### Geographic data
Where in the world are your users? If you're a US-only business and half your clicks come from overseas, something's off.

## Setting goals before you measure

The biggest mistake beginners make is tracking everything without knowing what success looks like. Before launching a campaign, write down: "This campaign succeeds if X clicks come from Y source within Z days." Then measure against that.
    `,
  },
  {
    id: '5',
    slug: 'brevly-free-plan-guide',
    title: 'Getting the Most Out of Curtio\'s Free Plan',
    excerpt: 'Curtio is free, no credit card needed. Here\'s exactly what you get on the free tier and how to make the most of your one tracked link.',
    category: 'Product',
    author: { name: 'Marcus Webb', avatar: 'M', role: 'Data Engineer' },
    date: 'May 1, 2026',
    readTime: '3 min read',
    coverColor: 'from-indigo-400 to-orange-500',
    featured: false,
    content: `
## What's included for free

Curtio is completely free to use. No credit card, no trial period, no expiry. Here's what you get:

- **Guest shortening** — paste any URL and get a short link instantly, no account needed (up to 5/day)
- **1 tracked link** — sign up for a free account and get one link with full analytics: clicks over time, devices, referrers, and geography
- **Dashboard** — manage, edit, copy, and toggle your link from one clean interface
- **QR code** — every link gets a downloadable QR code

## Why just one tracked link?

We believe everyone deserves access to proper link analytics — not just the people who can afford enterprise software. The free tier is genuinely useful, not a crippled teaser.

One carefully managed, well-tracked link is often all a small creator, freelancer, or early-stage startup needs. Put your most important URL there — your portfolio, your landing page, your Calendly — and track it seriously.

## When you might need more

If you find yourself wishing for more tracked links, custom domains, or team collaboration, those are the scenarios where a paid tier would make sense. We'll keep you posted.

## Tips for your one link

1. Use a custom alias that's easy to remember and type
2. Point it at your most important destination
3. Check your analytics weekly — look for trends, not just totals
4. Share it everywhere: email signature, social bios, presentations
    `,
  },
]
