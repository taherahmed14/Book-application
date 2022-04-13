import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        }  
    }, [value, delay]);
    return debounceValue;
}

export const BookPage = () => {
    let { genre } = useParams();
    const [books, setBooks] = useState([]);

    const [searchInput, setSearchInput] = useState("");
    const debounce = useDebounce(searchInput, 500);

    useEffect(() => {
        //console.log(debounce);
        if(searchInput.length > 0) {
            if(debounce) {
                getSearchedBook();
            }
        }
        else if(searchInput.length === 0) {
            getBookData();
        }
    }, [debounce, searchInput]);

    async function getSearchedBook() {
        try {
            let res = await fetch(`https://gutendex.com/books/?topic=${genre}&&search=${searchInput.toLowerCase()}`);
            let bookData = await res.json();
            setBooks(bookData.results);
        }
        catch(err) {
            setBooks([]);
        }
    }

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
                <div className="flex">
                    <Link to="/">
                        <img src="/back_btn.jpg" alt="back" className="w-12 h-12" />
                    </Link>   
                    <h2 className="text-[#5E56E7] text-4xl text-left capitalize">{genre}</h2>
                </div>
                <input className="border-2 text-left justify-left w-full mt-6 px-6 py-1 focus:outline-none"
                 type="text" placeholder="Search" onChange={e => setSearchInput(e.target.value)} />
            </div>  
            <div className="w-9/12 m-auto grid lg:gap-x-6 md:gap-x-4 sm:gap-x-1 gap-y-10 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 mt-16">
                {books.map((el => (
                    <BookCard key={el.id} book={el} />
                )))}
            </div>
        </div>
    )
}