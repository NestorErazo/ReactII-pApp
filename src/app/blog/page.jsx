import Link from "next/link";


export const metadata={
    title: "Blog de pruebas",
    description: "Este es un blog de pruebas",
 };


export default async function post (){
const data= await getData();
    return(
            <div>
           <p>este es el contenido del blog </p>
           <br></br>
           <br></br>
           <ul>
            {data.map( ({id,title,body}) =>(
                <li key={id}>
                   <Link href={`/blog/${id}`}> <h3>{id} -- {title}</h3></Link>
                    <p>{body}</p>
                </li>
            ))
            }
                 </ul>
            </div>
    )
}

async function getData() {
   try {
    const res =await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error("Error fetch");
    }
    const posts = await res.json();
    return posts;
   } catch (error) {
    console.error(error);    
   }
}

