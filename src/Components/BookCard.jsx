import { useState, useEffect } from "react";

export const BookCard = ({ book }) => {
    const [bookCover, setBookCover] = useState("");
    let bookFormat = book.formats;

    useEffect(() => {
        for(let key in bookFormat) {
            if(key === "image/jpeg") {
                setBookCover(bookFormat[key]);
            }
        }
    }, []);

    return (
        <div>
            <img src={bookCover} />
            <div>{book.title}</div>
            <div>{book.authors[0].name}</div>
        </div>
    )
};