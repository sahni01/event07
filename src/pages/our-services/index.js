import { Cake, Celebration, ChildCare, Favorite } from "@mui/icons-material";

export default function OurServices() {
    return (
            <div>
                <div className="mb-10 pt-16 flex flex-row justify-center items-center">
                <p className=" text-3xl relative text-center font-semibold product-section-heading" >Our Services</p>
            </div>

                <div className="container px-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                <div class="card">
                        <div class="icon-wrapper">
                            <ChildCare fontSize="30" />
                        </div>
                        <h3 className="service-head" >Baby Shower & Welcome</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>

                    <div class="card">
                        <div class="icon-wrapper">
                            <Cake fontSize="30"/>
                        </div>
                        <h3 className="service-head" >Birthday Decoration</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>

                    <div class="card">
                        <div class="icon-wrapper">
                            <Favorite fontSize="30"/>
                        </div>
                        <h3 className="service-head" >Anniversary Decoration</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>

                    <div class="card">
                        <div class="icon-wrapper">
                            <Celebration fontSize="30"/>
                        </div>
                        <h3 className="service-head" >Party Decoration</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                            consequatur necessitatibus eaque.
                        </p>
                    </div>

                    
                </div>

            </div>
    )
}