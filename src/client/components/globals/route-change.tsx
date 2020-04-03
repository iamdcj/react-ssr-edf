import React, { useEffect, useRef } from "react";

const RouteChange = () => {
  const routeChange: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    const _El: HTMLElement | null = routeChange.current;

    if (!_El) {
      return;
    }

    setTimeout(() => {
      _El.focus();
    }, 250);
  }, []);

  return <></>;
};

export default RouteChange;
