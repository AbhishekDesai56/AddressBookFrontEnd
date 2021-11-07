import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MyEnhancedRegister from "./register";

Enzyme.configure({ adapter: new Adapter() });

describe("MyEnhancedRegister", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MyEnhancedRegister />);
  });

  it("shows my default text", () => {
    expect(wrapper.find("span").text()).toEqual("Register Form");
  });

  it("fill the form with values", () => {
    const registerDetails = {
      firstName: "leon",
      lastName: "ban",
      email: "leongaban@gmail.com",
      password: "testpass",
    };
    expect(wrapper.find("#email").length).toBe(2);

    const firstNameInput = wrapper.find("#firstName");
    firstNameInput.value = registerDetails.firstName;
    expect(firstNameInput.value).toBe("leon");

    const lastNameInput = wrapper.find("#lastName");
    lastNameInput.value = registerDetails.lastName;
    expect(lastNameInput.value).toBe("ban");

    const emailInput = wrapper.find("#email");
    emailInput.value = registerDetails.email;
    expect(emailInput.value).toBe("leongaban@gmail.com");

    const passwordInput = wrapper.find("#password");
    passwordInput.value = registerDetails.password;
    expect(passwordInput.value).toBe("testpass");
  });
});

describe("The components are rendered", () => {
  it("renders Login component without crashing", () => {
    shallow(<MyEnhancedRegister />);
  });

  it("renders title without crashing", () => {
    const wrapper = mount(<MyEnhancedRegister />);

    const header = <span>Register Form</span>;
    expect(wrapper.contains(header)).toBe(true);
  });

  it("renders form inputs", () => {
    const wrapper = mount(<MyEnhancedRegister />);

    expect(wrapper.find('input[id="firstName"]')).toHaveLength(1);
    expect(wrapper.find('input[id="lastName"]')).toHaveLength(1);
    expect(wrapper.find('input[id="email"]')).toHaveLength(1);
    expect(wrapper.find('input[id="password"]')).toHaveLength(1);
  });

  it("renders submit button without crashing", () => {
    const wrapper = mount(<MyEnhancedRegister />);

    const label = wrapper.find("#submitbutton").text();
    expect(label).toBe("Submit");
  });
});

describe("The events are working", () => {
  it("The form is submitted when the click event is fired by simulated click on the submit button", () => {
    const mockCallBack = jest.fn();

    const wrapper = mount(<MyEnhancedRegister onSubmit={mockCallBack()} />);

    wrapper.find("#submitbutton").simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});

describe("Snapshot", () => {
  it("matches App the snapshot", () => {
    const wrapper = mount(<MyEnhancedRegister />);
    expect(wrapper).toMatchSnapshot();
  });
});
