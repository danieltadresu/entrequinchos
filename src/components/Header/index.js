import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ setVisible }) => {
  const classes = useStyles();
  const [add, setAdd] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar className={classes.menu} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button
            color="inherit"
            onClick={() =>
              setAdd((prevState) => {
                setVisible(prevState);
                return !prevState;
              })
            }
          >
            Ingresar
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  setVisible: PropTypes.func,
};

Header.defaultProps = {
  setVisible: () => {},
};

export default Header;
