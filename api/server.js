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



// app.use(cors({ origin: "*", credentials: true }));
app.use(cors({
    origin: [/^https?:\/\/([a-zA-Z0-9-]+\.)?vercel\.app$/, "http://localhost:5173"],
    credentials: true
}));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your code
if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.resolve(__dirname, 'public')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'), function (err) {
            if (err) {
                res.status(500).send(err)
            }
        });
    })
}
// Your code

app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);



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
