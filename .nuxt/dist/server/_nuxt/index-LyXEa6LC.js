import { _ as _sfc_main$1 } from "./Container-DlwhvMCR.js";
import { _ as _sfc_main$2 } from "./Card-38kBUfTT.js";
import { defineComponent, withAsyncContext, computed, withCtx, createVNode, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
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
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "minimark/hast";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: allContent } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "all-shop-content",
      () => queryCollection("shop").select(["category"]).all()
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      var _a;
      const categoryMap = /* @__PURE__ */ new Map();
      (_a = allContent.value) == null ? void 0 : _a.forEach((item) => {
        if (item.category) {
          const slug = item.category.toLowerCase().replace(/\s+/g, "-");
          if (categoryMap.has(item.category)) {
            categoryMap.get(item.category).count++;
          } else {
            categoryMap.set(item.category, {
              name: item.category,
              slug,
              count: 1
            });
          }
        }
      });
      return Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-12 bg-gray-50">`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h1 class="text-4xl font-bold text-gray-900 mb-4"${_scopeId}>Categories</h1><p class="text-xl text-gray-600"${_scopeId}>Browse content by category</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-4xl font-bold text-gray-900 mb-4" }, "Categories"),
                createVNode("p", { class: "text-xl text-gray-600" }, "Browse content by category")
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
            ssrRenderList(unref(categories), (category) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: category.name,
                to: `/category/${category.slug}`,
                class: "hover:shadow-lg transition-shadow cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-lg font-semibold mb-2"${_scopeId2}>${ssrInterpolate(category.name)}</h3><p class="text-gray-600"${_scopeId2}>${ssrInterpolate(category.count)} items</p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(category.name), 1),
                      createVNode("p", { class: "text-gray-600" }, toDisplayString(category.count) + " items", 1)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                  return openBlock(), createBlock(_component_UCard, {
                    key: category.name,
                    to: `/category/${category.slug}`,
                    class: "hover:shadow-lg transition-shadow cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(category.name), 1),
                      createVNode("p", { class: "text-gray-600" }, toDisplayString(category.count) + " items", 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-LyXEa6LC.js.map
