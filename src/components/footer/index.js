import { CopyrightOutlined, CopyrightRounded, FacebookOutlined, Favorite, Instagram, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../assets/logo.png"

export default function Footer() {
    return (
        <>
            <footer className="bg-[rgba(0,0,0,0.7)] text-primary mt-10 ">
                <div className="px-5 py-10 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2">
                
                <div className=" flex justify-center items-center">
                <div className="text-center sm:text-left flex flex-col justify-center items-center sm:block">
                <Image src={Logo} width={150} className="transition-all hover:scale-105"/>
                        <p className="text-xl font-bold">Event 07</p>
                        <p className="text-sm">We Do it, Really Good </p>
                        <br/>
                        
                    <h2 className="text-xl font-extrabold">Get in Touch</h2>
                    <p>Gaur City 2, Greater Noida<br/> Gautam Buddha Nagar  <br /> Uttar Pradesh-201009, India</p>
                        <a href="tel:+917413002867" className="mr-1 underline hover:text-accent">+91-98719 73507 </a>
                        <a href="mailto:event07@gmail.com" className="ml-1 underline hover:text-accent"> uniqueballoondecoration101@gmail.com</a>
                        <div className="flex justify-center items-center sm:block">
                            <IconButton onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=917413002867&text=Hi&type=phone_number&app_absent=0")}}>
                                <WhatsApp className="text-primary"/>
                            </IconButton>
                            <IconButton onClick={()=>{window.open("https://www.facebook.com/people/unique.decoration.for.you/")}}>
                                <FacebookOutlined className="text-primary"/>
                            </IconButton>
                            <IconButton onClick={()=>{window.open("https://www.instagram.com/unique.decoration.for.you/")}}>
                                <Instagram className="text-primary" />
                            </IconButton>
                        </div>
                </div>
                </div>

                <div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9126617997676!2d77.0275981147873!3d28.482176782477353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c6f8c4ca1b%3A0x727226060d773072!2sBlock%20B%2C%20Sheetla%20Colony%2C%20Ashok%20Vihar%20Phase%20II%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1675448366804!5m2!1sen!2sin" width="100%" height="100%" className="rounded-lg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>

                </div>
                <div className="container mx-auto py-2">
                    <div className="text-center">
                        <p className="text-[12px] px-5">
                        Copyright 
                        <CopyrightRounded fontSize="small" className="mx-0.5 text-primary"/>
                        2022 Unique Balloon Decoration. All Rights Reserved. | Designed & Developed with <Favorite fontSize="small"/> By Nitesh Sahni
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

