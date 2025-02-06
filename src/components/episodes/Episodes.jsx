import Spinner from "../Spinner";
import Episode from "./Episode";

function Episodes({ episodes, onSelectEpisode }) {
  console.log("Episodes:", episodes);
  return (
    <div className="episodes">
      {episodes && episodes.length > 0 ? (
        episodes.map((episode) => (
          <Episode
            key={episode.id}
            episode={episode}
            onSelect={onSelectEpisode}
          />
        ))
      ) : (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
    </div>
  );
}
export default Episodes;
