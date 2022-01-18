import { AppBar, Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
              paddingX: 2
            }}
          >
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/home"> */}
              <Box>
                <Button component={Link} to="/home">
                  <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                    Home
                  </Typography>
                </Button>
              </Box>
              {/* </Link> */}
            </Grid>
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/about">  */}
              <Button component={Link} to="/about">
                <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                  About
                </Typography>
              </Button>
              {/* </Link> */}
            </Grid>
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/projects"> */}
              <Button component={Link} to="/projects">
                <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                  Projects
                </Typography>
              </Button>
              {/* </Link> */}
            </Grid>
            <Grid item lg={3} md={3} xs={3}>
              {/* <Link to="/contacts">  */}
              <Button component={Link} to="/contacts">
                <Typography sx={{ color: 'white', fontFamily: 'Menlo' }}>
                  Contacts
                </Typography>
              </Button>
              {/* </Link> */}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default NavBar;