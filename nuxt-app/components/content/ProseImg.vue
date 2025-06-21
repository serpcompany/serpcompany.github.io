<template>
  <NuxtImg 
    :src="src" 
    :alt="alt"
    :width="width"
    :height="height"
    class="w-full h-auto rounded-lg shadow-xl my-8 mx-auto"
    loading="lazy"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}>()
</script>