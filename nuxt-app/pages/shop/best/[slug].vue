<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`shop-${slug}`, () => {
  return queryCollection('shop').path(`/shop/best/${slug}`).first()
})

// SEO
useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.description }
  ]
})
</script>

<template>
  <div>
    <!-- Post Found -->
    <UPage v-if="post">
      <UPageHeader>
        <!-- Hero Image -->
        <img 
          v-if="post.image" 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        >
        
        <!-- Title and Meta -->
        <h1 class="text-4xl md:text-5xl font-bold">{{ post.title }}</h1>
        <p v-if="post.description" class="text-lg text-gray-600 dark:text-gray-400 mt-4">
          {{ post.description }}
        </p>
        
        <!-- Meta Information -->
        <div class="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
          <time v-if="post.publishDate">
            {{ new Date(post.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) }}
          </time>
          <span v-if="post.category" class="flex items-center gap-1">
            <UIcon name="i-lucide-folder" class="w-4 h-4" />
            {{ post.category }}
          </span>
        </div>
        
        <!-- Tags -->
        <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-4">
          <UBadge 
            v-for="tag in post.tags" 
            :key="tag" 
            variant="subtle"
            size="sm"
          >
            {{ tag }}
          </UBadge>
        </div>
      </UPageHeader>

      <UPageBody prose>
        <!-- Main Content -->
        <ContentRenderer :value="post" />
        
        <!-- Link Hub Placeholder -->
        <div class="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 class="text-2xl font-bold mb-4">Related Links</h2>
          <p class="text-gray-600 dark:text-gray-400">
            Link hub coming soon...
          </p>
          <!-- TODO: Add link hub component here -->
        </div>
      </UPageBody>
    </UPage>

    <!-- Post Not Found -->
    <UContainer v-else class="py-16 text-center">
      <h1 class="text-2xl font-bold mb-4">Post not found</h1>
      <UButton to="/shop" variant="ghost" icon="i-lucide-arrow-left">
        Back to Shop
      </UButton>
    </UContainer>
  </div>
</template>