import Image from "next/image"


export default function Layout({ children, imageUrl }) {
    return (
        <>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="Imagen del personaje"
                    width={300}
                    height={300}
                />
            )}
            <main>
                {children}
            </main>     
        </>
    );
}