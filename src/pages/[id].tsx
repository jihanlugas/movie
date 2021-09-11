import { NextPageContext } from "next"
import Head from "next/head"
import { Api } from "@lib/Api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Header from '@com/Header';
import Image from 'next/image';
import Rating from '@com/Rating'
import Link from 'next/link'
import { AiOutlineRight, AiOutlineLoading3Quarters } from 'react-icons/ai'

interface Isimilar {
    id: string,
    title: string,
    fullTitle: string,
    year: string,
    image: string,
    imDbRating: string,
    plot: string,
    directors: string,
}

interface Isimilars extends Array<Isimilar> { }

interface Iactor {
    id: string,
    name: string,
    image: string,
    asCaracter: string,
}


interface Iactors extends Array<Iactor> { }

interface Imovie {
    id: string,
    rank: string,
    title: string,
    fullTitle: string,
    year: string,
    image: string,
    crew: string,
    imDbRating: string,
    ImDbRatingVotes: string,
    releaseDate: string,
    runtimeMins: string,
    awards: string,
    runtimeStr: string,
    plot: string,
    directors: string,
    writers: string,
    genres: string,
    similarList: Isimilars,
    actorList: Iactors,
}

const Movie = ({ id }) => {
    const { isLoading, error, data, isFetching, refetch } = useQuery("movie", () => Api.get("/movie"));

    const [movie, setMovie] = useState<Imovie>(null)

    useEffect(() => {
        refetch()
    }, [id])

    useEffect(() => {
        if (data && data.payload) {
            const selectedMovie = data.payload.find(v => v.id === id)
            setMovie(selectedMovie)
        } else {
            setMovie(null)
        }
    }, [data])

    return (
        <div>
            <Head>
                <title>{movie ? movie.fullTitle : "Movie"}</title>
                <meta name="theme-color" content="rgba(17, 24, 39, 1" />
            </Head>
            <div className={""}>
                <Header />
                <div className={"max-w-4xl mx-auto"}>
                    {isLoading ? (
                        <div className={"h-screen w-full flex justify-center items-center"}>
                            <AiOutlineLoading3Quarters className={"animate-spin"} size={"5em"} />
                        </div>
                    ) : (
                        <div>
                            {movie ? (
                                <div className={""}>
                                    <div className={"p-4 mb-4 flex items-center"} >
                                        <Link href={`/`} passHref >
                                            <div className={"mr-2"}>Home</div>
                                        </Link>
                                        <div className={"mr-2 "}><AiOutlineRight /></div>
                                        <div>{movie.title}</div>
                                    </div>
                                    <div className={"flex px-4 mb-4"}>
                                        <div className={"flex flex-shrink-0 w-32 sm:w-36 md:w-44"}>
                                            <Image src={movie.image} alt={movie.title} width={400} height={800} />
                                        </div>
                                        <div className={"flex-1 p-2"}>
                                            <div className={"mb-2"}>
                                                <div>Title:</div>
                                                <div>{movie.fullTitle}</div>
                                            </div>
                                            <div className={"mb-2"}>
                                                <div>Year:</div>
                                                <div>{movie.year}</div>
                                            </div>
                                            <div className={"mb-2"}>
                                                <div>Crew:</div>
                                                <div>{movie.crew}</div>
                                            </div>
                                            <div className={"mb-2"}>
                                                <div>IMDB Rating:</div>
                                                <Rating rating={parseFloat(movie.imDbRating)} />
                                            </div>
                                            <div className={"mb-2"}>
                                                <div>Release Date:</div>
                                                <div>{movie.releaseDate}</div>
                                            </div>
                                            <div className={"mb-2"}>
                                                <div>Runtime:</div>
                                                <div>{movie.runtimeMins} Minutes</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"px-4 mb-4"}>
                                        <div className={"text-xl text-yellow-500 font-bold"}>
                                            Synopsis
                                        </div>
                                        <div>{movie.plot}</div>
                                    </div>
                                    {movie.actorList && movie.actorList.length > 0 && (
                                        <div className={" mb-4"}>
                                            <div className="text-lg ">
                                                <div className={"text-xl text-yellow-500 font-bold mb-2 px-4"}>
                                                    Actors
                                                </div>
                                                <div className={"overflow-hidden sm:p-4"}>
                                                    <div className={"flex overflow-x-scroll"}>
                                                        {movie.actorList.map((actor, key) => {
                                                            return (
                                                                <div className={"mx-2 bg-gray-900 rounded"} key={key}>
                                                                    <div className={"w-36"}>
                                                                        <Image src={actor.image} alt={actor.asCaracter} width={400} height={800} />
                                                                    </div>
                                                                    <div className={"p-2"}>
                                                                        <div className={""}>
                                                                            {actor.name}
                                                                        </div>
                                                                        {/* <div className={""}>
                                                                            {actor.asCaracter}
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className={"h-screen w-full flex justify-center items-center"}>
                                    Tidak ada data
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

Movie.getInitialProps = async ({ query }: NextPageContext) => {
    return { id: query.id }
}

export default Movie