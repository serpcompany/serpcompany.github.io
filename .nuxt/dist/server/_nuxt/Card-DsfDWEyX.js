import { _ as _sfc_main$1 } from "./Link-DvjPaNEy.js";
import { _ as _sfc_main$2 } from "./Icon-D99OMy3A.js";
import { useSlots, computed, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot as ssrRenderSlot$1 } from "vue/server-renderer";
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
import "./node-HU5lVDmC.js";
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
const theme = {
  "slots": {
    "base": [
      "group relative block my-5 p-4 sm:p-6 border border-default rounded-md bg-default",
      "transition-colors"
    ],
    "icon": "size-6 mb-2 block",
    "title": "text-highlighted font-semibold",
    "description": "text-[15px] text-muted *:first:mt-0 *:last:mb-0 *:my-1",
    "externalIcon": [
      "size-4 align-top absolute right-2 top-2 text-dimmed pointer-events-none",
      "transition-colors"
    ]
  },
  "variants": {
    "color": {
      "primary": {
        "icon": "text-primary"
      },
      "secondary": {
        "icon": "text-secondary"
      },
      "success": {
        "icon": "text-success"
      },
      "info": {
        "icon": "text-info"
      },
      "warning": {
        "icon": "text-warning"
      },
      "error": {
        "icon": "text-error"
      },
      "neutral": {
        "icon": "text-highlighted"
      }
    },
    "to": {
      "true": ""
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "to": true,
      "class": {
        "base": "hover:bg-primary/10 hover:border-primary",
        "externalIcon": "group-hover:text-primary"
      }
    },
    {
      "color": "secondary",
      "to": true,
      "class": {
        "base": "hover:bg-secondary/10 hover:border-secondary",
        "externalIcon": "group-hover:text-secondary"
      }
    },
    {
      "color": "success",
      "to": true,
      "class": {
        "base": "hover:bg-success/10 hover:border-success",
        "externalIcon": "group-hover:text-success"
      }
    },
    {
      "color": "info",
      "to": true,
      "class": {
        "base": "hover:bg-info/10 hover:border-info",
        "externalIcon": "group-hover:text-info"
      }
    },
    {
      "color": "warning",
      "to": true,
      "class": {
        "base": "hover:bg-warning/10 hover:border-warning",
        "externalIcon": "group-hover:text-warning"
      }
    },
    {
      "color": "error",
      "to": true,
      "class": {
        "base": "hover:bg-error/10 hover:border-error",
        "externalIcon": "group-hover:text-error"
      }
    },
    {
      "color": "neutral",
      "to": true,
      "class": {
        "base": "hover:bg-elevated/50 hover:border-inverted",
        "externalIcon": "group-hover:text-highlighted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    to: { type: null, required: false },
    target: { type: null, required: false },
    icon: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.card) || {} })({
        color: props.color,
        to: !!props.to,
        title: !!props.title
      });
    });
    const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
    const ariaLabel = computed(() => (props.title || "Card link").trim());
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_ULink = _sfc_main$1;
      const _component_UIcon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.base({ class: props.class })
      }, _attrs))}>`);
      if (__props.to) {
        _push(ssrRenderComponent(_component_ULink, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: target.value, ..._ctx.$attrs }, {
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
      if (__props.title || !!slots.title) {
        _push(`<p class="${ssrRenderClass(ui.value.title({ class: (_c = props.ui) == null ? void 0 : _c.title }))}">`);
        ssrRenderSlot(_ctx.$slots, "title", { mdcUnwrap: "p" }, () => {
          _push(`${ssrInterpolate(__props.title)}`);
        }, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!!slots.default) {
        _push(`<div class="${ssrRenderClass(ui.value.description({ class: (_d = props.ui) == null ? void 0 : _d.description }))}">`);
        ssrRenderSlot$1(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.description)}`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Card-DsfDWEyX.js.map
