import { getDecorations } from "@/api"
import { CurrencyRupee, FavoriteBorder } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"
import ProductCard from "../product-card"


export default function ProductSection({ title, bgGray = false, type }) {

    const [decorations, setDecorations] = useState([]);

    useEffect(() => {
        getDecorationList();
    }, [type])


    const getDecorationList = async () => {
        try {
            const response = await getDecorations(type);
            setDecorations(response);
            console.log("DECORATIONS LIST ====> ", response);
        } catch (err) {
            console.log("GET DECORATIONS ERROR ====> ", err.message);
        }
    }


    return (
        <div className={`w-full py-20 ${bgGray ? 'bg-gray-200' : ''} `}>
            <div className="container mx-auto ">
                <div className="mx-5 mb-7 flex flex-row justify-between items-center">
                <div className="relative" >
                    <p className=" text-xl font-semibold product-section-heading py-1" >{title}</p>
                </div>
                    <Link href={"/decorations/"+type} className=" px-1 w-24 nav-link flex flex-row justify-center items-center">
                        <span className="nav-link-span text-center">View All</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-5" >

                    {
                        decorations.map((item, i) => (
                            <ProductCard
                                key={i}
                                item={item}
                                type={"decorations/"+type}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}