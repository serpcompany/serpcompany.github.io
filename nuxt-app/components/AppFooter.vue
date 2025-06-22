<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const appConfig = useAppConfig()

const footerColumns: NavigationMenuItem[] = [
  {
    label: 'Browse',
    items: [
      { label: 'Shop', to: '/shop' },
    ]
  },
  {
    label: 'Categories',
    items: [
      { label: 'Gaming Chairs', to: '/shop/best/gaming-chairs' },
      { label: 'Gaming Desks', to: '/shop/best/gaming-desks' },
      { label: 'Gaming Mouse', to: '/shop/best/gaming-mouse' }
    ]
  },
  {
    label: 'Brands',
    items: [
      { label: 'SERP', to: 'https://serp.co', target: '_blank' },
      { label: 'SERP AI', to: 'https://serp.ai', target: '_blank' },
      { label: 'SERP Media', to: 'https://serp.media', target: '_blank' },
      { label: 'SERP Games', to: 'https://serp.games', target: '_blank' },
      { label: 'DAFT FM', to: 'https://daft.fm', target: '_blank' },
      { label: 'Boxing Undefeated', to: 'https://boxingundefeated.com', target: '_blank' }
    ]
  },
  {
    label: 'Resources',
    items: [
       { label: 'About', to: '/about' },
      { label: 'Privacy Policy', to: '/legal/privacy-policy' },
      { label: 'Terms & Conditions', to: '/legal/terms-conditions' },
      { label: 'Affiliate Disclosure', to: '/legal/affiliate-disclosure' },
      { label: 'DMCA', to: '/legal/dmca' }
    ]
  }
]
</script>

<template>
  <div class="border-t border-gray-200 dark:border-gray-800 mt-12">
    <div class="container mx-auto px-4 py-12">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div v-for="column in footerColumns" :key="column.label" class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">{{ column.label }}</h3>
          <ul class="space-y-2">
            <li v-for="link in column.items" :key="link.label">
              <NuxtLink 
                :to="link.to" 
                :target="link.target"
                class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          © {{ new Date().getFullYear() }} <NuxtLink to="https://serp.co" class="hover:text-gray-900 dark:hover:text-white">SERP</NuxtLink>. All rights reserved.
        </p>
        
        <!-- Social links -->
        <div class="flex flex-wrap gap-4 justify-center sm:justify-end">
          <UButton
            icon="i-lucide-link"
            color="neutral"
            variant="ghost"
            size="sm"
            to="https://serp.games"
            target="_blank"
            aria-label="website"
          />
          <UButton
            icon="i-simple-icons-github"
            color="neutral"
            variant="ghost"
            size="sm"
            :to="`https://github.com/${appConfig.githubUsername}`"
            target="_blank"
            aria-label="GitHub"
          />
          <UButton
            icon="i-simple-icons-x"
            color="neutral"
            variant="ghost"
            size="sm"
            :to="`https://serp.ly/${appConfig.serplyUsername}/twitter`"
            target="_blank"
            aria-label="X"
          />
          <UButton
            icon="i-simple-icons-instagram"
            color="neutral"
            variant="ghost"
            size="sm"
            :to="`https://serp.com/${appConfig.serplyUsername}/instagram`"
            target="_blank"
            aria-label="Instagram"
          />
          <UButton
            icon="i-simple-icons-youtube"
            color="neutral"
            variant="ghost"
            size="sm"
            :to="`https://serp.ly/${appConfig.serplyUsername}/youtube`"
            target="_blank"
            aria-label="YouTube"
          />
          <UButton
            icon="i-simple-icons-reddit"
            color="neutral"
            variant="ghost"
            size="sm"
            :to="`https://serp.ly/${appConfig.serplyUsername}/reddit`"
            target="_blank"
            aria-label="Reddit"
          />
        </div>
      </div>
    </div>
  </div>
</template>
