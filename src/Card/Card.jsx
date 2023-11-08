import React from "react";
import Img from "../assets/x.webp";
import { Player } from "video-react";
const Card = ({ id, title }) => {
  return (
    <div className="border-b-2 py-5 ">
      <div>
        <p className="my-4 text-xl font-semibold">
          Class - {id} : {title}
        </p>
      </div>

      <Player>
        <source src="https://res.cloudinary.com/ddp2rhi4c/video/upload/v1699203954/dszguodtosad7xotir6z.mp4" />
      </Player>
    </div>
  );
};

export default Card;
