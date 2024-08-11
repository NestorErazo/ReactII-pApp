import { notFound } from "next/navigation";

export async function generateStaticParams() {

    const response = await fetch('https://rickandmortyapi.com/api/character');
    
    if (!response.ok) {
        throw new Error("Error al obtener los datos de los personajes");
    }

    const data = await response.json();


    return data.results.map((character) => ({
        id: String(character.id),
    }));
}

export default async function Page({ params }) {
    const data = await getData(params.id);
    
    if (!data) {
        notFound();
    }

    return (
        <div className="container">
           
            <img src={data.image} alt={data.name} style={{ width: '300px', height: '300px' }} />
    
            <h1>{data.name}</h1>
            <p>Especie: {data.species}</p>
            <p>Estado: {data.status}</p>
            <p>Género: {data.gender}</p>
            <p>Origen: {data.origin.name}</p>
            <p>Ubicación: {data.location.name}</p>
        </div>
    );
}

async function getData(id) {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) {
            throw new Error("Error al traer datos");
        }
        const posts = await res.json();
        return posts;
    } catch (error) {
        console.error(error);
        return null;
    }
}
