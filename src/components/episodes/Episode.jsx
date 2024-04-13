import { useToggleSummary, Summary } from '../Summary';
function Episode({ episode }) {

    const [ showFullSummary, toggleSummary ] = useToggleSummary();
    return (

        <div className='episode'>
            <h2 className='episode__heading'>
                <span>{episode.name}</span>
                <span>{` S0${episode.number}`}</span>
                <span>{`E0${episode.season}`}</span>
            </h2>
            <a href={episode.url}> <img className='episode__image' src={episode.image.medium} alt={episode.name} /> </a>

            <Summary summary={episode.summary} showFullSummary={showFullSummary} toggleSummary={toggleSummary} value={30} />
        </div>

    );
}

export default Episode;

