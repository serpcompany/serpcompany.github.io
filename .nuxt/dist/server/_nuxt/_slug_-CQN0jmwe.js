import { _ as _sfc_main$1 } from "./Container-DlwhvMCR.js";
import { _ as _sfc_main$2 } from "./ContentRenderer-DflLOa0a.js";
import { defineComponent, withAsyncContext, withCtx, unref, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { a as useRoute, c as createError, u as useHead } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-CVyZoMEH.js";
import { q as queryCollection } from "./app-AJxnhns0.js";
import "reka-ui";
import "./tv-DTu_ffsP.js";
import "tailwind-variants";
import "scule";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "property-information";
import "./node-HU5lVDmC.js";
import "minimark/hast";
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
import "@unhead/schema-org/vue";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js";
import "tailwindcss/colors";
import "@iconify/vue";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => queryCollection("shop").path(route.path).first(),
      "$LJJIUq-agy"
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page not found"
      });
    }
    useHead({
      title: page.value.title,
      meta: [
        { name: "description", content: page.value.excerpt },
        { property: "og:title", content: page.value.title },
        { property: "og:description", content: page.value.excerpt },
        { property: "og:image", content: page.value.image }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-12 bg-gray-50">`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}><div class="text-center mb-8"${_scopeId}><h1 class="text-4xl font-bold text-gray-900 mb-4"${_scopeId}>${ssrInterpolate((_a = unref(page)) == null ? void 0 : _a.title)}</h1>`);
            if ((_b = unref(page)) == null ? void 0 : _b.excerpt) {
              _push2(`<p class="text-xl text-gray-600 mb-4"${_scopeId}>${ssrInterpolate(unref(page).excerpt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = unref(page)) == null ? void 0 : _c.category) {
              _push2(`<div class="flex items-center justify-center gap-4 text-sm text-gray-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(page).category)}</span>`);
              if ((_d = unref(page)) == null ? void 0 : _d.publishDate) {
                _push2(`<span${_scopeId}>•</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((_e = unref(page)) == null ? void 0 : _e.publishDate) {
                _push2(`<time${ssrRenderAttr("datetime", unref(page).publishDate)}${_scopeId}>${ssrInterpolate(new Date(unref(page).publishDate).toLocaleDateString())}</time>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if ((_f = unref(page)) == null ? void 0 : _f.image) {
              _push2(`<img${ssrRenderAttr("src", unref(page).image)}${ssrRenderAttr("alt", unref(page).title)} class="w-full h-96 object-cover rounded-lg shadow-lg"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode("div", { class: "text-center mb-8" }, [
                  createVNode("h1", { class: "text-4xl font-bold text-gray-900 mb-4" }, toDisplayString((_g = unref(page)) == null ? void 0 : _g.title), 1),
                  ((_h = unref(page)) == null ? void 0 : _h.excerpt) ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xl text-gray-600 mb-4"
                  }, toDisplayString(unref(page).excerpt), 1)) : createCommentVNode("", true),
                  ((_i = unref(page)) == null ? void 0 : _i.category) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex items-center justify-center gap-4 text-sm text-gray-500"
                  }, [
                    createVNode("span", null, toDisplayString(unref(page).category), 1),
                    ((_j = unref(page)) == null ? void 0 : _j.publishDate) ? (openBlock(), createBlock("span", { key: 0 }, "•")) : createCommentVNode("", true),
                    ((_k = unref(page)) == null ? void 0 : _k.publishDate) ? (openBlock(), createBlock("time", {
                      key: 1,
                      datetime: unref(page).publishDate
                    }, toDisplayString(new Date(unref(page).publishDate).toLocaleDateString()), 9, ["datetime"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]),
                ((_l = unref(page)) == null ? void 0 : _l.image) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(page).image,
                  alt: unref(page).title,
                  class: "w-full h-96 object-cover rounded-lg shadow-lg"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
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
            _push2(`<div class="prose prose-lg max-w-4xl mx-auto"${_scopeId}>`);
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "prose prose-lg max-w-4xl mx-auto" }, [
                unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                  key: 0,
                  value: unref(page)
                }, null, 8, ["value"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/best/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-CQN0jmwe.js.map
