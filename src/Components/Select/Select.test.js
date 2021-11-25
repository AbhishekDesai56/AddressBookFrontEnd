import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Select from "./Select";
Enzyme.configure({ adapter: new Adapter() });

describe("<Select />", () => {
  const cityOptions = [
    { key: "Select City", value: "" },
    { key: "Mumbai", value: "Mumbai" },
    { key: "Pune", value: "Pune" },
    { key: "New Delhi", value: "New Delhi" },
    { key: "Firozabad", value: "Firozabad" },
  ];
  const props = {
    label: "City",
    name: "city",
    options: cityOptions,
  };

  it("renders the provided label text", () => {
    const wrapper = shallow(<Select {...props} />);
    const node = wrapper.find("label").text();
    expect(node).toBe(props.label);
  });

  it("renders the provided of name", () => {
    const wrapper = shallow(<Select {...props} />);
    const node = wrapper.find("select").prop("name");
    expect(node).toEqual("city");
  });
});
