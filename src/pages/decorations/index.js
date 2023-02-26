import ProductSection from "@/components/product-section";


export default function Decorations() {
    return (
        <>
            <div>
                <div className="mb-10 pt-16 flex flex-row justify-center items-center">
                    {/* <p className=" text-3xl relative text-center font-semibold product-section-heading" >All Decorations</p> */}

                    <div className="section-head my-10 col-span-1 sm:col-span-2 md:col-span-3">
                        <h4 className="text-2xl md:text-3xl"><span>All</span> Decorations</h4>
                    </div>
                </div>

                <ProductSection
                    title={"Birthday Decoration"}
                    type={"birthday-decorations"}
                    bgGray
                />

                <ProductSection
                    title={"Kid's Birthday Decoration"}
                    type={"kids-birthday-decorations"}
                />

                <ProductSection
                    title={"Anniversary Decoration"}
                    type={"anniversary-decorations"}
                    bgGray
                />

                <ProductSection
                    title={"Baby Shower & Welcome"}
                    type={"baby-shower-decorations"}
                />

                <ProductSection
                    title={"Wedding Decoration"}
                    type={"wedding-decorations"}
                    bgGray
                />

                <ProductSection
                    title={"New Year Decoration"}
                    type={"new-year-decorations"}
                />

                <ProductSection
                    title={"Valentine Decoration"}
                    type={"valentine-decorations"}
                    bgGray
                />

                <ProductSection
                    title={"Purposal Decoration"}
                    type={"purposal-decorations"}
                />

                <ProductSection
                    title={"Party Decoration"}
                    type={"party-decorations"}
                />

                <ProductSection
                    title={"Other Decoration"}
                    type={"other-decorations"}
                    bgGray
                />

            </div>
        </>
    )
}