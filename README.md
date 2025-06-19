# README

This is a flexible / multi-purpose general website structure and template that can accomodate anything from a simple blog to an ecommerce store (without the ecommerce transactioin functionality) because of its simple but adaptable layout. 

Each "single" page simply starts out as a generic blog-post style post that accepts markdown for the content it will render. The same principle applies to the "collection" pages, they too start as markdown content. 

The "index" pages are simply 'link hub pages' that dynamically render internal links to the various single & collection pages relevant to the pages/ section they are in. 

If there's a desire to make the "collection" pages dynamic (meaning they populate link hubs like the index pages based on the relevant topic of their collection), then the index page template can simply be used with a prop/filter applied to only display contents relevant to the category pulled from the slug/url params.

This theme should be thought of like a "blog theme" ... but for any "topic /  kind" of website, where the "single" page would represent a blog post by default, but could be swapped out for anything (a single game, a single movie, a single recipe, etc.) based on the niche/industry of the site.

## Technology stack

- Nuxt
- Nuxt UI 3+ / Nuxt UI Pro
- TailwindCSS 4
- Typescript
- Nuxt Content
- Nuxt SEO

This site should render SSG and be able to deploy to github pages or cloudflare pages as a statically generated site. However, as the sites get larder (10,000 - 100,000+ markdown posts) SSG rendered sites can take hours to build -- and sometimes not build at all. We should plan for this and have a strategy in mind to make sure we don't get stuck like that.

## Project Rules

- Make SIMPLE decisions
- Reach for NuxtUI / NuxtUI PRO native components, props, utility classes, APIs, etc. before doing anything custom.
- Dont add extra features that arent necessary in an MVP (like dark mode, color themes, etc.)
- DO make sure you use as much NUXT UI / PRO components and layouts and containers as possible to make things as natively mobile responsive as possible, but also always develop mobile first.
- Use tailwind v4 utility classes instead of custom CSS. Prefer simple designs (or really no design at all) to making things "look cool".


## Pages

### Core

- home: `/`
- about: `/about/`

### Legal

- legal: `/legal/`
- privacy policy: `/legal/privacy-policy/`
- terms & conditions: `/legal/terms-conditions/`
- affilite disclosure: `/legal/affiliate-disclosure/`
- dmca: `/legal/dmca/`

### Shop

- index: `/shop/` - links to all of the singles & collection pages for the "shop" (same layout/design as homepage)
- collection: `/shop/best/[slug]/` - simple blog post style page; markdown format (nuxt content); see example post
- single: NA

### Categories

The categories are populated by putting a single term in the `category:` frontmatter field of any markdown post

- category single: `/category/[slug]/`

## Sitemaps

- Sitemap: `/sitemap/` - an HTML sitemap page that simply links to `x number` of each *type* of page on the website (or paginates to link to all)
- XML Sitemap: `/sitemap-index.xml`

## Markdown frontmatter fields


```
---

title: "2 Person Gaming Desks"

slug: "/shop/best/2-person-gaming-desks/"

excerpt: "Discover the perfect gaming desk for two, seamlessly accommodating collaborative gameplay and simultaneous setup. Our article provides a comprehensive review of the best 2-person gaming desks on the market, helping you make an informed decision for your shared workspace."

publishDate: "2024-01-13T01:55:32Z"

image: "https://imagedelivery.net/vy2bglCGN6hEeWOnSe2c7A/2+Person+Gaming+Desks-1/w=900,h=500,fit=pad,background=black"

category: "Gaming Desks"

module: "Shop"

---

```

- (required): The `title` corresponds to the meta page title & the post's auto-generated `h1` tag.
- (optional): The `excerpt` corresponds to the meta description & any excerpt shown on a blog-roll / collection type page
- (optional): The `publishDate` field should be flexible to accept any format of date, but display it in an en-US readable manner
- (optional): The `image` field corresponds to the posts `og image`, `featured image` and "preview image" for any blog-roll / collection page
- (optional): The `category` field corresponds to including the post in the specified `/category/[slug]/` page
- (required): The `module` field determins where in the website's page routes this post belongs. For example a `"shop"` post would go on the designated `/shop/*` routes. This could also be handled by a folder rather than a frontmatter field -- whatever is more common/native to Nuxt content.