import React from "react";

interface SearchComponentProps {
  onClose: () => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onClose }) => {
  onClose();

  return <div>index</div>;
};

export default SearchComponent;
