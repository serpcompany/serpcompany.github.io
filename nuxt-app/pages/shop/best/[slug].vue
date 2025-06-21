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

useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.description || post.value?.description }
  ]
})
</script>

<template>
  <div>
    <UContainer v-if="post" class="py-8 max-w-4xl">
      <NuxtLink to="/shop" class="inline-flex items-center gap-1 text-sm mb-8 hover:underline">
        <small>« Back to Shop</small>
      </NuxtLink>

      <article>
        <NuxtImg 
          v-if="post.image" 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ post.title }}</h1>
        
        <p v-if="post.description" class="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {{ post.description }}
        </p>
        
        <div class="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
          <time v-if="post.publishDate">
            {{ new Date(post.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) }}
          </time>
          <UBadge variant="outline" v-if="post.category">
            {{ post.category }}
          </UBadge>
          <div v-if="post.tags?.length" class="flex flex-wrap gap-2">
            <UBadge 
              v-for="tag in post.tags" 
              :key="tag" 
              variant="subtle"
              size="xs"
              color="info"
            >
              {{ tag }}
            </UBadge>
          </div>
        </div>

        <ContentRenderer v-if="post" :value="post" />
      
        <ContentLinkHub 
          collection="shop" 
          :current-path="post.slug || post._path"
          title="Related"
        />
      </article>
    </UContainer>
  </div>
</template>