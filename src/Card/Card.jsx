import React from "react";
import Img from "../assets/x.webp";
import { Player } from "video-react";
import 'video-react/dist/video-react.css'; 
const Card = ({ id, title, url }) => {
  return (
    <div className="border-b-2 py-5 ">
      <div>
        <p className="my-4 text-xl font-semibold">
          Class - {id} : {title}
        </p>
      </div>

      <Player>
        <source src={url} />
      </Player>
    </div>
  );
};

export default Card;
