import React from "react";
import { mount, render } from "enzyme";

import BasicText from ".";

describe("Basic Text - General", function() {
  it("should mount in a full DOM", function() {
    expect(mount(<BasicText />).find("section").length).toBe(1);
  });

  it("should render to static HTML", function() {
    expect(render(<BasicText title="Hello World!" />).text()).toEqual(
      "Hello World!"
    );
  });
});

describe("Basic Text - Heading", function() {
  it("with - should contain <h2 /> element", function() {
    expect(mount(<BasicText title="Hello World!" />).find("h2").length).toBe(1);
  });

  it("without - should not contain <h2 /> element", function() {
    expect(mount(<BasicText />).find("h2").length).toBe(0);
  });
});

describe("Basic Text - Content", function() {
  it("with - should contain <span /> element", function() {
    expect(mount(<BasicText text="Hello World!" />).find("span").length).toBe(
      1
    );
  });

  it("without - should not contain <span /> element", function() {
    expect(mount(<BasicText />).find("span").length).toBe(0);
  });
});
