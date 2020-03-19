import React, { Component, createRef } from "react";

class RouteChange extends Component {
  routeChange = createRef();

  componentDidUpdate(prevProps) {
    const {
      routeChange: { current: _El },
      props,
      props: { metdata }
    } = this;

    const page = metdata?.title;
    const prevPage = prevProps?.metdata?.title;

    if (!page || page === prevPage) return;

    //* FOCUS / SCROLLTOP
    if (_El) setTimeout(() => _El.focus(), 250);
  }

  render() {
    const { metdata } = this.props;

    const page = metdata?.title;

    return (
      <div
        tabIndex="-1"
        ref={this.routeChange}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="visually--hidden"
      >
        <p>You are currently viewing the {page} page.</p>
      </div>
    );
  }
}

export default RouteChange;
