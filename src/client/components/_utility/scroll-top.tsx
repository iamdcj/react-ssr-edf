import React, { useEffect, useState } from "react";

//* DEPs.
import { jumpToTop } from "../../_helpers/browser";

//* COMPONENTS
import CTA from "./call-to-action";

const ScrollTop = () => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const _Root = document.querySelector("#root");
    const rootHeight = _Root?.clientHeight || 0;

    setContentHeight(rootHeight);
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      {windowHeight && contentHeight > windowHeight && (
        <CTA
          title="Go to the top of the page"
          className="btn  btn--back-to-top btn--icon-animate-up"
          text="Return to page start."
          onClick={jumpToTop}
          icon="chevron-up"
          hideText
        />
      )}
    </>
  );
};

export default ScrollTop;
