import { mergeModels, useSlots, useModel, computed, ref, unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from "reka-ui";
import { t as tv } from "./tv-Chk-7CNM.js";
import _sfc_main$1 from "./CodeIcon-bgGVDbzE.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import { b as useAppConfig } from "../server.mjs";
import "tailwind-variants";
import "./Icon-D99OMy3A.js";
import "./index-6N6G_8Sn.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./asyncData-CVyZoMEH.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "@vueuse/core";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
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
    "root": "relative group *:not-first:!my-0 *:not-first:!static my-5",
    "list": "relative flex items-center gap-1 border border-muted bg-default border-b-0 rounded-t-md overflow-x-auto p-2",
    "indicator": "absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-elevated rounded-md shadow-xs",
    "trigger": [
      "relative inline-flex items-center gap-1.5 text-default data-[state=active]:text-highlighted hover:bg-elevated/50 px-2 py-1.5 text-sm rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0",
    "triggerLabel": "truncate"
  }
};
const _sfc_main = {
  __name: "CodeGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    defaultValue: { type: String, required: false, default: "0" },
    sync: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const model = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeGroup) || {} })();
    });
    const rerenderCount = ref(1);
    const items = computed(() => {
      var _a, _b;
      rerenderCount.value;
      return ((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.flatMap(transformSlot).filter(Boolean)) || [];
    });
    function transformSlot(slot, index) {
      var _a, _b, _c, _d;
      if (typeof slot.type === "symbol") {
        return (_a = slot.children) == null ? void 0 : _a.map(transformSlot);
      }
      return {
        label: ((_b = slot.props) == null ? void 0 : _b.filename) || ((_c = slot.props) == null ? void 0 : _c.label) || `${index}`,
        icon: (_d = slot.props) == null ? void 0 : _d.icon,
        component: slot
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "default-value": __props.defaultValue,
        "unmount-on-hide": false,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList), {
              class: ui.value.list({ class: (_a2 = props.ui) == null ? void 0 : _a2.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator), {
                    class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator })
                  }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(items.value, (item, index) => {
                    var _a4;
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      value: String(index),
                      class: ui.value.trigger({ class: (_a4 = props.ui) == null ? void 0 : _a4.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a5, _b3, _c, _d;
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            icon: item.icon,
                            filename: item.label,
                            class: ui.value.triggerIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.triggerIcon })
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="${ssrRenderClass(ui.value.triggerLabel({ class: (_b3 = props.ui) == null ? void 0 : _b3.triggerLabel }))}"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                        } else {
                          return [
                            createVNode(_sfc_main$1, {
                              icon: item.icon,
                              filename: item.label,
                              class: ui.value.triggerIcon({ class: (_c = props.ui) == null ? void 0 : _c.triggerIcon })
                            }, null, 8, ["icon", "filename", "class"]),
                            createVNode("span", {
                              class: ui.value.triggerLabel({ class: (_d = props.ui) == null ? void 0 : _d.triggerLabel })
                            }, toDisplayString(item.label), 3)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                      var _a4;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: String(index),
                        class: ui.value.trigger({ class: (_a4 = props.ui) == null ? void 0 : _a4.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b3;
                          return [
                            createVNode(_sfc_main$1, {
                              icon: item.icon,
                              filename: item.label,
                              class: ui.value.triggerIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.triggerIcon })
                            }, null, 8, ["icon", "filename", "class"]),
                            createVNode("span", {
                              class: ui.value.triggerLabel({ class: (_b3 = props.ui) == null ? void 0 : _b3.triggerLabel })
                            }, toDisplayString(item.label), 3)
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(items.value, (item, index) => {
              _push2(ssrRenderComponent(unref(TabsContent), {
                key: index,
                value: String(index),
                "as-child": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                        "hide-header": "",
                        tabindex: "-1"
                      }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(unref(TabsList), {
                class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                      var _a4;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: String(index),
                        class: ui.value.trigger({ class: (_a4 = props.ui) == null ? void 0 : _a4.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b2;
                          return [
                            createVNode(_sfc_main$1, {
                              icon: item.icon,
                              filename: item.label,
                              class: ui.value.triggerIcon({ class: (_a5 = props.ui) == null ? void 0 : _a5.triggerIcon })
                            }, null, 8, ["icon", "filename", "class"]),
                            createVNode("span", {
                              class: ui.value.triggerLabel({ class: (_b2 = props.ui) == null ? void 0 : _b2.triggerLabel })
                            }, toDisplayString(item.label), 3)
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ];
                }),
                _: 1
              }, 8, ["class"]),
              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: String(index),
                  "as-child": ""
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CodeGroup-BQ5wyo8K.js.map
