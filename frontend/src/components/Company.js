import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { ListItemIcon } from "@mui/material";
import "../App.css";
import Skeleton from "./Skeleton";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: "#800000",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  let history = useHistory();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [jdDocs, setJdDocs] = useState([]);

  useEffect(() => {
    fetch("/browsejd")
      .then((response) => response.json())
      .then((data) => setJdDocs(data));
  }, []);

  console.log("JDDocs value", jdDocs);

  const routeChange = (compName) => {
    history.push({ pathname: "/details", state: { data: compName } });
    console.log("Button Clicked", compName);
  };

  return (
    <>
      <Skeleton />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            padding: "10",
            paddingTop: 2,
            marginTop: "5.5rem",
            width: "60%",
            mx: "auto",
            display: "grid",
            border: "1px solid lightgrey",
          }}
        >
          <Box sx={{ borderBottom: 0, borderColor: "#36454F" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              textColor="#c62828"
              indicatorColor="secondary"
            >
              <Tab
                label="Invite"
                {...a11yProps(0)}
                style={{ minWidth: "30%" }}
              />
              <Tab
                label="JD Accepted"
                {...a11yProps(1)}
                style={{ minWidth: "30%" }}
              />
              <Tab
                label="Publish"
                {...a11yProps(2)}
                style={{ minWidth: "30%" }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <List
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "background.paper",
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cisco" src="/static/images/logos/cisco.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Cisco"
                  secondary={
                    <React.Fragment>
                      <li>Contact Person : Name</li>
                      <li>Date : </li>
                    </React.Fragment>
                  }
                />
                <strong>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 10 }}
                  >
                    Send Invite
                  </Button>
                </strong>
                <strong>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 10 }}
                  >
                    Dismiss
                  </Button>
                </strong>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="IBM" src="/static/images/logos/ibm.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="IBM"
                  secondary={
                    <React.Fragment>
                      <li>Contact Person : Name</li>
                      <li>Date : </li>
                    </React.Fragment>
                  }
                />
                <strong>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 10 }}
                  >
                    Send Invite
                  </Button>
                </strong>
                <strong>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 10 }}
                  >
                    Dismiss
                  </Button>
                </strong>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Amazon" src="/static/images/logos/ibm.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Amazon"
                  secondary={
                    <React.Fragment>
                      <li>Contact Person : Name</li>
                      <li>Date : </li>
                    </React.Fragment>
                  }
                />
                <strong>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 10 }}
                  >
                    Send Invite
                  </Button>
                </strong>
                <strong>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 10 }}
                  >
                    Dismiss
                  </Button>
                </strong>
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <List
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "background.paper",
              }}
            >
              {jdDocs.map((doc, index) => (
                <>
                  <ListItem key={index} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={doc.compName}
                        src="/static/images/logos/cisco.png"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={doc.compName}
                      secondary={
                        <React.Fragment>
                          <li>Role : {doc.role}</li>
                          <li>Deadline : {doc.date}</li>
                          <li>Positions : {doc.positions}</li>
                        </React.Fragment>
                      }
                    />
                    <strong>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 10 }}
                        onClick={() => routeChange(doc.compName)}
                      >
                        View
                      </Button>
                    </strong>

                    <Divider variant="inset" component="li" />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <List
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "background.paper",
              }}
            >
              {jdDocs.map((doc, index) => (
                <>
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar alt="IBM" src="/static/images/logos/IBM.png" />
                    </ListItemIcon>

                    <ListItemText primary={doc.compName} />
                    <strong>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 10 }}
                      >
                        Publish
                      </Button>
                    </strong>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          </TabPanel>
        </Box>
      </ThemeProvider>
    </>
  );
}
