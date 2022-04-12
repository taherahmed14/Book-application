import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

export const BookPage = () => {
    let { genre } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBookData();
    }, []);

    async function getBookData() {
        try {
            let res = await fetch(`https://gutendex.com/books/?topic=${genre}`);
            let bookData = await res.json();
            console.log(bookData.results);
            setBooks(bookData.results);
        }
        catch(err) {
            console.log("Fetch error: ", err);
            // setBooks([]);
        }
    }

    return(
        <div>
            <div>
                <h1>{genre}</h1>
            </div>  
            <div>
                {books.map((el => (
                    <BookCard key={el.id} book={el} />
                )))}
            </div>
        </div>
    )
}