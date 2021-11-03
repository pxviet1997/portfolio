import { AppBar, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="MenuBar">
      <AppBar position="static">
        <Grid container justifyContent="flex-end" height={50}>
          <Grid
            container
            item
            lg={5}
            md={5}
            xs={12}
            spacing={3}
            alignItems="center"
            sx={{
              // backgroundColor: 'red',
              paddingX: 2
            }}
          >
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/home"> */}
              <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                Home
              </Typography>
              {/* </Link> */}
            </Grid>
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/about">  */}
              <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                About
              </Typography>
              {/* </Link> */}
            </Grid>
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/projects"> */}
              <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                Projects
              </Typography>
              {/* </Link> */}
            </Grid>
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/contacts">  */}
              <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                Contacts
              </Typography>
              {/* </Link> */}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default NavBar;