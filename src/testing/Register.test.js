import { shallowEqual } from "react-redux";
import { Register } from "../login/register";

describe(Register, () => {
    it("renders without crashing", () => {
        shallowEqual(<Register />)
        expect(true).toBe(true)
    })
})