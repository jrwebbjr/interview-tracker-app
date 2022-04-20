import SearchBar from "../SearchBar/SearchBar";
import { TiHome } from "react-icons/ti";
import { TiDocumentAdd } from "react-icons/ti";

export default function NavBar(){
    return(
        <div className="navbar">
            <SearchBar />
            <ul className="nav-list">
                <li className="nav-links"><TiHome />Home</li>
                <li className="nav-links"><TiDocumentAdd />Add New Job</li>
                <li className="sign-in">Sign In</li>
            </ul>
        </div>
    )
}