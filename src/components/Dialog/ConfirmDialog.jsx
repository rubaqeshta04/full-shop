import React from "react";
import Slide from "@mui/material/Slide";

import DialogContentText from "@mui/material/DialogContentText";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDialog({ open, handleClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Item?</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove this item from cart?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>

        <Button onClick={onConfirm} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
