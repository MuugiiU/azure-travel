import {
  Grid,
  Box,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  InputBase,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Ads = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid
      sx={{
        display: "flex",
        background: "url(./img/adsbg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        marginTop: "8.75rem",
      }}
    >
      <Container
        sx={{
          marginTop: "4.9rem",
          width: "60%",
          display: "flex",
          color: "white",
        }}
      >
        <Box>
          <img src="./img/iphone13.png" alt="" />
        </Box>
        <Box
          sx={{
            marginLeft: "5rem",
            color: "white",
            lineHeight: "1.75rem",
            fontWeight: 400,
          }}
        >
          <Typography variant="h2" sx={{ fontSize: "3rem" }}>
            Your all-in-one travel app.
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: "1.5rem", marginTop: "1.5rem" }}
          >
            {" "}
            Your all-in-one travel app. Book flights, hotels, trains & rental
            cars anywhere in the world in just seconds. Get real-time flight
            updates, travel info, exclusive deals, and 30% more Trip Coins only
            on the app!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "2.5rem",
                    gap: "1rem",
                    backgroundColor: "transparent",
                    borderRadius: "1rem",
                  }}
                >
                  {" "}
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.2),  rgba(255, 255, 255, 0.4)",
                      backdropFilter: "blur(1rem)",
                      width: "3.7rem",
                      height: "1.4rem",
                      color: "white",
                    }}
                  >
                    Mobile
                  </Button>
                  <Button variant="text" sx={{ color: "white" }}>
                    Email
                  </Button>
                </Box>
                <Typography
                  sx={{
                    marginTop: "1.5rem",
                    fontWeight: 400,
                    fontSize: "0.85rem",
                    lineHeight: "1rem",
                  }}
                >
                  Enter your phone number to receive a text with a link to
                  download the app.
                </Typography>
              </Box>
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: "0.4",
                  borderRadius: "16px",
                  color: "transparent",
                  order: "1",
                  marginTop: "1rem",
                  width: "100%",
                  outline: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    outline: "none",
                  }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="+91"
                    placeholder="+91"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>+976</MenuItem>
                    <MenuItem value={20}>+82</MenuItem>
                    <MenuItem value={30}>+1</MenuItem>
                  </Select>
                  <InputBase
                    placeholder="Mobile Number"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "2rem",
                    alignItems: "center",
                    width: "8rem",
                    height: "2.5rem",
                    background: "white",
                    marginRight: "1rem",
                  }}
                >
                  {" "}
                  Search
                </Button>
              </Paper>
            </Box>

            <Box
              sx={{
                marginTop: "5.8rem",
                marginLeft: "1rem",
              }}
            >
              <Typography variant="h4">or</Typography>
            </Box>
            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginLeft: "1rem",
              }}
            >
              <Box>
                <img
                  src="./img/google.png"
                  alt=""
                  width="200px"
                  height="60px"
                />
              </Box>
              <Box sx={{}}>
                <img src="./img/apple.png" alt="" width="200px" height="60px" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};

export default Ads;
