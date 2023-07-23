import { Call, Email, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../assets/logo1.png";


export default function AboutUs() {
    return (
        <div className="mb-10">
            <div className="mb-10 pt-16 flex flex-row justify-center items-center">
            <div className="section-head my-10 col-span-1 sm:col-span-2 md:col-span-3 ">
                        <h4 className="text-2xl md:text-3xl"><span>About</span> us</h4>
                    </div>
            </div>

            <div className="container mx-auto grid grid-cols-12 gap-4">
                <div className="border rounded-full col-span-12 md:col-span-3 flex justify-center items-center p-5 m-5 mt-0">
                    <Image src={Logo} alt="Logo" width={300} height={300} className="w-70 h-70" />
                </div>
                <div className="col-span-12 md:col-span-9  px-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold">Who are we?</h3>
                    <p className="px-3">Welcome to Event07, your premier destination for exquisite event decorations that leave a lasting impression. We are a team of experienced and passionate event decorators dedicated to making your special occasion unforgettable. With our creative vision, attention to detail, and commitment to quality, we bring your event vision to life, transforming your space into an enchanting and elegant setting. Whether it's a wedding, birthday party, baby shower, or corporate event, we customize our services to fit your unique needs and preferences. From concept to execution, we are with you every step of the way, ensuring a seamless and stress-free experience. Contact us today to start planning your dream event!</p>
                    <div className="p-3 flex flex-row justify-center md:justify-start">
                        <IconButton color="accent"  onClick={()=>{window.open("tel:+9198719 73507")}}>
                            <Call />
                        </IconButton>
                        <IconButton color="accent"  onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=919871973507&text=Hi&type=phone_number&app_absent=0")}}>
                            <WhatsApp />
                        </IconButton>
                        <IconButton color="accent" onClick={()=>{window.open("https://www.instagram.com/event07")}}>
                            <Instagram />
                        </IconButton>
                        {/* <IconButton color="accent">
                            <Facebook />
                        </IconButton> */}
                        <IconButton color="accent"  onClick={()=>{window.open("mailto:ask.event07@gmail.com")}}>
                            <Email />
                        </IconButton>
                    </div>
                </div>
            </div>

        </div>
    )
}