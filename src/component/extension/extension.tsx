import React, { useEffect, useState } from "react";
import { Grid, Row, Column } from "carbon-components-react";
import style from "./extension.scss";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { ConfigurableLink, LoggedInUser } from "@openmrs/esm-framework";
import { getSynchronizedCurrentUser } from "../resource";

export const Extension: React.FC = () => {
  let { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [iconName, setIconName] = useState("");
  const [iconSize, setIconSize] = useState([32, 32]);
  const [menuItems, setMenuItems] = useState([]);
  const [marginIcon, setMarginIcon] = useState("0px");
  const [marginRight, setMarginRight] = useState("");
  const [user, setUser] = React.useState<LoggedInUser>(null);

  useEffect(() => {
    const currentUserSub = getSynchronizedCurrentUser({
      includeAuthStatus: true,
    }).subscribe((res) => {
      setUser(res.user);
      let url = location.pathname
        ?.split(window.spaBase + "/")[1]
        ?.split("/")[0];
      setExtension(url, res.user);
    });
    return () => {
      currentUserSub;
    };
  }, []);

  const setExtension = (name: string, user) => {
    switch (name) {
      case "death":
        setTitle1("DEATH");
        setTitle2("Management");
        setIconName("healthicons:death");
        setMenuItems([]);
        setIconSize([36, 42]);
        setMarginIcon("-3px");
        switch (user.systemId.split("-")[0]) {
          case "nurse":
            setMenuItems([
              {
                title: t("findPatient"),
                link: window.spaBase + "/death/search",
              },
              {
                title: t("addNewPatient"),
                link: window.spaBase + "/death/patient",
              },
            ]);
            break;
          case "doctor":
            setMenuItems([
              {
                title: t("findPatient"),
                link: window.spaBase + "/death/search",
              },
              {
                title: t("addNewPatient"),
                link: window.spaBase + "/death/patient",
              },
              {
                title: t("declareDeath"),
                link: window.spaBase + "/death/declare/patient",
              },
              {
                title: t("listUnvalidated"),
                link: window.spaBase + "/death/list-unvalidate",
              },
            ]);
            break;
          case "admin":
            setMenuItems([
              {
                title: t("findPatient"),
                link: window.spaBase + "/death/search",
              },
              {
                title: t("addNewPatient"),
                link: window.spaBase + "/death/patient",
              },
              {
                title: t("declareDeath"),
                link: window.spaBase + "/death/declare/patient",
              },
              {
                title: t("listUnvalidated"),
                link: window.spaBase + "/death/list-unvalidate",
              },
              {
                title: t("adminDeath"),
                link: window.spaBase + "/death/admin",
              },
            ]);
            break;
        }
        break;
      case "settings":
        setTitle1("SYSTEM");
        setTitle2("Management");
        setIconName("dashicons:admin-generic");
        setIconSize([34, 33.5]);
        setMarginIcon("1.5px");
        setMenuItems([
          { title: t("gestionUser"), link: window.spaBase + "/settings" },
        ]);
        break;
      case "out-patient":
        setTitle1("Outpatient Clinics");
        //setTitle2("Clinics");
        setIconName("healthicons:ambulatory-clinic-outline");
        setIconSize([22, 22]);
        setMarginIcon("4px");
        setMarginRight("1px");
        setMenuItems([
          {
            title: t("addNewPatient"),
            link: window.spaBase + "/out-patient/patient",
          },
          {
            title: t("findPatient"),
            link: window.spaBase + "/out-patient/search",
          },
        ]);
        break;
      default:
    }
  };

  return (
    <>
      <Grid className={style.main} fullWidth={true}>
        <Row className={style.extensionContent} onClick={() => setShow(!show)}>
          <Icon
            className={style.marquedNameAlignement}
            icon={iconName}
            width={iconSize[0]}
            height={iconSize[1]}
            style={{ marginTop: marginIcon, marginRight: marginRight }}
          />
          {title2 ? (
            <Column className={style.pm0}>
              <Column className={style.pm0}>
                <p className={style.title1}> {t(title1)} </p>
              </Column>
              <Column className={style.pm0}>
                <p className={style.title2}> {t(title2)} </p>
              </Column>
            </Column>
          ) : (
            <Column className={style.pm0}>
              <Column className={style.pm0}>
                <p className={style.title0}> {t(title1)} </p>
              </Column>
            </Column>
          )}
        </Row>
      </Grid>
      <>{user?.locale}</>
      {show && menuItems.length > 0 && (
        <ul className={style.menu}>
          {menuItems.map((menuItem) => {
            return (
              <li>
                <ConfigurableLink
                  to={menuItem.link}
                  className={style.titleItems}
                >
                  {t(menuItem.title)}
                </ConfigurableLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
