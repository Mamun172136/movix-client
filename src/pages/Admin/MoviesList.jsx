import { useState } from "react";
import Button from "../../components/Button";
import MovieForm from "./MovieForm";

const MoviesList = () => {
  const [movies, setMovies] = useState();

  const [showMovieFormModal, setShowMovieFormModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formType, setFormType] = useState("add");
  return (
    <div>
      <div className="flex justify-end mb-1">
        <Button
          title="Add Movie"
          variant="outlined"
          onClick={() => {
            setShowMovieFormModal(true);
            setFormType("add");
          }}
        />
      </div>
      {showMovieFormModal && (
        <MovieForm
          showMovieFormModal={showMovieFormModal}
          setShowMovieFormModal={setShowMovieFormModal}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          formType={formType}
        ></MovieForm>
      )}
    </div>
  );
};

export default MoviesList;
