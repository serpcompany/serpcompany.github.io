<script setup lang='ts'>
const appConfig = useAppConfig();
</script>

<template>
  <div>
  <AppHeader :title="appConfig.siteTitle" 
    :ui="{
      toggle: 'md:hidden',
    }"
  />
    <UPage>
      <slot />
    </UPage>
  <AppFooter />
  </div>
</template>