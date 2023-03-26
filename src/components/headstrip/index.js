import { WhatsApp } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';

export default function HeadStrip(){
    return(
        <div className="hidden w-full bg-accent justify-center items-center sm:flex">
            <div className="container flex justify-between items-center">
                <div>
                    <IconButton size='small' color='secondary' onClick={()=>{window.open("https://www.facebook.com/event07")}}><FacebookOutlinedIcon fontSize='small'/></IconButton>
                    <IconButton size='small' color='secondary' className='mx-2' onClick={()=>{window.open("https://www.instagram.com/event07")}}><InstagramIcon fontSize='small'/></IconButton>
                    <IconButton size='small' color='secondary' onClick={()=>{window.open("https://api.whatsapp.com/send/?phone=919871973507&text=Hi&type=phone_number&app_absent=0")}}><WhatsApp fontSize='small'/></IconButton>    

                </div>
                <div className="text-primary text-sm">
                    <a href="tel:+9198719 73507" className='mr-1'>+91-9871973507</a>|
                    <a href="mailto:ask.event07@gmail.com" className='ml-1'>ask.event07@gmail.com</a>
                </div>
            </div>
        </div>
    )
}