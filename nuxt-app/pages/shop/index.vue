<script setup lang="ts">
const route = useRoute()

// Get current page from query param
const page = computed(() => parseInt(route.query.page as string) || 1)

// Items per page
const itemsPerPage = 100

// Fetch total count
const { data: totalCount } = await useAsyncData(
  'shop-count',
  () => queryCollection('shop').count()
)

// Fetch paginated content
const { data: shopPosts } = await useAsyncData(
  `shop-page-${page.value}`,
  () => queryCollection('shop')
    .order('publishDate', 'DESC')
    .skip((page.value - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .all(),
  {
    watch: [page]
  }
)

// Calculate total pages
const totalPages = computed(() => {
  if (!totalCount.value) return 1
  return Math.ceil(totalCount.value / itemsPerPage)
})

// SEO
useHead({
  title: 'Shop - Best Gaming Gear & Equipment',
  meta: [
    { 
      name: 'description', 
      content: 'Discover the best gaming gear and equipment. Read our in-depth reviews and buying guides for gaming desks, chairs, mice, and more.' 
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      title="Shop Gaming Gear"
      description="Find the perfect gaming equipment with our comprehensive reviews and buying guides"
      :ui="{
        wrapper: 'py-16 sm:py-24',
        title: 'text-5xl sm:text-6xl',
        description: 'text-xl'
      }"
    />
    
    <!-- Content Section -->
    <UContainer class="py-12">
      <div v-if="shopPosts && shopPosts.length > 0" class="space-y-8">
        <h2 class="text-2xl font-bold">All Reviews</h2>
        
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in shopPosts"
            :key="item.slug || item._path"
            :to="item.slug || item._path"
            class="block"
          >
            <UCard
              class="hover:shadow-lg transition-shadow duration-200 h-full"
            >
              <template v-if="item.image" #header>
                <NuxtImg 
                  :src="item.image" 
                  :alt="item.title"
                  class="w-full h-48 object-cover"
                />
              </template>
              
              <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
              <p v-if="item.excerpt || item.description" class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {{ item.excerpt || item.description }}
              </p>
              
              <template v-if="item.category" #footer>
                <div class="flex items-center justify-between">
                  <UBadge variant="subtle" size="sm">{{ item.category }}</UBadge>
                  <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 text-gray-400" />
                </div>
              </template>
            </UCard>
          </NuxtLink>
        </div>
        
        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex justify-center pt-8">
          <UPagination 
            v-model="page"
            :page-count="itemsPerPage"
            :total="totalCount || 0"
            @update:model-value="(newPage) => navigateTo({ query: { ...route.query, page: newPage > 1 ? newPage : undefined } })"
          />
        </div>
      </div>
      
      <div v-else class="text-center py-16">
        <p class="text-gray-500">No reviews available yet.</p>
      </div>
    </UContainer>
  </div>
</template>