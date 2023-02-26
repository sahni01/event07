export default function Loader({ show }) {
    return (
        <div className={` w-full h-full fixed z-[1002] ${show ? "block" : "hidden"} `}>
            <div className="load-container">
                <div>
                    <div className="hm-spinner"></div>
                </div>
            </div>
        </div>
    )
}