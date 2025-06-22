<script setup lang="ts">
interface Props {
  items: any[]
  columns?: {
    default?: number
    md?: number
    lg?: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => ({
    default: 1,
    md: 2,
    lg: 3
  })
})

// Build grid classes based on columns prop
const gridClasses = computed(() => {
  const classes = ['grid', 'gap-4']
  if (props.columns.md) classes.push(`md:grid-cols-${props.columns.md}`)
  if (props.columns.lg) classes.push(`lg:grid-cols-${props.columns.lg}`)
  return classes.join(' ')
})
</script>

<template>
  <div :class="gridClasses">
    <NuxtLink
      v-for="item in items"
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
</template>