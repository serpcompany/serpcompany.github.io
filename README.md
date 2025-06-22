# README

This is a flexible / multi-purpose general website structure and template that can accomodate anything from a simple blog to an ecommerce store (without the ecommerce transactioin functionality) because of its simple but adaptable layout. 

Each "single" page simply starts out as a generic blog-post style post that accepts markdown for the content it will render. The same principle applies to the "collection" pages, they too start as markdown content. 

The "index" pages are simply 'link hub pages' that dynamically render internal links to the various single & collection pages relevant to the pages/ section they are in. 

If there's a desire to make the "collection" pages dynamic (meaning they populate link hubs like the index pages based on the relevant topic of their collection), then the index page template can simply be used with a prop/filter applied to only display contents relevant to the category pulled from the slug/url params.

This theme should be thought of like a "blog theme" ... but for any "topic /  kind" of website, where the "single" page would represent a blog post by default, but could be swapped out for anything (a single game, a single movie, a single recipe, etc.) based on the niche/industry of the site.

## Customization

1. Customize the .env file
2. Customize the app.config.ts file

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


### Categories

The categories are populated by putting a single term in the `category:` frontmatter field of any markdown post

- category single: `/category/[slug]/`

## Sitemaps

- Sitemap: `/sitemap/` - an HTML sitemap page that simply links to `x number` of each *type* of page on the website (or paginates to link to all)
- XML Sitemap: `/sitemap-index.xml`
