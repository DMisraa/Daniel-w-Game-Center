import Image from "next/image";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
    <Image className="logo" src='/game_logo.png' alt="Game Logo" width={150} height={130} priority></Image>
   
      <h1 className="title"> 4 in a row board game !</h1>
    </div>
  );
}

export default Header;
