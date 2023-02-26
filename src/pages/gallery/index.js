import Image from "next/image"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"

export default function Gallery() {
    return (
        <div className="mb-10">
            <div className="mb-10 pt-16 flex flex-row justify-center items-center">
            <div className="section-head my-10 col-span-1 sm:col-span-2 md:col-span-3 ">
                        <h4 className="text-2xl md:text-3xl"><span>Our</span> Gallery</h4>
                    </div>
            </div>

            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>
            
            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image  alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>

            <div className="border rounded-xl overflow-hidden relative transition-shadow">
                <div className="w-full h-full overflow-hidden">
                    <Image alt="Gallery Image" src={ChrismasImage} width={400} height={400} className="w-full h-full transition-all hover:scale-125" />
                </div>
            </div>

            </div>

        </div>
    )
}