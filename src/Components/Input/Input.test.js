import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Input from "./Input";
Enzyme.configure({ adapter: new Adapter() });

describe("<Input />", function testsRelyOnTHIS() {
  const props = {
    type: "text",
    label: "First Name",
    name: "firstName",
    placeholder: "Your First Name",
    onClick: "hello",
    errorMessage: "Invalid input",
  };

  it("renders the provided label text", () => {
    const wrapper = shallow(
      <Input
        type={props.type}
        label={props.label}
        name={props.name}
        placeholder={props.placeholder}
      />
    );
    const node = wrapper.find("label").text();
    expect(node).toBe(props.label);
  });

  it("renders the provided name text", () => {
    const wrapper = shallow(
      <Input
        type={props.type}
        label={props.label}
        name={props.name}
        placeholder={props.placeholder}
      />
    );
    const node = wrapper.find("Field").name();
    expect(node).toEqual("Field");
  });

  it("renders the provided name type", () => {
    const props = {
      type: "text",
    };
    const wrapper = shallow(<Input {...props} />);
    const node = wrapper.find("Field").prop("type");
    expect(node).toEqual("text");
  });

  it("renders the provided of name", () => {
    const props = {
      type: "text",
      name: "firstName",
    };
    const wrapper = shallow(<Input {...props} />);
    const node = wrapper.find("Field").prop("name");
    expect(node).toEqual("firstName");
  });

  it("renders the provided of placeholder", () => {
    const props = {
      type: "text",
      name: "firstName",
      placeholder: "Your First Name",
    };
    const wrapper = shallow(<Input {...props} />);
    const node = wrapper.find("Field").prop("placeholder");
    expect(node).toEqual("Your First Name");
  });

  it("renders the provided name type of password", () => {
    const props = {
      type: "password",
    };
    const wrapper = shallow(<Input {...props} />);
    const node = wrapper.find("Field").prop("type");
    expect(node).toEqual("password");
  });
});
