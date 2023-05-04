import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
dotenv.config();

mongoose.set("strictQuery", true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.log(error);
    }
};

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//     next();
// });
app.use(cors({
    origin: ["https://fiverr-clone-tzhc.onrender.com", "http://localhost:*"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, 'public')));






app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);




// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'), function (err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     });
// })
app.get("/", (req, res) => {
    res.send("hello from server 👓");
})




app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    connect();
    console.log(`Backend server is running on ${PORT}!`);
});
