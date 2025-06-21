<script setup lang='ts'>
const appConfig = useAppConfig()
const links = ref([
  {
    label: 'Shop',
    to: '/shop/',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <div>
    <UPageHero
      :title="appConfig.siteTitle"
      :links="links"
    />
  </div>
</template>