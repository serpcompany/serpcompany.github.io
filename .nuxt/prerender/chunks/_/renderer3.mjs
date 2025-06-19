import { getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/vue-bundle-renderer@2.1.1/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { getQuery, createError, getResponseStatusText, getResponseStatus } from 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/h3@1.15.3/node_modules/h3/dist/index.mjs';
import { b as appId, d as defineRenderHandler, g as buildAssetsURL, p as publicAssetsURL, h as appTeleportTag, i as appTeleportAttrs, j as createSSRContext, k as appHead, s as setSSRError, l as getRouteRules, m as getRenderer, o as getEntryIds, q as renderInlineStyles, v as replaceIslandTeleports, w as useNitroApp } from '../nitro/nitro.mjs';
import { stringify, uneval } from 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/devalue@5.1.1/node_modules/devalue/index.js';
import { propsToString, renderSSRHead } from 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unhead@2.0.10/node_modules/unhead/dist/server.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unhead@2.0.10/node_modules/unhead/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unstorage@1.16.0_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.6.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unstorage@1.16.0_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.6.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unstorage@1.16.0_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.6.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unstorage@1.16.0_db0@0.3.2_better-sqlite3@11.10.0__ioredis@5.6.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/vue@3.5.17_typescript@5.8.3/node_modules/vue/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@unocss+core@66.2.3/node_modules/@unocss/core/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@unocss+preset-wind3@66.2.3/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/@iconify+utils@2.3.0/node_modules/@iconify/utils/lib/index.mjs';
import 'node:module';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unhead@2.0.10/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/vue@3.5.17_typescript@5.8.3/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/unhead@2.0.10/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/db0@0.3.2_better-sqlite3@11.10.0/node_modules/db0/dist/connectors/better-sqlite3.mjs';

function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    setSSRError(ssrContext, ssrError);
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  {
    for (const id of await getEntryIds()) {
      ssrContext.modules.add(id);
    }
  }
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = !ssrContext._renderResponse && true ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

export { renderer as default };
//# sourceMappingURL=renderer3.mjs.map
