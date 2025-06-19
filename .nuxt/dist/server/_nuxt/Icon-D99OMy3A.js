import __nuxt_component_0 from "./index-6N6G_8Sn.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForwardProps } from "reka-ui";
import { reactivePick } from "@vueuse/core";
const _sfc_main = {
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
    mode: { type: String, required: false },
    size: { type: [String, Number], required: false },
    customize: { type: Function, required: false }
  },
  setup(__props) {
    const props = __props;
    const iconProps = useForwardProps(reactivePick(props, "name", "mode", "size", "customize"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Icon, mergeProps(unref(iconProps), _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6.0_io_c3rkd63amtmtd64x55vod7vajy/node_modules/@nuxt/ui/dist/runtime/components/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Icon-D99OMy3A.js.map
