const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");

dotenv.config({ path: "./.env" });

const cors = require("cors");
const connectDB = require("./utils/database");

connectDB();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use(cors());

app.use("/api/v1/users", userRouter);

const server = require("http").createServer(app);
const PORT = 5001;
// const io = require("socket.io")(server, {
//   cors: "http://localhost:5173",
//   methods: ["GET", "POST"],
// });

server.listen(PORT, () => {
  console.log("listening to port", PORT);
});
