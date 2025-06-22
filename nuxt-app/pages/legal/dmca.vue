<template>
  <main class="container mx-auto max-w-4xl px-4 py-8">
    <h1 class="text-4xl font-bold mb-2">DMCA Notice</h1>
    <p class="text-gray-600 mb-8">Last updated: {{ lastUpdated }}</p>
    
    <div class="prose max-w-none">
      <p>
        {{ appConfig.siteTitle }} respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement committed using our website.
      </p>

      <h2>Filing a DMCA Notice</h2>
      <p>
        If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on our website, please notify us by providing the following information:
      </p>

      <ol>
        <li>
          <strong>Identification of the copyrighted work</strong> - Provide a description of the copyrighted work that you claim has been infringed, or if multiple works, a representative list of such works.
        </li>
        <li>
          <strong>Identification of the infringing material</strong> - Identify the material that you claim is infringing and provide sufficient information for us to locate it on our website (including specific URLs).
        </li>
        <li>
          <strong>Your contact information</strong> - Include your name, address, telephone number, and email address.
        </li>
        <li>
          <strong>Good faith statement</strong> - Include a statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.
        </li>
        <li>
          <strong>Accuracy statement</strong> - Include a statement that the information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or authorized to act on the copyright owner's behalf.
        </li>
        <li>
          <strong>Signature</strong> - An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.
        </li>
      </ol>

      <h2>Submitting Your Notice</h2>
      <p>
        Please send your DMCA notice to our designated copyright agent at:
      </p>
      <p class="pl-8">
        Email: {{ dmcaEmail }}<br>
        Subject Line: DMCA Takedown Request
      </p>

      <h2>Counter-Notice</h2>
      <p>
        If you believe that your content was removed or disabled by mistake or misidentification, you may file a counter-notice with us by providing:
      </p>
      <ol>
        <li>Identification of the material that has been removed or disabled</li>
        <li>Your name, address, telephone number, and email address</li>
        <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification</li>
        <li>A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located</li>
        <li>Your physical or electronic signature</li>
      </ol>

      <h2>Repeat Infringers</h2>
      <p>
        In accordance with the DMCA and other applicable laws, {{ appConfig.siteTitle }} has adopted a policy of terminating, in appropriate circumstances, users who are deemed to be repeat infringers. We may also, at our sole discretion, limit access to our website and/or terminate the accounts of any users who infringe any intellectual property rights of others.
      </p>

      <h2>False Claims</h2>
      <p>
        Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability for damages.
      </p>

      <h2>Other Intellectual Property Matters</h2>
      <p>
        For complaints regarding other intellectual property matters (such as trademark, trade dress, or patent issues), please contact us at:
      </p>
      <p class="pl-8">
        Email: {{ ipEmail }}
      </p>

      <h2>Note on Email Format</h2>
      <p>
        When contacting us, please ensure you use the correct email format without any additional brackets or spaces.
      </p>
    </div>
  </main>
</template>

<script setup>
const appConfig = useAppConfig()
const dmcaEmail = 'dmca@' + (appConfig.siteTitle || 'example').toLowerCase().replace(/\s+/g, '') + '.com'
const ipEmail = 'ipcomplaints@' + (appConfig.siteTitle || 'example').toLowerCase().replace(/\s+/g, '') + '.com'
const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })

useHead({
  title: `DMCA - ${appConfig.siteTitle}`,
  meta: [
    {
      name: 'description',
      content: `DMCA notice and takedown policy for ${appConfig.siteTitle}. Information about filing copyright complaints.`
    }
  ]
})
</script>