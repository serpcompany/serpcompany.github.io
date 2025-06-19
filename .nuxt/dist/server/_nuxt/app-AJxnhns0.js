import { withoutTrailingSlash } from "/Users/devin/repos/projects/nuxt-astronaut-theme/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "minimark/hast";
import { t as tryUseNuxtApp } from "../server.mjs";
const checksums = {
  "shop": "v3.5.0--Ucea_VhzW8K0bfxj2LsiaFyPzVhvsmELM6nrtiurzOQ",
  "legal": "v3.5.0--IPti5nZTI0U6smx496XB96OzIU9l4u3QBWJj0a2haN0",
  "pages": "v3.5.0--9GvnXB2M8pJacIs9Nm51AJ_P1TRTRzKrbrhxuDalUBA"
};
const tables = {
  "shop": "_content_shop",
  "legal": "_content_legal",
  "pages": "_content_pages",
  "info": "_content_info"
};
const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts == null ? void 0 : opts.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = (opts == null ? void 0 : opts.limit) || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}
async function fetchQuery(event, collection, sql) {
  var _a, _b, _c;
  return await $fetch(`/__nuxt_content/${collection}/query`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    headers: {
      "content-type": "application/json",
      ...((_c = (_b = (_a = event == null ? void 0 : event.node) == null ? void 0 : _a.req) == null ? void 0 : _b.headers) == null ? void 0 : _c.cookie) ? { cookie: event.node.req.headers.cookie } : {}
    },
    query: { v: checksums[String(collection)], t: void 0 },
    method: "POST",
    body: {
      sql
    }
  });
}
const queryCollection = (collection) => {
  var _a, _b;
  const event = (_b = (_a = tryUseNuxtApp()) == null ? void 0 : _a.ssrContext) == null ? void 0 : _b.event;
  return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
async function executeContentQuery(event, collection, sql) {
  {
    return fetchQuery(event, String(collection), sql);
  }
}
export {
  queryCollection as q
};
//# sourceMappingURL=app-AJxnhns0.js.map
