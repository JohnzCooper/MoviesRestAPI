import app from "./app";
import { PORT } from "./constants/moviesRestApi.constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));