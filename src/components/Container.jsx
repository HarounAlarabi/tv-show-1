
import React, { useState, useEffect } from 'react';

import NavBar from './navbar/NavBar';
//import Navbarb from './navbar/Navbarb';


import Shows from './shows/Shows';



const Container = () => {
    const [ episodeList, setEpisodeList ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ selectedEpisode, setSelectedEpisode ] = useState();

    const [ shows, setShows ] = useState([]);
    const [ selectedShow, setSelectedShow ] = useState();


    const showsApi = "https://api.tvmaze.com/shows";
    useEffect(() => {
        const fetchEpisodes = async () => {
            const response = await fetch(showsApi);
            const data = await response.json();
            setShows(data);
        };

        fetchEpisodes();
    }, []);

    useEffect(() => {
        const fetchEpisodes = async () => {
            if (selectedShow) {
                const urlApi = `https://api.tvmaze.com/shows/${selectedShow.id}/episodes`;
                const response = await fetch(urlApi);
                const data = await response.json();
                setEpisodeList(data);
                setSelectedEpisode(selectedEpisode);
                console.log("Episodes:", data);
            }
        };

        fetchEpisodes();
    }, [ selectedShow ]);



    ///////////////////////////////////SEACHFUNCTION/////////////////////////////
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase().trim());
    };

    const filteredEpisodes = episodeList.filter(episode =>
        episode.name.toLowerCase().includes(searchTerm) ||
        (episode.summary && episode.summary.toLowerCase().includes(searchTerm))
    );
    //////////////////////SELECTED EPISODE//////////////////////////////////////
    const handleSelectEpisode = (selectedEpisodeId) => {
        const selectedEpisode = episodeList
            .find(episode => episode.id === parseInt(selectedEpisodeId));
        setSelectedEpisode(selectedEpisode);
        console.log("Selected episode:", selectedEpisode);
    };


    const handleShowChange = (selectedShowId) => {
        const selectedShow = shows.find(show => show.id === parseInt(selectedShowId));
        setSelectedShow(selectedShow);
        setEpisodeList([]);
    };





    return (
        <div className='container'>

            <NavBar

                filteredEpisodes={filteredEpisodes}
                onSearch={handleSearchChange}
                onSelectEpisode={handleSelectEpisode}
                selectedEpisode={selectedEpisode}
                shows={shows}
                onSelectShow={handleShowChange} />
            <Shows
                show={shows}
                selectedShow={selectedShow}
                setSelectedShow={setSelectedShow}
                episodeList={episodeList}
                setSelectedEpisode={setSelectedEpisode}
                selectedEpisode={selectedEpisode}
                filteredEpisodes={filteredEpisodes}


            />



        </div>
    );
};

export default Container;
