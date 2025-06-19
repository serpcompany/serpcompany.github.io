import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, createVNode, openBlock, useSSRContext, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from "reka-ui";
import { reactivePick } from "@vueuse/core";
import { t as tv } from "./tv-DTu_ffsP.js";
import { b as useAppConfig } from "../server.mjs";
import { _ as _sfc_main$2 } from "./Icon-D99OMy3A.js";
import { u as useLocalePro } from "./useLocalePro-FBv4dYkc.js";
import { t as transformUI } from "./index-DTPI6KqO.js";
import { t as tv$1 } from "./tv-Chk-7CNM.js";
import "tailwind-variants";
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
import "./index-6N6G_8Sn.js";
import "@iconify/utils/lib/css/icon";
import "./asyncData-CVyZoMEH.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "./index-CmS0GGFw.js";
const theme$1 = {
  "slots": {
    "root": "",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};
const _sfc_main$1 = {
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.collapsible) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(CollapsibleContent), {
              class: ui.value.content({ class: (_a2 = props.ui) == null ? void 0 : _a2.content })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(CollapsibleTrigger), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(CollapsibleContent), {
                class: ui.value.content({ class: (_b = props.ui) == null ? void 0 : _b.content })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6.0_io_c3rkd63amtmtd64x55vod7vajy/node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5",
    "trigger": [
      "group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "triggerLabel": "truncate",
    "content": "*:first:mt-2.5 *:last:mb-0 *:my-1.5"
  }
};
const _sfc_main = {
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    icon: { type: String, required: false },
    name: { type: String, required: false },
    openText: { type: String, required: false },
    closeText: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useLocalePro();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv$1({ extend: tv$1(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.collapsible) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCollapsible = _sfc_main$1;
      const _component_UIcon = _sfc_main$2;
      _push(ssrRenderComponent(_component_UCollapsible, mergeProps({
        "unmount-on-hide": false,
        class: props.class,
        ui: unref(transformUI)(ui.value)
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<button class="${ssrRenderClass(ui.value.trigger({ class: (_a = props.ui) == null ? void 0 : _a.trigger }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.icon || unref(appConfig).ui.icons.chevronDown,
              class: ui.value.triggerIcon({ class: (_b = props.ui) == null ? void 0 : _b.triggerIcon })
            }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass(ui.value.triggerLabel({ class: (_c = props.ui) == null ? void 0 : _c.triggerLabel }))}"${_scopeId}>${ssrInterpolate(open ? props.closeText || unref(t)("prose.collapsible.closeText") : props.openText || unref(t)("prose.collapsible.openText"))} ${ssrInterpolate(props.name || unref(t)("prose.collapsible.name"))}</span></button>`);
          } else {
            return [
              createVNode("button", {
                class: ui.value.trigger({ class: (_d = props.ui) == null ? void 0 : _d.trigger })
              }, [
                createVNode(_component_UIcon, {
                  name: __props.icon || unref(appConfig).ui.icons.chevronDown,
                  class: ui.value.triggerIcon({ class: (_e = props.ui) == null ? void 0 : _e.triggerIcon })
                }, null, 8, ["name", "class"]),
                createVNode("span", {
                  class: ui.value.triggerLabel({ class: (_f = props.ui) == null ? void 0 : _f.triggerLabel })
                }, toDisplayString(open ? props.closeText || unref(t)("prose.collapsible.closeText") : props.openText || unref(t)("prose.collapsible.openText")) + " " + toDisplayString(props.name || unref(t)("prose.collapsible.name")), 3)
              ], 2)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Collapsible-C7n9XHiy.js.map
