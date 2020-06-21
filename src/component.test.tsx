import * as React from "react";

import { UnstyledButton, UnstyledButtonProps } from "./component";

import { shallow, mount, configure } from "enzyme";

// Configure enzyme
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("UnstyledButton", () => {
  it("Render", () => {
    let wrapper = shallow(<UnstyledButton />);
    expect(wrapper).toHaveLength(1);
  });

  describe("Classname", () => {
    it("Default has classname", () => {
      let wrapper = shallow(<UnstyledButton />);
      let htmlButton = wrapper.find("button");
      expect(htmlButton).toHaveLength(1);
      expect(htmlButton.props().className).toContain(
        "sci-react-unstyled-button"
      );
    });

    it("Class name override", () => {
      let wrapper = shallow(<UnstyledButton className="blue" />);
      let htmlButton = wrapper.find("button");
      expect(htmlButton).toHaveLength(1);
      expect(htmlButton.props().className).toContain(
        "sci-react-unstyled-button"
      );
      expect(htmlButton.props().className).toContain("blue");
    });
  });

  it("InnerRef", (done) => {
    let innerRefHandler: UnstyledButtonProps["ref"] = (ref) => {
      expect(ref).toBeDefined();
      done();
    };
    let wrapper = mount(<UnstyledButton ref={innerRefHandler} />);
    let htmlButton = wrapper.find("button");
    expect(htmlButton).toHaveLength(1);
  });

  describe("Setting type", () => {
    it("Default is button", () => {
      let wrapper = shallow(<UnstyledButton />);
      let htmlButton = wrapper.find("button");
      expect(htmlButton).toHaveLength(1);
      expect(htmlButton.props().type).toEqual("button");
    });
    it("Set type to reset", () => {
      let wrapper = shallow(<UnstyledButton type="reset" />);
      let htmlButton = wrapper.find("button");
      expect(htmlButton).toHaveLength(1);
      expect(htmlButton.props().type).toEqual("reset");
    });
  });

  it("Click event", (done) => {
    let props = {
      onClick: done,
    };

    let wrapper = shallow(<UnstyledButton {...props} />);
    wrapper.simulate("click");
  });
});
