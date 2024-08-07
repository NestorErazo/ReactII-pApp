import Image from "next/image"

export const metadata={
    title: "Primer post",
    description: "post variado",
 };

export default function primerPost (){
    return(
        <div>
            <h1>este es el primer post</h1>
            <Image src="/img/imagen1.jpg"width={300} height={300} ></Image>
        </div>
    )
}