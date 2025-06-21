<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug as string

// Create a unique page ID for caching - following Nuxt Content's pattern
const pageId = computed(() => 'shop-best-' + route.path)

// Fetch the shop content using the path pattern from Nuxt Content's example
const { data: post } = await useAsyncData(pageId.value, () => {
  return queryCollection('shop')
    .path(`/shop/best/${slug}`)
    .first()
})

// SEO
useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.description || post.value?.description }
  ]
})
</script>

<template>
  <div>
    <!-- Simple layout following Nuxt Content's blog example -->
    <UContainer v-if="post" class="py-8 max-w-4xl">
      <!-- Back Link -->
      <NuxtLink to="/shop" class="inline-flex items-center gap-1 text-sm mb-8 hover:underline">
        <small>« Back to Shop</small>
      </NuxtLink>

      <article>
        <!-- Hero Image -->
        <NuxtImg 
          v-if="post.image" 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ post.title }}</h1>
        
        <!-- Description -->
        <p v-if="post.description" class="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {{ post.description }}
        </p>
        
        <!-- Meta Information -->
        <div class="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
          <time v-if="post.publishDate">
            {{ new Date(post.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) }}
          </time>
          <span v-if="post.category">
            <UIcon name="i-lucide-folder" class="w-3 h-3 inline" />
            {{ post.category }}
          </span>
          <div v-if="post.tags?.length" class="flex flex-wrap gap-2">
            <UBadge 
              v-for="tag in post.tags" 
              :key="tag" 
              variant="subtle"
              size="xs"
            >
              {{ tag }}
            </UBadge>
          </div>
        </div>

        <!-- Content with prose styling -->
        <div class="prose prose-gray dark:prose-invert max-w-none">
          <ContentRenderer :value="post" />
        </div>
        
        <!-- Link Hub Section -->
        <div class="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 class="text-2xl font-bold mb-4">Related Links</h2>
          <p class="text-gray-600 dark:text-gray-400">
            Link hub coming soon...
          </p>
        </div>
      </article>
    </UContainer>

    <!-- Post Not Found -->
    <UContainer v-else class="py-16 text-center">
      <h1 class="text-2xl font-bold mb-4">Post not found</h1>
      <UButton to="/shop" variant="ghost" icon="i-lucide-arrow-left">
        Back to Shop
      </UButton>
    </UContainer>
  </div>
</template>