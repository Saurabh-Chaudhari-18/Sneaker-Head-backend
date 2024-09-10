const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: 'https://sneaker-head-frontend.vercel.app',  // Replace this with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify allowed methods
  credentials: true,// If you're using cookies or other credentials
   allowedHeaders: "Content-Type,Authorization",
}));

// If you need to specify allowed origins:
// app.use(
//   cors({
//     origin: "https://sneaker-head-frontend.vercel.app/",
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//      credentials: true,
//   })
// );

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
