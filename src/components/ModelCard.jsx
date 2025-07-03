export default function ModelCard({modelName, imgLink, imgId, onClick}){
    return (
      // ${styles.active}
      <div
        className={`w-[165px] h-[187px] relative border border-[#c3c5c9] rounded-[10px] box-border my-[10px] overflow-hidden
                    md:w-[185px] md:h-[210px]          
          `}
        onClick={onClick}
      >
        <img className="w-full" src={imgLink} alt="" data-id={imgId} />
        <p className="absolute bottom-[10px] right-[10px]">{modelName}</p>
      </div>
    );
}