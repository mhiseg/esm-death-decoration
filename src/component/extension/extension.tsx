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
  const [title1, setTitle1] = useState("DE4ATH");
  const [title2, setTitle2] = useState("Mana4gement");
  const [iconName, setIconName] = useState("hea4lthicons:death");
  const [menuItems, setMenuItems] = useState([]);

  const history = useHistory();

  const setExtension = (name: string) => {
    switch (name) {
      case "death":
        setTitle1("DEATH");
        setTitle2("Management");
        setIconName("healthicons:death");
        setMenuItems([]);
        break;
      case "settings":
        setTitle1("SYSTEM");
        setTitle2("Management");
        setIconName("dashicons:admin-generic");
        setMenuItems([
          { title: t("gestionUser"), link: window.spaBase + "/settings" },
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
      <Grid className={style.extensionContent}>
        <Row className={style.pm0} onClick={() => setShow(!show)}>
          <Column sm={1} md={1} lg={1} className={style.pm0}>
            <Icon
              className={style.marquedNameAlignement}
              icon={iconName}
              color="#555"
              width={40}
              height={41}
            />
          </Column>
          <Column className={style.pm0} sm={3} md={7} lg={11}>
            <div>
              <p className={style.title1}> {t(title1)} </p>
              <p className={style.title2}> {t(title2)} </p>
            </div>
          </Column>
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
