export const documentReady = () => typeof document !== "undefined";

export const getViewportDimension = (dimension: string): number =>
  window[`inner${dimension}`] || document.documentElement[`client${dimension}`];

export const scrollTopEl = (
  _El: HTMLElement,
  shouldFocus?: boolean,
  behavior?: ScrollBehavior,
  offSet: number = 0
) => {
  if (!documentReady() || !_El) return;

  var isSmoothScrollSupported =
    "scrollBehavior" in document.documentElement.style;

  const top = ElOffSetTop(_El) - offSet;

  if (isSmoothScrollSupported) {
    const scrollOptions: ScrollToOptions = {
      top,
      behavior
    };

    shouldFocus ? _El.focus() : window.scrollTo(scrollOptions);
  } else {
    shouldFocus ? _El.focus() : window.scrollTo(0, top);
  }
};

export const jumpToTop = () => {
  scrollTopEl(document.documentElement, false, "auto");
};

export const ElOffSetTop = (_El: HTMLElement): number => {
  const ElTop = _El.getBoundingClientRect().top;
  const scrollTopPos = window.pageYOffset || document.documentElement.scrollTop;

  return ElTop + scrollTopPos;
};

export const escapeOverlay = (
  callBack: (arg: boolean) => any,
  allowEscape = true
) => {
  if (!callBack || !allowEscape) return;

  const handleEscape = function(event: KeyboardEvent) {
    if (event.code !== "Escape") {
      return;
    }

    callBack(false);

    document.removeEventListener("keyup", handleEscape, false);
  };

  document.addEventListener("keyup", handleEscape, false);
};

export const noScroll = (bool: boolean) => {
  const _Root = document.documentElement;

  if (bool) {
    _Root.classList.add("prevent-overlay");
  } else {
    _Root.classList.remove("prevent-overlay");
  }
};

export function returnDOMElement(selector: string) {
  let _El = null;

  if (!selector) {
    return false;
  }

  _El = document.getElementById(selector);

  return _El ? _El : false;
}

export const detectScrollable = (
  innerEl: HTMLElement,
  OuterEl: HTMLElement,
  setScrollable: (scrollable: boolean) => void
) => {
  if (innerEl && OuterEl && innerEl.scrollWidth > OuterEl.clientWidth) {
    setScrollable(true);
  }
};
