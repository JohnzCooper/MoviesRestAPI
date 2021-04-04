import { IMovie } from "../interfaces/movie.interface";
import { Movie } from "../models/movie.model";
import { WELCOME_MESSAGE } from "../constants/moviesRestApi.constants";

export class MovieService {
  public welcomeMessage(): string {
    return WELCOME_MESSAGE;
  }

  public findAll(): Promise<IMovie[]> {
    return Movie.find({}).exec();
  }

  public add(movie: IMovie): Promise<IMovie> {
    const newMovie = new Movie(movie);
    return newMovie.save();
  }

  public async delete(id: string) {
    return new Promise<IMovie>((resolve, reject)=>{
      Movie.findByIdAndDelete(id).exec().then(result=>{
        if(!result)
          return reject(`Movie with id '${id}' not found`);
        return resolve(result);
      }).catch(error=>{
        reject(new Error(`Movie with id '${id}' not found`));
      });
    });    
  }
  
  public async update(id: string, movie: IMovie) {
    return new Promise<IMovie>((resolve, reject)=>{
        Movie.findByIdAndUpdate( id, movie ).exec().then(response => {
            if (!response)
              return reject(`Movie with id '${id}' not found`);
            return resolve(response);
        }).catch(error=>{
            reject(new Error(`Movie with id '${id}' not found`));
          });
    });
  }
}