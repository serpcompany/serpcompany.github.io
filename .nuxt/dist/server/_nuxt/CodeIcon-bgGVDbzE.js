import { _ as _sfc_main$1 } from "./Icon-D99OMy3A.js";
import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { defu } from "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import { b as useAppConfig } from "../server.mjs";
import "./index-6N6G_8Sn.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./asyncData-CVyZoMEH.js";
import "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.mjs";
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
import "reka-ui";
import "@vueuse/core";
const theme = {
  "package.json": "i-vscode-icons-file-type-node",
  "tsconfig.json": "i-vscode-icons-file-type-tsconfig",
  ".npmrc": "i-vscode-icons-file-type-npm",
  ".editorconfig": "i-vscode-icons-file-type-editorconfig",
  ".eslintrc": "i-vscode-icons-file-type-eslint",
  ".eslintrc.cjs": "i-vscode-icons-file-type-eslint",
  ".eslintignore": "i-vscode-icons-file-type-eslint",
  "eslint.config.js": "i-vscode-icons-file-type-eslint",
  "eslint.config.mjs": "i-vscode-icons-file-type-eslint",
  "eslint.config.cjs": "i-vscode-icons-file-type-eslint",
  ".gitignore": "i-vscode-icons-file-type-git",
  "yarn.lock": "i-vscode-icons-file-type-yarn",
  ".env": "i-vscode-icons-file-type-dotenv",
  ".env.example": "i-vscode-icons-file-type-dotenv",
  ".vscode/settings.json": "i-vscode-icons-file-type-vscode",
  "nuxt": "i-vscode-icons-file-type-nuxt",
  ".nuxtrc": "i-vscode-icons-file-type-nuxt",
  ".nuxtignore": "i-vscode-icons-file-type-nuxt",
  "nuxt.config.js": "i-vscode-icons-file-type-nuxt",
  "nuxt.config.ts": "i-vscode-icons-file-type-nuxt",
  "nuxt.schema.ts": "i-vscode-icons-file-type-nuxt",
  "tailwind.config.js": "i-vscode-icons-file-type-tailwind",
  "tailwind.config.ts": "i-vscode-icons-file-type-tailwind",
  "vue": "i-vscode-icons-file-type-vue",
  "ts": "i-vscode-icons-file-type-typescript",
  "tsx": "i-vscode-icons-file-type-typescript",
  "mjs": "i-vscode-icons-file-type-js",
  "cjs": "i-vscode-icons-file-type-js",
  "js": "i-vscode-icons-file-type-js",
  "jsx": "i-vscode-icons-file-type-js",
  "md": "i-vscode-icons-file-type-markdown",
  "py": "i-vscode-icons-file-type-python",
  "cs": "i-vscode-icons-file-type-csharp",
  "asm": "i-vscode-icons-file-type-assembly",
  "f": "i-vscode-icons-file-type-fortran",
  "hs": "i-vscode-icons-file-type-haskell",
  "fs": "i-vscode-icons-file-type-fsharp",
  "kt": "i-vscode-icons-file-type-kotlin",
  "rs": "i-vscode-icons-file-type-rust",
  "rb": "i-vscode-icons-file-type-ruby",
  "lsp": "i-vscode-icons-file-type-lisp",
  "ps1": "i-vscode-icons-file-type-powershell",
  "psd1": "i-vscode-icons-file-type-powershell",
  "psm1": "i-vscode-icons-file-type-powershell",
  "go": "i-vscode-icons-file-type-go",
  "gleam": "i-vscode-icons-file-type-gleam",
  "bicep": "i-vscode-icons-file-type-bicep",
  "bicepparam": "i-vscode-icons-file-type-bicep",
  "exs": "i-vscode-icons-file-type-elixir",
  "erl": "i-vscode-icons-file-type-erlang",
  "sbt": "i-vscode-icons-file-type-scala",
  "h": "i-vscode-icons-file-type-cppheader",
  "ino": "i-vscode-icons-file-type-arduino",
  "pl": "i-vscode-icons-file-type-perl",
  "jl": "i-vscode-icons-file-type-julia",
  "dart": "i-vscode-icons-file-type-dartlang",
  "ico": "i-vscode-icons-file-type-favicon",
  "npm": "i-vscode-icons-file-type-npm",
  "pnpm": "i-vscode-icons-file-type-pnpm",
  "npx": "i-vscode-icons-file-type-npm",
  "yarn": "i-vscode-icons-file-type-yarn",
  "bun": "i-vscode-icons-file-type-bun",
  "yml": "i-vscode-icons-file-type-yaml",
  "terminal": "i-lucide-terminal"
};
const _sfc_main = {
  __name: "CodeIcon",
  __ssrInlineRender: true,
  props: {
    icon: { type: String, required: false },
    filename: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const icons = computed(() => {
      var _a, _b;
      return defu(((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeIcon) || {}, theme);
    });
    const icon = computed(() => {
      if (props.icon) {
        return props.icon;
      }
      if (!props.filename) {
        return;
      }
      const cleanFilename = props.filename.replace(/\s*\(.*\)\s*$/, "");
      const extension = cleanFilename.includes(".") && cleanFilename.split(".").pop();
      const name = cleanFilename.split("/").pop();
      return (name && icons.value[name.toLowerCase()]) ?? (extension && (icons.value[extension] ?? `i-vscode-icons-file-type-${extension}`));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      if (icon.value) {
        _push(ssrRenderComponent(_component_UIcon, mergeProps({ name: icon.value }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-pro@3.1.3_@babel+parser@7.27.5_db0@0.3.2_better-sqlite3@11.10.0__embla-carousel@8.6._we2jzkgj7we47m7vntg4hk6x7a/node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=CodeIcon-bgGVDbzE.js.map
