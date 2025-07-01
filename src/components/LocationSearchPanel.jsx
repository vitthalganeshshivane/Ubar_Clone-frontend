import React from "react";

function LocationSearchPanel({
  suggestions,
  setPickup,
  setDestination,
  activeField,
}) {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }

    // setPanelOpen(false); // Close the panel after selection
    // setVehiclePanel(true); // Open vehicle panel next
  };

  return (
    <div className="max-h-[300px] overflow-y-auto px-4 py-3 space-y-3">
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex items-center gap-4 border border-gray-200 hover:border-black transition-all duration-200 cursor-pointer p-3 rounded-lg shadow-sm hover:shadow-md bg-white"
        >
          <div className="bg-gray-100 text-black h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-2-fill text-lg"></i>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-base text-gray-800">
              {elem.description}
            </h4>
          </div>
        </div>
      ))}
      {suggestions.length === 0 && (
        <p className="text-gray-400 text-center">No suggestions found</p>
      )}
    </div>
  );
}

export default LocationSearchPanel;
