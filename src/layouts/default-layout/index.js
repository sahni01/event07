import Header from "@/components/header";
import Loader from "@/components/loader";
import { LoaderContext } from "@/contexts/loader";
import { useContext } from "react";
import dynamic from 'next/dynamic'
import FloatingButton from "@/components/float-buttons";

const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => <Loader show={true}/>,
})

export default function DefaultLayout({children}){
    const {loader, setLoader} = useContext(LoaderContext);
    return(
        <div className="w-full relative">
        <Loader show={loader}/>
            <Header/>
            <div className="mt-[70.69px]" onLoad={()=>setLoader(false)}>
            {children}
            </div>
            <Footer/>
        <FloatingButton/>
        </div>
    )
}