import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
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
    opacity: 1,
    transform: "translateY(0)",
  },
  modalClosed: {
    opacity: 0,
    transform: "translateY(-100%)",
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
    // setVisible(true);
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
