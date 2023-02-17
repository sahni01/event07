import { CurrencyRupee, FavoriteBorder } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import Image from "next/image"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"


export default function ProductCard(){
    return(
        <div className="border rounded-xl overflow-hidden relative transition-shadow p-1 bg-white">
                    <div className="w-full rounded-xl overflow-hidden">
                        <Image alt="Product Image" src={ChrismasImage} width={400} height={400} className="w-full h-full rounded-xl transition-all hover:scale-125" />
                    </div>
                    <div className="p-3">
                        <p className=" text-sm md:text-md font-semibold ">Birthday Decoration for Surprise</p>
                        <div className="flex justify-between items-center">
                        <p className="text-md text-accent">
                            <CurrencyRupee/> 1399
                        </p>
                        <IconButton>
                            <FavoriteBorder/>
                        </IconButton>
                        </div>
                    </div>
                </div>
    )
}