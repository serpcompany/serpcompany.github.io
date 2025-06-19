import { _ as _sfc_main$1 } from "./Link-DvjPaNEy.js";
import { _ as _sfc_main$2 } from "./Icon-D99OMy3A.js";
import { computed, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-DUKfDfU2.js";
import { t as tv } from "./tv-Chk-7CNM.js";
import { b as useAppConfig } from "../server.mjs";
import "./nuxt-link-BH-2VHfz.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "ohash/utils";
import "reka-ui";
import "@vueuse/core";
import "./tv-DTu_ffsP.js";
import "tailwind-variants";
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
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@unhead+vue@2.0.10_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js";
import "tailwindcss/colors";
import "./node-HU5lVDmC.js";
const theme = {
  "slots": {
    "base": [
      "group relative block px-4 py-3 rounded-md text-sm/6 my-5 last:mb-0 [&_code]:text-xs/5 [&_code]:bg-default [&_pre]:bg-default [&>div]:my-2.5 [&_ul]:my-2.5 [&_ol]:my-2.5 [&>*]:last:!mb-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:my-0",
      "transition-colors"
    ],
    "icon": [
      "size-4 shrink-0 align-sub me-1.5",
      "transition-colors"
    ],
    "externalIcon": [
      "size-4 align-top absolute right-2 top-2 pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "base": "border border-primary/25 bg-primary/10 text-primary-600 dark:text-primary-300 [&_a]:text-primary [&_a]:hover:border-primary [&_code]:text-primary-600 dark:[&_code]:text-primary-300 [&_code]:border-primary/25 [&_a]:hover:[&>code]:border-primary [&_a]:hover:[&>code]:text-primary [&>ul]:marker:text-primary/50",
        "icon": "text-primary",
        "externalIcon": "text-primary-600 dark:text-primary-300"
      },
      "secondary": {
        "base": "border border-secondary/25 bg-secondary/10 text-secondary-600 dark:text-secondary-300 [&_a]:text-secondary [&_a]:hover:border-secondary [&_code]:text-secondary-600 dark:[&_code]:text-secondary-300 [&_code]:border-secondary/25 [&_a]:hover:[&>code]:border-secondary [&_a]:hover:[&>code]:text-secondary [&>ul]:marker:text-secondary/50",
        "icon": "text-secondary",
        "externalIcon": "text-secondary-600 dark:text-secondary-300"
      },
      "success": {
        "base": "border border-success/25 bg-success/10 text-success-600 dark:text-success-300 [&_a]:text-success [&_a]:hover:border-success [&_code]:text-success-600 dark:[&_code]:text-success-300 [&_code]:border-success/25 [&_a]:hover:[&>code]:border-success [&_a]:hover:[&>code]:text-success [&>ul]:marker:text-success/50",
        "icon": "text-success",
        "externalIcon": "text-success-600 dark:text-success-300"
      },
      "info": {
        "base": "border border-info/25 bg-info/10 text-info-600 dark:text-info-300 [&_a]:text-info [&_a]:hover:border-info [&_code]:text-info-600 dark:[&_code]:text-info-300 [&_code]:border-info/25 [&_a]:hover:[&>code]:border-info [&_a]:hover:[&>code]:text-info [&>ul]:marker:text-info/50",
        "icon": "text-info",
        "externalIcon": "text-info-600 dark:text-info-300"
      },
      "warning": {
        "base": "border border-warning/25 bg-warning/10 text-warning-600 dark:text-warning-300 [&_a]:text-warning [&_a]:hover:border-warning [&_code]:text-warning-600 dark:[&_code]:text-warning-300 [&_code]:border-warning/25 [&_a]:hover:[&>code]:border-warning [&_a]:hover:[&>code]:text-warning [&>ul]:marker:text-warning/50",
        "icon": "text-warning",
        "externalIcon": "text-warning-600 dark:text-warning-300"
      },
      "error": {
        "base": "border border-error/25 bg-error/10 text-error-600 dark:text-error-300 [&_a]:text-error [&_a]:hover:border-error [&_code]:text-error-600 dark:[&_code]:text-error-300 [&_code]:border-error/25 [&_a]:hover:[&>code]:border-error [&_a]:hover:[&>code]:text-error [&>ul]:marker:text-error/50",
        "icon": "text-error",
        "externalIcon": "text-error-600 dark:text-error-300"
      },
      "neutral": {
        "base": "border border-muted bg-muted text-default",
        "icon": "text-highlighted",
        "externalIcon": "text-dimmed"
      }
    },
    "to": {
      "true": "border-dashed"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "to": true,
      "class": {
        "base": "hover:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "secondary",
      "to": true,
      "class": {
        "base": "hover:border-secondary",
        "externalIcon": "group-hover:text-secondary"
      }
    },
    {
      "color": "success",
      "to": true,
      "class": {
        "base": "hover:border-success",
        "externalIcon": "group-hover:text-success"
      }
    },
    {
      "color": "info",
      "to": true,
      "class": {
        "base": "hover:border-info",
        "externalIcon": "group-hover:text-info"
      }
    },
    {
      "color": "warning",
      "to": true,
      "class": {
        "base": "hover:border-warning",
        "externalIcon": "group-hover:text-warning"
      }
    },
    {
      "color": "error",
      "to": true,
      "class": {
        "base": "hover:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "neutral",
      "to": true,
      "class": {
        "base": "hover:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "Callout",
  __ssrInlineRender: true,
  props: {
    to: { type: null, required: false },
    target: { type: null, required: false },
    icon: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.callout) || {} })({
        color: props.color,
        to: !!props.to
      });
    });
    const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ULink = _sfc_main$1;
      const _component_UIcon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.base({ class: props.class })
      }, _attrs))}>`);
      if (__props.to) {
        _push(ssrRenderComponent(_component_ULink, mergeProps({ to: __props.to, target: target.value, ..._ctx.$attrs }, {
          class: "focus:outline-none",
          tabindex: "-1",
          raw: ""
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="absolute inset-0" aria-hidden="true"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: __props.icon,
          class: ui.value.icon({ class: (_a = props.ui) == null ? void 0 : _a.icon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!!__props.to && target.value === "_blank") {
        _push(ssrRenderComponent(_component_UIcon, {
          name: unref(appConfig).ui.icons.external,
          class: ui.value.externalIcon({ class: (_b = props.ui) == null ? void 0 : _b.externalIcon })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Callout-CzZXbANj.js.map
