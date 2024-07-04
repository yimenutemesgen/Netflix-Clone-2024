import React, { useEffect, useState } from "react";
import "./Header.css";
import Netflixlogo from "../../assets/netflix.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function Header() {
//   const [show, handleShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);
//   return (
//     <div className={`header_outer_container ${show && "nav__black"}`}>
//       <div className="header_container">
//         <div className="header_left">
//           <ul>
//             <li>
//               <img
//                 src={Netflixlogo}
//                 alt="Netflix Logo"
//                 width="50"
//                 className="logo"
//               />
//             </li>
//             <li>Home</li>
//             <li>TV Show</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>My List</li>
//             <li>Browse by Languages</li>
//           </ul>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li>
//               <SearchIcon />
//             </li>
//             <li>
//               <NotificationsNoneIcon />
//             </li>
//             <li>
//               <AccountBoxIcon />
//             </li>
//             <li>
//               <ArrowDropDownIcon />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;




// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import Netflixlogo from "../../assets/netflix.jpg";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [show, setShow] = useState(false);

  // Define the scroll handler function
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header_outer_container ${show ? "nav__black" : ""}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img
                src={Netflixlogo}
                alt="Netflix Logo"
                width="50"
                className="logo"
              />
            </li>
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
