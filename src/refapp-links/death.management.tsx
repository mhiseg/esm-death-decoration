import React, { useEffect, useState } from "react";
import { ConfigurableLink, getCurrentUser } from "@openmrs/esm-framework";
import { useTranslation } from "react-i18next";

export default function DeathManagement() {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser({ includeAuthStatus: true }).subscribe((user) =>
      setUser(user?.user?.systemId.split("-")[0])
    );
  }, [user]);

  const getUrl = (user) => {
    switch (user) {
      case "doctor":
        return (
          <ConfigurableLink to="${openmrsBase}/spa/death/list-unvalidate">
            {t("adminDeath")}
          </ConfigurableLink>
        );
      case "nurse":
        return (
          <ConfigurableLink to="${openmrsBase}/spa/death/search">
            {t("adminDeath")}
          </ConfigurableLink>
        );
      default:
        return (
          <ConfigurableLink to="${openmrsBase}/spa/death">
            {t("adminDeath")}
          </ConfigurableLink>
        );
    }
  };
  return getUrl(user);
}
