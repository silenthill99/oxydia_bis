import React from 'react';
import {Image} from "@/types";
import storage from "@/routes/storage";

type Props = {
    server_name: string,
    images: Image[];
}

const Images: React.FC<Props> = ({server_name, images}) => {
    return (
        <>
            <h2>{server_name}</h2>
            <div className={"grid md:grid-cols-3 gap-5 m-5 md:m-0"}>
                {images.length === 0 ? (
                    <p>Aucune images actuellement</p>
                ) : (
                    images.map((image, index) => (
                        <a key={index} href={storage.local(image.image_path).url} target={"_blank"}
                           className={"bg-white border border-slate-300 rounded shadow md:hover:scale-125 duration-300 flex flex-col"}>
                            <strong className={"text-center w-full inline-block"}>{image.image_name}</strong>
                            <img src={"/storage/" + image.image_path} className={"w-full h-full object-cover"}
                                 alt={image.image_name}/>
                        </a>
                    ))
                )}
            </div>
        </>
    );
};

export default Images;
