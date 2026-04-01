export const NotFound=()=>{
    return(
        <section className="flex flex-col items-center  justify-center gap-6 py-4 grow ">
            <h1 className="text-9xl text-main-500 drop-shadow-lg font-bold font-oswald">
                404
            </h1>
            <h2 className="text-lg text-main-800 font-oswald tracking-wide">The page you are searching does not exist </h2>
            <img className="h-56" src="/images/mushroom.png" alt="image of a mushroom deviation sign " />
        </section>
    )
}