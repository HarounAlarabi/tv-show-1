import DropDown from "./DropDown";
import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

export function NavBar({
  onSearch,
  filteredEpisodes,
  selectedEpisode,
  onSelectEpisode,
  onSelectShow,
  shows,
}) {
  return (
    <div className="navbar-container">
      <Logo />
      {filteredEpisodes.length > 0 && (
        <nav className="navbar  ">
          <div className="navbar-brand">
            <Search onChange={onSearch} />
          </div>

          <DropDown
            options={shows.map((show) => ({
              value: show.id,
              label: show.name,
            }))}
            onSelect={onSelectShow}
            value={selectedEpisode?.showId || ""}
          />
          <DropDown
            options={filteredEpisodes.map((episode) => ({
              value: episode.id,
              label: `E0${episode.season}S0${episode.number} - ${episode.name}`,
            }))}
            onSelect={onSelectEpisode}
            value={selectedEpisode ? selectedEpisode.id : ""}
          />
          <NumResults
            searchResults={filteredEpisodes}
            selectedEpisode={selectedEpisode}
          />
        </nav>
      )}
    </div>
  );
}

export default NavBar;
