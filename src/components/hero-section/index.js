// import { Call, Favorite, Payment } from "@mui/icons-material";
// import { Button, Rating } from "@mui/material";


// export default function HeroSection() {
//     return (
//         <>
//             <div className="relative w-full flex flex-col-reverse  items-center h-[calc(100vh-70.69px)] md:h-auto justify-center md:flex-row">
//                 <div className="w-full md:w-1/2 py-10 h-full md:h-[500px] overflow-hidden absolute z-0 md:relative ">
//                     <div className="text-center" >
//                         <div className="balloon"></div>
//                         <div className="balloon"></div>
//                         <div className="balloon"></div>
//                         <div className="balloon"></div>
//                         <div className="balloon"></div>
//                     </div>
//                 </div>
//                 <div className="w-full text-center h-full flex flex-col items-center justify-center md:items-start bg-[rgba(255,255,255,0.8)] md:w-1/2 md:text-left  px-5 md:py-5 z-10 ">
//                     <h2 className="font-extrabold text-4xl text-center md:text-6xl md:text-left tracking-wide ">
//                         Decorate your events and parties with us
//                     </h2>
//                     <p className="mt-5 md:pr-10" >The ultimate destination for your event decoration needs. From birthdays to weddings, we have got you covered with our creative and professional decoration services. Contact us now to make your event unforgettable.
//                     </p>
//                     <div className="mt-4 flex items-center justify-center flex-col-reverse md:flex-row md:justify-start flex-wrap">
//                     <Rating name="read-only" value={5} readOnly className="mr-2" />
//                     <p>Our clients rates us exellent</p>
//                     </div>
//                     <div className="mt-6">
//                     <Button variant="outlined" startIcon={<Favorite/>} className="mx-2 w-full sm:w-auto my-1 md:mr-2 p-3 px-5" >Book Now</Button>
//                     <Button variant="outlined" startIcon={<Call/>} className="mx-2 w-full sm:w-auto my-1 md:ml-2 p-3 px-5" > Contact us</Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }



// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import { IconButton } from "@mui/material";
// import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import Carousel from "react-multi-carousel";

export default function HeroSection() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    const [images,setImages] = useState([
       "/1.png",
       "/2.png",
       "/3.png",
       "/5.png"
    ])

    return (
            <div className="my-10">
            {/* <Carousel className="container mx-auto drop-shadow-md border-primary overflow-hidden rounded-[20px] m-2 shadow-primary-hovered" swipeable showArrows={true} showStatus={false} showThumbs={false} infiniteLoop autoPlay > */}
            <Carousel
            className="container mx-auto drop-shadow-md border-primary overflow-hidden shadow-primary-hovered sm:rounded-[20px]"
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={1000}
                containerClass="carousel-container text-primary"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style "
                itemClass="carousel-item-padding-40-px"
                // customLeftArrow={<CustomLeftArrow/>}
                // customRightArrow={<CustomRightArrow/>}
            >
                {
                    images.map((item,index)=>{
                        return(
                            <div key={index} className="w-full h-full flex items-center justify-center">
                                <img src={item} className="w-full max-h-[450px]"/>
                            </div>
                        )
                    })
                }
            </Carousel>
            </div>
    )
}

// const CustomLeftArrow = ({ onClick }) => (
//     <IconButton onClick={onClick} className={"react-multiple-carousel__arrow react-multiple-carousel__arrow--left"}>
//         <ChevronLeft/>
//     </IconButton>
//   );
//   const CustomRightArrow = ({ onClick }) => {
//     return(
//         <IconButton onClick={onClick} className={"absolute z-0 react-multiple-carousel__arrow--right"}>
//         <ChevronRight/>
//     </IconButton>
//     )
//   };
