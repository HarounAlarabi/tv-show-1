
function Search({ onChange }) {
  return (
    // <div className="search">
    //   <input type="search"
    //     className="search__box"
    //     onChange={onChange} placeholder="Search episodes..." />

    // </div>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onChange} />

    </form>
  );
}

export default Search;

{/* <div id="root">
                {searchResults.map((episode) => (
                    <div key={episode.id} className="episode">
                        <h3>{episode.name} - E0{episode.season}S0{episode.number}</h3>
                        <a href={episode.url}>
                            <img src={episode.image.original} alt={episode.name} />
                        </a>
                        <p dangerouslySetInnerHTML={{ __html: episode.summary }} />
                    </div>
                ))}
            </div> */}