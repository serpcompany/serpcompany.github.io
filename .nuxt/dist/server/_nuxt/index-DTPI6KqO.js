function getSlotChildrenText(children) {
  return children.map((node) => {
    if (!node.children || typeof node.children === "string") return node.children || "";
    else if (Array.isArray(node.children)) return getSlotChildrenText(node.children);
    else if (node.children.default) return getSlotChildrenText(node.children.default());
  }).join("");
}
function transformUI(ui, uiProp) {
  return Object.entries(ui).reduce((acc, [key, value]) => {
    acc[key] = typeof value === "function" ? value({ class: uiProp == null ? void 0 : uiProp[key] }) : value;
    return acc;
  }, uiProp || {});
}
export {
  getSlotChildrenText as g,
  transformUI as t
};
//# sourceMappingURL=index-DTPI6KqO.js.map
