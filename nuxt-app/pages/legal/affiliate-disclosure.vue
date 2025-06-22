<template>
  <main class="container mx-auto max-w-4xl px-4 py-8">
    <h1 class="text-4xl font-bold mb-2">Affiliate Disclosure</h1>
    <p class="text-gray-600 mb-8">Last updated: {{ lastUpdated }}</p>
    
    <div class="max-w-none">
      <p>
        {{ appConfig.siteTitle }} participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.
      </p>

      <h2>What This Means for You</h2>
      <p>
        When you click on certain links on {{ siteUrl }} and make a purchase, we may receive a commission from the retailer. This comes at no additional cost to you – the price you pay remains the same whether you use our affiliate link or go directly to the vendor's website.
      </p>

      <h2>Our Commitment to You</h2>
      <p>
        While we may receive compensation for products mentioned on our website, we are committed to:
      </p>
      <ul>
        <li>Only recommending products and services that we believe will add value to our readers</li>
        <li>Providing honest opinions, findings, beliefs, and experiences</li>
        <li>Maintaining editorial independence in our content</li>
        <li>Clearly disclosing our affiliate relationships</li>
      </ul>

      <h2>Affiliate Programs We Participate In</h2>
      <p>We are participants in several affiliate programs, including but not limited to:</p>
      
      <h3>Amazon Associates Program</h3>
      <p>
        As an Amazon Associate, {{ appConfig.siteTitle }} earns from qualifying purchases. This means we receive a small commission when you buy products through our Amazon links.
      </p>

      <h3>Other Affiliate Networks</h3>
      <p>
        We also work with various other affiliate networks and individual company affiliate programs. These relationships allow us to earn commissions when you make purchases through our links.
      </p>

      <h2>How We Choose Products</h2>
      <p>
        The presence of affiliate links does not influence our editorial decisions. We select products based on:
      </p>
      <ul>
        <li>Quality and value to our readers</li>
        <li>Relevance to our content and audience</li>
        <li>Personal experience or thorough research</li>
        <li>User reviews and feedback</li>
      </ul>

      <h2>FTC Compliance</h2>
      <p>
        We follow the Federal Trade Commission's guidelines on endorsements and testimonials in advertising (16 CFR Part 255). This disclosure is intended to be clear and conspicuous to ensure transparency with our readers.
      </p>

      <h2>Your Trust Matters</h2>
      <p>
        Your trust is important to us. If you have any questions about our affiliate relationships or how we make money, please don't hesitate to contact us. We believe in being transparent about our business model.
      </p>

      <h2>Product Claims</h2>
      <p>
        Any product claim, statistic, quote, or other representation about a product or service should be verified with the manufacturer, provider, or party in question.
      </p>

      <h2>No Additional Cost to You</h2>
      <p>
        Using our affiliate links does not cost you anything extra. In fact, sometimes we're able to negotiate special discounts or bonuses for our readers.
      </p>

      <h2>Questions?</h2>
      <p>
        If you have any questions regarding our affiliate relationships or this disclosure, please contact us at:
      </p>
      <p>
        Email: {{ contactEmail }}
      </p>
    </div>
  </main>
</template>

<script setup>
const appConfig = useAppConfig()
const siteUrl = computed(() => typeof window !== 'undefined' ? window.location.origin : 'https://serpcompany.github.io')
const contactEmail = 'contact@' + (appConfig.siteTitle || 'example').toLowerCase().replace(/\s+/g, '') + '.com'
const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })

useHead({
  title: `Affiliate Disclosure - ${appConfig.siteTitle}`,
  meta: [
    {
      name: 'description',
      content: `Affiliate disclosure for ${appConfig.siteTitle}. Learn about our affiliate relationships and how we may earn commissions.`
    }
  ]
})
</script>