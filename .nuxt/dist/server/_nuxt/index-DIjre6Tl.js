import { _ as _sfc_main$1 } from "./Container-DlwhvMCR.js";
import { _ as _sfc_main$2 } from "./Card-38kBUfTT.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BH-2VHfz.js";
import { defineComponent, withAsyncContext, withCtx, createVNode, unref, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useAsyncData } from "./asyncData-CVyZoMEH.js";
import { q as queryCollection } from "./app-AJxnhns0.js";
import "reka-ui";
import "./tv-DTu_ffsP.js";
import "tailwind-variants";
import "../server.mjs";
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
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "minimark/hast";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: shopContent } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "shop-content",
      () => queryCollection("shop").order("publishDate", "DESC").all()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-12 bg-gray-50">`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h1 class="text-4xl font-bold text-gray-900 mb-4"${_scopeId}>Shop</h1><p class="text-xl text-gray-600"${_scopeId}>Browse our collection of curated content</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-4xl font-bold text-gray-900 mb-4" }, "Shop"),
                createVNode("p", { class: "text-xl text-gray-600" }, "Browse our collection of curated content")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(shopContent), (item) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: item._path,
                class: "hover:shadow-lg transition-shadow"
              }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (item.image) {
                      _push3(`<img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="w-full h-48 object-cover rounded-t-lg"${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      item.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: item.image,
                        alt: item.title,
                        class: "w-full h-48 object-cover rounded-t-lg"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between"${_scopeId2}>`);
                    if (item.category) {
                      _push3(`<span class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(item.category)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: item._path,
                      class: "text-primary hover:underline text-sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` View Details → `);
                        } else {
                          return [
                            createTextVNode(" View Details → ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        item.category ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-sm text-gray-500"
                        }, toDisplayString(item.category), 1)) : createCommentVNode("", true),
                        createVNode(_component_NuxtLink, {
                          to: item._path,
                          class: "text-primary hover:underline text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View Details → ")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-lg font-semibold mb-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: item._path,
                      class: "text-gray-900 hover:text-primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h3><p class="text-gray-600 mb-4"${_scopeId2}>${ssrInterpolate(item.excerpt)}</p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-lg font-semibold mb-2" }, [
                        createVNode(_component_NuxtLink, {
                          to: item._path,
                          class: "text-gray-900 hover:text-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      createVNode("p", { class: "text-gray-600 mb-4" }, toDisplayString(item.excerpt), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(shopContent), (item) => {
                  return openBlock(), createBlock(_component_UCard, {
                    key: item._path,
                    class: "hover:shadow-lg transition-shadow"
                  }, {
                    header: withCtx(() => [
                      item.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: item.image,
                        alt: item.title,
                        class: "w-full h-48 object-cover rounded-t-lg"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ]),
                    footer: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        item.category ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-sm text-gray-500"
                        }, toDisplayString(item.category), 1)) : createCommentVNode("", true),
                        createVNode(_component_NuxtLink, {
                          to: item._path,
                          class: "text-primary hover:underline text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View Details → ")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("h3", { class: "text-lg font-semibold mb-2" }, [
                        createVNode(_component_NuxtLink, {
                          to: item._path,
                          class: "text-gray-900 hover:text-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      createVNode("p", { class: "text-gray-600 mb-4" }, toDisplayString(item.excerpt), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DIjre6Tl.js.map
