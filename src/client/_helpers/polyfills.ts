const isClient = () => typeof window !== 'undefined';

const supportsIntersectionObserver = () => (
  'IntersectionObserver' in global &&
  'IntersectionObserverEntry' in global &&
  'intersectionRatio' in IntersectionObserverEntry.prototype
)

const IntersectionObserverPF = []

if (!supportsIntersectionObserver() && isClient()) {
  IntersectionObserverPF.push(import(/* webpackChunkName: "IntersectionObserverPF" */ 'intersection-observer'))
} 

export default [
  ...IntersectionObserverPF
]