import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getSingleGig,
  getGigs
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/mygigs/:id", getGig);
router.get("/single/:id", getSingleGig);
router.get("/", getGigs);


export default router;
