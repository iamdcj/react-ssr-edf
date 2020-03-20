import { useState, useEffect, Dispatch } from "react";

interface InView {
  inView: boolean;
  observed: boolean;
  observer: IntersectionObserver | null;
}

export const useInView = (ref: React.MutableRefObject<any>, options = {}) => {
  const [state, setState]: [InView, Dispatch<any>] = useState({
    inView: false,
    observed: false,
    observer: null
  });

  const handleInView = (entries: IntersectionObserverEntryInit[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setState({ inView: true, observed: true, observer: state.observer });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleInView, options);
    setState({ observer });
  }, []);

  useEffect(() => {
    const { observer, observed } = state;
    const _Node = ref.current;

    if (!_Node || !observer || observed) return;

    state.observer?.observe(ref.current);

    return function cleanup() {
      state.observer?.unobserve(_Node);
    };
  });

  return [state.inView];
};
