import "./Content.css";


export default function Content({children, className}) {

console.log(className)


  return <div className={`content-center ${className}`}>{children}</div>;
}