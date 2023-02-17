import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "@mui/material";

export default function Sidebar() {
  const [dataChange, setDataChange] = useState([]);

  //delete travels start
  const deleteSidebar = async (e) => {
    try {
      const res = await axios.delete(`http://localhost:8000/travels/${e}`, {});
      getData();
      console.log("Success", res);
    } catch (err) {
      console.log("err", err);
    }
  };
  //delete wishlist end

  //travels data avah hesegiin ehlel
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/travels");
      const data = res.data.data.travels;
      setDataChange(data);
    } catch (error) {
      console.log(error);
    }
  };
  //travels data avah hesegiin tugsgul

  useEffect(() => {
    getData();
  }, []);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        width: "400px",
        height: "calc(100vh - 60px)",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          // justifyContent: "end",
          width: "100%",
          height: "50px",
          // backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            YOUR WISHLIST
          </Typography>
        </Box>
        <Button onClick={toggleDrawer(anchor, false)}>
          <ClearIcon sx={{ color: "black" }} />
        </Button>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ hegith: "100%", overflow: "auto" }}>
          {dataChange.map((data) => (
            <Box
              key={data.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 10px",
                alignItems: "center",
                width: "100%",
                height: "150px",
                // backgroundColor: "#e6e6e6",
                borderBottom: "1px solid grey",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "40%",
                  height: "100%",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                  src={data.img}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                  width: "55%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    noWrap={true}
                    variant="h7"
                    sx={{
                      width: "100%",
                      color: "#899499",
                    }}
                  >
                    {data.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ color: "black" }}>
                      {data.price}$
                    </Typography>
                  </Box>
                </Box>
                <Button
                  onClick={() => deleteSidebar(data.id)}
                  sx={{
                    width: "80px",
                    color: "black",
                    backgroundColor: "transparent",
                    borderRadius: "0px  ",
                    padding: "1px",
                    borderBottom: "1px solid black",
                    "&:hover": {
                      backgroundColor: "transparent",
                      scale: "1.03",
                    },
                  }}
                >
                  {/* <ClearIcon sx={{ fontSize: "10px" }} /> */}
                  Remove
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <Button
            href="/checkout"
            target="blank"
            sx={{
              width: "50%",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "200px",
              color: "black",
              border: "1px solid black",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Sidebar</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
