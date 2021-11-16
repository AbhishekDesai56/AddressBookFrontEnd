import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Login from "./login";

Enzyme.configure({ adapter: new Adapter() });

describe("Login", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it("shows my default text", () => {
    expect(wrapper.find("#header").text()).toEqual("Sign in");
  });

  it("fill the form with values", () => {
    const credentials = {
      email: "leongaban@gmail.com",
      password: "testpass",
    };
    expect(wrapper.find("#email").length).toBe(3);

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
    shallow(<Login />);
  });

  it("renders title without crashing", () => {
    const wrapper = mount(<Login />);

    const header = <span id="header">Sign in</span>;
    expect(wrapper.contains(header)).toBe(true);
  });

  it("renders form inputs", () => {
    const wrapper = mount(<Login />);

    expect(wrapper.find('input[id="email"]')).toHaveLength(1);
    expect(wrapper.find('input[id="password"]')).toHaveLength(1);
  });

  it("renders submit button without crashing", () => {
    const wrapper = mount(<Login />);

    const label = wrapper.find("#submitbutton").text();
    expect(label).toBe("Submit");
  });
});

describe("The events are working", () => {
  it("The form is submitted when the click event is fired by simulated click on the submit button", () => {
    const mockCallBack = jest.fn();

    const wrapper = mount(<Login onSubmit={mockCallBack()} />);

    wrapper.find("#submitbutton").simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});

describe("Snapshot", () => {
  it("matches App the snapshot", () => {
    const wrapper = mount(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
