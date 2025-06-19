import { computed, unref, isRef, ref, toRef, inject } from "vue";
import { createSharedComposable } from "@vueuse/core";
import { defu } from "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import { g as get } from "./index-CmS0GGFw.js";
function buildTranslator(locale) {
  return (path, option) => translate(path, option, unref(locale));
}
function translate(path, option, locale) {
  const prop = get(locale, `messages.${path}`, path);
  return prop.replace(
    /\{(\w+)\}/g,
    (_, key) => `${(option == null ? void 0 : option[key]) ?? `{${key}}`}`
  );
}
function buildLocaleContext(locale) {
  const lang = computed(() => unref(locale).name);
  const code = computed(() => unref(locale).code);
  const dir = computed(() => unref(locale).dir);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    code,
    dir,
    locale: localeRef,
    t: buildTranslator(locale)
  };
}
// @__NO_SIDE_EFFECTS__
function defineLocale(options) {
  return defu(options, { dir: "ltr" });
}
const en$1 = /* @__PURE__ */ defineLocale({
  name: "English",
  code: "en",
  messages: {
    inputMenu: {
      noMatch: "No matching data",
      noData: "No data",
      create: 'Create "{label}"'
    },
    calendar: {
      prevYear: "Previous year",
      nextYear: "Next year",
      prevMonth: "Previous month",
      nextMonth: "Next month"
    },
    inputNumber: {
      increment: "Increment",
      decrement: "Decrement"
    },
    commandPalette: {
      placeholder: "Type a command or search...",
      noMatch: "No matching data",
      noData: "No data",
      close: "Close"
    },
    selectMenu: {
      noMatch: "No matching data",
      noData: "No data",
      create: 'Create "{label}"',
      search: "Search..."
    },
    toast: {
      close: "Close"
    },
    carousel: {
      prev: "Prev",
      next: "Next",
      goto: "Go to slide {slide}"
    },
    modal: {
      close: "Close"
    },
    slideover: {
      close: "Close"
    },
    alert: {
      close: "Close"
    },
    table: {
      noData: "No data"
    }
  }
});
const localeContextInjectionKey = Symbol.for("nuxt-ui.locale-context");
const en = /* @__PURE__ */ defineLocale({
  ...en$1,
  messages: {
    ...en$1.messages,
    authForm: {
      submit: "Continue",
      hidePassword: "Hide password",
      showPassword: "Show password"
    },
    banner: {
      close: "Close"
    },
    chatPrompt: {
      placeholder: "Type your message here..."
    },
    chatPromptSubmit: {
      label: "Send prompt"
    },
    colorMode: {
      system: "System",
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode"
    },
    contentSearch: {
      links: "Links",
      theme: "Theme"
    },
    contentSearchButton: {
      label: "Search..."
    },
    contentToc: {
      title: "On this page"
    },
    dashboardSearch: {
      theme: "Theme"
    },
    dashboardSearchButton: {
      label: "Search..."
    },
    dashboardSidebarCollapse: {
      expand: "Expand sidebar",
      collapse: "Collapse sidebar"
    },
    dashboardSidebarToggle: {
      close: "Close sidebar",
      open: "Open sidebar"
    },
    error: {
      clear: "Back to home"
    },
    header: {
      close: "Close menu",
      open: "Open menu"
    },
    pricingTable: {
      caption: "Pricing plan comparison"
    },
    prose: {
      codeCollapse: {
        name: "code",
        openText: "Expand",
        closeText: "Collapse"
      },
      collapsible: {
        name: "properties",
        openText: "Show",
        closeText: "Hide"
      },
      pre: {
        copy: "Copy code to clipboard"
      }
    }
  }
});
const _useLocalePro = (localeOverrides) => {
  const locale = localeOverrides || toRef(inject(localeContextInjectionKey));
  return buildLocaleContext(computed(() => locale.value || en));
};
const useLocalePro = /* @__PURE__ */ createSharedComposable(_useLocalePro);
export {
  useLocalePro as u
};
//# sourceMappingURL=useLocalePro-FBv4dYkc.js.map
