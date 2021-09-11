import { ImStarEmpty, ImStarHalf, ImStarFull } from 'react-icons/im'

const Rating = ({ rating }: { rating: number }) => {
    if (rating > 9) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 8) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarHalf className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 7) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 6) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarHalf className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 5) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 4) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarHalf className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 3) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarFull className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 2) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarHalf className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    } else if (rating > 1) {
        return (
            <div className={"flex"}>
                <ImStarFull className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    } else {
        return (
            <div className={"flex"}>
                <ImStarHalf className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
                <ImStarEmpty className={"text-yellow-500"} />
            </div>
        )
    }
}

export default Rating;