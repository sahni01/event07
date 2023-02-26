import { Call, Email, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../assets/logo-light.png";


export default function AboutUs() {
    return (
        <div className="mb-10">
            <div className="mb-10 pt-16 flex flex-row justify-center items-center">
            <div className="section-head my-10 col-span-1 sm:col-span-2 md:col-span-3 ">
                        <h4 className="text-2xl md:text-3xl"><span>About</span> us</h4>
                    </div>
            </div>

            <div className="container mx-auto grid grid-cols-12 gap-4">
                <div className="w-full h-full  border rounded-full col-span-12 md:col-span-3 flex justify-center items-center p-5">
                    <Image src={Logo} alt="Logo" width={300} height={300} className="w-70 h-70" />
                </div>
                <div className="col-span-12 md:col-span-9  px-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold">Who are we?</h3>
                    <p className="px-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas reiciendis commodi, atque temporibus esse accusamus perspiciatis! Quo deleniti eius deserunt ipsum natus accusantium eveniet sed magni atque totam cupiditate tenetur quasi tempore quia necessitatibus consequatur, quam commodi quas labore provident quidem reiciendis quibusdam explicabo laborum? Ad molestias enim impedit dolores, quis, esse tempore neque sunt expedita consequatur animi recusandae reprehenderit libero accusantium corporis architecto labore veniam? Molestiae culpa alias neque fuga aperiam,</p>
                    <div className="p-3 flex flex-row justify-center md:justify-start">
                        <IconButton color="accent">
                            <Call />
                        </IconButton>
                        <IconButton color="accent">
                            <WhatsApp />
                        </IconButton>
                        <IconButton color="accent">
                            <Instagram />
                        </IconButton>
                        <IconButton color="accent">
                            <Facebook />
                        </IconButton>
                        <IconButton color="accent">
                            <Email />
                        </IconButton>
                    </div>
                </div>
            </div>

        </div>
    )
}