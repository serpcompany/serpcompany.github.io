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

// Query for related content from the same collection
const { data: relatedContent } = await useAsyncData(
  `related-${props.collection}-${route.path}`,
  () => queryCollection(props.collection)
    .where('slug', '!=', props.currentPath || route.path)
    .order('publishDate', 'DESC')
    .limit(props.limit)
    .all()
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

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
