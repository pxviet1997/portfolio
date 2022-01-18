import { Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ContactBar from "../components/ContactBar";

const Home = () => {

  let theme = createTheme({
    typography: {
      h1: {
        fontSize: 40,
        fontFamily: ['Courier Prime', 'monospace'].join(','),
      }
    }
  });
  // let theme = createTheme();
  theme = responsiveFontSizes(theme);
  // theme = responsiveFontSizes

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h1">
            {"<p>If you want to know me</p>"}
          </Typography>
          <Typography variant="h1">
            {"<button>"} <Link to="/about">Click me!</Link> {"</button>"}
          </Typography>
        </ThemeProvider>
      </Box>
      <ContactBar />
      {/* <Typography variant="h1">
        {"<p>If you want to know me</p>"}
      </Typography> */}
    </div >
  );
}

export default Home;