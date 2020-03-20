export function returnParams(parameter = "", items = []) {
  if (items.length < 1) {
    return;
  }

  return `${items.map(i => `${parameter}=${i.trim()}`).join("&")}`;
}

export function byKey(a, b) {
  var keyA = a.key.toUpperCase();
  var keyB = b.key.toUpperCase();
  return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
}

export function findIndexOf(facetGroups, groupKey, facetKey) {
  let groupIndex = null;

  if (!facetGroups) return;

  facetGroups.map((group, index) => {
    if (group.key === groupKey) {
      groupIndex = index;
    }
  });

  let facetIndex;

  facetGroups[groupIndex].facets.map((facet, index) => {
    if (facet.key === facetKey) {
      facetIndex = index;
    }
  });

  return {
    groupIndex,
    facetIndex
  };
}

const styleKey = {
  ["a.0"]: ["outline", "b"],
  ["a.1"]: ["solid", "a"],
  ["a.2"]: ["solid", "b"],
  ["b.0"]: ["outline", "a"],
  ["b.1"]: ["solid", "a"],
  ["b.2"]: ["solid", "c"],
  ["b.3"]: ["solid", "b"],
  ["c.0"]: ["solid", "a"],
  ["c.1"]: ["outline", "a"],
  ["c.2"]: ["solid", "c"]
};

export const returnCTAStyle = (i, anchor) => `
  btn  
  btn--${styleKey[i] ? styleKey[i][0] : "solid"}  
  btn--${styleKey[i] ? `${styleKey[i][0]}-${styleKey[i][1] || "a"}` : "solid-a"}
  btn--${anchor ? "icon-animate-down" : "icon-animate-right"}
`;

export const calculateHeight = (el, i, array) =>
  el && el.offsetHeight ? (array.current[i] = el.offsetHeight) : null;
