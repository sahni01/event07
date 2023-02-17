import Image from "next/image"
import ChrismasImage from "../../assets/chrismas-decoration.jpg"

export default function Gallery() {
    return (
        <div>
            <div className="mb-10 pt-16 flex flex-row justify-center items-center">
                <p className=" text-3xl relative text-center font-semibold product-section-heading" >Our Gallery</p>
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