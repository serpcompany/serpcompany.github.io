import __nuxt_component_0 from "./index-6N6G_8Sn.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
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
import "./asyncData-CVyZoMEH.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = {
  __name: "Frame",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    bg: { type: String, required: false, default: "linear-gradient(to bottom right, #171717, #131313)" },
    icon: { type: String, required: false },
    logo: { type: String, required: false },
    image: { type: String, required: false },
    username: { type: String, required: false },
    socials: { type: Array, required: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative h-full w-full flex items-center justify-center bg-neutral-900 text-white border-2 border-white",
        style: { backgroundImage: __props.bg }
      }, _attrs))}>`);
      if (__props.image) {
        _push(`<div class="absolute inset-0 w-full h-full bg-center opacity-10" style="${ssrRenderStyle({ backgroundImage: `url(${__props.image})` })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center text-center"><h1 class="flex gap-4 text-7xl font-bold" style="${ssrRenderStyle({ "display": "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.title)}</h1><p class="text-2xl max-w-3xl" style="${ssrRenderStyle({ "display": "block", "line-clamp": "3", "text-overflow": "ellipsis" })}">${ssrInterpolate(__props.description)}</p></div>`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)} class="absolute bottom-0 left-0 p-5" style="${ssrRenderStyle({ "height": "125px", "width": "153px" })}">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-5 right-5 flex gap-4">`);
      if (__props.username) {
        _push(`<div class="absolute bottom-12 right-8 font-bold">${ssrInterpolate(__props.username)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.socials, (social) => {
        _push(ssrRenderComponent(_component_Icon, {
          key: social.name,
          name: social.icon,
          class: "w-7 h-7"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-og-image@5.1.7_@unhead+vue@2.0.10_vue@3.5.17_typescript@5.8.3___magicast@0.3.5_unstorage_kp7tsigzdcyd2hmwstiwp35fe4/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Frame-BwxItptt.js.map
