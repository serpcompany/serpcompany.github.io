import { _ as _sfc_main$1 } from "./Container-DlwhvMCR.js";
import { _ as _sfc_main$2 } from "./Card-38kBUfTT.js";
import { defineComponent, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const legalPages = [
      {
        to: "/legal/privacy-policy",
        title: "Privacy Policy",
        description: "How we collect and use your information"
      },
      {
        to: "/legal/terms-conditions",
        title: "Terms & Conditions",
        description: "Terms of use for our website"
      },
      {
        to: "/legal/affiliate-disclosure",
        title: "Affiliate Disclosure",
        description: "Information about our affiliate relationships"
      },
      {
        to: "/legal/dmca",
        title: "DMCA",
        description: "Digital Millennium Copyright Act policy"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-12 bg-gray-50">`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h1 class="text-4xl font-bold text-gray-900 mb-4"${_scopeId}>Legal</h1><p class="text-xl text-gray-600"${_scopeId}>Legal information and policies</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-4xl font-bold text-gray-900 mb-4" }, "Legal"),
                createVNode("p", { class: "text-xl text-gray-600" }, "Legal information and policies")
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
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"${_scopeId}><!--[-->`);
            ssrRenderList(legalPages, (page) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: page.to,
                to: page.to,
                class: "hover:shadow-lg transition-shadow"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-lg font-semibold mb-2"${_scopeId2}>${ssrInterpolate(page.title)}</h3><p class="text-gray-600"${_scopeId2}>${ssrInterpolate(page.description)}</p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(page.title), 1),
                      createVNode("p", { class: "text-gray-600" }, toDisplayString(page.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" }, [
                (openBlock(), createBlock(Fragment, null, renderList(legalPages, (page) => {
                  return createVNode(_component_UCard, {
                    key: page.to,
                    to: page.to,
                    class: "hover:shadow-lg transition-shadow"
                  }, {
                    default: withCtx(() => [
                      createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(page.title), 1),
                      createVNode("p", { class: "text-gray-600" }, toDisplayString(page.description), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-ByvJQxoz.js.map
