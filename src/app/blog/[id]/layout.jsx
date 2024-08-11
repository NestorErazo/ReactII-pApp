import Image from "next/image"

export default function Layaout({children}){
    return(
        <>
        <Image src="/img/imagen1.jpg"width={300} height={300} ></Image> 
        <main>
        {children}
        </main>     
        </>
    )
}