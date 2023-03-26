import { Alert, Snackbar } from "@mui/material";


export function SnackBarComponent({show,onClose,message,status}) {
    return (
        <>
            <Snackbar anchorOrigin={{vertical:"top",horizontal:"right"}} open={show} autoHideDuration={6000} onClose={onClose}>
                <Alert onClose={onClose} severity={status} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}