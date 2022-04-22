import SearchBar from "../searchBar/SearchBar";
import { TiHome } from "react-icons/ti";
import { TiDocumentAdd } from "react-icons/ti";
import { TiUser } from "react-icons/ti";

export default function NavBar(){
    return(
        <div className="navbar">
            <h1 className="logo">App-ly</h1>
                <ul className="nav-list">
                    <li className="nav-links"><TiHome className="icon" /> Home</li>
                    <li className="nav-links"><TiDocumentAdd className="icon" /> Add New Job</li>
                    <li className="sign-in"><TiUser className="icon" /> Sign In</li>
                </ul>
            <SearchBar />
        </div>
    )
}