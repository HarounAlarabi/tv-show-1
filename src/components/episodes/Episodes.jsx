
import Episode from "./Episode";

function Episodes({ show }) {
    return (
        <div className="episodes">
            {show && show.length > 0 ? (
                show.map((episode, index) => (
                    <Episode
                        key={index}
                        episode={episode}

                    />
                ))
            ) : (
                <p>No episodes available.</p>
            )}
        </div>
    );
}

export default Episodes;

