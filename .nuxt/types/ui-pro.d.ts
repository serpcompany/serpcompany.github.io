import * as uiPro from '#build/ui-pro'
import type { TVConfig } from '@nuxt/ui'

type AppConfigUIPro = TVConfig<typeof uiPro>

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /**
     * Nuxt UI Pro theme configuration
     * @see https://ui.nuxt.com/getting-started/theme#customize-theme
     */
    uiPro?: AppConfigUIPro
  }
}

export {}
