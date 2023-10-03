import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

interface DialogAlertProps {
    open: boolean,
    handleClose(): void,
    onCancelClick?(): void,
    cancelText?: string,
    onSubmitClick?(): void,
    submitText?: string,
    title?: string,
    children: any
}

const DialogAlert = (props: DialogAlertProps) => {
    const {
        open, handleClose, onCancelClick, cancelText = "cancel", onSubmitClick, submitText = "submit", title, children
    } = props
    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {children}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {onCancelClick && <Button onClick={onCancelClick}>{cancelText}</Button>}
                {onSubmitClick && <Button variant="contained" onClick={onSubmitClick} autoFocus>
                    {submitText}
                </Button>}
            </DialogActions>
        </Dialog >
    )
}
export default DialogAlert;