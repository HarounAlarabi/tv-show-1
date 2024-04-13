import { useState } from 'react';
export function useToggleSummary(initialState = false) {
    const [ showFullSummary, setShowFullSummary ] = useState(initialState);

    const toggleSummary = () => {
        setShowFullSummary(!showFullSummary);
    };

    return [ showFullSummary, toggleSummary ];
}


export function Summary({ summary, showFullSummary, toggleSummary, value }) {
    if (summary) {
        if (showFullSummary) {
            return (
                <div>
                    <p dangerouslySetInnerHTML={{ __html: summary }}></p>
                    <a href="#" onClick={toggleSummary} className="read-more-button">Read Less &#8594;</a>
                </div>
            );
        } else {
            return (
                <div>
                    <p dangerouslySetInnerHTML={{ __html: summary.substring(0, value) }}></p>
                    <a href="#" onClick={toggleSummary} className="read-more-button">Read more &#8594;</a>
                </div>
            );
        }
    }
    return null;
}