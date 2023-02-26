import Footer from "@/components/footer";
import Header from "@/components/header";
import Loader from "@/components/loader";
import { LoaderContext } from "@/contexts/loader";
import { useContext } from "react";

export default function DefaultLayout({children}){
    const {loader, setLoader} = useContext(LoaderContext);
    return(
        <>
        <Loader show={loader}/>
            <Header/>
            <div className="mt-[70.69px]" onLoad={()=>setLoader(false)}>
            {children}
            </div>
            <Footer/>
        </>
    )
}