import { GenreCard } from "./GenreCard"

export const Home = () => {
    return(
        <div>
            <h1>Gutenberg Project</h1>
            <p>A social cataloging website that allows you to freely search its database of books, 
                annotations and reviews.
            </p>
            <div>
                <GenreCard path="/books/topic=fiction" genre="FICTION" />
                <GenreCard path="/books/topic=drama" genre="DRAMA" />
                <GenreCard path="/books/topic=humour" genre="HUMOUR" />
                <GenreCard path="/books/topic=politics" genre="POLITICS" />
                <GenreCard path="/books/topic=philosophy" genre="PHILOSOPHY" />
                <GenreCard path="/books/topic=history" genre="HISTORY" />
                <GenreCard path="/books/topic=adventure" genre="ADVENTURE" />
            </div>
        </div>
    )
}