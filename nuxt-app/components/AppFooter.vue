<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const appConfig = useAppConfig()

const items: NavigationMenuItem[] = [
  {
    label: 'Figma Kit',
    to: 'https://www.figma.com/community/file/1288455405058138934',
    target: '_blank'
  },
  {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank'
  },
  {
    label: 'Roadmap',
    to: '/roadmap'
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
]
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">© <NuxtLink to="https://serp.co">SERP</NuxtLink></p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-lucide-link"
        color="neutral"
        variant="ghost"
        to="https://serp.co"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://serp.ly/@{{ appConfig.serplyUsername }}"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
