import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MyEnhancedLogin from "./login";

Enzyme.configure({ adapter: new Adapter() });

describe("MyEnhancedLogin", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MyEnhancedLogin />);
  });

  it("shows my default text", () => {
    expect(wrapper.find("span").text()).toEqual("Login Form");
  });

  it("fill the form with values", () => {
    const credentials = {
      email: "leongaban@gmail.com",
      password: "testpass",
    };
    expect(wrapper.find("#email").length).toBe(2);

    const emailInput = wrapper.find("#email");
    emailInput.value = credentials.email;
    expect(emailInput.value).toBe("leongaban@gmail.com");

    const passwordInput = wrapper.find("#password");
    passwordInput.value = credentials.password;
    expect(passwordInput.value).toBe("testpass");
  });
});

describe("The components are rendered", () => {
  it("renders Login component without crashing", () => {
    shallow(<MyEnhancedLogin />);
  });

  it("renders title without crashing", () => {
    const wrapper = mount(<MyEnhancedLogin />);

    const header = <span>Login Form</span>;
    expect(wrapper.contains(header)).toBe(true);
  });

  it("renders form inputs", () => {
    const wrapper = mount(<MyEnhancedLogin />);

    expect(wrapper.find('input[id="email"]')).toHaveLength(1);
    expect(wrapper.find('input[id="password"]')).toHaveLength(1);
  });

  it("renders submit button without crashing", () => {
    const wrapper = mount(<MyEnhancedLogin />);

    const label = wrapper.find("#submitbutton").text();
    expect(label).toBe("Submit");
  });
});

describe("The events are working", () => {
  it("The form is submitted when the click event is fired by simulated click on the submit button", () => {
    const mockCallBack = jest.fn();

    const wrapper = mount(<MyEnhancedLogin onSubmit={mockCallBack()} />);

    wrapper.find("#submitbutton").simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});

describe("Snapshot", () => {
  it("matches App the snapshot", () => {
    const wrapper = mount(<MyEnhancedLogin />);
    expect(wrapper).toMatchSnapshot();
  });
});
