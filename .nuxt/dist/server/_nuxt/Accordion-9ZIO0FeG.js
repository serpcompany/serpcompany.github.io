import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext, ref, resolveDynamicComponent } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from "reka-ui";
import { reactivePick } from "@vueuse/core";
import { g as get } from "./index-CmS0GGFw.js";
import { t as tv } from "./tv-DTu_ffsP.js";
import { _ as _sfc_main$2 } from "./Icon-D99OMy3A.js";
import { b as useAppConfig } from "../server.mjs";
import { t as transformUI } from "./index-DTPI6KqO.js";
import { t as tv$1 } from "./tv-Chk-7CNM.js";
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
const theme$1 = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: String, required: false },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "type", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.accordion) || {} })({
        disabled: props.disabled
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              var _a2, _b;
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index,
                value: item.value || String(index),
                disabled: item.disabled,
                class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3, _c2, _d2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a5, _b4, _c3, _d3;
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a6, _b5;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$2, {
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span class="${ssrRenderClass(ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a6, _b5;
                                  _push5(ssrRenderComponent(_sfc_main$2, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_c3 = props.ui) == null ? void 0 : _c3.label, (_d3 = item.ui) == null ? void 0 : _d3.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$2, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_c2 = props.ui) == null ? void 0 : _c2.trigger, (_d2 = item.ui) == null ? void 0 : _d2.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$2, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open
                            }, () => {
                              var _a4, _b3;
                              _push4(`<div class="${ssrRenderClass(ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(item.content), 1)
                                    ])
                                  ], 2)
                                ];
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_e = props.ui) == null ? void 0 : _e.header, (_f = item.ui) == null ? void 0 : _f.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$2, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_g = props.ui) == null ? void 0 : _g.content, (_h = item.ui) == null ? void 0 : _h.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                var _a2, _b;
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index,
                  value: item.value || String(index),
                  disabled: item.disabled,
                  class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
                }, {
                  default: withCtx(({ open }) => {
                    var _a3, _b2, _c, _d;
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$2, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$2, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6.0_io_c3rkd63amtmtd64x55vod7vajy/node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5",
    "trigger": "text-base"
  }
};
const _sfc_main = {
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: false, default: "multiple" },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv$1({ extend: tv$1(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.accordion) || {} });
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAccordion = _sfc_main$1;
      _push(ssrRenderComponent(_component_UAccordion, mergeProps({
        type: __props.type,
        items: items.value,
        "unmount-on-hide": false,
        class: props.class,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Accordion-9ZIO0FeG.js.map
