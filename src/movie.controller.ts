import { Request, Response } from "express";
import { MovieService } from "./services/movie.service";

export class MovieController {


  constructor(private movieService: MovieService) {
    //this.setRoutes();
  }

  // public setRoutes() {
  //   this.router.route("/").get(this.findAll).post(this.add);
  //   this.router.route("/:id").delete(this.delete).put(this.update);
  // }

  public sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.movieService.welcomeMessage();
    res.send(welcomeMessage);
  };

  public findAll = async (_: Request, res: Response) => {
    try {
      const movie = await this.movieService.findAll();
      res.send(movie);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };


  public add = async (req: Request, res: Response) => {
    try {
      const addMovieResult = await this.movieService.add(req.body);
      res.send(addMovieResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const deleteMovieResult = await this.movieService.delete(
        req.params.id
      );
      res.send(deleteMovieResult);
    } catch (e) {
      res.status(508).send(e);
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const updateMovieResult = await this.movieService.update(
        req.params.id,
        req.body
      );
      res.send(updateMovieResult);
    } catch (e) {
      res.status(508).send(e.message);
    }
  };
}