/**
 * Dropdown
 *
 */

import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { dropdownData } from "../data/dummy";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

export default DropDown;
