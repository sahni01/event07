import Image from "next/image"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"

export default function Categories(){
    return(
        <div className=" container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mx-auto px-5 my-10">

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image alt="Category Image" src={"/37.jpg"} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    {/* <p className="text-xl font-bold">Kid's Birthday Decoration</p> */}
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image alt="Category Image" src={"/10.jpg"} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    {/* <p className="text-xl font-bold">Birthday Decoration</p> */}
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image alt="Category Image" src={"/11.jpg"} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    {/* <p className="text-xl font-bold">Anniversary Decoration</p> */}
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image alt="Category Image" src={"/48.jpg"} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    {/* <p className="text-xl font-bold">Haldi Decoration</p> */}
                </div>
            </div>

        </div>
    )
}