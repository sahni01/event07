import { Call, WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";


export default function FloatingButton() {

    return (
        <div className="fixed z-50 bottom-4 w-full px-2 sm:px-5 flex flex-row justify-between items-center">
            <Button onClick={()=>window.open("tel:+919871973507", "_self")} variant="contained" className="bg-accent text-primary px-5 py-3 rounded-full w-36 sm:w-40" startIcon={<Call />} >Call Us</Button>
            <Button onClick={()=>window.open("https://api.whatsapp.com/send/?phone=919871973507&text=Hi&type=phone_number&app_absent=0", "_blank")} variant="contained" className="bg-green-700 text-primary px-5 py-3 rounded-full w-36 sm:w-40 hover:bg-green-600" startIcon={<WhatsApp />} >WhatsApp</Button>
        </div>
    )
}