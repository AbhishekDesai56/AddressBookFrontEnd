import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Button as MuiButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

const AlertDialog = (props) => {
  const classes = useStyles();
  const { confirmDialog, setConfirmDialog } = props;
  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <MuiButton
          variant="contained"
          size="large"
          color="primary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
          classes={{ root: classes.root, label: classes.label }}
        >
          No
        </MuiButton>
        <MuiButton
          variant="contained"
          size="large"
          color="primary"
          onClick={confirmDialog.onConfirm}
          classes={{ root: classes.root, label: classes.label }}
        >
          Yes
        </MuiButton>
      </DialogActions>
    </Dialog>
  );
};
export default AlertDialog;
