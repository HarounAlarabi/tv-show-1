
import React from 'react';
function DropDown({ options, onSelect, value }) {

    const handleSelectChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <div>
            <select className="custom-select" id="inputGroupSelect01"
                onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}
                        selected={value === option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;
