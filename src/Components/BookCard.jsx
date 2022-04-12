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
        <div className="w-auto">
            <img className="sm:h-16 md:h-56 lg:h-56 w-auto rounded-lg" src={bookCover} />
            <div className="text-[#333333] text-sm text-left pt-2">{book.title}</div>
            <div className="text-[#A0A0A0] text-xs text-left">{book.authors[0].name}</div>
        </div>
    )
};