import Header from "@/components/header";
import Loader from "@/components/loader";
import { LoaderContext } from "@/contexts/loader";
import { useContext } from "react";
import dynamic from 'next/dynamic'
import FloatingButton from "@/components/float-buttons";

const Footer = dynamic(() => import('@/components/footer'), {
    loading: () => <Loader show={true} />,
})

export default function DefaultLayout({ children }) {
    const { loader, setLoader } = useContext(LoaderContext);
    return (
        <>
            <div className="w-full relative" onLoad={() => setLoader(false)}>
                <Loader show={loader} />
                <Header />
                <div className="">
                    {children}
                </div>
                <Footer />
                <FloatingButton />
            </div>
        </>
    )
}