import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";
import { useAuth } from "reactfire";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router.js";

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  const auth = useAuth();
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
          <div
          className="bg-purple-500 px-4 py-2 rounded cursor-pointer"
          onClick={() => {
            signOut(auth);
            router.push("/login");
          }}>
          Sign Out
        </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
