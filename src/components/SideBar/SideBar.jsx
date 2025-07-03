import logo from "../../assets/logo icon.png";
import "./SideBar.css";
export default function SideBar({handleTabClick, btnClicked}) {
  return (
    <div className="hidden md:flex sidebar-container">
      <img src={logo} alt="icon" />


      <div className="side-icon">
        <i
          className={`material-symbols-outlined ${btnClicked === 'type'? "active":undefined}`}
          onClick={handleTabClick}
          data-name="type"
          style={{
            fontVariationSettings:
              "  'FILL' 0,  'wght' 100,  'GRAD' 0,  'opsz' 24",
            fontSize: "36px",
            color: "#333",
          }}
        >
          emoji_objects
        </i>
        <i
          className={`material-symbols-outlined ${btnClicked === 'detail'? "active":undefined}`}
          onClick={handleTabClick}
          data-name="detail"
          style={{
            fontVariationSettings:
              "  'FILL' 0,  'wght' 100,  'GRAD' 0,  'opsz' 24",
            fontSize: "36px",
            color: "#333",
          }}
        >
ballot
        </i>
        <i
          className={`material-symbols-outlined ${btnClicked === 'composition'? "active":undefined}`}
          onClick={handleTabClick}
          data-name="composition"
          style={{
            fontVariationSettings:
              "  'FILL' 0,  'wght' 100,  'GRAD' 0,  'opsz' 24",
            fontSize: "36px",
            color: "#333",
          }}
        >
          deployed_code
        </i>
      </div>
    </div>
  );
}
