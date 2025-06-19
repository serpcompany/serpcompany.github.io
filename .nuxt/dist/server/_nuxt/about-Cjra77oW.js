import { _ as _sfc_main$1 } from "./Container-DlwhvMCR.js";
import { _ as _sfc_main$2 } from "./ContentRenderer-DflLOa0a.js";
import { defineComponent, withAsyncContext, withCtx, unref, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useAsyncData } from "./asyncData-CVyZoMEH.js";
import { q as queryCollection } from "./app-AJxnhns0.js";
import { c as createError } from "../server.mjs";
import "reka-ui";
import "./tv-DTu_ffsP.js";
import "tailwind-variants";
import "scule";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "property-information";
import "./node-HU5lVDmC.js";
import "minimark/hast";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@unhead+vue@2.0.10_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "@unhead/schema-org/vue";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js";
import "tailwindcss/colors";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "about",
      () => queryCollection("pages").where("_path", "/about").first()
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page not found"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-12 bg-gray-50">`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h1 class="text-4xl font-bold text-gray-900 mb-4"${_scopeId}>${ssrInterpolate((_a = unref(page)) == null ? void 0 : _a.title)}</h1>`);
            if ((_b = unref(page)) == null ? void 0 : _b.excerpt) {
              _push2(`<p class="text-xl text-gray-600"${_scopeId}>${ssrInterpolate(unref(page).excerpt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-4xl font-bold text-gray-900 mb-4" }, toDisplayString((_c = unref(page)) == null ? void 0 : _c.title), 1),
                ((_d = unref(page)) == null ? void 0 : _d.excerpt) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-xl text-gray-600"
                }, toDisplayString(unref(page).excerpt), 1)) : createCommentVNode("", true)
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
            _push2(`<div class="prose prose-lg mx-auto"${_scopeId}>`);
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "prose prose-lg mx-auto" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-Cjra77oW.js.map
