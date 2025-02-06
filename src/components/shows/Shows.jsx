import { useState } from "react";
import ShowDetails from "./ShowDetails";
import Episodes from "../episodes/Episodes";

function Shows({
  shows,
  setSelectedShow,
  selectedEpisode,
  setSelectedEpisode,
  filteredEpisodes,
}) {
  console.log(selectedEpisode);
  const [showEpisodes, setShowEpisodes] = useState(false);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
    setSelectedEpisode(null);
    console.log("Selected show:", show);
    setShowEpisodes(true);
  };

  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
  };

  return (
    <div>
      {showEpisodes ? (
        <Episodes
          episodes={selectedEpisode ? [selectedEpisode] : filteredEpisodes}
          selectedEpisode={selectedEpisode}
          onSelectEpisode={handleSelectEpisode}
        />
      ) : (
        <div className="show">
          {shows.map((show, index) => (
            <ShowDetails
              key={index}
              show={show}
              onSelectShow={handleSelectShow}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shows;
