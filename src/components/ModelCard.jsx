import "./ModelCard.css"
export default function ModelCard({modelName, imgLink, imgId, onClick}){
    return (
        <div className="item-card" onClick={onClick}>
          <img src={imgLink} alt="" data-id={imgId}/>
        <p>{modelName}</p>
      </div>
    );
}