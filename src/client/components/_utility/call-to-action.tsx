import React from "react";

//* HELPERS
import { scrollToTarget } from "../../_helpers/browser";

//* DEPs.
import { Link } from "react-router-dom";

interface CTA {
  isExternal?: boolean;
  link?: string;
  to?: string;
  anchor?: string;
  onClick?: () => void;
  title?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  id?: "string";
  role?: "string";
  ariaexpanded?: boolean;
  ariacontrols?: string;
  ariaselected?: boolean;
  tabIndex?: number;
  text?: string;
  hideText?: boolean;
}

let CTA = ({
  isExternal = false,
  link = "",
  to = "",
  anchor,
  onClick = () => {},
  title = "",
  className = "",
  type = "button",
  id,
  role,
  ariaexpanded = false,
  ariacontrols = "",
  ariaselected = false,
  tabIndex = 0,
  ...innards
}: CTA) => {
  to = to ? to : link;

  if (anchor) {
    return (
      <a
        href={`#${anchor}`}
        className={className}
        onClick={e => scrollToTarget(e as any, anchor)}
        title={title}
      >
        <CTAInnards {...innards} />
      </a>
    );
  } else if (isExternal) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="external noopener noreferrer"
        title={title}
      >
        <CTAInnards {...innards} />
      </a>
    );
  } else if (onClick) {
    return (
      <button
        type={type}
        id={id}
        role={role}
        aria-expanded={ariaexpanded}
        aria-controls={ariacontrols}
        aria-selected={ariaselected}
        onClick={onClick}
        className={className}
        tabIndex={tabIndex}
        title={title}
      >
        <CTAInnards {...innards} />
      </button>
    );
  } else {
    return (
      <Link className={className} to={to} title={title}>
        <CTAInnards {...innards} />
      </Link>
    );
  }
};

interface CTAInnards {
  text?: string;
  hideText?: boolean;
}

const CTAInnards = ({ text, hideText }: CTAInnards) => (
  <>
    {text && (
      <span className={`btn__text ${hideText ? "visually--hidden" : ""}`}>
        {text}
      </span>
    )}
  </>
);

export default CTA;
