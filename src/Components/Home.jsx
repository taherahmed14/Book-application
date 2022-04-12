import { GenreCard } from "./GenreCard"

export const Home = () => {
    return(
        <div className="mt-28 justify-center">
            <div className="pl-8 w-7/12 m-auto">
                <h1 className="text-[#5E56E7] text-4xl text-left">Gutenberg Project</h1>
                <p className="text=[##333333] text-left">A social cataloging website that allows you to freely search its database of books, 
                    annotations and reviews.
                </p>
            </div>
            <div className="grid grid-rows-4 md:grid-flow-row lg:grid-flow-col gap-y-8 gap-x-16 justify-center mt-16">
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