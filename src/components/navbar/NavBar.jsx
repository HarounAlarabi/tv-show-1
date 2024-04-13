import DropDown from "./DropDown";
import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";
import { useState } from "react";

export function NavBar(
  {
    onSearch,
    filteredEpisodes,
    selectedEpisode,
    onSelectEpisode,
    onSelectShow,
    shows
  }
) {

  const [ showTools, setShowTools ] = useState(false);
  const tools = [ <Search />, <DropDown />, <DropDown />, <NumResults /> ];



  return (
    <div className="navbar-container" >

      <Logo />
      {filteredEpisodes.length > 0 && (
        <nav className="navbar navbar-light bg-light justify-content-between ">
          <div className="navbar-brand">

            <Search onChange={onSearch} />
          </div>

          <DropDown options={shows.map(show => ({
            value: show.id,
            label: show.name
          }))}
            onSelect={onSelectShow} value="Select Show"
          />
          <DropDown
            options={filteredEpisodes.map(episode => ({
              value: episode.id,
              label: `E0${episode.season}S0${episode.number} - ${episode.name}`
            }))}
            onSelect={onSelectEpisode}
            value="Select Episode"
          />
          <NumResults searchResults={filteredEpisodes}
            selectedEpisode={selectedEpisode} />

        </nav>
      )}
    </div>
  );
}

export default NavBar;




