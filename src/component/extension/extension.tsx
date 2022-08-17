import React, { useEffect, useState } from "react";
import { Grid, Row, Column, IconData } from "carbon-components-react";
import style from "./extension.scss";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { ConfigurableLink, useConfig } from "@openmrs/esm-framework";
import { useHistory } from "react-router-dom";

export interface ExtensionProps {
  title1?: string;
  title2?: string;
  iconName?: string;
}
export const Extension: React.FC = () => {
  const config = useConfig();
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [iconName, setIconName] = useState("");
  const [iconSize, setIconSize] = useState([32, 32]);
  const [menuItems, setMenuItems] = useState([]);
  const [marginIcon, setMarginIcon] = useState("0px");
  const [marginRight, setMarginRight] = useState("");
  const history = useHistory();

  const setExtension = (name: string) => {
    switch (name) {
      case "death":
        setTitle1("DEATH");
        setTitle2("Management");
        setIconName("healthicons:death");
        setMenuItems([]);
        setIconSize([36, 42]);
        setMarginIcon("-3px");
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
        setTitle1("OUTPATIENT");
        setTitle2("Clinics");
        setIconName("medical-icon:i-family-practice");
        setIconSize([26, 33.5]);
        setMarginIcon("1.5px");
        setMarginRight("3px");
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

  useEffect(() => {
    let url = location.pathname?.split(window.spaBase + "/")[1]?.split("/")[0];
    setExtension(url);
  }, []);

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
