import { GetStore } from "../../_management/store";

export const getYear = () => new Date().getFullYear();

export const returnDate = date => {
  const _Date = new Date(date);

  const store = GetStore();

  const {
    location: { locale }
  } = store.getState();

  if (isNaN(_Date)) return;

  const settings = { year: "numeric", month: "long", day: "numeric" };
  return _Date.toLocaleDateString(locale, settings);
};

export const urlDate = date => date.toLocaleDateString("fr-CA");

export const getTime = date => {
  const _Date = new Date(date);

  if (isNaN(_Date)) return;

  const Hours =
    _Date.getUTCHours().toString().length === 1
      ? `0${_Date.getUTCHours()}`
      : _Date.getUTCHours();
  const Minutes =
    _Date.getUTCMinutes().toString().length === 1
      ? `0${_Date.getUTCMinutes()}`
      : _Date.getUTCMinutes();

  return `${Hours}:${Minutes}`;
};
