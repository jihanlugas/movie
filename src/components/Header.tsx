import Link from 'next/link'

const Header = () => {
    return (
        <div className="mb-16">
            <div className="h-16 w-screen bg-gray-900 flex items-center shadow-lg fixed top-0 z-50">
                <div className={"w-full max-w-4xl mx-auto"}>
                    <div className="flex">
                        <Link href={`/`} passHref >
                            <div className={"text-2xl px-4"}>
                                {process.env.APP_NAME}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header