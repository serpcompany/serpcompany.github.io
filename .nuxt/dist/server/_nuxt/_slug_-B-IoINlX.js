import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7 } from "./PageBody-CXPGavYq.js";
import { computed, unref, mergeProps, withCtx, renderSlot, useSSRContext, useSlots, ref, watch, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, defineComponent, withAsyncContext, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Primitive } from "reka-ui";
import { t as tv } from "./tv-Chk-7CNM.js";
import { b as useAppConfig, a as useRoute, c as createError } from "../server.mjs";
import { _ as _sfc_main$3 } from "./Icon-D99OMy3A.js";
import { _ as _sfc_main$4 } from "./Link-DvjPaNEy.js";
import { pausableFilter, useMouseInElement } from "@vueuse/core";
import { g as getSlotChildrenText } from "./index-DTPI6KqO.js";
import { u as useAsyncData } from "./asyncData-CVyZoMEH.js";
import { q as queryCollection } from "./app-AJxnhns0.js";
import "./Button-jux90PMD.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "./useButtonGroup-BAC0w4Mj.js";
import "./index-CmS0GGFw.js";
import "./tv-DTu_ffsP.js";
import "tailwind-variants";
import "./Avatar-BBvgSf-4.js";
import "./virtual_nuxt__Users_devin_repos_projects_nuxt-astronaut-theme_.nuxt_ui-image-component-CX5_T5UE.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
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
import "@iconify/vue";
import "./index-6N6G_8Sn.js";
import "@iconify/utils/lib/css/icon";
import "./nuxt-link-BH-2VHfz.js";
import "ohash/utils";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "minimark/hast";
const theme$1 = {
  "base": "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
};
const _sfc_main$2 = {
  __name: "PageGrid",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageGrid) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/PageGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative flex rounded-lg",
    "spotlight": "absolute inset-0 rounded-[inherit] pointer-events-none bg-default/90",
    "container": "relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6",
    "wrapper": "flex flex-col flex-1 items-start",
    "header": "mb-4",
    "body": "flex-1",
    "footer": "pt-4 mt-auto",
    "leading": "inline-flex items-center mb-2.5",
    "leadingIcon": "size-5 shrink-0 text-primary",
    "title": "text-base text-pretty font-semibold text-highlighted",
    "description": "text-[15px] text-pretty"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center"
      },
      "vertical": {
        "container": ""
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted",
        "title": "text-inverted",
        "description": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "description": "text-toned"
      },
      "ghost": {
        "description": "text-muted"
      },
      "naked": {
        "container": "p-0 sm:p-0",
        "description": "text-muted"
      }
    },
    "to": {
      "true": {
        "root": [
          "transition"
        ]
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "spotlight": {
      "true": {
        "root": "[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]"
      }
    },
    "spotlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "variant": "solid",
      "to": true,
      "class": {
        "root": "hover:bg-inverted/90"
      }
    },
    {
      "variant": "outline",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "variant": "soft",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "highlight": false,
      "class": {
        "root": "hover:ring-accented"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "class": {
        "root": "ring-primary"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "class": {
        "root": "ring-secondary"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "class": {
        "root": "ring-success"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "class": {
        "root": "ring-info"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "class": {
        "root": "ring-warning"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "class": {
        "root": "ring-error"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "class": {
        "root": "ring-inverted"
      }
    },
    {
      "spotlightColor": "primary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-primary)]"
      }
    },
    {
      "spotlightColor": "secondary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-secondary)]"
      }
    },
    {
      "spotlightColor": "success",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-success)]"
      }
    },
    {
      "spotlightColor": "info",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-info)]"
      }
    },
    {
      "spotlightColor": "warning",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-warning)]"
      }
    },
    {
      "spotlightColor": "error",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-error)]"
      }
    },
    {
      "spotlightColor": "neutral",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-bg-inverted)]"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline",
    "highlightColor": "primary",
    "spotlightColor": "primary"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "PageCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    icon: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    spotlight: { type: Boolean, required: false },
    spotlightColor: { type: null, required: false },
    variant: { type: null, required: false },
    to: { type: null, required: false },
    target: { type: null, required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const cardRef = ref();
    const motionControl = pausableFilter();
    const appConfig = useAppConfig();
    const { elementX, elementY } = useMouseInElement(cardRef, {
      eventFilter: motionControl.eventFilter
    });
    const spotlight = computed(() => props.spotlight && (elementX.value !== 0 || elementY.value !== 0));
    watch(() => props.spotlight, (value) => {
      if (value) {
        motionControl.resume();
      } else {
        motionControl.pause();
      }
    }, { immediate: true });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.pageCard) || {} })({
        orientation: props.orientation,
        reverse: props.reverse,
        variant: props.variant,
        to: !!props.to || !!props.onClick,
        title: !!props.title || !!slots.title,
        highlight: props.highlight,
        highlightColor: props.highlightColor,
        spotlight: spotlight.value,
        spotlightColor: props.spotlightColor
      });
    });
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Card link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = _sfc_main$3;
      const _component_ULink = _sfc_main$4;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] }),
        style: spotlight.value && { "--spotlight-x": `${unref(elementX)}px`, "--spotlight-y": `${unref(elementY)}px` },
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            if (props.spotlight) {
              _push2(`<div class="${ssrRenderClass(ui.value.spotlight({ class: (_a2 = props.ui) == null ? void 0 : _a2.spotlight }))}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
            if (!!slots.header || !!slots.body || (__props.icon || !!slots.leading) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (!!slots.header) {
                _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.icon || !!slots.leading) {
                _push2(`<div class="${ssrRenderClass(ui.value.leading({ class: (_e = props.ui) == null ? void 0 : _e.leading }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                  var _a3;
                  if (__props.icon) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: __props.icon,
                      class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_f = props.ui) == null ? void 0 : _f.body }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                  var _a3, _b2;
                  if (__props.title || !!slots.title) {
                    _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push2(`${ssrInterpolate(__props.title)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (__props.description || !!slots.description) {
                    _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push2(`${ssrInterpolate(__props.description)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.footer) {
                _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_g = props.ui) == null ? void 0 : _g.footer }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_component_ULink, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
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
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.spotlight ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.spotlight({ class: (_h = props.ui) == null ? void 0 : _h.spotlight })
              }, null, 2)) : createCommentVNode("", true),
              createVNode("div", {
                class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
              }, [
                !!slots.header || !!slots.body || (__props.icon || !!slots.leading) || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.footer ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.wrapper({ class: (_j = props.ui) == null ? void 0 : _j.wrapper })
                }, [
                  !!slots.header ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.header({ class: (_k = props.ui) == null ? void 0 : _k.header })
                  }, [
                    renderSlot(_ctx.$slots, "header")
                  ], 2)) : createCommentVNode("", true),
                  __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: ui.value.leading({ class: (_l = props.ui) == null ? void 0 : _l.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", {}, () => {
                      var _a3;
                      return [
                        __props.icon ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: __props.icon,
                          class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true),
                  !!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: ui.value.body({ class: (_m = props.ui) == null ? void 0 : _m.body })
                  }, [
                    renderSlot(_ctx.$slots, "body", {}, () => {
                      var _a3, _b2;
                      return [
                        __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true),
                  !!slots.footer ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: ui.value.footer({ class: (_n = props.ui) == null ? void 0 : _n.footer })
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2),
              __props.to ? (openBlock(), createBlock(_component_ULink, mergeProps({
                key: 1,
                "aria-label": ariaLabel.value
              }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx(() => [
                  createVNode("span", {
                    class: "absolute inset-0",
                    "aria-hidden": "true"
                  })
                ]),
                _: 1
              }, 16, ["aria-label"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/PageCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const categoryName = route.params.slug;
    const { data: categoryContent } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `category-${categoryName}`,
      () => queryCollection("shop").where("category", { $icontains: categoryName.replace("-", " ") }).order("publishDate", "DESC").all()
    )), __temp = await __temp, __restore(), __temp);
    if (!((_a = categoryContent.value) == null ? void 0 : _a.length)) {
      throw createError({
        statusCode: 404,
        statusMessage: "Category not found"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$5;
      const _component_UPageHeader = _sfc_main$6;
      const _component_UPageBody = _sfc_main$7;
      const _component_UPageGrid = _sfc_main$2;
      const _component_UPageCard = _sfc_main$1;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, {
              title: `Category: ${unref(categoryName)}`,
              description: `Browse all content in the ${unref(categoryName)} category`
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UPageGrid, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(categoryContent), (item) => {
                          _push4(ssrRenderComponent(_component_UPageCard, {
                            key: item._path,
                            to: item._path,
                            title: item.title,
                            description: item.excerpt,
                            ui: { base: "hover:shadow-lg transition-shadow" }
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(categoryContent), (item) => {
                            return openBlock(), createBlock(_component_UPageCard, {
                              key: item._path,
                              to: item._path,
                              title: item.title,
                              description: item.excerpt,
                              ui: { base: "hover:shadow-lg transition-shadow" }
                            }, null, 8, ["to", "title", "description"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UPageGrid, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categoryContent), (item) => {
                          return openBlock(), createBlock(_component_UPageCard, {
                            key: item._path,
                            to: item._path,
                            title: item.title,
                            description: item.excerpt,
                            ui: { base: "hover:shadow-lg transition-shadow" }
                          }, null, 8, ["to", "title", "description"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHeader, {
                title: `Category: ${unref(categoryName)}`,
                description: `Browse all content in the ${unref(categoryName)} category`
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_UPageGrid, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categoryContent), (item) => {
                        return openBlock(), createBlock(_component_UPageCard, {
                          key: item._path,
                          to: item._path,
                          title: item.title,
                          description: item.excerpt,
                          ui: { base: "hover:shadow-lg transition-shadow" }
                        }, null, 8, ["to", "title", "description"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-B-IoINlX.js.map
