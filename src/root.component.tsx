import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DecorationPage } from "./component/decoration/decoration.page";
import Footer from "./component/footer/footer";

export interface RootProps {
  syncUserPropertiesChangesOnLoad: boolean;
}

const Root: React.FC<RootProps> = () => {
  return (
    <BrowserRouter basename={window.spaBase}>
      <DecorationPage />
      <Footer text="Powered by MHISEG" />
    </BrowserRouter>
  );
};
export default Root;
