import { useParams } from "react-router-dom"

export const BookPage = () => {
    let { id } = useParams();

    return(
        <div>
            <h1>{id}</h1>
        </div>
    )
}