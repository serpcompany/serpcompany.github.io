import { _ as _sfc_main$2 } from "./Button-jux90PMD.js";
import { computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { useClipboard } from "@vueuse/core";
import { u as useLocalePro } from "./useLocalePro-FBv4dYkc.js";
import _sfc_main$1 from "./CodeIcon-bgGVDbzE.js";
import { t as tv } from "./tv-Chk-7CNM.js";
import { b as useAppConfig } from "../server.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "reka-ui";
import "./useButtonGroup-BAC0w4Mj.js";
import "./index-CmS0GGFw.js";
import "./tv-DTu_ffsP.js";
import "tailwind-variants";
import "./Link-DvjPaNEy.js";
import "./nuxt-link-BH-2VHfz.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "ohash/utils";
import "./Icon-D99OMy3A.js";
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
import "./Avatar-BBvgSf-4.js";
import "./virtual_nuxt__Users_devin_repos_projects_nuxt-astronaut-theme_.nuxt_ui-image-component-CX5_T5UE.js";
const theme = {
  "slots": {
    "root": "relative my-5 group",
    "header": "flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3",
    "filename": "text-default text-sm/6",
    "icon": "size-4 shrink-0",
    "copy": "absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition",
    "base": "group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none"
  },
  "variants": {
    "filename": {
      "true": {
        "root": "[&>pre]:rounded-t-none [&>pre]:my-0 my-5"
      }
    }
  }
};
const _sfc_main = {
  __name: "Pre",
  __ssrInlineRender: true,
  props: {
    icon: { type: String, required: false },
    code: { type: String, required: false },
    language: { type: String, required: false },
    filename: { type: String, required: false },
    highlights: { type: Array, required: false },
    hideHeader: { type: Boolean, required: false },
    meta: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useLocalePro();
    const clipboard = useClipboard();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.pre) || {} })();
    });
    const copied = ref(false);
    function copy() {
      clipboard.copy(props.code || "");
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_UButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root], filename: !!__props.filename })
      }, _attrs))}>`);
      if (__props.filename && !__props.hideHeader) {
        _push(`<div class="${ssrRenderClass(ui.value.header({ class: (_b = props.ui) == null ? void 0 : _b.header }))}">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          filename: __props.filename,
          class: ui.value.icon({ class: (_c = props.ui) == null ? void 0 : _c.icon })
        }, null, _parent));
        _push(`<span class="${ssrRenderClass(ui.value.filename({ class: (_d = props.ui) == null ? void 0 : _d.filename }))}">${ssrInterpolate(__props.filename)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        icon: copied.value ? unref(appConfig).ui.icons.copyCheck : unref(appConfig).ui.icons.copy,
        color: "neutral",
        variant: "outline",
        size: "sm",
        "aria-label": unref(t)("prose.pre.copy"),
        class: ui.value.copy({ class: (_e = props.ui) == null ? void 0 : _e.copy }),
        tabindex: "-1",
        onClick: copy
      }, null, _parent));
      _push(`<pre${ssrRenderAttrs(mergeProps({
        class: ui.value.base({ class: [(_f = props.ui) == null ? void 0 : _f.base, props.class] })
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Pre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Pre-BQqg4nK9.js.map
