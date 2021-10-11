import React, {useContext} from "react";
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/contans";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const NavBar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    console.log(user)
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container justify={'flex-end'}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                        <Button variant={"outlined"}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar