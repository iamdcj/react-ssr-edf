import React from "react";
import { shallow, mount, render } from "enzyme";

import BasicText from ".";

describe("Basic Text", function() {
  it("should render without throwing an error", function() {
    expect(
      shallow(<BasicText />).contains(<div className="foo">Bar</div>)
    ).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<BasicText />).is(".foo")).toBe(true);
  });

  it("should mount in a full DOM", function() {
    expect(mount(<BasicText />).find(".foo").length).toBe(1);
  });

  it("should render to static HTML", function() {
    expect(render(<BasicText />).text()).toEqual("Bar");
  });
});
