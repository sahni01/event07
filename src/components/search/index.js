import { Accessibility, Cake, Celebration, ChildCare, Close, Favorite, FavoriteBorder, FilterVintage, Flatware, Gesture, Girl, PriorityHigh, Speaker, Toys, VideoCameraBack, VideogameAsset, Wc, WineBar, Woman } from "@mui/icons-material";
import { Drawer, IconButton, TextField } from "@mui/material";
import Icon from '@mui/material/Icon';
import Link from "next/link";
import { useState } from "react";


export default function SearchDrawer({ open, setOpen }) {
    const [search, setSearch] = useState("");
    const decorations = [
        {
            title:"Birthday Decorations",
            icon: Cake,
            link: "/decorations/birthday-decorations"
        },
        {
            title:"Kid's Birthday Decorations",
            icon: Toys,
            link: "/decorations/kids-birthday-decorations"

        },
        {
            title:"Anniversary Decorations",
            icon: Favorite,
            link: "/decorations/anniversary-decorations"

        },
        {
            title:"Baby Shower & Welcome",
            icon: ChildCare,
            link: "/decorations/baby-shower-decorations"

        },
        {
            title:"Wedding Decorations",
            icon: Wc,
            link: "/decorations/wedding-decorations"

        },
        {
            title:"New Year Decorations",
            icon: Celebration,
            link: "/decorations/new-year-decorations"

        },
        {
            title:"Valentine Decorations",
            icon: FilterVintage,
            link: "/decorations/valentine-decorations"

        },
        {
            title:"Purposal Decorations",
            icon: Woman,
            link: "/decorations/purposal-decorations"

        },
        {
            title:"Party Decorations",
            icon: WineBar,
            link: "/decorations/party-decorations"

        },
        {
            title:"Haldi Decorations",
            icon: Girl,
            link: "/decorations/haldi-decorations"

        },
        {
            title:"Mehndi Decorations",
            icon: Gesture,
            link: "/decorations/mehndi-decorations"

        },
        {
            title:"Live Cartoon Character",
            icon: Accessibility,
            link: "/decorations/live-cartoon-character"

        },
        {
            title:"Photo & Video Shoot",
            icon: VideoCameraBack,
            link: "/decorations/photo-video-shoot"

        },
        {
            title:"Catering Services",
            icon: Flatware,
            link: "/decorations/catering-services"

        },
        {
            title:"Game Corridor",
            icon: VideogameAsset,
            link: "/decorations/game-corridor"

        },
        {
            title:"Music System",
            icon: Speaker,
            link: "/decorations/music-system"

        },
        {
            title:"Other Decorations",
            icon: FavoriteBorder,
            link: "/decorations/other-decorations"

        },


    ]

    return (
        <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
            <div className="w-[100vw] " style={{ display: "flex", justifyContent: 'end' }}>
                <IconButton color="primary" onClick={() => setOpen(false)} size="large"><Close fontSize="inherit" /></IconButton>
            </div>
            <div className="flex flex-col items-center px-5" style={{ position: "relative", width: "100vw", height: "100vh" }}>

                <TextField
                    label="Search"
                    placeholder="Search"
                    variant="outlined"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="w-full md:w-3/6"
                />

            {

                decorations.filter((ele)=>ele.title.includes(search)).length ?
            <div className="container mx-auto mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {
                    decorations.filter((ele)=>ele.title.includes(search)).map((item,i)=>(
                    <Link key={i} href={item.link} className=" border p-3 transition-all rounded-lg hover:text-primary hover:bg-accent flex flex-col items-center " >
                        <div className="border bg-white rounded-full p-3">
                        {<item.icon fontSize="large" color="accent"/>}
                        </div>
                        <div>
                            <p className="font-bold">{item.title}</p>
                        </div>
                    </Link>
                    )) 
                }

            </div> :
                (
                    <div className="w-full h-full flex flex-row justify-center items-center">
                        <p className="text-xl font-bold">No Decorations Found !</p>
                        {/* <PriorityHigh fontSize="large"/> */}
                    </div>
                )

            }

            </div>

        </Drawer>
    )
}