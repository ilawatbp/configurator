import "./Content.css";


export default function Content({children, className}) {


  return <div className={`content-center ${className}`}>
    {children}</div>; 
}