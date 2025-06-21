# SOP: Rendering Shop Content in Nuxt 3

## Overview
This SOP outlines the steps required to display and render markdown files from `/content/shop/best/*` on the frontend using Nuxt Content 3.

## Prerequisites
- ✅ Nuxt 3 project with @nuxt/content module installed
- ✅ content.config.ts file with shop collection defined
- ✅ Markdown files in `/content/shop/best/` directory

## Step-by-Step Process

### Step 1: Create Directory Structure for Pages

Create the necessary page directories:

```bash
mkdir -p pages/shop/best
```

### Step 2: Create Shop Index Page

Create `/pages/shop/index.vue` to list all shop items:

```vue
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Shop</h1>
    
    <!-- List all shop items -->
    <div v-if="shopItems && shopItems.length > 0" class="grid gap-4">
      <article v-for="item in shopItems" :key="item._id" class="border p-4 rounded">
        <h2 class="text-xl font-semibold">{{ item.title }}</h2>
        <p v-if="item.description" class="text-gray-600 mt-2">{{ item.description }}</p>
        <NuxtLink 
          :to="`/shop/best/${item._stem}`" 
          class="text-blue-600 hover:underline mt-2 inline-block"
        >
          Read More →
        </NuxtLink>
      </article>
    </div>
    
    <!-- No items -->
    <div v-else class="text-gray-500">
      No shop items found.
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryCollection } from '#content'

// Query all shop items
const { data: shopItems } = await useAsyncData('shop-items', () => 
  queryCollection('shop').all()
)
</script>
```

### Step 3: Create Dynamic Route for Individual Shop Items

Create `/pages/shop/best/[slug].vue` to display individual shop content:

```vue
<template>
  <div class="container mx-auto p-4">
    <!-- Content found -->
    <article v-if="page">
      <!-- Page Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-bold mb-2">{{ page.title }}</h1>
        <div v-if="page.publishDate" class="text-gray-600">
          Published: {{ new Date(page.publishDate).toLocaleDateString() }}
        </div>
        <div v-if="page.tags && page.tags.length" class="mt-2">
          <span 
            v-for="tag in page.tags" 
            :key="tag" 
            class="inline-block bg-gray-200 px-2 py-1 text-sm rounded mr-2"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Render Markdown Content -->
      <div class="prose max-w-none">
        <ContentRenderer :value="page" />
      </div>
    </article>

    <!-- Content not found -->
    <div v-else class="text-center py-8">
      <h1 class="text-2xl font-bold mb-4">Page Not Found</h1>
      <NuxtLink to="/shop" class="text-blue-600 hover:underline">
        ← Back to Shop
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryCollection } from '#content'

const route = useRoute()
const slug = route.params.slug as string

// Query the specific shop item by slug
const { data: page } = await useAsyncData(`shop-${slug}`, () => 
  queryCollection('shop')
    .where({ _stem: slug })
    .findOne()
)

// SEO Meta Tags
useHead({
  title: page.value?.title || 'Shop Item',
  meta: [
    { 
      name: 'description', 
      content: page.value?.description || page.value?.description || '' 
    }
  ]
})
</script>
```

### Step 4: Add Global Styles for Prose (Optional)

If your markdown content needs styling, add prose styles. Create or update `assets/css/main.css`:

```css
/* Basic prose styling if not using Tailwind Typography */
.prose h1 { @apply text-3xl font-bold mb-4; }
.prose h2 { @apply text-2xl font-semibold mb-3; }
.prose h3 { @apply text-xl font-semibold mb-2; }
.prose p { @apply mb-4; }
.prose ul { @apply list-disc list-inside mb-4; }
.prose ol { @apply list-decimal list-inside mb-4; }
.prose a { @apply text-blue-600 hover:underline; }
.prose blockquote { @apply border-l-4 border-gray-300 pl-4 italic; }
```

### Step 5: Test Your Implementation

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to:
   - `/shop` - Should show list of all shop items
   - `/shop/best/2-Person-Gaming-Desks` - Should show the full article

### Step 6: Verify Content Query (Debug Mode)

To debug and ensure content is being queried correctly, create a test page `/pages/test-shop.vue`:

```vue
<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Shop Content Debug</h1>
    
    <div class="bg-gray-100 p-4 rounded">
      <h2 class="font-semibold mb-2">Query Results:</h2>
      <pre class="whitespace-pre-wrap">{{ JSON.stringify(shopItems, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryCollection } from '#content'

const { data: shopItems } = await useAsyncData('shop-debug', () => 
  queryCollection('shop').all()
)
</script>
```

## Common Issues & Solutions

### Issue 1: Content Not Loading
**Solution:** 
- Verify content.config.ts has correct source path: `source: 'shop/best/*.md'`
- Check that markdown files have valid frontmatter
- Ensure files are in `/content/shop/best/` directory

### Issue 2: 404 on Individual Pages
**Solution:**
- Check that slug in URL matches the filename (without .md extension)
- Verify the `_stem` property is being used correctly in queries

### Issue 3: Markdown Not Rendering
**Solution:**
- Ensure `<ContentRenderer>` component is imported from `#content`
- Check that the `value` prop is passing the correct page data

### Issue 4: TypeScript Errors
**Solution:**
- Run `npm run dev` to generate types
- Import types from `#content` if needed

## Testing Checklist

- [ ] Shop index page loads at `/shop`
- [ ] All shop items are listed
- [ ] Click on item navigates to detail page
- [ ] Individual shop pages load at `/shop/best/[slug]`
- [ ] Markdown content renders properly
- [ ] 404 page shows for non-existent items
- [ ] Page metadata (title, tags) displays correctly

## Next Steps

Once basic rendering works:
1. Add pagination for large collections
2. Implement filtering by tags/category
3. Add search functionality
4. Style with Tailwind Typography plugin
5. Add related content suggestions
6. Implement breadcrumb navigation