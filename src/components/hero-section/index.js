import { Call, Favorite, Payment } from "@mui/icons-material";
import { Button, Rating } from "@mui/material";


export default function HeroSection() {
    return (
        <>
            <div className="w-full flex flex-col-reverse  items-center h-[calc(100vh-100px)] md:flex-row">
                <div className="w-full md:w-1/2 py-10 h-[500px] overflow-hidden ">
                    <div className="text-center" >
                        <div class="balloon"></div>
                        <div class="balloon"></div>
                        <div class="balloon"></div>
                        <div class="balloon"></div>
                        <div class="balloon"></div>
                    </div>
                </div>
                <div className="w-full text-center py-10 md:w-1/2 md:text-left  px-5 md:py-5">
                    <h2 className="font-extrabold text-4xl text-center md:text-6xl md:text-left tracking-wide ">
                        Decorate your events and parties with us
                    </h2>
                    <p className="mt-5 md:pr-10" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet perferendis magnam commodi sed autem accusantium impedit, labore tenetur inventore rerum in et?
                    </p>
                    <div className="mt-4 flex items-center justify-center md:justify-start">
                    <Rating name="read-only" value={5} readOnly className="mr-2" />
                    Our clients rates us exellent
                    </div>
                    <div className="mt-6">
                    <Button variant="outlined" startIcon={<Favorite/>} className="mr-2 p-3 px-5" >Book Now</Button>
                    <Button variant="outlined" startIcon={<Call/>} className="ml-2 p-3 px-5" > Contact us</Button>
                    </div>
                </div>
            </div>
        </>
    )
}