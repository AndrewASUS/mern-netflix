import express from "express"
import { getMovieTrailers, getTrendingMovie, getMovieDetails, getSimilarMovies, getMovieByCategory } from "../controllers/movie.controller.js"


const router = express.Router()



router.get("/trending", getTrendingMovie)
router.get("/:id/trailers", getMovieTrailers)
router.get("/:id/details", getMovieDetails)
router.get("/:id/similar", getSimilarMovies)
router.get("/:category", getMovieByCategory)


export default router