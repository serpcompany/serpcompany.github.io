<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const appConfig = useAppConfig()

const items: NavigationMenuItem[] = [
  {
    label: 'SERP',
    to: 'https://serp.co',
    target: '_blank'
  },
  {
    label: 'SERP AI',
    to: 'https://serp.ai',
  },
  {
    label: 'SERP Media',
    to: 'https://serp.media'
  },
  {
    label: 'SERP Games',
    to: 'https://serp.games',
  },
  {
    label: 'DAFT FM',
    to: 'https://daft.fm',
  },
  {
    label: 'Boxing Undefeated',
    to: 'https://boxingundefeated.com',
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
        to="https://serp.games"
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
        to="https://github.com/{{ appConfig.githubUsername}}"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
