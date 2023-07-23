import { ArrowForward, CurrencyRupee, FavoriteBorder, WhatsApp } from "@mui/icons-material"
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
                        {/* <p className="text-md text-accent">
                            <CurrencyRupee/> {formatAmount(item?.price)}
                        </p> */}

                        <div className="flex flex-row items-center mt-2">
                                <p className=" font-semibold text-gray-500 line-through">
                                    <CurrencyRupee />
                                    {formatAmount(Math.round(Number(item.price)+((Number(item.price)*Number(item.discount))/100)))}</p>

                                {/* <ArrowForward color="accent" className="mx-3"/> */}

                                    <p className=" font-semibold text-accent ml-3">
                                    <CurrencyRupee />
                                    {formatAmount(item.price)}</p>
                                </div>

                        <IconButton onClick={()=>window.open(`https://api.whatsapp.com/send/?phone=919871973507&text=Hey,\n I want know about your best prices for ${item?.title}.  &type=phone_number&app_absent=0`)}>
                            <WhatsApp/>
                        </IconButton>
                        </div>
                    </div>
                </div>
       </Link>
    )
}