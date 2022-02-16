import { AppBar, Box, Button, Container, Grid, styled, Typography } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const styles = {
  height: '100%',
  display: 'flex',
  boxShadow: 1,
  justifyContent: 'center',
  alignItems: 'center',
};


const NavTypography = styled(Typography)({
  fontFamily: 'Menlo',
  textTransform: 'none',
  fontSize: 16,
  color: deepPurple[600],
})

const NavBar = () => {
  return (
    <div className="MenuBar">
      <Grid container justifyContent="flex-end" height={50}>
        <Grid
          container
          item
          lg={5}
          md={5}
          xs={12}
          direction='row'
        >
          <Grid item lg={3} md={3} xs={3}>
            <Box sx={styles}>
              <NavTypography>Home</NavTypography>
            </Box>
          </Grid>

          <Grid item lg={3} md={3} xs={3}>
            <Box sx={styles}>
              <NavTypography>About</NavTypography>
            </Box>
          </Grid>

          <Grid item lg={3} md={3} xs={3}>
            <Box sx={styles}>
              <NavTypography>Projects</NavTypography>
            </Box>
          </Grid>

          <Grid item lg={3} md={3} xs={3}>
            <Box sx={styles}>
              <NavTypography>Contacts</NavTypography>
            </Box>
          </Grid>
        </Grid>
      </Grid >
    </div >
  );
};

export default NavBar;