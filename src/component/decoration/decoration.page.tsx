import React, { useState } from "react";
import { Grid, Row, Column, Breadcrumb } from "carbon-components-react";
import style from "./style.scss";
import { Extension, ExtensionProps } from "../extension/extension";
import { getBreadcrumbs } from "@openmrs/esm-framework";

export const DecorationPage: React.FC = () => {
  const extensionModule: ExtensionProps = {
    title1: "DEATH",
    title2: "Management",
    iconName: "healthicons:death",
  };
  const [breadcumbs, setBreadcumbs] = useState([]);

  const test = () => {
    // console.log("=====",getBreadcrumbs());
    // console.log(getBreadcrumbs);
  };

  test();
  return (
    <div className={style.formatPage}>
      <Breadcrumb className={style.breadcumb}>home/</Breadcrumb>
      <Grid className={style.pm0} fullWidth={true}>
        <Row className={style.headerPage}>
          <Column sm={2} md={4} lg={6} className={style.title}>
            <h4>Enregistrer un patient</h4>
          </Column>
          <Column
            sm={2}
            md={{ span: 2, offset: 2 }}
            lg={{ span: 2, offset: 4 }}
            className={style.extension}
          >
            <Extension {...extensionModule} />
          </Column>
        </Row>
      </Grid>
    </div>
  );
};
