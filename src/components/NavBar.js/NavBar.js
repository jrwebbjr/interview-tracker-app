import SearchBar from "../SearchBar/SearchBar";
import { TiHome } from "react-icons/ti";
import { TiDocumentAdd } from "react-icons/ti";
import { TiUser } from "react-icons/ti";
import Logo from "../../../public/Logo.jpg";

export default function NavBar(){
    return(
        <div className="navbar">
            <h1 className="logo">App-ly</h1>
            <img src={Logo} alt="Logo" />
                <ul className="nav-list">
                    <li className="nav-links"><TiHome className="icon" /> Home</li>
                    <li className="nav-links"><TiDocumentAdd className="icon" /> Add New Job</li>
                    <li className="sign-in"><TiUser className="icon" /> Sign In</li>
                </ul>
            <SearchBar />
        </div>
    )
}