<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// Get current page from query param - use ref for v-model binding
const page = ref(parseInt(route.query.page as string) || 1)

// Watch for route changes to update page
watch(() => route.query.page, (newPage) => {
  page.value = parseInt(newPage as string) || 1
})

// Items per page
const itemsPerPage = 20

// Fetch total count
const { data: totalCount } = await useAsyncData(
  'shop-count',
  () => queryCollection('shop').count()
)

// Fetch paginated content
const { data: shopPosts } = await useAsyncData(
  () => `shop-page-${page.value}`,
  () => queryCollection('shop')
    .order('title', 'ASC')
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

// Handle page navigation
function navigateToPage(newPage: number) {
  router.push({
    query: {
      ...route.query,
      page: newPage > 1 ? newPage.toString() : undefined
    }
  })
}

// SEO
useHead({
  title: 'Shop',
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
    <UPageHero
      title="Shop"
      :ui="{
        wrapper: 'py-16 sm:py-24',
        title: 'text-5xl sm:text-6xl',
        description: 'text-xl'
      }"
    />
    
    <UContainer class="py-12">
      <div v-if="shopPosts && shopPosts.length > 0" class="space-y-8">
        <h2 class="text-2xl font-bold">Browse</h2>
        
        <ContentCardGrid :items="shopPosts" />
        
        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex justify-center pt-8">
          <UPagination 
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total="totalCount || 0"
            @update:page="navigateToPage"
          />
        </div>
      </div>
      
      <div v-else class="text-center py-16">
        <p class="text-gray-500">No reviews available yet.</p>
      </div>
    </UContainer>
  </div>
</template>