import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";

// const useStyles = makeStyles(theme => ({
//   animatedItem: {
//     animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
//   },
//   animatedItemExiting: {
//     animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
//     opacity: 0,
//     transform: "translateY(-200%)"
//   },
//   "@keyframes myEffect": {
//     "0%": {
//       opacity: 0,
//       transform: "translateY(-200%)"
//     },
//     "100%": {
//       opacity: 1,
//       transform: "translateY(0)"
//     }
//   },
//   "@keyframes myEffectExit": {
//     "0%": {
//       opacity: 1,
//       transform: "translateY(0)"
//     },
//     "100%": {
//       opacity: 0,
//       transform: "translateY(-200%)"
//     }
//   }
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2rem auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    transition: "all 0.3s ease-out",
  },
  modalOpen: {
    animation: `$modalOpen 0.4s ease-out forwards`,
  },
  modalClosed: {
    animation: `$modalClosed 0.4s ease-out forwards`,
  },
  "@keyframes modalOpen": {
    "0%": {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    "50%": {
      opacity: 1,
      transform: "translateY(90%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes modalClosed": {
    "0%": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "50%": {
      opacity: 0.8,
      transform: "translateY(60%)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-100%)",
    },
  },
}));

const Home = ({ visible }) => {
  const classes = useStyles();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // console.log(`visible`, visible);
    setAnimate(visible);
  }, [visible]);

  useEffect(() => {
    setAnimate((prevState) => !prevState);
  }, []);

  return (
    <div className={classes.root}>
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              className={
                animate
                  ? `${classes.paper} ${classes.modalOpen}`
                  : `${classes.paper} ${classes.modalClosed}`
              }
            >
              xs=12 lg=6
            </Paper>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
};

PropTypes.PropTypes = {
  visible: PropTypes.number.isRequired,
};
export default Home;
