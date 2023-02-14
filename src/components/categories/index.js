import Image from "next/image"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"

export default function Categories(){
    return(
        <div className=" container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mx-auto px-5 my-10">

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image src={ChrismasImage} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    <p className="text-xl ">Kid's Birthday</p>
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image src={ChrismasImage} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    <p className="text-xl ">Kid's Birthday</p>
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image src={ChrismasImage} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    <p className="text-xl ">Kid's Birthday</p>
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full">
                    <Image src={ChrismasImage} width={400} height={400} className="w-full h-full" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-primary opacity-0 transition-all hover:opacity-60">
                    <p className="text-xl ">Kid's Birthday</p>
                </div>
            </div>

        </div>
    )
}