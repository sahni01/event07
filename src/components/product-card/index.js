import { CurrencyRupee, FavoriteBorder } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"


export default function ProductCard({item,type}){

    function formatAmount(amount) {
        const formatter = new Intl.NumberFormat('en-IN');
        return formatter.format(Number(amount).toFixed(2));
    }

    return(
       <Link href={`${type}/details?id=${item?._id}`} >
         <div className="border rounded-xl shadow overflow-hidden relative p-1 bg-white transition-all hover:scale-105">
                    <div className="rounded-xl overflow-hidden relative h-80">
                        <Image alt="Product Image" src={item?.image} width={400} height={400} className="w-full h-full rounded-xl transition-all hover:scale-125" />

                        <div className="absolute top-2 right-2 bg-accent rounded-xl px-2">
                            <p className="text-white">{item.discount}% OFF</p>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className=" text-sm md:text-md font-semibold ">{item?.title}</p>
                        <div className="flex justify-between items-center">
                        <p className="text-md text-accent">
                            <CurrencyRupee/> {formatAmount(item?.price)}
                        </p>
                        <IconButton>
                            <FavoriteBorder/>
                        </IconButton>
                        </div>
                    </div>
                </div>
       </Link>
    )
}