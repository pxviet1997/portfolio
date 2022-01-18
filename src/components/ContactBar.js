import { Box, Grid } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const ContactBar = () => {
  return (
    <div>
      {/* <a>Gmail</a>
      <a href="https://linkedin.com/in/viet-pham-b745a0184/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/pxviet1997" target="_blank" rel="noreferrer">Github</a> */}
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <SocialIcon
            url="https://linkedin.com/in/viet-pham-b745a0184"
            style={{ height: 50, width: 50 }}
          />
        </Grid>
        <Grid item>
          <SocialIcon
            url="https://github.com/pxviet1997"
            style={{ height: 50, width: 50 }}
          />
        </Grid>
        <Grid item>
          <SocialIcon
            network="email"
            style={{ height: 50, width: 50 }}
          />
        </Grid>
        {/* <a href="https://linkedin.com/in/viet-pham-b745a0184/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/pxviet1997" target="_blank" rel="noreferrer">Github</a> */}
      </Grid>
    </div>
  );
}

export default ContactBar;