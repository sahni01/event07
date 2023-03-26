import { getSingleDecoration } from "@/api";
import { ArrowForward, ArrowRight, CardGiftcard, CardGiftcardOutlined, CheckCircle, ChevronRight, CurrencyRupee, LocalShipping, SupportAgent } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextField } from "@mui/material";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment'
import Head from "next/head";
import _ from "lodash";
import { LoaderContext } from "@/contexts/loader";
import { ReviewsComponent } from "@/components/review";



export default function DecorationDetails({ }) {

    const {setLoader} = useContext(LoaderContext);
    const [decorationDetails, setDecorationDetails] = useState({});
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [city,setCity] = useState("");
    const router = useRouter();
    const { id, list } = router.query;

    useEffect(() => {
        setLoader(true);
        if(id){
            getDecorationDetails();
        }
    }, [id])

    function formatAmount(amount) {
        const formatter = new Intl.NumberFormat('en-IN');
        return formatter.format(Number(amount).toFixed(2));
    }

    const getDecorationDetails = async () => {
        try {
            const response = await getSingleDecoration(id);
            setDecorationDetails(response[0])
            console.log("DECORATION DETAIL ====> ", response);
            setLoader(false);
        } catch (err) {
            console.log("DECORATION ERROR ====>", err.message);
            setLoader(false);
        }
    }

    const onBookNow = () => {
        window.open(`https://api.whatsapp.com/send/?phone=919871973507&text=Hi Event07, I want to book ${decorationDetails?.title} for a ${list} on ${moment(new Date(date)).format("DD-MM-YYYY")} at ${moment(new Date(time)).format("LTS")}. \n ${window.location.href}  &type=phone_number&app_absent=0`);
    }

    if(!_.isEmpty(decorationDetails)){
        return (
            <>
            <Head>
            <title>{decorationDetails?.title}</title>
            <meta name="description" content="Decoration for your celebrations" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
          </Head>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <div className="m-5 p-2 border rounded-lg">
                            <div className="w-full h-full rounded-lg overflow-hidden">
                                <Image src={decorationDetails?.image} width={500} height={500} className={"w-full h-full transition-all hover:scale-110"} />
                            </div>
                        </div>
                    </div>
    
                    <div className="w-full md:w-1/2">
                        <div className="m-5 p-2 border rounded-lg">
                            <div className="w-full h-full rounded-lg overflow-hidden p-2">
                                <p className="text-xl font-semibold">{decorationDetails.title}</p>
                                <p className=" text-accent font-semibold">Discount : {decorationDetails.discount}%</p>
                                
                                <div className="flex flex-row items-center mt-2">
                                <p className="text-xl font-semibold text-gray-500 line-through">
                                    <CurrencyRupee />
                                    {formatAmount(decorationDetails.price)}</p>

                                <ArrowForward color="accent" className="mx-3"/>

                                    <p className="text-xl font-semibold text-gray-500">
                                    <CurrencyRupee />
                                    {formatAmount(decorationDetails.price)}</p>
                                </div>
    
                                <div className="px-2">
                                    <p className="mt-4 text-accent font-semibold">Inclusions :-</p>
                                    {
                                        decorationDetails?.offerings?.length ?
                                            decorationDetails?.offerings?.map((item, index) => (
                                                <div key={index} className="flex flex-row py-2">
                                                    <CheckCircle color="primary" className="mr-2" />
                                                    <p className="leading-[26px]">{item}</p>
                                                </div>
                                            )) :
                                            <div>
    
                                            </div>
                                    }
                                </div>
    
                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="bg-gray-200 p-4 border flex flex-col justify-center items-center rounded-2xl m-2 w-44">
                                        <CardGiftcardOutlined style={{ fontSize: "70px" }} className="text-gray-600" />
                                        <p className="text-sm text-gray-600 font-semibold">Best Collection</p>
                                    </div>
    
                                    <div className="bg-gray-200 p-4 border flex flex-col justify-center items-center rounded-2xl m-2 w-44">
                                        <LocalShipping style={{ fontSize: "70px" }} className="text-gray-600" />
                                        <p className="text-sm text-gray-600 font-semibold">Instant Service</p>
                                    </div>
    
                                    <div className="bg-gray-200 p-4 border flex flex-col justify-center items-center rounded-2xl m-2 w-44">
                                        <SupportAgent style={{ fontSize: "70px" }} className="text-gray-600" />
                                        <p className="text-sm text-gray-600 font-semibold">24/7 Customer Service</p>
                                    </div>
                                </div>
    
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
                                        <TextField
                                            label="Full Name"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                        <TextField
                                            label="Mobile Number"
                                            value={mobileNumber}
                                            onChange={(event) => setMobileNumber(event.target.value)}
                                        />
                                        <TextField
                                            label="Email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                        <TextField
                                            label="City"
                                            value={city}
                                            onChange={(event) => setCity(event.target.value)}
                                        />
                                        <DatePicker
                                            className=""
                                            label="Select Date"
                                            value={date}
                                            onChange={(newValue) => {
                                                setDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
    
                                        <TimePicker
                                            className=""
                                            label="Select Time"
                                            value={time}
                                            onChange={(newValue) => {
                                                setTime(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </div>
                                </LocalizationProvider>
    
                                <Button onClick={onBookNow} variant="contained" color="accent" className=" bg-accent text-white w-full mt-5 p-3" >Book Now</Button>
    
                            </div>
                        </div>
                    </div>
                </div>
                
                <ReviewsComponent id={id} type={list} />
            </>
        )
    } else {
        return null
    }
}