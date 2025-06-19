import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from "vue";
import { i as injectHead, c as createError } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@unhead+vue@2.0.10_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js";
import "tailwindcss/colors";
import "@iconify/vue";
import "vue/server-renderer";
const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    "./BrandedLogo-vwUduGXI.js"
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    "./Frame-BwxItptt.js"
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    "./Nuxt-BSQe2oah.js"
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    "./NuxtSeo-DuiX8asX.js"
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    "./Pergel-qO95jYvi.js"
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    "./SimpleBlog-CB2g3u8n.js"
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    "./UnJs-DMGeyXh6.js"
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    "./Wave-BprHNdKB.js"
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    "./WithEmoji-B8sFSUZB.js"
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  name: "IslandRenderer",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const head = injectHead();
    head.entries.clear();
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});
export {
  islandRenderer as default
};
//# sourceMappingURL=island-renderer-BYn6RJHj.js.map
