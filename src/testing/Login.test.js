import { shallowEqual } from "react-redux";
import { Login } from "../login/Login";

describe(Login, () => {
  it("renders without crashing", () => {
    shallowEqual(<Login />);
    expect(true).toBe(true);
  });
});
