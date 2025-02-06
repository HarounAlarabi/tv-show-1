function DropDown({ options, onSelect, value, resetKey }) {
  const handleSelectChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className="dropdown-container" key={resetKey}>
      <select
        className="custom-select"
        onChange={handleSelectChange}
        value={value}
      >
        <option value="" disabled>
          {value || "Select..."}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default DropDown;
