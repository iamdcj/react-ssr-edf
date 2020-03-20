export const reconcileData = () => {
  const data = window.__GEP_COMPOSITION_DATA__;

  const _InitialData = document.getElementById("initialData");
  if (_InitialData) {
    _InitialData.parentNode?.removeChild(_InitialData);
    delete window.__GEP_COMPOSITION_DATA__;
  }

  return data;
};
