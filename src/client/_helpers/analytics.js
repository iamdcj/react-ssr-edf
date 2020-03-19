import {
  GetStore
} from '../../_management/store';


export const GTMEvent = data => {
  //* UPDATE dataLayer var
  const dataLayer = window.dataLayer || [];

  const store = GetStore();

  const {
    location: {
      country,
      language,
      locale,
      name: countryName,
      path
    }
  } = store.getState();

  const event = {
    ...data,
    country,
    language,
    locale,
    countryName,
    path
  }

  
  //* PUSH EVENT TO GTM DATALAYER ARRAY
  dataLayer.push(event);
}

export const HubSpotEvent = (type, id, value) => {
  let _hsq;

  if (!__ClientSide__ || !id || !value) return;

  _hsq = window._hsq || [];

  _hsq.push([type, {
    [`${id}`]: value
  }]);
}