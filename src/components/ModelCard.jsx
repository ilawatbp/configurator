// import "./ModelCard.css"
import styles from './ModelCard.module.css';
export default function ModelCard({modelName, imgLink, imgId, onClick}){
    return (
        <div className={`${styles['item-card']} ${styles.active}`} onClick={onClick}>
          <img src={imgLink} alt="" data-id={imgId}/>
        <p>{modelName}</p>
      </div>
    );
}