import { Accessibility, Cake, Celebration, ChildCare, Close, Favorite, FavoriteBorder, FilterVintage, Flatware, Gesture, Girl, PriorityHigh, Speaker, Toys, VideoCameraBack, VideogameAsset, Wc, WineBar, Woman } from "@mui/icons-material";
import Link from "next/link";



export default function OurServices() {

    const decorations = [
        {
            title:"Birthday Decorations",
            icon: Cake,
            link: "/decorations/birthday-decorations",
            description: "Make your birthday celebration extra special with our personalized decoration services. From balloons and banners to themed décor and lighting, we've got everything covered to make your day unforgettable."
        },
        {
            title:"Kid's Birthday Decorations",
            icon: Toys,
            link: "/decorations/kids-birthday-decorations",
            description: "Let us take your child's birthday party to the next level with our fun and colorful decorations. Our services include cartoon characters, toys, and themed décor that will keep the kids entertained and happy."

        },
        {
            title:"Anniversary Decorations",
            icon: Favorite,
            link: "/decorations/anniversary-decorations",
            description: "Celebrate your wedding anniversary in style with our romantic decoration services. We offer flowers, candles, lighting, and other décor items that will create a warm and memorable setting for you and your partner."

        },
        {
            title:"Baby Shower & Welcome",
            icon: ChildCare,
            link: "/decorations/baby-shower-decorations",
            description: "Welcome your newborn or celebrate your baby shower with our warm and welcoming decoration services. Our decorations include balloons, banners, themed décor, and other items that will create a cozy and joyful atmosphere."

        },
        {
            title:"Wedding Decorations",
            icon: Wc,
            link: "/decorations/wedding-decorations",
            description: "Create a dreamy and enchanting atmosphere for your wedding with our exquisite decoration services. We offer flowers, lighting, table settings, and other décor items that will make your big day unforgettable."

        },
        {
            title:"New Year Decorations",
            icon: Celebration,
            link: "/decorations/new-year-decorations",
            description: "Ring in the New Year with our festive decoration services. We offer balloons, banners, themed décor, lighting, and other party essentials that will make your celebration one to remember."
        },
        {
            title:"Valentine Decorations",
            icon: FilterVintage,
            link: "/decorations/valentine-decorations",
            description: "Surprise your partner with our romantic decoration services for Valentine's Day. Our decorations include flowers, candles, lighting, and other items that will set the mood for a magical and memorable evening."

        },
        {
            title:"Purposal Decorations",
            icon: Woman,
            link: "/decorations/purposal-decorations",
            description: "Pop the question in style with our personalized decoration services. We offer candles, flowers, lighting, and other décor items that will create a special and unforgettable moment."

        },
        {
            title:"Party Decorations",
            icon: WineBar,
            link: "/decorations/party-decorations",
            description: "Make any party a hit with our fun and lively decoration services. Our decorations include balloons, banners, themed décor, lighting, and other party essentials that will keep the good times rolling."

        },
        {
            title:"Haldi Decorations",
            icon: Girl,
            link: "/decorations/haldi-decorations",
            description: "Add some color and energy to your Haldi ceremony with our vibrant decoration services. Our decorations include flowers, lighting, and other items that will make the occasion one to remember."

        },
        {
            title:"Mehndi Decorations",
            icon: Gesture,
            link: "/decorations/mehndi-decorations",
            description: "Create a stunning backdrop for your Mehndi ceremony with our exquisite decoration services. We offer flowers, lighting, drapery, and other décor items that will bring a touch of elegance and charm to your special day."

        },
        {
            title:"Live Cartoon Character",
            icon: Accessibility,
            link: "/decorations/live-cartoon-character",
            description: "Make your child's party a hit with our fun and interactive decoration services. Our live cartoon characters will entertain the kids and create a magical and unforgettable experience."

        },
        {
            title:"Photo & Video Shoot",
            icon: VideoCameraBack,
            link: "/decorations/photo-video-shoot",
            description: "Capture your special moments with our professional photo and video shoot services. Our team of experts will help you create beautiful and timeless memories that you can cherish forever."

        },
        {
            title:"Catering Services",
            icon: Flatware,
            link: "/decorations/catering-services",
            description: "Treat your guests to a delicious and sumptuous feast with our catering services. We offer a wide range of cuisines and menus to suit every taste and preference."

        },
        {
            title:"Game Corridor",
            icon: VideogameAsset,
            link: "/decorations/game-corridor",
            description: "Keep your guests entertained and engaged with our fun and exciting game corridor. We offer a variety of games and activities that will keep everyone entertained and happy."

        },
        {
            title:"Music System",
            icon: Speaker,
            link: "/decorations/music-system",
            description: "Set the mood and tone for your event with our high-quality music system. Our professional sound engineers will ensure that your event is filled with great music and sound."

        },
        {
            title:"Other Decorations",
            icon: FavoriteBorder,
            link: "/decorations/other-decorations",
            description: "Whatever your decoration needs may be, we've got you covered. Our other decoration services include drapery, lighting, furniture, and other décor items that will add a touch of style and sophistication to your event."

        },


    ]

    return (
            <div className="mb-10">
                <div className="mb-10 pt-16 flex flex-row justify-center items-center">
                <div className="section-head my-10 col-span-1 sm:col-span-2 md:col-span-3 ">
                        <h4 className="text-2xl md:text-3xl"><span>Our</span> Services</h4>
                    </div>
            </div>

                <div className="container px-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                {
                    decorations.map((item,i)=>(

                <Link href={item.link} class="card">
                        <div class="icon-wrapper">
                            <item.icon fontSize="30" />
                        </div>
                        <h3 className="service-head" >{item.title}</h3>
                        <p className="service-desc">
                            {item.description}
                        </p>
                    </Link>
                    ))
                }

                    
                </div>

            </div>
    )
}