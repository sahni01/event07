import { LoaderContext } from "@/contexts/loader";
import { Person } from "@mui/icons-material";
import { Button, Rating, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { createItem, getSingleItem } from '../../api';
import { SnackBarComponent } from "../snackbar";


export function ReviewsComponent({ id,type }) {

    const { setLoader } = useContext(LoaderContext);
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState({
        name: "",
        mobile: "",
        email: "",
        review: "",
        rating: 0
    })
    const [snackbar, setSnackbar] = useState({
        status: "",
        message: "",
        open: false
    })
    const [reviewAdded,setReviewAdded] = useState(false);

    const submitReview = async () => {
        if (review.name && review.mobile && review.email && review.rating && review.review) {
            if (ValidateEmail(review.email)) {
                const body = {
                    ...review,
                    decorationId: type ? id+type : id
                }
                setLoader(true);
                const resposne = await createItem("create-review", body);
                console.log("Review Log ====> ", resposne)
                setReviewAdded(true);
                localStorage.setItem(type ? id+type : id,"true")
                setReview({
                    name: "",
                    mobile: "",
                    email: "",
                    review: "",
                    rating: 0
                })
                setSnackbar({
                    status: "success",
                    message: "Thank You, for submiting your Review",
                    open: true
                })
                getReviews();
                setLoader(false);
            } else {
                setSnackbar({
                    status: "error",
                    message: "Please enter a valid email*",
                    open: true
                })
            }
        } else {
            setSnackbar({
                status: "error",
                message: "Please fill all required fields and select stars ⭐*",
                open: true
            })
        }
    }

    const getReviews = async () => {
        const reviews = await getSingleItem("reviews", type ? id+type : id);
        setReviews(reviews.data);
    }

    const handleMobileChange = (e) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 10) {
            setReview({ ...review, mobile: onlyNums });
        } else if (onlyNums.length === 10) {
            const number = onlyNums.replace(
                /(\d{3})(\d{3})(\d{4})/,
                '($1) $2-$3'
            );
            setReview({ ...review, mobile: number });
        }
    }

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }


    useEffect(() => {
        if(id){
            getReviews();
            if(localStorage.getItem(type ? id+type : id)){
                // console.log("logggg",localStorage.getItem(type ? id+type : id))
                setReviewAdded(true);
            }
        }
    }, [id])


    return (
        <>
            {
                snackbar.status &&
                <SnackBarComponent show={snackbar.open} message={snackbar.message} status={snackbar.status} onClose={() => setSnackbar({
                    status: "",
                    message: "",
                    open: false
                })} />
            }

            {/* {JSON.stringify(reviewAdded)} */}
            <div id="rate-our-services">
            <div className="testimonial-heading mb-0">
            <span className={`text-center text-lg opacity-0 sm:text-2xl transition-all ${reviewAdded ? "opacity-100 block":"hidden"}`}>Thank you for your valuable feedback</span>
            </div>
                <section id="testimonials">
                    {/* <!--heading---> */}
                    <div className={`testimonial-heading mb-0 opacity-100 transition-all ${reviewAdded ? "opacity-0 hidden" : "block"}`}>
                        <span className={`text-center text-4xl`}>Write a Review</span>
                    </div>
                    <div className={`flex flex-col container px-5 sm:px-10 items-center mb-16 opacity-100 transition-all ${reviewAdded ? "opacity-0 hidden" : "block"}`}>
                        <h4>Rate Our Service</h4>
                        <Rating
                            name="simple-controlled"
                            className="text-5xl"
                            value={review.rating}
                            onChange={(event) => setReview({ ...review, rating: event.target.value })}
                        />
                        <TextField id="outlined-basic" label="Name" variant="outlined" className="my-2 w-full" value={review.name} onChange={(event) => setReview({ ...review, name: event.target.value })} />
                        <TextField num id="outlined-basic" label="Mobile" type={"tel"} variant="outlined" className="my-2 w-full" value={review.mobile} onChange={handleMobileChange} />
                        <TextField id="outlined-basic" label="Email" type={"email"} variant="outlined" className="my-2 w-full" value={review.email} onChange={(event) => setReview({ ...review, email: event.target.value })} />
                        <TextField id="outlined-basic" label="Review" variant="outlined" multiline rows={4} className="my-2 w-full" value={review.review} onChange={(event) => setReview({ ...review, review: event.target.value })} />
                        <Button variant="contained" className="bg-accent w-full py-3 mt-3" onClick={submitReview}>Submit Review</Button>
                    </div>

                    <div className="testimonial-heading mb-1 mt-2">
                        {
                            reviews && reviews.length ?
                            <span className="text-center">Reviews From Our Valuable Clients</span>
                            :
                            <span className="text-center">Please Be Our First Reviewer</span>
                        }
                    </div>

                    {/* <!--testimonials-box-container------> */}
                    <div className="testimonial-box-container">
                        {/* <!--BOX-1--------------> */}
                        {
                            reviews && reviews.length ?
                            reviews.map((item,index)=>(
                                <div className="testimonial-box" key={index}>
                            {/* <!--top-------------------------> */}
                            <div className="box-top">
                                {/* <!--profile-----> */}
                                <div className="profile">
                                    {/* <!--img----> */}
                                    <div className="profile-img flex flex-row justify-center items-center border border-primary ">
                                        <Person color="primary" className="text-4xl" />
                                    </div>
                                    {/* <!--name-and-username--> */}
                                    <div className="name-user">
                                        <strong>{item.name}</strong>
                                        <span className="text-primary">{item.email}</span>
                                    </div>
                                </div>
                                {/* <!--reviews------> */}
                                <div className="reviews">
                                    <Rating
                                        name="simple-controlled"
                                        value={item.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                            {/* <!--Comments----------------------------------------> */}
                            <div className="client-comment">
                                <p>{item.review}</p>
                            </div>
                        </div>
                            )) :
                            null
                        }

                    </div>
                </section></div>
        </>
    )
}