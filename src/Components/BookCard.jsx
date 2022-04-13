import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    const handleBookView = () => {
        for(let key in bookFormat) {
            if(key === "text/html") {
                console.log("html");
                return window.location.href = bookFormat[key];
            }
            else if(key === "text/plain") {
                console.log("text");
                return window.location.href = bookFormat[key];
            }
        }
        return alert("No viewable version available");
    }

    return (
        <div className="w-auto cursor-pointer" onClick={handleBookView}>
            <img className="sm:h-16 md:h-56 lg:h-56 w-auto rounded-lg" src={bookCover} />
            <div className="text-[#333333] text-sm text-left pt-2">{book.title}</div>
            <div className="text-[#A0A0A0] text-xs text-left">{book.authors[0].name}</div>
        </div>
    )
};