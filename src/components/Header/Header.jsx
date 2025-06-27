import logo from "../../assets/logo.png"

import './Header.css'
export default function Header(){
    return(
        <div className="site-head">
            {/* <p>Customize ＼(｀0´)／</p> */}
            <p>Customize</p>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}