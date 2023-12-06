import { FaBars, FaMicrophone, FaVideo } from "react-icons/fa";
import youtlogo from "../assets/youtube-logo.png";
import { CiSearch } from "react-icons/ci";
import { GoBellFill } from "react-icons/go";

function Navbar() {
  return (
    <div>
      {/* Navbar top part */}
      <div className="flex justify-between ">
        {/* Bars and logo */}
        <div className="flex">
          <FaBars className="text-[25px] " />
          <img src={youtlogo} className="h-[50px]  " />
        </div>
        {/* Search input and mic */}
        <div className="flex">
          <div>
            <input type="text" />
            <CiSearch />
          </div>
          <FaMicrophone />
        </div>
        {/* create video, notification and account */}
        <div>
          <FaVideo />
          <p>
            <GoBellFill />
            <span>9+</span>
          </p>
          <img
            src="https://yt3.ggpht.com/X092IRVKy992rhwBCwf9EZtkMDlpd_OgCACahiuT2NP4gN_p2Y1CBVvRr-6N4fbEAOmckPf2=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
