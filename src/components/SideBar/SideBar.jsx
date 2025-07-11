import logo from "../../assets/logo icon.png";
import "./SideBar.css";
import { Box, ListTodo, Lightbulb } from "lucide-react";
export default function SideBar({ handleTabClick, btnClicked }) {
  return (
    <div className="hidden md:flex sidebar-container">
      <img className="margin-auto" src={logo} alt="icon" />
      <div className="flex flex-col h-[50vh] justify-center gap-10">
        <Lightbulb
          className={`min-w-7 min-h-9 py-1 ${
            btnClicked === "type" ? "active" : undefined
          } transition-all duration-500 ease-in-out`}
          strokeWidth={1}
          onClick={handleTabClick}
          data-name="type"
        />
        <ListTodo
          className={`min-w-7 min-h-9 pb-1 ${
            btnClicked === "detail" ? "active" : undefined
          } transition-all duration-500 ease-in-out`}
          strokeWidth={1}
          onClick={handleTabClick}
          data-name="detail"
        />
        <Box
          className={`min-w-7 min-h-9 pb-1 ${
            btnClicked === "composition" ? "active" : undefined
          } transition-all duration-500 ease-in-out`}
          strokeWidth={1}
          onClick={handleTabClick}
          data-name="composition"
        />
      </div>
    </div>
  );
}
