import { useState, useEffect } from "react";

export const useInView = (ref, options = {}) => {
  const [state, setState] = useState({
    inView: false,
    observed: false,
    observer: null
  });

  const handleInView = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setState({ inView: true, observed: true });
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

    state.observer.observe(ref.current);

    return function cleanup() {
      state.observer.unobserve(_Node);
    };
  });

  return [state.inView];
};
