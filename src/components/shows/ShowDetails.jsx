
import { useState } from 'react';
import { useToggleSummary, Summary } from '../Summary';


const ShowDetails = ({ show, onSelectShow }) => {
    const renderImage = () => {
        if (show.image && show.image.medium) {
            return <img src={show.image.medium} alt={show.name} className='show__card-img' />;
        }
        return null;
    };

    const renderRating = () => {
        if (show.rating) {
            return <p>Rating: {show.rating.average}</p>;
        }
        return null;
    };

    const renderNetwork = () => {
        if (show.network) {
            return <p>Network: {show.network.name}</p>;
        }
        return null;
    };




    // const [ showFullSummary, setShowFullSummary ] = useState(false);

    // const toggleSummary = () => {
    //     setShowFullSummary(!showFullSummary);
    // };

    // const renderSummary = () => {
    //     if (show.summary) {
    //         if (showFullSummary) {
    //             return (
    //                 <div>
    //                     <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
    //                     <a href="#" onClick={toggleSummary} className="read-more-button">Read Less &#8594;</a>
    //                 </div>
    //             );
    //         } else {
    //             return (
    //                 <div>
    //                     <p dangerouslySetInnerHTML={{ __html: show.summary.substring(0, 150) }}></p>  <a href="#" onClick={toggleSummary} className="read-more-button">Read more &#8594;</a>

    //                 </div>
    //             );
    //         }
    //     }
    //     return null;
    // };


    // Inside your component
    const [ showFullSummary, toggleSummary ] = useToggleSummary();
    // ...


    return (
        <div className="show__card" >
            <a href='#' onClick={() => onSelectShow(show)}>{renderImage()}</a>
            <div className='show__card-details'>
                <h1>{show.name}</h1>
                <Summary summary={show.summary} showFullSummary={showFullSummary} toggleSummary={toggleSummary} value={150} />
            </div>
            <div className='show__card-side'>
                <p>Type: {show.type}</p>
                <p>Language: {show.language}</p>
                {renderRating()}
                {renderNetwork()}
            </div>
        </div>
    );
};

export default ShowDetails;
