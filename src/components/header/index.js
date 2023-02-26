import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Typography, } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react"
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';
// import HeadStrip from "../headStrip";
import Link from "next/link";
import { useRouter } from "next/router";
// import { LoaderContext } from "../../context";
import Logo from "../../assets/logo-light.png"
import Image from "next/image";
import { Cake, Celebration, ChevronRight, ChildCare, Collections, Expand, ExpandMore, ExpandMoreSharp, Favorite, FavoriteBorder, FilterVintage, Handshake, Home, Info, Sort, Toys, Wc, WineBar, Woman } from "@mui/icons-material";
import { theme } from "@/theme";
// import { Loader } from "../loader";


export default function Header() {

    // const { loader } = useContext(LoaderContext)

    const router = useRouter();

    const [openNav, setOpenNav] = useState(false);

    const hamburgerRef = useRef();

    const toggleHamburger = () => {
        // hamburgerRef.current.classList.toggle("is-active");
        setOpenNav(!openNav);
    }

    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log("scroll", window.scrollY)
            if (window.scrollY > 50) {
                headerRef?.current?.classList?.add("shadow-md")
            } else if (window.scrollY < 500) {
                headerRef?.current?.classList?.remove("shadow-md")
            }
        });
    })

    return (
        <>
            {/* <Loader show={loader}/> */}
            {/* <HeadStrip /> */}
            <header ref={headerRef} className="fixed w-full bg-white z-[1001] top-0 bg-primary text-secondary py-1 shadow-[#ffb0b0]">
                <div className="flex justify-between items-center px-2  lg:px-10 py-1">
                    {/* <div className="w-1/4 flex flex-row justify-start items-center pl-3 lg:hidden">
                        <div ref={hamburgerRef} className="hamburger" id="hamburger-1" onClick={toggleHamburger}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div> */}

                    <div className="w-1/4 flex justify-start items-center lg:hidden">
                        <IconButton onClick={toggleHamburger}>
                            <Sort fontSize="large" color="accent" />
                        </IconButton>
                    </div>

                    <div className="w-2/4 flex flex-row justify-center items-center lg:w-1/6 text-left">
                        <Link href={"/"}>
                            <Image src={Logo} alt="Logo" width={140} height={70} className="transition-all scale-100 hover:scale-[1.1]" />
                        </Link>
                    </div>
                    <div className="hidden w-4/6 text-center lg:block">
                        <ul className="inline-flex">
                            <Link href={"/"}>
                                <li className="mx-1 px-4 nav-link"><span className="nav-link-span">Home</span></li>
                            </Link>
                            <Link href={"/decorations"}>
                                <div className="mx-1 px-4 nav-link dropdown-nav-link"><span className="nav-link-span">
                                    <div className="dropdown">Decorations
                                        {/* <ul className="dropdown-menu">
                                            <li><a href="#">action 1</a></li>
                                            <li><a href="#">action 2</a></li>
                                            <li><a href="#">action 3</a></li>
                                            <li><a href="#">action 4</a></li>
                                        </ul> */}
                                    </div>
                                </span>
                                </div>
                            </Link>
                            <Link href={"/gallery"}>
                                <li className="mx-1 px-4 nav-link"><span className="nav-link-span">Gallery</span></li>
                            </Link>
                            <Link href={"/our-services"}>
                                <li className="mx-1 px-4 nav-link"><span className="nav-link-span">Services</span></li>
                            </Link>
                            <Link href={"/about-us"}>
                                <li className="mx-1 px-4 nav-link"><span className="nav-link-span">About us</span></li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-1/4 lg:w-1/6 flex justify-end items-center">
                        <IconButton color="primary" className="sm:hidden" onClick={() => window.open("tel:+9178509 81426")}><CallIcon /></IconButton>
                        <Button variant="contained" color="accent" className="hidden bg-accent text-primary  hover:opacity-80 m-0 sm:flex" onClick={() => window.open("tel:+9178509 81426", "_self")}>Book Now</Button>
                    </div>
                </div>
                <nav>
                    <Drawer anchor="left" open={openNav} onClose={toggleHamburger} >
                        <div className="w-full flex flex-row justify-end">
                            <IconButton color="primary" onClick={toggleHamburger} size="large"><CloseIcon fontSize="inherit" /></IconButton>
                        </div>
                        <div style={{ position: "relative", width: "80vw", height: "100vh" }}>

                            <MenuList>
                                <MenuItem onClick={()=>{router.push("/"); toggleHamburger();}}>
                                    <ListItemIcon>
                                        <Home fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                    <Typography variant="body2" color="text.secondary">
                                        <ChevronRight />
                                    </Typography>
                                </MenuItem>

                                <Divider />

                                {/* <hr/> */}

                                <MenuItem style={{padding:"0"}}>
                                <Accordion style={{boxShadow:"none",border:"none",width:"100%"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                    >
                                        <ListItemIcon style={{minWidth:"36px"}}>
                                            <Celebration fontSize="small" />
                                        </ListItemIcon>
                                        <Typography>Decorations</Typography>
                                    </AccordionSummary>

                                        <Divider />
                                    <AccordionDetails>

                                        <MenuItem onClick={()=>{router.push("/decorations/birthday-decorations"); toggleHamburger();}}>
                                            <ListItemIcon>
                                                <Cake fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Birthday Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/kids-birthday-decorations"); toggleHamburger();}}>
                                            <ListItemIcon>
                                                <Toys fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Kid's Birthday Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/anniversary-decorations"); toggleHamburger();}} >
                                            <ListItemIcon>
                                                <Favorite fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Anniversary Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/baby-shower-decorations"); toggleHamburger();}} >
                                            <ListItemIcon>
                                                <ChildCare fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Baby Shower & Welcome</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/wedding-decorations"); toggleHamburger();}} >
                                            <ListItemIcon>
                                                <Wc fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Wedding Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/new-year-decorations"); toggleHamburger();}}>
                                            <ListItemIcon>
                                                <Celebration fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>New Year Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/valentine-decorations"); toggleHamburger();}}>
                                            <ListItemIcon>
                                                <FilterVintage fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Valentine Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/purposal-decorations"); toggleHamburger();}}>
                                            <ListItemIcon>
                                                <Woman fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Purposal Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/party-decorations"); toggleHamburger();}}>
                                            <ListItemIcon>
                                                <WineBar fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Party Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={()=>{router.push("/decorations/other-decorations"); toggleHamburger();}}>
                                            <ListItemIcon>
                                                <FavoriteBorder fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Other Decorations</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <ChevronRight />
                                            </Typography>
                                        </MenuItem>

                                        <Divider />

                                    </AccordionDetails>
                                </Accordion>
                                </MenuItem>

                                <Divider />

                                <MenuItem onClick={()=>{router.push("/gallery"); toggleHamburger();}}>
                                    <ListItemIcon>
                                        <Collections fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Gallery</ListItemText>
                                    <Typography variant="body2" color="text.secondary">
                                        <ChevronRight />
                                    </Typography>
                                </MenuItem>

                                <Divider />

                                <MenuItem onClick={()=>{router.push("/our-services"); toggleHamburger();}}>
                                    <ListItemIcon>
                                        <Handshake fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Services</ListItemText>
                                    <Typography variant="body2" color="text.secondary">
                                        <ChevronRight />
                                    </Typography>
                                </MenuItem>

                                <Divider />

                                <MenuItem onClick={()=>{router.push("/about-us"); toggleHamburger();}}>
                                    <ListItemIcon>
                                        <Info fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>About us</ListItemText>
                                    <Typography variant="body2" color="text.secondary">
                                        <ChevronRight />
                                    </Typography>
                                </MenuItem>

                            </MenuList>

                        </div>
                    </Drawer>
                </nav>
            </header>
        </>
    )
}