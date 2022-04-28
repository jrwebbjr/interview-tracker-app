import { BsSearch } from "react-icons/bs";

export default function SearchBar(){
    return (
        <div class="search">
            <BsSearch className="icon" />
            <input type="text" name="searchTerm" value="searchTerm" placeholder="Search Jobs" onChange="" />
            <input type="submit" value="Search Jobs" />
        </div>
    )
}