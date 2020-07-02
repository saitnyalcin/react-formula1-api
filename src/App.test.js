import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("renders the header of the Season 2008 page", () => {
    expect(wrapper.find("p").text()).toBe("Season 2008");
  });

  test("renders the nested Formula Component inside the App component", () => {
    expect(wrapper.find("Formula").exists()).toBe(true);
  });
});
