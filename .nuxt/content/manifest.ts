export const checksums = {
  "shop": "v3.5.0--Ucea_VhzW8K0bfxj2LsiaFyPzVhvsmELM6nrtiurzOQ",
  "legal": "v3.5.0--IPti5nZTI0U6smx496XB96OzIU9l4u3QBWJj0a2haN0",
  "pages": "v3.5.0--9GvnXB2M8pJacIs9Nm51AJ_P1TRTRzKrbrhxuDalUBA"
}
export const checksumsStructure = {
  "shop": "E-MnwqDu7doTy41-OWb9ytkF24oLEqY61osUITynI0A",
  "legal": "syYEPFnLsJd0IV0LkefZ-T7F8rxEgShlkVEdKVR-uLQ",
  "pages": "c2-SFBM2SCXzvLvpJSMcWKJGIoy39ob7pE1FfrQe-yI"
}

export const tables = {
  "shop": "_content_shop",
  "legal": "_content_legal",
  "pages": "_content_pages",
  "info": "_content_info"
}

export default {
  "shop": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "category": "string",
      "description": "string",
      "excerpt": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "publishDate": "string",
      "seo": "json",
      "slug": "string",
      "stem": "string"
    }
  },
  "legal": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "excerpt": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "publishDate": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "pages": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "excerpt": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "publishDate": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}