import React, { forwardRef } from "react";
import "../styles/Portfolio.scss";
import Container from "react-bootstrap/Container";
import { Tab, Tabs } from "@mui/material";
import Photography from "../components/photography";
import Research from "../components/research";
import Projects from "../components/projects";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SourceIcon from "@mui/icons-material/Source";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const useStyles = makeStyles({
    root: {
      padding: "0.5em",
    },
  });
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.root}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const Portfolio = forwardRef((props, ref) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <div className="portfolio">
      <div className="portfolio" ref={ref}>
        <Box>
          <Container>
            <h1 className="headingText">Portfolio</h1>
            <ThemeProvider theme={theme}>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                // variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab
                  icon={<SourceIcon />}
                  iconPosition="start"
                  label="Projects"
                />
                <Tab
                  icon={<CameraAltIcon />}
                  iconPosition="start"
                  label="Photography"
                />
              </Tabs>
            </ThemeProvider>
            <TabPanel value={value} index={0}>
              <Projects />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Photography />
            </TabPanel>
          </Container>
        </Box>
      </div>
    </div>
  );
});

export default Portfolio;
