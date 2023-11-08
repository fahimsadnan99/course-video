import React from "react";
import "./App.css";
import Card from "./Card/Card";

const topic = [
  {
    id: 3,
    name: "Part 1 -  Engulfing Key lavel + Sure Short + Etc",
    url: "https://res.cloudinary.com/ddp2rhi4c/video/upload/v1699462447/Engulf1.mp4",
  },
  {
    id: 4,
    name: "Part 2 -  Engulfing Key lavel + Sure Short + Etc",
    url: "https://res.cloudinary.com/ddp2rhi4c/video/upload/v1699465013/Engulfing%202.mp4",
  },
];

const App = () => {
  return (
    <div className="sm:mx-3 mx-5">
      <div className="grid grid-cols-1 responsive mx-auto ">
        {topic.map((item) => (
          <Card key={item.id} title={item?.name} id={item?.id} url={item?.url} />
        ))}
      </div>
    </div>
  );
};

export default App;
