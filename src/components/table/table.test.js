import React from "react";
import renderer from "react-test-renderer";
import Table from ".";
import { mount } from "enzyme";

describe("<Table />", () => {
  it("should render correctly when no items have been passed through to props", () => {
    const wrapper = renderer
      .create(
        <Table
          items={void 0}
          handleChange={() => {}}
          title="Test title"
          favorites={{}}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly when there are items but no favorites", () => {
    const items = [
      {
        id: 1,
        name: "test name 1",
        html_url: "http://www.testurl1.com",
        description: "Test description 1",
        stargazers_count: 100,
      },
      {
        id: 2,
        name: "test name 2",
        html_url: "http://www.testurl2.com",
        description: "Test description 2",
        stargazers_count: 200,
      },
      {
        id: 3,
        name: "test name 3",
        html_url: "http://www.testurl3.com",
        description: "Test description 3",
        stargazers_count: 300,
      },
    ];

    const wrapper = renderer
      .create(
        <Table
          items={items}
          handleChange={() => {}}
          title="Test title"
          favorites={{}}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly when there are items but and some favorites", () => {
    const items = [
      {
        id: 1,
        name: "test name 1",
        html_url: "http://www.testurl1.com",
        description: "Test description 1",
        stargazers_count: 100,
      },
      {
        id: 2,
        name: "test name 2",
        html_url: "http://www.testurl2.com",
        description: "Test description 2",
        stargazers_count: 200,
      },
      {
        id: 3,
        name: "test name 3",
        html_url: "http://www.testurl3.com",
        description: "Test description 3",
        stargazers_count: 300,
      },
    ];

    const favorites = { 1: true, 2: false };

    const wrapper = renderer
      .create(
        <Table
          items={items}
          handleChange={() => {}}
          title="Test title"
          favorites={favorites}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should fire the handleChange callback when the favorite star is clicked", () => {
    const items = [
      {
        id: 1,
        name: "test name 1",
        html_url: "http://www.testurl1.com",
        description: "Test description 1",
        stargazers_count: 100,
      },
      {
        id: 2,
        name: "test name 2",
        html_url: "http://www.testurl2.com",
        description: "Test description 2",
        stargazers_count: 200,
      },
      {
        id: 3,
        name: "test name 3",
        html_url: "http://www.testurl3.com",
        description: "Test description 3",
        stargazers_count: 300,
      },
    ];

    const handleChangeSpy = jest.fn();

    const element = mount(
      <Table handleChange={handleChangeSpy} items={items} favorites={{}} />
    );
    element.find('img[data-test=1]').simulate("click");
    expect(handleChangeSpy).toHaveBeenCalledWith(1);
  });
});
