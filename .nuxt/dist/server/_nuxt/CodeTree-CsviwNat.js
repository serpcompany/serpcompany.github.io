import { _ as _sfc_main$1 } from "./Icon-D99OMy3A.js";
import { useSlots, computed, ref, watch, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { TreeItem, TreeRoot } from "reka-ui";
import { createReusableTemplate } from "@vueuse/core";
import { t as tv } from "./tv-Chk-7CNM.js";
import _sfc_main$2 from "./CodeIcon-bgGVDbzE.js";
import { b as useAppConfig } from "../server.mjs";
import "./index-6N6G_8Sn.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./asyncData-CVyZoMEH.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "tailwind-variants";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@unhead+vue@2.0.10_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js";
import "tailwindcss/colors";
const theme = {
  "slots": {
    "root": "relative lg:h-[450px] my-5 grid lg:grid-cols-3 border border-muted rounded-md",
    "list": "isolate relative p-2 border-b lg:border-b-0 lg:border-e border-muted overflow-y-auto",
    "item": "",
    "listWithChildren": "ms-4.5 border-s border-default",
    "itemWithChildren": "ps-1.5 -ms-px",
    "link": "relative group peer w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "size-4 shrink-0",
    "linkLabel": "truncate",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingIcon": "size-5 transform transition-transform duration-200 shrink-0 group-data-expanded:rotate-180",
    "content": "overflow-hidden lg:col-span-2 flex flex-col [&>div]:my-0 [&>div]:flex-1 [&>div]:flex [&>div]:flex-col [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-s-0 [&>div>pre]:border-e-0 [&>div>pre]:rounded-l-none [&>div>pre]:flex-1 [&>div]:overflow-y-auto"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-highlighted before:bg-elevated"
      },
      "false": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ]
      }
    }
  }
};
const _sfc_main = {
  __name: "CodeTree",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: String, required: false },
    expandAll: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const [DefineTreeTemplate, ReuseTreeTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeTree) || {} })();
    });
    const model = ref(props.defaultValue ? { path: props.defaultValue } : void 0);
    const lastSelectedItem = ref();
    const rerenderCount = ref(1);
    const flatItems = computed(() => {
      var _a, _b;
      rerenderCount.value;
      return ((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.flatMap(transformSlot).filter(Boolean)) || [];
    });
    const items = computed(() => buildTree(flatItems.value));
    function buildTree(items2) {
      const map = /* @__PURE__ */ new Map();
      const root = [];
      items2.forEach((item) => {
        const parts = item.label.split("/");
        let path = "";
        parts.forEach((part, i) => {
          var _a, _b;
          path = path ? `${path}/${part}` : part;
          if (!map.has(path)) {
            const node = { label: part, path, ...i < parts.length - 1 && { children: [] } };
            map.set(path, node);
            if (i === 0) {
              root.push(node);
            } else {
              (_b = (_a = map.get(parts.slice(0, i).join("/"))) == null ? void 0 : _a.children) == null ? void 0 : _b.push(node);
            }
          }
        });
      });
      const sort = (nodes) => nodes.sort(
        (a, b) => !!a.children === !!b.children ? a.label.localeCompare(b.label) : b.children ? 1 : -1
      ).map((n) => ({ ...n, children: n.children && sort(n.children) }));
      return sort(root);
    }
    function transformSlot(slot, index) {
      var _a, _b, _c, _d;
      if (typeof slot.type === "symbol") {
        return (_a = slot.children) == null ? void 0 : _a.map(transformSlot);
      }
      return {
        label: ((_b = slot.props) == null ? void 0 : _b.filename) || ((_c = slot.props) == null ? void 0 : _c.label) || `${index}`,
        icon: (_d = slot.props) == null ? void 0 : _d.icon,
        component: slot
      };
    }
    const expanded = computed(() => {
      var _a;
      if (props.expandAll) {
        const allPaths = /* @__PURE__ */ new Set();
        flatItems.value.forEach((item) => {
          const parts2 = item.label.split("/");
          for (let i = 1; i < parts2.length; i++) {
            allPaths.add(parts2.slice(0, i).join("/"));
          }
        });
        return Array.from(allPaths);
      }
      const path = (_a = model.value) == null ? void 0 : _a.path;
      if (!path) {
        return [];
      }
      const parts = path.split("/");
      return parts.map((_, index) => parts.slice(0, index + 1).join("/"));
    });
    watch(model, (value) => {
      const item = flatItems.value.find((item2) => (value == null ? void 0 : value.path) === item2.label);
      if (item == null ? void 0 : item.component) {
        lastSelectedItem.value = item;
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UIcon = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineTreeTemplate), null, {
        default: withCtx(({ items: items2, level }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items2, (item, index) => {
              var _a2, _b2;
              _push2(`<li class="${ssrRenderClass(level > 0 ? ui.value.itemWithChildren({ class: (_a2 = props.ui) == null ? void 0 : _a2.itemWithChildren }) : ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(TreeItem), {
                "as-child": "",
                level,
                value: item
              }, {
                default: withCtx(({ isExpanded, isSelected }, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
                  if (_push3) {
                    _push3(`<button class="${ssrRenderClass(ui.value.link({ class: (_a3 = props.ui) == null ? void 0 : _a3.link, active: isSelected }))}"${_scopeId2}>`);
                    if ((_b3 = item.children) == null ? void 0 : _b3.length) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                        class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_sfc_main$2, {
                        filename: item.label,
                        class: ui.value.linkLeadingIcon({ class: (_d2 = props.ui) == null ? void 0 : _d2.linkLeadingIcon })
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_e = props.ui) == null ? void 0 : _e.linkLabel }))}"${_scopeId2}>${ssrInterpolate(item.label)}</span>`);
                    if ((_f = item.children) == null ? void 0 : _f.length) {
                      _push3(`<span class="${ssrRenderClass(ui.value.linkTrailing({ class: (_g = props.ui) == null ? void 0 : _g.linkTrailing }))}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: unref(appConfig).ui.icons.chevronDown,
                        class: ui.value.linkTrailingIcon({ class: (_h = props.ui) == null ? void 0 : _h.linkTrailingIcon })
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</button>`);
                    if (((_i = item.children) == null ? void 0 : _i.length) && isExpanded) {
                      _push3(`<ul class="${ssrRenderClass(ui.value.listWithChildren({ class: (_j = props.ui) == null ? void 0 : _j.listWithChildren }))}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(ReuseTreeTemplate), {
                        items: item.children,
                        level: level + 1
                      }, null, _parent3, _scopeId2));
                      _push3(`</ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("button", {
                        class: ui.value.link({ class: (_k = props.ui) == null ? void 0 : _k.link, active: isSelected })
                      }, [
                        ((_l = item.children) == null ? void 0 : _l.length) ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                          class: ui.value.linkLeadingIcon({ class: (_m = props.ui) == null ? void 0 : _m.linkLeadingIcon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$2, {
                          key: 1,
                          filename: item.label,
                          class: ui.value.linkLeadingIcon({ class: (_n = props.ui) == null ? void 0 : _n.linkLeadingIcon })
                        }, null, 8, ["filename", "class"])),
                        createVNode("span", {
                          class: ui.value.linkLabel({ class: (_o = props.ui) == null ? void 0 : _o.linkLabel })
                        }, toDisplayString(item.label), 3),
                        ((_p = item.children) == null ? void 0 : _p.length) ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: ui.value.linkTrailing({ class: (_q = props.ui) == null ? void 0 : _q.linkTrailing })
                        }, [
                          createVNode(_component_UIcon, {
                            name: unref(appConfig).ui.icons.chevronDown,
                            class: ui.value.linkTrailingIcon({ class: (_r = props.ui) == null ? void 0 : _r.linkTrailingIcon })
                          }, null, 8, ["name", "class"])
                        ], 2)) : createCommentVNode("", true)
                      ], 2),
                      ((_s = item.children) == null ? void 0 : _s.length) && isExpanded ? (openBlock(), createBlock("ul", {
                        key: 0,
                        class: ui.value.listWithChildren({ class: (_t = props.ui) == null ? void 0 : _t.listWithChildren })
                      }, [
                        createVNode(unref(ReuseTreeTemplate), {
                          items: item.children,
                          level: level + 1
                        }, null, 8, ["items", "level"])
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(items2, (item, index) => {
                var _a2, _b2;
                return openBlock(), createBlock("li", {
                  key: `${level}-${index}`,
                  class: level > 0 ? ui.value.itemWithChildren({ class: (_a2 = props.ui) == null ? void 0 : _a2.itemWithChildren }) : ui.value.item({ class: (_b2 = props.ui) == null ? void 0 : _b2.item })
                }, [
                  createVNode(unref(TreeItem), {
                    "as-child": "",
                    level,
                    value: item
                  }, {
                    default: withCtx(({ isExpanded, isSelected }) => {
                      var _a3, _b3, _c2, _d2, _e, _f, _g, _h, _i, _j;
                      return [
                        createVNode("button", {
                          class: ui.value.link({ class: (_a3 = props.ui) == null ? void 0 : _a3.link, active: isSelected })
                        }, [
                          ((_b3 = item.children) == null ? void 0 : _b3.length) ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: isExpanded ? unref(appConfig).ui.icons.folderOpen : unref(appConfig).ui.icons.folder,
                            class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$2, {
                            key: 1,
                            filename: item.label,
                            class: ui.value.linkLeadingIcon({ class: (_d2 = props.ui) == null ? void 0 : _d2.linkLeadingIcon })
                          }, null, 8, ["filename", "class"])),
                          createVNode("span", {
                            class: ui.value.linkLabel({ class: (_e = props.ui) == null ? void 0 : _e.linkLabel })
                          }, toDisplayString(item.label), 3),
                          ((_f = item.children) == null ? void 0 : _f.length) ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: ui.value.linkTrailing({ class: (_g = props.ui) == null ? void 0 : _g.linkTrailing })
                          }, [
                            createVNode(_component_UIcon, {
                              name: unref(appConfig).ui.icons.chevronDown,
                              class: ui.value.linkTrailingIcon({ class: (_h = props.ui) == null ? void 0 : _h.linkTrailingIcon })
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2),
                        ((_i = item.children) == null ? void 0 : _i.length) && isExpanded ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: ui.value.listWithChildren({ class: (_j = props.ui) == null ? void 0 : _j.listWithChildren })
                        }, [
                          createVNode(unref(ReuseTreeTemplate), {
                            items: item.children,
                            level: level + 1
                          }, null, 8, ["items", "level"])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 2
                  }, 1032, ["level", "value"])
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] }))}">`);
      _push(ssrRenderComponent(unref(TreeRoot), {
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list }),
        items: items.value,
        "get-key": (item2) => item2.path,
        "default-expanded": expanded.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ReuseTreeTemplate), {
              items: items.value,
              level: 0
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ReuseTreeTemplate), {
                items: items.value,
                level: 0
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(ui.value.content({ class: (_c = props.ui) == null ? void 0 : _c.content }))}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_d = lastSelectedItem.value) == null ? void 0 : _d.component), null, null), _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeTree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CodeTree-CsviwNat.js.map
