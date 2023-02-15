import Apps from "../Apps";
import { shallow } from "enzyme";

describe("App component", () => {
    it("renders the header", () => {
      const wrapper = shallow(<Apps />);
      const header = wrapper.find("header");
      expect(header.length).toEqual(1);
      expect(header.text()).toEqual("Header");
    });
  });