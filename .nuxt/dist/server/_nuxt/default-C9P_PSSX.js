import { _ as _sfc_main$4 } from "./Container-DlwhvMCR.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BH-2VHfz.js";
import { _ as _sfc_main$5 } from "./Button-jux90PMD.js";
import { defineComponent, ref, withCtx, createVNode, createTextVNode, toDisplayString, unref, createBlock, openBlock, Fragment, renderList, useSSRContext, useSlots, computed, mergeProps, createCommentVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { useForwardProps, Separator } from "reka-ui";
import { reactivePick } from "@vueuse/core";
import { t as tv } from "./tv-DTu_ffsP.js";
import { _ as _sfc_main$6 } from "./Icon-D99OMy3A.js";
import { _ as _sfc_main$7 } from "./Avatar-BBvgSf-4.js";
import { b as useAppConfig, _ as _export_sfc } from "../server.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "./useButtonGroup-BAC0w4Mj.js";
import "./index-CmS0GGFw.js";
import "./Link-DvjPaNEy.js";
import "ohash/utils";
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
import "./virtual_nuxt__Users_devin_repos_projects_nuxt-astronaut-theme_.nuxt_ui-image-component-CX5_T5UE.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const links = [
      {
        label: "Home",
        to: "/"
      },
      {
        label: "Shop",
        to: "/shop"
      },
      {
        label: "About",
        to: "/about"
      },
      {
        label: "Legal",
        to: "/legal"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = _sfc_main$5;
      _push(`<header${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<strong${_scopeId2}>SERP Astronaut</strong>`);
                } else {
                  return [
                    createVNode("strong", null, "SERP Astronaut")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<nav class="hidden md:flex gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(links, (link) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: link.to,
                to: link.to,
                variant: "link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></nav>`);
            _push2(ssrRenderComponent(_component_UButton, {
              class: "md:hidden",
              variant: "ghost",
              icon: "i-heroicons-bars-3",
              onClick: ($event) => mobileMenuOpen.value = !unref(mobileMenuOpen)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between py-4" }, [
                createVNode(_component_NuxtLink, { to: "/" }, {
                  default: withCtx(() => [
                    createVNode("strong", null, "SERP Astronaut")
                  ]),
                  _: 1
                }),
                createVNode("nav", { class: "hidden md:flex gap-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(links, (link) => {
                    return createVNode(_component_UButton, {
                      key: link.to,
                      to: link.to,
                      variant: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 64))
                ]),
                createVNode(_component_UButton, {
                  class: "md:hidden",
                  variant: "ghost",
                  icon: "i-heroicons-bars-3",
                  onClick: ($event) => mobileMenuOpen.value = !unref(mobileMenuOpen)
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden">`);
        _push(ssrRenderComponent(_component_UContainer, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<nav class="py-4"${_scopeId}><!--[-->`);
              ssrRenderList(links, (link) => {
                _push2(ssrRenderComponent(_component_UButton, {
                  key: link.to,
                  to: link.to,
                  variant: "link",
                  class: "block w-full text-left",
                  onClick: ($event) => mobileMenuOpen.value = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></nav>`);
            } else {
              return [
                createVNode("nav", { class: "py-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(links, (link) => {
                    return createVNode(_component_UButton, {
                      key: link.to,
                      to: link.to,
                      variant: "link",
                      class: "block w-full text-left",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "onClick"]);
                  }), 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-medium text-default flex",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xs",
    "label": "text-sm"
  },
  "variants": {
    "color": {
      "primary": {
        "border": "border-primary"
      },
      "secondary": {
        "border": "border-secondary"
      },
      "success": {
        "border": "border-success"
      },
      "info": {
        "border": "border-info"
      },
      "warning": {
        "border": "border-warning"
      },
      "error": {
        "border": "border-error"
      },
      "neutral": {
        "border": "border-default"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "border": "border-t"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "border": "border-t-[2px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "border": "border-t-[3px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "border": "border-t-[4px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "border": "border-t-[5px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "border": "border-s"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "border": "border-s-[2px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "border": "border-s-[3px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "border": "border-s-[4px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "border": "border-s-[5px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral",
    "size": "xs",
    "type": "solid"
  }
};
const _sfc_main$2 = {
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    type: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    decorative: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "decorative", "orientation"));
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.separator) || {} })({
        color: props.color,
        orientation: props.orientation,
        size: props.size,
        type: props.type
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.border({ class: (_a2 = props.ui) == null ? void 0 : _a2.border }))}"${_scopeId}></div>`);
            if (__props.label || __props.icon || __props.avatar || !!slots.default) {
              _push2(`<!--[--><div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                var _a3, _b2, _c2, _d2;
                if (__props.label) {
                  _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
                } else if (__props.icon) {
                  _push2(ssrRenderComponent(_sfc_main$6, {
                    name: __props.icon,
                    class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                  }, null, _parent2, _scopeId));
                } else if (__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$7, mergeProps({
                    size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                  }, __props.avatar, {
                    class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.border({ class: (_c = props.ui) == null ? void 0 : _c.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.border({ class: (_d = props.ui) == null ? void 0 : _d.border })
              }, null, 2),
              __props.label || __props.icon || __props.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_e = props.ui) == null ? void 0 : _e.container })
                }, [
                  renderSlot(_ctx.$slots, "default", {}, () => {
                    var _a3, _b2, _c2, _d2;
                    return [
                      __props.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label })
                      }, toDisplayString(__props.label), 3)) : __props.icon ? (openBlock(), createBlock(_sfc_main$6, {
                        key: 1,
                        name: __props.icon,
                        class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                      }, null, 8, ["name", "class"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$7, mergeProps({
                        key: 2,
                        size: ((_c2 = props.ui) == null ? void 0 : _c2.avatarSize) || ui.value.avatarSize()
                      }, __props.avatar, {
                        class: ui.value.avatar({ class: (_d2 = props.ui) == null ? void 0 : _d2.avatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  })
                ], 2),
                createVNode("div", {
                  class: ui.value.border({ class: (_f = props.ui) == null ? void 0 : _f.border })
                }, null, 2)
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6.0_io_c3rkd63amtmtd64x55vod7vajy/node_modules/@nuxt/ui/dist/runtime/components/Separator.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const productLinks = [
      { label: "Shop", to: "/shop" },
      { label: "Categories", to: "/category" }
    ];
    const legalLinks = [
      { label: "Privacy Policy", to: "/legal/privacy-policy" },
      { label: "Terms & Conditions", to: "/legal/terms-conditions" },
      { label: "Affiliate Disclosure", to: "/legal/affiliate-disclosure" },
      { label: "DMCA", to: "/legal/dmca" }
    ];
    const resourceLinks = [
      { label: "About", to: "/about" },
      { label: "Sitemap", to: "/sitemap" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$4;
      const _component_UButton = _sfc_main$5;
      const _component_USeparator = _sfc_main$2;
      _push(`<footer${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div${_scopeId}><h3 class="font-semibold mb-4"${_scopeId}>Product</h3><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(productLinks, (link) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: link.to,
                to: link.to,
                variant: "link",
                size: "sm",
                class: "block"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div${_scopeId}><h3 class="font-semibold mb-4"${_scopeId}>Legal</h3><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(legalLinks, (link) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: link.to,
                to: link.to,
                variant: "link",
                size: "sm",
                class: "block"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div${_scopeId}><h3 class="font-semibold mb-4"${_scopeId}>Resources</h3><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(resourceLinks, (link) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: link.to,
                to: link.to,
                variant: "link",
                size: "sm",
                class: "block"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
            _push2(ssrRenderComponent(_component_USeparator, { class: "my-8" }, null, _parent2, _scopeId));
            _push2(`<p class="text-center"${_scopeId}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SERP Astronaut Theme. All rights reserved. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-semibold mb-4" }, "Product"),
                    createVNode("div", { class: "space-y-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(productLinks, (link) => {
                        return createVNode(_component_UButton, {
                          key: link.to,
                          to: link.to,
                          variant: "link",
                          size: "sm",
                          class: "block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-semibold mb-4" }, "Legal"),
                    createVNode("div", { class: "space-y-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(legalLinks, (link) => {
                        return createVNode(_component_UButton, {
                          key: link.to,
                          to: link.to,
                          variant: "link",
                          size: "sm",
                          class: "block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-semibold mb-4" }, "Resources"),
                    createVNode("div", { class: "space-y-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(resourceLinks, (link) => {
                        return createVNode(_component_UButton, {
                          key: link.to,
                          to: link.to,
                          variant: "link",
                          size: "sm",
                          class: "block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode(_component_USeparator, { class: "my-8" }),
                createVNode("p", { class: "text-center" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " SERP Astronaut Theme. All rights reserved. ", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$3;
  const _component_AppFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex-grow">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-C9P_PSSX.js.map
