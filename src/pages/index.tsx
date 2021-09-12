import type { NextPage } from "next"
import Head from "next/head";
import { Api } from "@lib/Api";
import { useQuery } from "react-query";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from '@com/Header'
import Rating from '@com/Rating'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


interface Props {

}

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

interface Imovies extends Array<Imovie> { }



const Index: NextPage<Props> = ({ }) => {

    const { isLoading, error, data, isFetching } = useQuery("movie", () => Api.get("/movie"));

    const [movies, setMovies] = useState<Imovies>([])
    const [limitMovie, setLimitMovie] = useState<number>(20)

    useEffect(() => {
        if (data && data.payload) {
            setMovies(data.payload)
        } else {
            setMovies([])
        }
    }, [data])



    return (
        <div className={""}>
            <Head>
                <title>{process.env.APP_NAME}</title>
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
                            {movies.length === 0 ? (
                                <div className={"h-screen w-full flex justify-center items-center"}>
                                    No Data Found
                                </div>
                            ) : (
                                <div>
                                    <div className={""}>
                                        <div className={"p-4 text-xl text-yellow-500 font-bold"}>
                                            Top 10 Rank
                                        </div>
                                        <div className={"overflow-hidden sm:p-4"}>
                                            <div className={"flex overflow-x-scroll"}>
                                                {movies.slice(0, 10).map((movie, key) => {
                                                    return (
                                                        <Link key={key} href={`/${movie.id}`} passHref >
                                                            <div className={"mx-2"}>
                                                                <div className={"w-36"}>
                                                                    <Image src={movie.image} alt={movie.title} width={400} height={800} />
                                                                </div>
                                                                <div className={""}>
                                                                    {movie.title}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={"p-4 text-xl text-yellow-500 font-bold"}>
                                            Popular
                                        </div>
                                        <div className={"p-4 grid gap-4 grid-cols-1 sm:grid-cols-2"}>
                                            {movies.slice(10, limitMovie).map((movie, key) => {
                                                return (
                                                    <Link key={key} href={`/${movie.id}`} passHref >
                                                        <div className={"bg-gray-900 rounded-md overflow-hidden shadow-lg"}>
                                                            {key % 2 == 1 ? (
                                                                <div className={"flex"} >
                                                                    <div className={"flex-1 p-2"}>
                                                                        <div className={"mb-2 text-lg font-bold"}>{movie.fullTitle}</div>
                                                                        <Rating rating={parseFloat(movie.imDbRating)} />
                                                                        <div className={"mb-2"}>{movie.ImDbRatingVotes}</div>
                                                                        <div className={"mb-2"}>{movie.crew}</div>
                                                                        <div className={"mb-2"}>{movie.genres}</div>
                                                                    </div>
                                                                    <div className={"flex flex-shrink-0 w-28"}>
                                                                        <Image src={movie.image} alt={movie.title} width={400} height={800} />
                                                                    </div>

                                                                </div>
                                                            ) : (
                                                                <div className={"flex"} >
                                                                    <div className={"flex flex-shrink-0 w-28"}>
                                                                        <Image src={movie.image} alt={movie.title} width={400} height={800} />
                                                                    </div>
                                                                    <div className={"flex-1 p-2"}>
                                                                        <div className={"mb-2 text-lg font-bold"}>{movie.fullTitle}</div>
                                                                        <Rating rating={parseFloat(movie.imDbRating)} />
                                                                        <div className={"mb-2"}>{movie.ImDbRatingVotes}</div>
                                                                        <div className={"mb-2"}>{movie.crew}</div>
                                                                        <div className={"mb-2"}>{movie.genres}</div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                        {movies.length > limitMovie && (
                                            <div className={"flex justify-center items-center p-4 mb-4"}>
                                                <div className={"px-4 py-2 border rounded-full font-bold"} onClick={() => setLimitMovie(limitMovie + 10)}>
                                                    <div>Load More</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Index;