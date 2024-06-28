
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ExpandMore } from "@mui/icons-material";

const items = [
  {
    id: 1,
    title: "Item 1",
    subheader: "September 14, 2016",
    image:
      "https://images.unsplash.com/photo-1718832484653-ad667c8d5bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Item 2",
    subheader: "August 02, 2022",
    image:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Item 3",
    subheader: "March 10, 2019",
    image:
      "https://images.unsplash.com/photo-1718544825047-8d4dd9c23f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Item 4",
    subheader: "January 15, 2021",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Item 5",
    subheader: "December 23, 2018",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Item 6",
    subheader: "July 11, 2020",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Item 7",
    subheader: "October 31, 2017",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Item 8",
    subheader: "May 21, 2019",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Item 9",
    subheader: "February 14, 2016",
    image:
      "https://images.unsplash.com/photo-1718544825047-8d4dd9c23f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Item 10",
    subheader: "November 30, 2020",
    image:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "Item 11",
    subheader: "April 05, 2021",
    image:
      "https://images.unsplash.com/photo-1718762538704-9698cd001106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Item 12",
    subheader: "June 25, 2018",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    title: "Item 13",
    subheader: "August 15, 2019",
    image:
      "https://images.unsplash.com/photo-1718967917204-b359a7b6a742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    title: "Item 14",
    subheader: "September 01, 2017",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    title: "Item 15",
    subheader: "March 20, 2022",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    title: "Item 16",
    subheader: "October 05, 2021",
    image:
      "https://images.unsplash.com/photo-1534226112117-16ef60d2830f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8fGVufDB8fHx8fA%3D%3D",
  },
];



function Items() {
  return (
    <div className="flex flex-col items-center">
      <h2>List Lenght : </h2>
      <div className="flex flex-col items-center">
        <ul className="flex w-full flex-wrap items-center justify-center">
          {items.map((item) => (
            <li className="h-72 m-6" key={item.id}>
              <Card sx={{ maxWidth: 245 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.title}
                  subheader={item.subheader}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Items