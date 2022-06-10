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
      {/* {user === false ? (
          <Redirect
            to={{
              pathname: `${openmrsSpaBase}login`,
              state: {
                referrer: window.location.pathname.slice(
                  window.location.pathname.indexOf(openmrsSpaBase) + openmrsSpaBase.length - 1,
                ),
              },
            }}
          />
        ) : (
          user && <Navbar allowedLocales={allowedLocales} user={user} onLogout={logout} session={userSession} />
        )} */}
      <Footer text="Power By Mhiseg" />
    </BrowserRouter>
  );
};
export default Root;
