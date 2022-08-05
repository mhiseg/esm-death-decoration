import React, { useContext, useEffect } from "react";
import { Grid, Row, Column } from "carbon-components-react";
import style from "./style.scss";
import { Extension, ExtensionProps } from "../extension/extension";
import { ExtensionSlot } from "@openmrs/esm-framework";

export const DecorationPage: React.FC = () => {
  const extensionModule: ExtensionProps = {
    title1: "DEATH",
    title2: "Management",
    iconName: "healthicons:death",
  };

  return (
    <div className={style.formatPage}>
      <ExtensionSlot
        className={`extension-module ${style.breadcrumbs}`}
        extensionSlotName="breadcrumbs-slot"
      />
      <Extension />
    </div>
  );
};
function MyContext(MyContext: any) {
  throw new Error("Function not implemented.");
}
