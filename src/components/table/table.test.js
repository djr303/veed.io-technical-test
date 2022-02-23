import React from 'react';
import { shallow } from "enzyme";
import Table from "./";

describe('<Table />', () => {
  it('should render correctly when no items have been passed through to props', function () {
    const wrapper = shallow(<Table items={void 0} handleChange={() => {}} title="Test title" favorites={{}} />);
    expect(wrapper.toBeDefined());
  });
});