<template>
  <main class="container mx-auto max-w-4xl px-4 py-8">
    <h1 class="text-4xl font-bold mb-2">Privacy Policy</h1>
    <p class="text-gray-600 mb-8">Last updated: {{ lastUpdated }}</p>
    
    <div class="max-w-none">
      <p>
        This Privacy Policy describes how {{ appConfig.siteTitle }} ("we," "our," or "us") collects, uses, and shares information about you when you use our website at {{ siteUrl }}.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include:
      </p>
      <ul>
        <li>Name, email address, and contact information</li>
        <li>Account credentials</li>
        <li>Payment information</li>
        <li>Communications with us</li>
      </ul>

      <p>
        We also collect information automatically when you use our services, including:
      </p>
      <ul>
        <li>Device and browser information</li>
        <li>IP address and location data</li>
        <li>Usage data and preferences</li>
        <li>Cookie and tracking technologies</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our services</li>
        <li>Process transactions and send related information</li>
        <li>Send you technical notices and support messages</li>
        <li>Respond to your comments and questions</li>
        <li>Monitor and analyze trends and usage</li>
        <li>Detect and prevent fraudulent transactions</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information in the following situations:
      </p>
      <ul>
        <li>With your consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and safety</li>
        <li>With service providers who assist our operations</li>
        <li>In connection with a merger or acquisition</li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact information is kept indefinitely, while other user data is typically stored for 180 days.
      </p>

      <h2>Your Rights and Choices</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access and update your information</li>
        <li>Request deletion of your data</li>
        <li>Opt out of marketing communications</li>
        <li>Disable cookies in your browser</li>
      </ul>

      <h3>California Privacy Rights</h3>
      <p>
        California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, request deletion, and opt out of the sale of personal information.
      </p>

      <h3>European Privacy Rights</h3>
      <p>
        If you are located in the European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability and the right to object to processing.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected information from a child under 13, we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
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
  title: `Privacy Policy - ${appConfig.siteTitle}`,
  meta: [
    {
      name: 'description',
      content: `Privacy policy for ${appConfig.siteTitle}. Learn how we collect, use, and protect your personal information.`
    }
  ]
})
</script>