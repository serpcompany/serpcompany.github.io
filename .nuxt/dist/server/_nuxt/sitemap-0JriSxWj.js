import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./PageBody-CXPGavYq.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BH-2VHfz.js";
import { defineComponent, withAsyncContext, computed, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useAsyncData } from "./asyncData-CVyZoMEH.js";
import { q as queryCollection } from "./app-AJxnhns0.js";
import "reka-ui";
import "./tv-Chk-7CNM.js";
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
import "./Button-jux90PMD.js";
import "./useButtonGroup-BAC0w4Mj.js";
import "./index-CmS0GGFw.js";
import "./tv-DTu_ffsP.js";
import "./Link-DvjPaNEy.js";
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
  __name: "sitemap",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: shopPages } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "sitemap-shop",
      () => queryCollection("shop").all()
    )), __temp = await __temp, __restore(), __temp);
    const { data: legalPages } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "sitemap-legal",
      () => queryCollection("legal").all()
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      var _a;
      const cats = /* @__PURE__ */ new Set();
      (_a = shopPages.value) == null ? void 0 : _a.forEach((page) => {
        if (page.category) cats.add(page.category);
      });
      return Array.from(cats);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$1;
      const _component_UPageHeader = _sfc_main$2;
      const _component_UPageBody = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, {
              title: "Sitemap",
              description: "All pages on our website"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f;
                if (_push3) {
                  _push3(`<div class="space-y-8"${_scopeId2}><section${_scopeId2}><h2 class="text-xl font-semibold mb-4"${_scopeId2}>Main Pages</h2><ul class="space-y-2"${_scopeId2}><li${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "text-primary hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Home`);
                      } else {
                        return [
                          createTextVNode("Home")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li><li${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/about",
                    class: "text-primary hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`About`);
                      } else {
                        return [
                          createTextVNode("About")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li><li${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/shop",
                    class: "text-primary hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Shop`);
                      } else {
                        return [
                          createTextVNode("Shop")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li><li${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/legal",
                    class: "text-primary hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Legal`);
                      } else {
                        return [
                          createTextVNode("Legal")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</li></ul></section>`);
                  if ((_a = unref(shopPages)) == null ? void 0 : _a.length) {
                    _push3(`<section${_scopeId2}><h2 class="text-xl font-semibold mb-4"${_scopeId2}>Shop Pages</h2><ul class="space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(shopPages), (page) => {
                      _push3(`<li${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: page._path,
                        class: "text-primary hover:underline"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(page.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(page.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></section>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_b = unref(legalPages)) == null ? void 0 : _b.length) {
                    _push3(`<section${_scopeId2}><h2 class="text-xl font-semibold mb-4"${_scopeId2}>Legal Pages</h2><ul class="space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(legalPages), (page) => {
                      _push3(`<li${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: page._path,
                        class: "text-primary hover:underline"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(page.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(page.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></section>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_c = unref(categories)) == null ? void 0 : _c.length) {
                    _push3(`<section${_scopeId2}><h2 class="text-xl font-semibold mb-4"${_scopeId2}>Categories</h2><ul class="space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(categories), (category) => {
                      _push3(`<li${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
                        class: "text-primary hover:underline"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(category)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(category), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></section>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-8" }, [
                      createVNode("section", null, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Main Pages"),
                        createVNode("ul", { class: "space-y-2" }, [
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/about",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("About")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/shop",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Shop")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/legal",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Legal")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      ((_d = unref(shopPages)) == null ? void 0 : _d.length) ? (openBlock(), createBlock("section", { key: 0 }, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Shop Pages"),
                        createVNode("ul", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(shopPages), (page) => {
                            return openBlock(), createBlock("li", {
                              key: page._path
                            }, [
                              createVNode(_component_NuxtLink, {
                                to: page._path,
                                class: "text-primary hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(page.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      ((_e = unref(legalPages)) == null ? void 0 : _e.length) ? (openBlock(), createBlock("section", { key: 1 }, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Legal Pages"),
                        createVNode("ul", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(legalPages), (page) => {
                            return openBlock(), createBlock("li", {
                              key: page._path
                            }, [
                              createVNode(_component_NuxtLink, {
                                to: page._path,
                                class: "text-primary hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(page.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      ((_f = unref(categories)) == null ? void 0 : _f.length) ? (openBlock(), createBlock("section", { key: 2 }, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Categories"),
                        createVNode("ul", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                            return openBlock(), createBlock("li", { key: category }, [
                              createVNode(_component_NuxtLink, {
                                to: `/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
                                class: "text-primary hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(category), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHeader, {
                title: "Sitemap",
                description: "All pages on our website"
              }),
              createVNode(_component_UPageBody, null, {
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [
                    createVNode("div", { class: "space-y-8" }, [
                      createVNode("section", null, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Main Pages"),
                        createVNode("ul", { class: "space-y-2" }, [
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/about",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("About")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/shop",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Shop")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/legal",
                              class: "text-primary hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Legal")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      ((_a = unref(shopPages)) == null ? void 0 : _a.length) ? (openBlock(), createBlock("section", { key: 0 }, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Shop Pages"),
                        createVNode("ul", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(shopPages), (page) => {
                            return openBlock(), createBlock("li", {
                              key: page._path
                            }, [
                              createVNode(_component_NuxtLink, {
                                to: page._path,
                                class: "text-primary hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(page.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      ((_b = unref(legalPages)) == null ? void 0 : _b.length) ? (openBlock(), createBlock("section", { key: 1 }, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Legal Pages"),
                        createVNode("ul", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(legalPages), (page) => {
                            return openBlock(), createBlock("li", {
                              key: page._path
                            }, [
                              createVNode(_component_NuxtLink, {
                                to: page._path,
                                class: "text-primary hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(page.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      ((_c = unref(categories)) == null ? void 0 : _c.length) ? (openBlock(), createBlock("section", { key: 2 }, [
                        createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Categories"),
                        createVNode("ul", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                            return openBlock(), createBlock("li", { key: category }, [
                              createVNode(_component_NuxtLink, {
                                to: `/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
                                class: "text-primary hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(category), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sitemap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sitemap-0JriSxWj.js.map
