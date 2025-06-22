<template>
  <main class="container mx-auto max-w-4xl px-4 py-8">
    <h1 class="text-4xl font-bold mb-2">Terms & Conditions</h1>
    <p class="text-gray-600 mb-8">Last updated: {{ lastUpdated }}</p>
    
    <div class="max-w-none">
      <p>
        Welcome to {{ appConfig.siteTitle }}. These Terms and Conditions ("Terms") govern your use of our website at {{ siteUrl }} and any related services provided by us.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
      </p>

      <h2>2. Use of Website</h2>
      <p>
        You may use our website for lawful purposes only. You agree not to use the website:
      </p>
      <ul>
        <li>In any way that violates any applicable law or regulation</li>
        <li>To transmit any harmful, offensive, or illegal material</li>
        <li>To impersonate or attempt to impersonate {{ appConfig.siteTitle }} or any other person</li>
        <li>In any way that infringes upon the rights of others</li>
        <li>To engage in any conduct that restricts or inhibits anyone's use of the website</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        The content on our website, including text, graphics, logos, and software, is the property of {{ appConfig.siteTitle }} and protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
      </p>

      <h2>4. User Content</h2>
      <p>
        By submitting content to our website, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content. You represent and warrant that you own or have the necessary rights to the content you submit.
      </p>

      <h2>5. Privacy</h2>
      <p>
        Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        The information on this website is provided on an "as is" basis. {{ appConfig.siteTitle }} makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information.
      </p>
      <p>
        Some content on this website may be fictional, satirical, or humorous in nature. We are not responsible for any actions taken based on the content of this website.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        In no event shall {{ appConfig.siteTitle }}, its directors, employees, or agents, be liable for any indirect, consequential, or punitive damages arising out of your use of the website. Our total liability to you for any damages shall not exceed fifty dollars ($50).
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {{ appConfig.siteTitle }} and its affiliates from any claims, losses, or damages, including legal fees, resulting from your violation of these Terms or your use of the website.
      </p>

      <h2>9. Affiliate Links and Advertising</h2>
      <p>
        Our website may contain affiliate links. We may earn a commission if you make a purchase through these links. This does not affect the price you pay. We only recommend products and services we believe will add value to our users.
      </p>

      <h2>10. Modifications to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the new Terms on this page. Your continued use of the website after any changes indicates your acceptance of the new Terms.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
      </p>

      <h2>13. Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
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
  title: `Terms & Conditions - ${appConfig.siteTitle}`,
  meta: [
    {
      name: 'description',
      content: `Terms and conditions for using ${appConfig.siteTitle}. Read our terms of service and user agreement.`
    }
  ]
})
</script>