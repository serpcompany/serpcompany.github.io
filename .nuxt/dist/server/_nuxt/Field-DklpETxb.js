import { useSlots, computed, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-DUKfDfU2.js";
import { r as renderSlot } from "./slot-DoFuc1Pu.js";
import { Primitive } from "reka-ui";
import { t as tv } from "./tv-Chk-7CNM.js";
import { b as useAppConfig } from "../server.mjs";
import "./node-HU5lVDmC.js";
import "tailwind-variants";
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
const theme = {
  "slots": {
    "root": "my-5",
    "container": "flex items-center gap-3 font-mono text-sm",
    "name": "font-semibold text-primary",
    "wrapper": "flex-1 flex items-center gap-1.5 text-xs",
    "required": "rounded-sm bg-error/10 text-error px-1.5 py-0.5",
    "type": "rounded-sm bg-elevated text-toned px-1.5 py-0.5",
    "description": "mt-3 text-muted text-sm [&_code]:text-xs/4"
  }
};
const _sfc_main = {
  __name: "Field",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    description: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.field) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container }))}"${_scopeId}>`);
            if (__props.name) {
              _push2(`<span class="${ssrRenderClass(ui.value.name({ class: (_b = props.ui) == null ? void 0 : _b.name }))}"${_scopeId}>${ssrInterpolate(__props.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.type || __props.required) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (__props.type) {
                _push2(`<span class="${ssrRenderClass(ui.value.type({ class: (_d = props.ui) == null ? void 0 : _d.type }))}"${_scopeId}>${ssrInterpolate(__props.type)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.required) {
                _push2(`<span class="${ssrRenderClass(ui.value.required({ class: (_e = props.ui) == null ? void 0 : _e.required }))}"${_scopeId}> required </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!!slots.default || __props.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_f = props.ui) == null ? void 0 : _f.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_g = props.ui) == null ? void 0 : _g.container })
              }, [
                __props.name ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: ui.value.name({ class: (_h = props.ui) == null ? void 0 : _h.name })
                }, toDisplayString(__props.name), 3)) : createCommentVNode("", true),
                __props.type || __props.required ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.wrapper({ class: (_i = props.ui) == null ? void 0 : _i.wrapper })
                }, [
                  __props.type ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.type({ class: (_j = props.ui) == null ? void 0 : _j.type })
                  }, toDisplayString(__props.type), 3)) : createCommentVNode("", true),
                  __props.required ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.required({ class: (_k = props.ui) == null ? void 0 : _k.required })
                  }, " required ", 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true)
              ], 2),
              !!slots.default || __props.description ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.description({ class: (_l = props.ui) == null ? void 0 : _l.description })
              }, [
                renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => [
                  createTextVNode(toDisplayString(__props.description), 1)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/Field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Field-DklpETxb.js.map
