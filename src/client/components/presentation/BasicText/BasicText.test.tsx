import React from "react";
import { mount, render } from "enzyme";

import BasicText from ".";

describe("Basic Text", function() {
  it("should mount in a full DOM", function() {
    expect(mount(<BasicText />).find("section").length).toBe(1);
  });

  it("should render to static HTML", function() {
    expect(render(<BasicText title="Hello World!" />).text()).toEqual(
      "Hello World!"
    );
  });
});
