const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// If you need to specify allowed origins:
app.use(
  cors({
    origin: "https://sneaker-head-frontend.vercel.app/",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
