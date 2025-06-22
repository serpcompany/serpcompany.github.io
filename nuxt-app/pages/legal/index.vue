<template>
  <main class="container mx-auto max-w-7xl px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Legal</h1>
    
    <div class="max-w-none">
      <p class="text-lg mb-6">
        This page contains important legal information about {{ appConfig.siteTitle }}.
      </p>
      
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
        <NuxtLink to="/legal/privacy-policy" class="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <h2 class="text-xl font-semibold mb-2">Privacy Policy</h2>
          <p class="text-gray-600">Learn how we collect, use, and protect your personal information.</p>
        </NuxtLink>
        
        <NuxtLink to="/legal/terms-conditions" class="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <h2 class="text-xl font-semibold mb-2">Terms & Conditions</h2>
          <p class="text-gray-600">Review the terms governing your use of our website and services.</p>
        </NuxtLink>
        
        <NuxtLink to="/legal/affiliate-disclosure" class="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <h2 class="text-xl font-semibold mb-2">Affiliate Disclosure</h2>
          <p class="text-gray-600">Understand our affiliate relationships and how we may earn commissions.</p>
        </NuxtLink>
        
        <NuxtLink to="/legal/dmca" class="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <h2 class="text-xl font-semibold mb-2">DMCA</h2>
          <p class="text-gray-600">Information about filing copyright complaints and intellectual property matters.</p>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
const appConfig = useAppConfig()

useHead({
  title: `Legal - ${appConfig.siteTitle}`,
  meta: [
    {
      name: 'description',
      content: `Legal information, privacy policy, terms of service, and disclosures for ${appConfig.siteTitle}.`
    }
  ]
})
</script>