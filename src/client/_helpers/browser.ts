import { debounce } from "throttle-debounce";

export const documentReady = () => typeof document !== "undefined";

export const getViewportWidth = () =>
  window.innerWidth || document.documentElement.innerWidth;

export const scrollTopEl = (
  _El,
  shouldFocus = false,
  behavior = "smooth",
  offSet = 72
) => {
  if (!documentReady() || !_El) return;

  var isSmoothScrollSupported =
    "scrollBehavior" in document.documentElement.style;

  const top = ElOffSetTop(_El) - offSet;

  if (isSmoothScrollSupported) {
    const scrollOptions = {
      top,
      behavior
    };

    shouldFocus ? _El.focus() : window.scrollTo(scrollOptions);
  } else {
    shouldFocus ? _El.focus() : window.scrollTo(0, top);
  }
};

export const jumpToTop = () =>
  scrollTopEl(document.documentElement, false, "auto");

export const ElOffSetTop = _El => {
  const ElTop = _El.getBoundingClientRect().top,
    scrollTopPos = window.pageYOffset || document.documentElement.scrollTop;
  return ElTop + scrollTopPos;
};

export const escapeOverlay = (callBack, allowEscape = true) => {
  if (!callBack || !allowEscape) return;

  const handleEscape = function(event) {
    if (event.code !== "Escape") return;
    callBack(false);
    document.removeEventListener("keyup", handleEscape, false);
  };
  document.addEventListener("keyup", handleEscape, false);
};

export const noScroll = bool => {
  const _Root = document.documentElement;

  if (bool) {
    _Root.classList.add("prevent-overlay");
  } else {
    _Root.classList.remove("prevent-overlay");
  }
};

export const clearFormFields = formFields => {
  if (!formFields) return;

  for (let i = 0; i < formFields.length; i++) {
    const _FormElement = formFields[i];
    if (_FormElement.type !== "submit") {
      _FormElement.value = "";
    }
  }
};

export function returnDOMElement(selector) {
  let _El = null;

  if (!selector) return false;

  _El = document.getElementById(`${selector}`);

  if (!_El) {
    return false;
  } else {
    return _El;
  }
}

export const HubSpotEvent = (type, id, value) => {
  let _hsq;

  if (!__ClientSide__ || !id || !value) return;

  _hsq = window._hsq || [];

  _hsq.push([
    type,
    {
      [`${id}`]: value
    }
  ]);
};

export const detectScrollable = (innerEl, OuterEl, setScrollable) => {
  if (innerEl && OuterEl && innerEl.scrollWidth > OuterEl.clientWidth) {
    setScrollable(true);
  }
};

const checkPosition = (El, setStart, setEnd) => {
  let NavWidth = null;
  let NavScrollWidth = null;
  let scrollPos = null;

  if (!El) return;

  NavWidth = El.clientWidth;
  NavScrollWidth = El.scrollWidth;
  scrollPos = NavWidth + El.scrollLeft;

  if (scrollPos === NavScrollWidth) {
    setStart(false);
    setEnd(true);
  } else if (scrollPos === NavWidth) {
    setStart(true);
    setEnd(false);
  } else {
    setStart(false);
    setEnd(false);
  }
};

export const detectScroll = (El, setStart, setEnd) => {
  if (!El) return;

  El.addEventListener(
    "scroll",
    debounce(100, function() {
      checkPosition(this, setStart, setEnd);
    })
  );
};
