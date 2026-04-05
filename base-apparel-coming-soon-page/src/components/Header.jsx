export default function Header(crops) {
    return (
        <header className="m-8 md:mx-20
        lg:mt-20 lg:mx-[165px] lg:mb-[136px]">
            <img {...crops} className="w-[101px]
            lg:w-[157.6px]"/>
        </header>
    )
}