import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./PageBody-CXPGavYq.js";
import { _ as _sfc_main$4 } from "./ContentRenderer-DflLOa0a.js";
import { defineComponent, withAsyncContext, withCtx, unref, createBlock, createCommentVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as useRoute, c as createError } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-CVyZoMEH.js";
import { q as queryCollection } from "./app-AJxnhns0.js";
import "reka-ui";
import "./tv-Chk-7CNM.js";
import "tailwind-variants";
import "./Button-jux90PMD.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "./useButtonGroup-BAC0w4Mj.js";
import "./index-CmS0GGFw.js";
import "./tv-DTu_ffsP.js";
import "./Link-DvjPaNEy.js";
import "./nuxt-link-BH-2VHfz.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "ohash/utils";
import "@vueuse/core";
import "./Icon-D99OMy3A.js";
import "./index-6N6G_8Sn.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./Avatar-BBvgSf-4.js";
import "./virtual_nuxt__Users_devin_repos_projects_nuxt-astronaut-theme_.nuxt_ui-image-component-CX5_T5UE.js";
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
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@unhead+vue@2.0.10_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "@unhead/schema-org/vue";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js";
import "tailwindcss/colors";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      route.path,
      () => queryCollection("legal").path(route.path).first(),
      "$fYrmYpIJ4z"
    )), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page not found"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$1;
      const _component_UPageHeader = _sfc_main$2;
      const _component_UPageBody = _sfc_main$3;
      const _component_ContentRenderer = _sfc_main$4;
      _push(ssrRenderComponent(_component_UPage, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, {
              title: (_a = unref(page)) == null ? void 0 : _a.title,
              description: (_b = unref(page)) == null ? void 0 : _b.excerpt
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageBody, { prose: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(page)) {
                    _push3(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                      key: 0,
                      value: unref(page)
                    }, null, 8, ["value"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHeader, {
                title: (_c = unref(page)) == null ? void 0 : _c.title,
                description: (_d = unref(page)) == null ? void 0 : _d.excerpt
              }, null, 8, ["title", "description"]),
              createVNode(_component_UPageBody, { prose: "" }, {
                default: withCtx(() => [
                  unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                    key: 0,
                    value: unref(page)
                  }, null, 8, ["value"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DO3hvgM3.js.map
