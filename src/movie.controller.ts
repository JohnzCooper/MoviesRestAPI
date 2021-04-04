import { Request, Response, Router } from "express";
import { MovieService } from "./services/movie.service";

export class MovieController {
  public router = Router();

  constructor(private movieService: MovieService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/").get(this.findAll).post(this.add);
    this.router.route("/:id").delete(this.delete).put(this.update);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.movieService.welcomeMessage();
    res.send(welcomeMessage);
  };

  private findAll = async (_: Request, res: Response) => {
    try {
      const movie = await this.movieService.findAll();
      res.send(movie);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };


  private add = async (req: Request, res: Response) => {
    try {
      const addMovieResult = await this.movieService.add(req.body);
      res.send(addMovieResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  private delete = async (req: Request, res: Response) => {
    try {
      const deleteMovieResult = await this.movieService.delete(
        req.params.id
      );
      res.send(deleteMovieResult);
    } catch (e) {
      res.status(508).send(e);
    }
  };

  private update = async (req: Request, res: Response) => {
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