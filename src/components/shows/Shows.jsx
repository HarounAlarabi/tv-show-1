

import { useState, useEffect } from 'react';
import ShowDetails from "./ShowDetails";
import Episodes from "../episodes/Episodes";

function Shows({ show,
    setSelectedShow,
    selectedEpisode,
    setSelectedEpisode,
    filteredEpisodes,
}) {

    const [ showEpisodes, setShowEpisodes ] = useState(false);





    const handleSelectShow = (show) => {
        setSelectedShow(show);
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
                    show={selectedEpisode ? [ selectedEpisode ] : filteredEpisodes}

                    selectedEpisode={selectedEpisode}
                    onSelectEpisode={handleSelectEpisode}
                />
            ) : (
                <div className="show">
                    {show.map((show, index) => (
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



