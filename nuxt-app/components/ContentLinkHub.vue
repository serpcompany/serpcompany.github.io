<script setup lang="ts">
interface Props {
  collection: string
  currentPath?: string
  title?: string
  limit?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Related Content',
  limit: 50
})

const route = useRoute()

// Create a seed from the current path for consistent randomization
const seedFromPath = (path: string) => {
  let hash = 0
  for (let i = 0; i < path.length; i++) {
    const char = path.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

// Query for related content from the same collection
const { data: relatedContent } = await useAsyncData(
  `related-${props.collection}-${route.path}`,
  async () => {
    // First, get all content from the collection (excluding current)
    const allContent = await queryCollection(props.collection)
      .where('slug', '!=', props.currentPath || route.path)
      .all()
    
    if (!allContent || allContent.length === 0) return []
    
    // Shuffle the content using a seeded random based on current path
    const seed = seedFromPath(props.currentPath || route.path)
    const shuffled = [...allContent]
    
    // Seeded shuffle algorithm (Fisher-Yates with seeded random)
    let currentIndex = shuffled.length
    let randomIndex
    
    // Simple seeded random number generator
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed++) * 10000
      return x - Math.floor(x)
    }
    
    while (currentIndex > 0) {
      randomIndex = Math.floor(seededRandom(seed + currentIndex) * currentIndex)
      currentIndex--
      
      // Swap elements
      ;[shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]]
    }
    
    // Return limited number of items
    return shuffled.slice(0, props.limit)
  }
)
</script>

<template>
  <div v-if="relatedContent && relatedContent.length > 0" class="mt-16">
    <h2 class="text-2xl font-bold mb-6">{{ title }}</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="item in relatedContent"
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
            class="w-full h-24 object-cover"
          />
        </template>
        
        <h3 class="text-md font-semibold mb-2">{{ item.title }}</h3>
        <p v-if="item.excerpt || item.description" class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
          {{ item.excerpt || item.description }}
        </p>
      
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

