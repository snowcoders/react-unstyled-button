import * as React from 'react';

import { UnstyledButton } from "./UnstyledButton";

import { expect } from 'chai';
import { shallow, configure } from "enzyme";

// Configure enzyme
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("UnstyledButton", () => {
    it("Render", () => {
        let wrapper = shallow(<UnstyledButton />);
        expect(wrapper).to.have.length(1);
    });

    it("Click event", (done) => {
        let props = {
            onClick: done
        };

        let wrapper = shallow(<UnstyledButton {...props} />);
        wrapper.simulate("click");
    });

    it("Class name override", () => {
        let props = {
            className: "blue"
        };

        let wrapper = shallow(<UnstyledButton {...props} />);
        let htmlButton = wrapper.find('button');
        expect(htmlButton).to.have.length(1);
        expect(htmlButton.props().className).to.contain('sci-react-unstyled-button');
        expect(htmlButton.props().className).to.contain('blue');
    });
});