import { Link } from "react-router-dom";

export const GenreCard = ({ path, genre }) => {
    return(
        <div className="sm:px-1 lg:px-10 p-2 w-96 rounded-md shadow-md cursor-pointer">
            <Link to={path}>{genre}</Link>
        </div>
    )
}