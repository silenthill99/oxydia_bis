import React from 'react';

type Images = {
    src: string;
    alt: string;
    desc: string;
}

const imageList: Images[] = [{
    src: "/img/Mairie.png",
    alt: "Mairie",
    desc: "Mairie"
}, {
    src: "/img/France-travail.png",
    alt: "France travail",
    desc: "France travail"
}, {
    src: "/img/Bibliothèque.png",
    alt: "Bibliothèque",
    desc: "Bibliothèque municipale"
}]

const RolePlay : React.FC = () => {
    return (
        <>
            <h2>RolePlay</h2>
            <div className={"grid md:grid-cols-3 gap-5 m-5 md:m-0"}>
                {imageList.map((image, index) => (
                    <a key={index} href={image.src} target={"_blank"} className={"bg-white border border-slate-300 rounded shadow md:hover:scale-125 duration-300 flex flex-col"}>
                        <strong className={"text-center w-full inline-block"}>{image.desc}</strong>
                        <img src={image.src} className={"w-full h-full object-cover"} alt={image.alt} />
                    </a>
                ))}
            </div>
        </>
    );
};

export default RolePlay;
