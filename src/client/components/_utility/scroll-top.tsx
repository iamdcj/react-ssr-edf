import React, { useEffect, useState } from "react";

//* DEPs.
import { jumpToTop } from "../../_helpers/browser";

//* COMPONENTS
import CTA from "./call-to-action";

const ScrollTop = () => {
  const [contentHeight, setContentHeight] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    setContentHeight(document.querySelector("#root").clientHeight);
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      {windowHeight && contentHeight > windowHeight && (
        <CTA
          title="Go to the top of the page"
          className="btn  btn--back-to-top btn--icon-animate-up"
          text="Return to page start."
          onClick={() => jumpToTop()}
          icon="chevron-up"
          hideText
        />
      )}
    </>
  );
};

export default ScrollTop;
