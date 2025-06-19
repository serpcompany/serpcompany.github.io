import { _ as _sfc_main$1 } from "./Icon-D99OMy3A.js";
import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { t as tv } from "./tv-Chk-7CNM.js";
import { b as useAppConfig, d as useRuntimeConfig } from "../server.mjs";
import "./index-6N6G_8Sn.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./asyncData-CVyZoMEH.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
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
import "reka-ui";
import "@vueuse/core";
import "tailwind-variants";
const theme = {
  "slots": {
    "base": [
      "relative text-2xl text-highlighted font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-xl/7 [&>a>code]:font-bold",
      "[&>a>code]:transition-colors"
    ],
    "leading": [
      "absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:flex text-muted",
      "transition"
    ],
    "leadingIcon": "size-4 shrink-0",
    "link": "group lg:ps-2 lg:-ms-2"
  }
};
const _sfc_main = {
  __name: "H2",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const { headings } = useRuntimeConfig().public.mdc;
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.h2) || {} })();
    });
    const generate = computed(() => props.id && typeof (headings == null ? void 0 : headings.anchorLinks) === "object" && headings.anchorLinks.h2);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UIcon = _sfc_main$1;
      _push(`<h2${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: ui.value.base({ class: props.class })
      }, _attrs))}>`);
      if (__props.id && generate.value) {
        _push(`<a${ssrRenderAttr("href", `#${__props.id}`)} class="${ssrRenderClass(ui.value.link({ class: (_a = props.ui) == null ? void 0 : _a.link }))}"><span class="${ssrRenderClass(ui.value.leading({ class: (_b = props.ui) == null ? void 0 : _b.leading }))}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: unref(appConfig).ui.icons.hash,
          class: ui.value.leadingIcon({ class: (_c = props.ui) == null ? void 0 : _c.leadingIcon })
        }, null, _parent));
        _push(`</span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h2>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/H2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=H2-Bn8skDjZ.js.map
