import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Textarea from "./TextArea";
Enzyme.configure({ adapter: new Adapter() });

describe("<Textarea />", function testsRelyOnTHIS() {
  it("renders the provided of name", () => {
    const props = {
      name: "address",
    };
    const wrapper = shallow(<Textarea {...props} />);
    const node = wrapper.find("#id-textarea").prop("name");
    expect(node).toEqual("address");
  });

  it("renders the provided of placeholder", () => {
    const props = {
      placeholder: "Your Address",
    };
    const wrapper = shallow(<Textarea {...props} />);
    const node = wrapper.find("#id-textarea").prop("placeholder");
    expect(node).toEqual("Your Address");
  });
});
