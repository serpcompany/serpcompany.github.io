<script setup lang='ts'>
const shopItems = [
  [
    {
      label: 'Shop',
      to: '/shop/'
    }
  ]
];
</script>

<template>
  <UHeader>
    <!-- desktop: show dropdown on the right -->
    <template #right>
      <UDropdownMenu :items="shopItems" class="hidden md:flex">
        <UButton
          color="gray"
          variant="ghost"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          Shop
        </UButton>
      </UDropdownMenu>
    </template>

    <template #body>
      <nav class="flex flex-col space-y-4 p-4">
        <ULink to="/shop/" class="block py-2">Shop</ULink>
        <ULink to="/about/" class="block py-2">About</ULink>
      </nav>
    </template>
  </UHeader>
</template>