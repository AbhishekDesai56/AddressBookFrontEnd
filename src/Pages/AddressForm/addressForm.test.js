import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AddressForm from "./addEditAddressForm";

Enzyme.configure({ adapter: new Adapter() });

describe("AddressForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AddressForm />);
  });

  it("shows my default text", () => {
    expect(wrapper.find("span").text()).toEqual("Person Address Form");
  });

  it("fill the form with values", () => {
    const addressFormDetails = {
      firstName: "leon",
      lastName: "ban",
      address: "mumbai mumbai",
      city: "mumbai",
      pinCode: "400001",
      phoneNumber: "9999999999",
    };

    const firstNameInput = wrapper.find("#firstName");
    firstNameInput.value = addressFormDetails.firstName;
    expect(firstNameInput.value).toBe("leon");

    const lastNameInput = wrapper.find("#lastName");
    lastNameInput.value = addressFormDetails.lastName;
    expect(lastNameInput.value).toBe("ban");

    const addressInput = wrapper.find("#address");
    addressInput.value = addressFormDetails.address;
    expect(addressInput.value).toBe("mumbai mumbai");

    const cityInput = wrapper.find("#city");
    cityInput.value = addressFormDetails.city;
    expect(cityInput.value).toBe("mumbai");

    const pinCodeInput = wrapper.find("#pinCode");
    pinCodeInput.value = addressFormDetails.pinCode;
    expect(pinCodeInput.value).toBe("400001");

    const phoneNumberInput = wrapper.find("#phoneNumber");
    phoneNumberInput.value = addressFormDetails.phoneNumber;
    expect(phoneNumberInput.value).toBe("9999999999");
  });
});

describe("The components are rendered", () => {
  it("renders Login component without crashing", () => {
    shallow(<AddressForm />);
  });
  it("renders title without crashing", () => {
    const wrapper = mount(<AddressForm />);
    const header = <span>Person Address Form</span>;
    expect(wrapper.contains(header)).toBe(true);
  });
  it("renders form inputs", () => {
    const wrapper = mount(<AddressForm />);
    expect(wrapper.find('input[id="firstName"]')).toHaveLength(1);
    expect(wrapper.find('input[id="lastName"]')).toHaveLength(1);
    expect(wrapper.find('textarea[id="address"]')).toHaveLength(1);
    expect(wrapper.find('select[id="city"]')).toHaveLength(1);
    expect(wrapper.find('select[id="pinCode"]')).toHaveLength(1);
    expect(wrapper.find('input[id="phoneNumber"]')).toHaveLength(1);
  });
  it("renders submit button without crashing", () => {
    const wrapper = mount(<AddressForm />);
    const label = wrapper.find("#submitButton").text();
    expect(label).toBe("Add");
    const label2 = wrapper.find("#resetButton").text();
    expect(label2).toBe("Reset");
  });
});

describe("The events are working", () => {
  it("The form is submitted when the click event is fired by simulated click on the submit button", () => {
    const mockCallBack = jest.fn();

    const wrapper = mount(<AddressForm onSubmit={mockCallBack()} />);

    wrapper.find("#submitButton").simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(1);

    wrapper.find("#resetButton").simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});

describe("Snapshot", () => {
  it("matches App the snapshot", () => {
    const wrapper = mount(<AddressForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
