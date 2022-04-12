import { Link } from "react-router-dom";

export const GenreCard = ({ path, genre }) => {
    return(
        <div>
            <Link to={path}>{genre}</Link>
        </div>
    )
}