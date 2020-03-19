import React from "react";

//* HELPERS
import { scrollTopEl, returnDOMElement } from "../../_helpers/browser";

//* DEPs.
import { Link } from "react-router-dom";

//* COMPONENTS
import FontAwesomeIcon from "../_misc/fa-icon";

const scrollToTarget = (e, selector) => {
  e.preventDefault();

  const _El = returnDOMElement(selector);

  if (!_El) return;

  scrollTopEl(_El);
};

const CTA = ({
  isExternal = false,
  link = "",
  to = link,
  anchor = "",
  onClick = false,
  title = "",
  className = "",
  type = "button",
  id = "",
  role = "",
  ariaexpanded = null,
  ariacontrols = "",
  ariaselected = null,
  tabIndex = null,
  ...innards
}) => {
  if (anchor) {
    return (
      <a
        href={`#${anchor}`}
        className={className}
        onClick={e => scrollToTarget(e, anchor)}
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

const CTAInnards = ({
  icon,
  iconA,
  iconB,
  customIcon,
  customIconA,
  customIconB,
  text,
  hideText,
  iconFamily
}) => (
  <>
    {customIconA ? (
      customIconA
    ) : iconA ? (
      <FontAwesomeIcon
        family={iconFamily}
        icon={iconA}
        extraClasses="icon--left"
      />
    ) : (
      ""
    )}
    {text && (
      <span className={`btn__text ${hideText ? "visually--hidden" : ""}`}>
        {text}
      </span>
    )}
    {customIcon ? (
      customIcon
    ) : icon ? (
      <FontAwesomeIcon iconFamily={iconFamily} icon={icon} />
    ) : (
      ""
    )}
    {customIconB ? (
      customIconB
    ) : iconB ? (
      <FontAwesomeIcon
        family={iconFamily}
        icon={iconB}
        extraClasses="icon--right"
      />
    ) : (
      ""
    )}
  </>
);

export default CTA;
