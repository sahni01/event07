import { CopyrightOutlined, CopyrightRounded, FacebookOutlined, Favorite, Instagram, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Logo from "../../assets/logo.png"

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-200 text-black mt-10">
                <div className="px-5 py-10 container mx-auto">

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="text-center sm:text-left flex flex-col justify-center items-center sm:block">
                            <Image alt="Logo" src={Logo} width={150} className="transition-all hover:scale-105" />
                            <p className=" px-3 my-2">
                            Event07 is a modern brand that fullfils all your need for celebrations. we provide best in class modern or classical decorations, catering services, photo-video shoot and decorations for all ocassions and celebrations, wedding, birthday, anniversary,etc.</p>
                            <div className="flex justify-center items-center sm:block">
                                <IconButton onClick={() => { window.open("https://api.whatsapp.com/send/?phone=919871973507&text=Hi&type=phone_number&app_absent=0") }}>
                                    <WhatsApp className="text-black" />
                                </IconButton>
                                <IconButton onClick={() => { window.open("https://www.facebook.com/people/event07") }}>
                                    <FacebookOutlined className="text-black" />
                                </IconButton>
                                <IconButton onClick={() => { window.open("https://www.instagram.com/event07/") }}>
                                    <Instagram className="text-black" />
                                </IconButton>
                            </div>

                            <div className="px-3 my-2">

                            <h2 className="text-xl font-extrabold">Get in Touch</h2>
                            <p>Gaur City 2, Greater Noida<br /> Gautam Buddha Nagar  <br /> Uttar Pradesh-201009, India</p>
                            <a href="tel:+919871973507 " className="mr-1 underline hover:text-accent">+91-98719 73507 </a>
                            <a href="mailto:ask.event07@gmail.com" className="ml-1 underline hover:text-accent">ask.event07@gmail.com</a>
                        </div>
                        </div>
                    <div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9126617997676!2d77.0275981147873!3d28.482176782477353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c6f8c4ca1b%3A0x727226060d773072!2sBlock%20B%2C%20Sheetla%20Colony%2C%20Ashok%20Vihar%20Phase%20II%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1675448366804!5m2!1sen!2sin" width="100%" className="rounded-lg min-h-[300px] h-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    </div>


                </div>
                <div className=" py-2 bg-accent text-primary">
                    <div className="text-center flex flex-col justify-center items-center md:flex-row">
                        <p className="text-[15px] ">
                            Copyright
                            <CopyrightRounded fontSize="small" className="mx-0.5" />
                            2022 Event07 | All Rights Reserved. 
                        </p>

                        <a href="https://api.whatsapp.com/send/?phone=918178079555&text=Hi&type=phone_number&app_absent=0" className="ml-1 text-[15px] hover:text-primary">Designed & Developed with <Favorite fontSize="small" className="mx-0.5 text-primary" color="primary" /> By Nitesh Sahni</a>
                        {/* <a href="https://api.whatsapp.com/send/?phone=918178079555&text=Hi&type=phone_number&app_absent=0" className="ml-1 text-[15px] hover:text-accent">Powered by SBS</a> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

