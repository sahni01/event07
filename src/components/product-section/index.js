import { CurrencyRupee, FavoriteBorder } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import Image from "next/image"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"
import ProductCard from "../product-card"


export default function ProductSection({ title, products = [1,2,3,4], bgGray = false }) {
    return (
        <div className={`w-full py-20 ${bgGray?'bg-gray-200':''} `}>
            <div className="container mx-auto ">
            <div className="mx-5 mb-7 relative" >
                <p className=" text-xl font-semibold product-section-heading py-1" >{title}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-5" >

                {
                    products.map((item,i)=>(
                        <ProductCard
                            key={i}
                        />
                    ))
                }
                
            </div>
        </div>
        </div>
    )
}