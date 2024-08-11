export default function Layaout({children}){
    return(
        <>
        <nav>
            Nav bar
        </nav>
        <main>
        {children}
        </main>
        <footer>Footer</footer>
        </>
    )
}
