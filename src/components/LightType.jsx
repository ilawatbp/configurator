import { useState } from "react";
import "./LightType.css";
import ModelCard from "./ModelCard";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";

export default function LightType() {
  const [rightContent, setRightContent] = useState("a1");
  const modelList = [
    {
      id: "a1",
      name: "Model 1",
      image: "./types/a1.png",
    },
    {
      id: "a2",
      name: "Model 2",
      image: "./types/a2.png",
    },
    {
      id: "a3",
      name: "Model 3",
      image: "./types/a3.png",
    },
    {
      id: "a4",
      name: "Model 4",
      image: "./types/a4.png",
    },
  ];

  function handleClickModel(event) {
    const id = event.target.dataset.id;
    setRightContent(id);
  }

  const selectedModel = modelList.find((item) => item.id === rightContent);

  return (
    <div className="content-div">
      <div className="content-left">
        <h1>Types</h1>
        <div className="content-left-scrollable">
          <div>
            {modelList.map(({ name, image, id }) => (
              <ModelCard
                key={id}
                onClick={handleClickModel}
                modelName={name}
                imgId={id}
                imgLink={image}
              ></ModelCard>
            ))}
          </div>
        </div>
      </div>
      <div className="content-right">
        <div>
          <ImageGallery typeSelected={selectedModel} />
        </div>
      </div>
    </div>
  );
}
