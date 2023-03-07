import React from "react";
import Item from "./Item";

const Content = () => {
  const array = [
    {
      id: 1,
      src: "image/css-icon 1.png",
      alt: "css-icon 1",
      title: "Lorem ipsum dolor sit amet",
      witdh: "128",
      height: "128",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
    {
      id: 2,
      src: "image/html-icon 1.png",
      alt: "html-icon 2",
      title: "Lorem ipsum dolor sit amet",
      witdh: "128",
      height: "128",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
    {
      id: 3,
      src: "image/url-icon 1.png",
      alt: "url-icon 3",
      title: "Lorem ipsum dolor sit amet",
      witdh: "128",
      height: "128",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
  ];
  return (
    <div className="content">
      {array.map((val) => {
        return <Item obj={val} key={val.id} />;
      })}
    </div>
  );
};

export default Content;
