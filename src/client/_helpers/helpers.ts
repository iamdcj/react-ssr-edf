export const returnLabel = (array, key) => {
  if (!array || !key) return false;

  let label = Array.isArray(array)
    ? array.find(label => label.key === key)
    : null;

  label = label ? label.value : "";

  return label;
};
