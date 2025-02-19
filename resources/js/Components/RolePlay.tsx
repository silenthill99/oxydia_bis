import React from 'react';
import Mairie from "../../images/Mairie.png"
import FranceTravail from "../../images/France travail.png"
import Bibliotheque from "../../images/Bibliothèque.png"

type Images = {
    src: string;
    alt: string;
    desc: string;
}

const ImageList: Images[] = [{
    src: Mairie,
    alt: "Mairie",
    desc: "Mairie"
}, {
    src: FranceTravail,
    alt: "France travail",
    desc: "France travail"
}, {
    src: Bibliotheque,
    alt: "Bibliothèque",
    desc: "Bibliothèque municipale"
}]

const RolePlay = () => {
    return (
        <>
            <h2>RolePlay</h2>
            <div className={"grid md:grid-cols-3 gap-5 m-5 md:m-0"}>
                {ImageList.map((image, id) => (
                    <a key={id} href={image.src} target={"_blank"} className={"bg-white border border-slate-300 rounded shadow md:hover:scale-125 duration-300 flex flex-col"}>
                        <strong className={"text-center w-full inline-block"}>{image.desc}</strong>
                        <img src={image.src} className={"w-full h-full object-cover"} alt={image.alt} />
                    </a>
                ))}
            </div>
        </>
    );
};

export default RolePlay;
