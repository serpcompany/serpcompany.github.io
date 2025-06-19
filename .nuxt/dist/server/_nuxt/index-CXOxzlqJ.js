import { _ as _sfc_main$1 } from "./Container-DlwhvMCR.js";
import { _ as _sfc_main$2 } from "./Card-38kBUfTT.js";
import { _ as _sfc_main$4 } from "./Button-jux90PMD.js";
import { _ as _sfc_main$3 } from "./Badge-yI-sKxRS.js";
import { defineComponent, withAsyncContext, withCtx, unref, createVNode, toDisplayString, createTextVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
import "./useButtonGroup-BAC0w4Mj.js";
import "./index-CmS0GGFw.js";
import "./Link-DvjPaNEy.js";
import "./nuxt-link-BH-2VHfz.js";
import "ohash/utils";
import "@vueuse/core";
import "./Icon-D99OMy3A.js";
import "./index-6N6G_8Sn.js";
import "@iconify/utils/lib/css/icon";
import "./Avatar-BBvgSf-4.js";
import "./virtual_nuxt__Users_devin_repos_projects_nuxt-astronaut-theme_.nuxt_ui-image-component-CX5_T5UE.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "minimark/hast";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data: recentContent, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "home-content",
      () => queryCollection("shop").limit(12).order("publishDate", "DESC").all()
    )), __temp = await __temp, __restore(), __temp);
    console.log("Query error:", error.value);
    console.log("Recent content:", recentContent.value);
    console.log("Content count:", (_a = recentContent.value) == null ? void 0 : _a.length);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_UButton = _sfc_main$4;
      const _component_UBadge = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-12"${_scopeId}><h1 class="text-4xl font-bold mb-4"${_scopeId}>Welcome to SERP Astronaut Theme</h1><p class="text-xl"${_scopeId}>A flexible multi-purpose website template</p></div><h2 class="text-2xl font-bold mb-8"${_scopeId}>Recent Content</h2>`);
            if (!unref(recentContent) || unref(recentContent).length === 0) {
              _push2(`<div class="text-center py-8"${_scopeId}><p${_scopeId}>No content found. Check console for debug info.</p></div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(recentContent), (item) => {
                _push2(ssrRenderComponent(_component_UCard, {
                  key: item._path
                }, {
                  header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="font-semibold"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        to: item._path,
                        variant: "link",
                        class: "p-0"
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
                      _push3(`</h3>`);
                    } else {
                      return [
                        createVNode("h3", { class: "font-semibold" }, [
                          createVNode(_component_UButton, {
                            to: item._path,
                            variant: "link",
                            class: "p-0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ];
                    }
                  }),
                  footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center justify-between"${_scopeId2}>`);
                      if (item.category) {
                        _push3(ssrRenderComponent(_component_UBadge, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(item.category)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.category), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(_component_UButton, {
                        to: item._path,
                        variant: "link",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Read more → `);
                          } else {
                            return [
                              createTextVNode(" Read more → ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          item.category ? (openBlock(), createBlock(_component_UBadge, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.category), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode(_component_UButton, {
                            to: item._path,
                            variant: "link",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Read more → ")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(item.excerpt)}</p>`);
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(item.excerpt), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              createVNode("div", { class: "text-center mb-12" }, [
                createVNode("h1", { class: "text-4xl font-bold mb-4" }, "Welcome to SERP Astronaut Theme"),
                createVNode("p", { class: "text-xl" }, "A flexible multi-purpose website template")
              ]),
              createVNode("h2", { class: "text-2xl font-bold mb-8" }, "Recent Content"),
              !unref(recentContent) || unref(recentContent).length === 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center py-8"
              }, [
                createVNode("p", null, "No content found. Check console for debug info.")
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(recentContent), (item) => {
                  return openBlock(), createBlock(_component_UCard, {
                    key: item._path
                  }, {
                    header: withCtx(() => [
                      createVNode("h3", { class: "font-semibold" }, [
                        createVNode(_component_UButton, {
                          to: item._path,
                          variant: "link",
                          class: "p-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ]),
                    footer: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        item.category ? (openBlock(), createBlock(_component_UBadge, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.category), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createVNode(_component_UButton, {
                          to: item._path,
                          variant: "link",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Read more → ")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("p", null, toDisplayString(item.excerpt), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CXOxzlqJ.js.map
