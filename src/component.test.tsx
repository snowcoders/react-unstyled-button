import * as React from 'react';

import { Dialog, IDialogProps } from "./component";

import { expect } from 'chai';
import { shallow, configure } from "enzyme";

// Configure enzyme
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Dialog", () => {
    it("Render", () => {
        let wrapper = shallow(<Dialog isVisible={false} />);
        expect(wrapper).to.have.length(1);
    });

    it("Default has classname", () => {
        let wrapper = shallow(<Dialog isVisible={false} />);
        let rootElement = wrapper.first();
        expect(rootElement.props().className).to.contain('sci-react-dialog');
    });

    it("Disable style has no classname", () => {
        let wrapper = shallow(<Dialog isVisible={false} className="blue" isBaseStylesDisabled={true} />);
        let rootElement = wrapper.first();
        expect(rootElement.props().className).to.not.contain('sci-react-dialog');
    });

    it("Click event", (done) => {
        let props = {
            onBackgroundClick: done
        };

        let wrapper = shallow(<Dialog isVisible={false} {...props} />);
        wrapper.find(".overlay").simulate("click");
    });

    it("Class name override", () => {
        let wrapper = shallow(<Dialog isVisible={false} className="blue" />);
        let rootElement = wrapper.first();
        expect(rootElement.props().className).to.contain('sci-react-dialog');
        expect(rootElement.props().className).to.contain('blue');
    });
});