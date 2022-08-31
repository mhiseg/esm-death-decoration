import React, { useEffect } from "react";
import style from "./style.scss";
import { Extension } from "../extension/extension";
import {
  ExtensionSlot,
  getLoggedInUser,
  LoggedInUser,
} from "@openmrs/esm-framework";
import { getSynchronizedCurrentUser } from "../resource";

export const DecorationPage: React.FC = () => {
  // const [user, setUser] = React.useState<LoggedInUser>(null);

  // useEffect(() => {
  //   const currentUserSub = getSynchronizedCurrentUser({
  //     includeAuthStatus: true,
  //   }).subscribe((res) => setUser(res.user));
  //   return () => {
  //     currentUserSub;
  //   };
  // }, []);

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
