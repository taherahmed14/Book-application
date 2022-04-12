import { Link, useParams } from "react-router-dom"
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
            setBooks([]);
        }
    }

    return(
        <div className="mt-28 justify-center">
            <div className="w-9/12 m-auto">
                <h2 className="text-[#5E56E7] text-4xl text-left capitalize">{genre}</h2>
            </div>  
            <div className="w-9/12 m-auto grid lg:gap-x-6 md:gap-x-4 sm:gap-x-1 gap-y-10 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 mt-16">
                {books.map((el => (
                    <BookCard key={el.id} book={el} />
                )))}
            </div>
        </div>
    )
}