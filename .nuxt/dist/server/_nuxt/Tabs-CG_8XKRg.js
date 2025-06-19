import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext, mergeModels, useModel, ref, resolveDynamicComponent } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { useForwardPropsEmits, TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from "reka-ui";
import { reactivePick } from "@vueuse/core";
import { g as get } from "./index-CmS0GGFw.js";
import { t as tv } from "./tv-DTu_ffsP.js";
import { _ as _sfc_main$2 } from "./Icon-D99OMy3A.js";
import { _ as _sfc_main$3 } from "./Avatar-BBvgSf-4.js";
import { b as useAppConfig } from "../server.mjs";
import { t as transformUI } from "./index-DTPI6KqO.js";
import { t as tv$1 } from "./tv-Chk-7CNM.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "tailwind-variants";
import "./index-6N6G_8Sn.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./asyncData-CVyZoMEH.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
import "./virtual_nuxt__Users_devin_repos_projects_nuxt-astronaut-theme_.nuxt_ui-image-component-CX5_T5UE.js";
const theme$1 = {
  "slots": {
    "root": "flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": [
      "group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "content": "focus:outline-none w-full",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "truncate"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": {
        "list": "bg-elevated rounded-lg",
        "trigger": "grow",
        "indicator": "rounded-md shadow-xs"
      },
      "link": {
        "list": "border-default",
        "indicator": "rounded-full",
        "trigger": "focus:outline-none"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xs": {
        "trigger": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "pill",
      "class": {
        "indicator": "inset-y-1"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "pill",
      "class": {
        "indicator": "inset-x-1",
        "list": "items-center"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "class": {
        "indicator": "bg-primary",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "class": {
        "indicator": "bg-secondary",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "class": {
        "indicator": "bg-success",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "class": {
        "indicator": "bg-info",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "class": {
        "indicator": "bg-warning",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "class": {
        "indicator": "bg-error",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "class": {
        "indicator": "bg-inverted",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "class": {
        "indicator": "bg-primary",
        "trigger": "data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": {
        "indicator": "bg-secondary",
        "trigger": "data-[state=active]:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "class": {
        "indicator": "bg-success",
        "trigger": "data-[state=active]:text-success focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "class": {
        "indicator": "bg-info",
        "trigger": "data-[state=active]:text-info focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "class": {
        "indicator": "bg-warning",
        "trigger": "data-[state=active]:text-warning focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "class": {
        "indicator": "bg-error",
        "trigger": "data-[state=active]:text-error focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": {
        "indicator": "bg-inverted",
        "trigger": "data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "pill",
    "size": "md"
  }
};
const _sfc_main$1 = {
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    content: { type: Boolean, required: false, default: true },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultValue: { type: null, required: false, default: "0" },
    modelValue: { type: null, required: false },
    activationMode: { type: String, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "orientation", "activationMode", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.tabs) || {} })({
        color: props.color,
        variant: props.variant,
        size: props.size,
        orientation: props.orientation
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(rootProps), {
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
                  ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.items, (item, index) => {
                    var _a4, _b3;
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      value: item.value || String(index),
                      disabled: item.disabled,
                      class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger] })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a5, _b4, _c, _d;
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index
                          }, () => {
                            var _a6, _b5, _c2, _d2, _e;
                            if (item.icon) {
                              _push4(ssrRenderComponent(_sfc_main$2, {
                                name: item.icon,
                                class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item.ui) == null ? void 0 : _b5.leadingIcon] })
                              }, null, _parent4, _scopeId3));
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(_sfc_main$3, mergeProps({
                                size: ((_c2 = props.ui) == null ? void 0 : _c2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                class: ui.value.leadingAvatar({ class: [(_d2 = props.ui) == null ? void 0 : _d2.leadingAvatar, (_e = item.ui) == null ? void 0 : _e.leadingAvatar] })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, props.labelKey) || !!slots.default) {
                            _push4(`<span class="${ssrRenderClass(ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index
                          }, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a6, _b5, _c2, _d2, _e;
                              return [
                                item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item.ui) == null ? void 0 : _b5.leadingIcon] })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                  key: 1,
                                  size: ((_c2 = props.ui) == null ? void 0 : _c2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: [(_d2 = props.ui) == null ? void 0 : _d2.leadingAvatar, (_e = item.ui) == null ? void 0 : _e.leadingAvatar] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: [(_c = props.ui) == null ? void 0 : _c.label, (_d = item.ui) == null ? void 0 : _d.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, null, 8, ["class"]),
                    renderSlot(_ctx.$slots, "list-leading"),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                      var _a4, _b3;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger] })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b4;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a6, _b5, _c, _d, _e;
                              return [
                                item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item.ui) == null ? void 0 : _b5.leadingIcon] })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                  key: 1,
                                  size: ((_c = props.ui) == null ? void 0 : _c.leadingAvatarSize) || ui.value.leadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: [(_d = props.ui) == null ? void 0 : _d.leadingAvatar, (_e = item.ui) == null ? void 0 : _e.leadingAvatar] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128)),
                    renderSlot(_ctx.$slots, "list-trailing")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!__props.content) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.items, (item, index) => {
                var _a3, _b2;
                _push2(ssrRenderComponent(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: [(_a3 = props.ui) == null ? void 0 : _a3.content, (_b2 = item.ui) == null ? void 0 : _b2.content, item.class] })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
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
                    renderSlot(_ctx.$slots, "list-leading"),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                      var _a4, _b2;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b2 = item.ui) == null ? void 0 : _b2.trigger] })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b3;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a6, _b4, _c, _d, _e;
                              return [
                                item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b4 = item.ui) == null ? void 0 : _b4.leadingIcon] })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                  key: 1,
                                  size: ((_c = props.ui) == null ? void 0 : _c.leadingAvatarSize) || ui.value.leadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: [(_d = props.ui) == null ? void 0 : _d.leadingAvatar, (_e = item.ui) == null ? void 0 : _e.leadingAvatar] })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b3 = item.ui) == null ? void 0 : _b3.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128)),
                    renderSlot(_ctx.$slots, "list-trailing")
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!__props.content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.items, (item, index) => {
                var _a3, _b2;
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: [(_a3 = props.ui) == null ? void 0 : _a3.content, (_b2 = item.ui) == null ? void 0 : _b2.content, item.class] })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6.0_io_c3rkd63amtmtd64x55vod7vajy/node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5 gap-4"
  }
};
const _sfc_main = {
  __name: "Tabs",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    defaultValue: { type: String, required: false, default: "0" },
    sync: { type: String, required: false },
    hash: { type: String, required: false },
    class: { type: null, required: false }
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
      return tv$1({ extend: tv$1(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.tabs) || {} });
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
        index,
        label: ((_b = slot.props) == null ? void 0 : _b.label) || `${index}`,
        description: (_c = slot.props) == null ? void 0 : _c.description,
        icon: (_d = slot.props) == null ? void 0 : _d.icon,
        component: slot
      };
    }
    async function onUpdateModelValue() {
      if (props.hash) {
        const hash = props.hash.startsWith("#") ? props.hash : `#${props.hash}`;
        setTimeout(() => {
          var _a;
          (_a = (void 0).querySelector(hash)) == null ? void 0 : _a.scrollIntoView();
        }, 200);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = _sfc_main$1;
      _push(ssrRenderComponent(_component_UTabs, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onUpdateModelValue],
        color: "primary",
        variant: "link",
        items: items.value,
        class: props.class,
        "unmount-on-hide": false,
        ui: unref(transformUI)(ui.value())
      }, _attrs), {
        content: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.component), null, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(item.component)))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Tabs-CG_8XKRg.js.map
