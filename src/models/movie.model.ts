import { IMovie } from "../interfaces/movie.interface";
import { model, Schema } from "mongoose";

const MovieSchema = new Schema({
    data: {
        title: { type: String, required: [true, "Field is required"] },
        original_title: { type: String, required: [true, "Field is required"] },
        description: { type: String, required: [true, "Field is required"] },
        released: { type: String, required: [true, "Field is required"] },
        studio: { type: String, required: [true, "Field is required"] },
        images: { type: Array, required: [true, "Field is required"] },
        tags: { type: Array, required: [true, "Field is required"] },
        genres: { type: Array, required: [true, "Field is required"] }
    }
});

export const Movie = model<IMovie>("Movie", MovieSchema);