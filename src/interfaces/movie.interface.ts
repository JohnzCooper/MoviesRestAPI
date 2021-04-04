import { Document } from "mongoose";
import { IMovieData } from "./movieData.interface";

export interface IMovie extends Document {
    data: IMovieData
}