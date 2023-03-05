import { getDecorations } from "@/api";
import ProductCard from "@/components/product-card";
import ProductSection from "@/components/product-section";
import { LoaderContext } from "@/contexts/loader";
import Head from "next/head";
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";


export async function getStaticPaths() {
    const routes = ["birthday-decorations", "kids-birthday-decorations", "anniversary-decorations", "baby-shower-decorations", "wedding-decorations", "new-year-decorations", "valentine-decorations", "purposal-decorations", "party-decorations", "other-decorations"];
    const paths = routes.map((item) => ({ params: { list: item } }))
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}


export async function getStaticProps(context) {
    switch (context.params.list) {
        case "anniversary-decorations":
            return {
                props: {
                    title: "Anniversary Decorations",
                    type: context.params.list
                }
            }
            break;
        case "birthday-decorations":
            return {
                props: {
                    title: "Birthday Decorations",
                    type: context.params.list
                }
            }
            break;
        case "baby-shower-decorations":
            return {
                props: {
                    title: "Baby Shower & Welcome",
                    type: context.params.list
                }
            }
            break;
        case "kids-birthday-decorations":
            return {
                props: {
                    title: "Kid's Birthday Decorations",
                    type: context.params.list
                }
            }
            break;
        case "wedding-decorations":
            return {
                props: {
                    title: "Wedding Decorations",
                    type: context.params.list
                }
            }
            break;
        case "new-year-decorations":
            return {
                props: {
                    title: "New Year Decorations",
                    type: context.params.list
                }
            }
            break;
        case "valentine-decorations":
            return {
                props: {
                    title: "Valentine Decorations",
                    type: context.params.list
                }
            }
            break;
        case "purposal-decorations":
            return {
                props: {
                    title: "Purposal Decorations",
                    type: context.params.list
                }
            }
            break;
        case "party-decorations":
            return {
                props: {
                    title: "Party Decorations",
                    type: context.params.list
                }
            }
            break;
        case "other-decorations":
            return {
                props: {
                    title: "Other Decorations",
                    type: context.params.list
                }
            }
            break;
        default:
        // return {notFound:true}
    }
}


export default function DecorationList({ title, type }) {

    const [decorations, setDecorations] = useState([]);
    const {setLoader} = useContext(LoaderContext);

    useEffect(() => {
        setLoader(true);
        setDecorations([]);
        getDecorationList();
    }, [type])


    const getDecorationList = async () => {
        try {
            const response = await getDecorations(type);
            setDecorations(response);
            console.log("DECORATIONS LIST ====> ", response);
            setLoader(false)
        } catch (err) {
            console.log("GET DECORATIONS ERROR ====> ", err.message);
            setLoader(false)
        }
    }

    return (
        <>
        <Head>
        <title>{title}</title>
        <meta name="description" content="Decoration for your celebrations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
            <div>
                <div className=" pt-16 flex flex-row justify-center items-center">
                    {/* <p className=" text-3xl relative text-center font-semibold product-section-heading" >All Decorations</p> */}

                    <div className="section-head my-10 col-span-1 sm:col-span-2 md:col-span-3 ">
                        <h4 className="text-black text-2xl md:text-3xl">{title}</h4>
                    </div>
                </div>

                <div className={`w-full py-20 bg-gray-200 mb-10 `}>
                    <div className="container mx-auto ">
                        {
                            (decorations && decorations.length) ?
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-5" >

                                    {
                                        decorations.map((item, i) => (
                                            <ProductCard
                                                key={i}
                                                item={item}
                                                type={type}
                                            />
                                        ))
                                    }

                                </div> :
                                <p className="text-center text-2xl font-semibold">No Decoration Found !</p>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}