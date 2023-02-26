import { Cake, Celebration, ChildCare, Favorite } from "@mui/icons-material";

export default function OurServices() {
    return (
            <div className="mb-10">
                <div className="mb-10 pt-16 flex flex-row justify-center items-center">
                <div className="section-head my-10 col-span-1 sm:col-span-2 md:col-span-3 ">
                        <h4 className="text-2xl md:text-3xl"><span>Our</span> Services</h4>
                    </div>
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