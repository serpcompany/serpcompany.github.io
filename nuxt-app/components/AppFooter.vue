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
        aria-label="website"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        :to="`https://github.com/${appConfig.githubUsername}`"
        target="_blank"
        aria-label="GitHub"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        :to="`https://serp.ly/${appConfig.serplyUsername}/twitter`"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-instagram"
        color="neutral"
        variant="ghost"
        :to="`https://serp.com/${appConfig.serplyUsername}/instagram`"
        target="_blank"
        aria-label="Instagram"
      />
      <UButton
        icon="i-simple-icons-youtube"
        color="neutral"
        variant="ghost"
        :to="`https://serp.ly/${appConfig.serplyUsername}/youtube`"
        target="_blank"
        aria-label="YouTube"
      />
       <UButton
        icon="i-simple-icons-reddit"
        color="neutral"
        variant="ghost"
        :to="`https://serp.ly/${appConfig.serplyUsername}/reddit`"
        target="_blank"
        aria-label="Reddit"
      />
    </template>
  </UFooter>
</template>
