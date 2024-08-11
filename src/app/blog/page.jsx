import Link from "next/link";
import '../globals.css'; 


export const metadata={
    title: "Blog de pruebas ",
    description: "Este es un blog de pruebas",
 };


 export default async function BlogPosts() {
    const data = await getData(); 

    if (!data) {
        return <p>Error al cargar los datos</p>;
    }

    return (
        <div className="container">
        <p>Este es el contenido del blog de Rick and Morty API</p>
        <br />
        <ul className="cards-list">
            {data.map(({ id, image, name, species, status, gender, origin, location }) => (
                <li key={id} className="card">
                    <Link href={`/blog/${id}`}>
                        <h3>{id} - {name}</h3>
                    </Link>
                    <img 
                        src={image} 
                        alt={name} 
                    />
                    <p><strong>Especie:</strong> {species}</p>
                    <p><strong>Estado:</strong> {status}</p>
                    <p><strong>Género:</strong> {gender}</p>
                    <p><strong>Origen:</strong> {origin.name}</p>
                    <p><strong>Ubicación:</strong> {location.name}</p>
                </li>
            ))}
        </ul>
    </div>
    );
}

async function getData() {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character/');
        if (!res.ok) {
            throw new Error("Error al traer datos");
        }
        const { results } = await res.json();  
        return results;
    } catch (error) {
        console.error(error);
        return null;  
    }
}
