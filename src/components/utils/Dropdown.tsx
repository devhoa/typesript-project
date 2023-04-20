import React, { useState } from "react";
import dropdown from "../../assets/img/dropdown-1.png";
import dropup from "../../assets/img/dropdown-2.png";
import "../../css/Dropdown.css";

interface Props {
  label?: any;
  options: any;
  selectedOption: any;
  setSelectedOption: any;
}

const Dropdown = (props: Props) => {
  const { label, selectedOption, setSelectedOption, options } = props;
  const [isOptionVisible, setIsOptionVisible] = useState<boolean>(false);

  const handleSelected = (option: any) => {
    setSelectedOption(option);
    setIsOptionVisible(false);
  };
  return (
    <div className="dropdown">
      {label && <label className="form-label fw-bolder">{label}</label>}
      <div className="dropdown-component rounded border border-secondary">
        <div
          className="selected-option-wrapper d-flex justify-content-between"
          onClick={() => setIsOptionVisible(!isOptionVisible)}
        >
          <div>{selectedOption}</div>
          <div>
            {isOptionVisible && (
              <div className="dropdown-options rounded border border-secondary ovf-170">
                {options.length > 0 &&
                  options.map((option: any) => (
                    <div
                      className="dropdown-option rounded"
                      onClick={() => handleSelected(option)}
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
          </div>
          {isOptionVisible ? (
            <img alt="" src={dropup}></img>
          ) : (
            <img alt="" src={dropdown}></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
