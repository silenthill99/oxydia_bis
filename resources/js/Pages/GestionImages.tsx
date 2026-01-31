import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Head, router, usePage} from "@inertiajs/react";
import {Separator} from "@/Components/ui/separator";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import {Image} from "@/types";
import storage from "@/routes/storage";
import {Button} from "@/Components/ui/button";
import {TrashIcon} from "lucide-react";
import ImageController from "@/actions/App/Http/Controllers/ImageController";

const GestionImages = () => {
    const {images} = usePage<{images: Image[]}>().props
    return (
        <Authenticated>
            <Head title={"Gestion des images"} />
            <Separator/>
            <div className={"m-12"}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {images.map(image => (
                            <TableRow key={image.id}>
                                <TableCell>
                                    <img src={storage.local(image.image_path).url} alt={"Preview"}/>
                                </TableCell>
                                <TableCell>
                                    <Button variant={"destructive"} formMethod={"post"} onClick={() => router.delete(ImageController.destroy(image.id).url)}>
                                        <TrashIcon className={"text-white"}/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Authenticated>
    );
};

export default GestionImages;
