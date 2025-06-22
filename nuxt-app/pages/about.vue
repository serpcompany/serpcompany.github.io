<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('about').path(route.path).first()
})

useHead({
  title: page.value?.title ? `${page.value.title} - ${appConfig.siteTitle}` : `About - ${appConfig.siteTitle}`,
  meta: [
    {
      content: 'About {{ appConfig.siteTitle }}'
    }
  ]
})
</script>

<template>
  <UMain class="mx-auto max-w-3xl px-4 py-8">
    <UPageHero
      title="About"
    />

      <ContentRenderer v-if="page" :value="page" />

  </UMain>
</template>