import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";

const Home = () => {
  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.navBarContainer}>
        <Navbar />
      </div>
      <div className={styles.bgHome}>
        <div>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
        <div className={styles.catalogContainer}>
          <div className={styles.catalogSections}>
            <div className={styles.catalogTitle}>
              <h2>Movies</h2>
            </div>
            <div className={styles.cardContainer}>
              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>

              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>

              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>

              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>
            </div>
          </div>
          <div className={styles.catalogSections}>
            <div className={styles.catalogTitle}>
              <h2>Movies</h2>
            </div>
            <div className={styles.cardContainer}>
              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>

              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>

              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>

              <Card sx={{ width: 245 }} className={styles.card}>
                <CardMedia
                  sx={{ height: 300 }}
                  image="https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg"
                  title="movie"
                />
                <div className={styles.MovietitleContainer}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    class={styles.movieTitle}
                  >
                    Harry Potter
                  </Typography>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
