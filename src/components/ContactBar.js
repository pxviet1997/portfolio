import { Grid } from "@mui/material";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import ContactFormModal from "./ContactFormModal";

const ContactBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
            onClick={() => setOpen(true)}
          />
        </Grid>
      </Grid>
      <ContactFormModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default ContactBar;