import {
  getAsyncLifecycle,
  defineConfigSchema,
  registerBreadcrumbs,
} from "@openmrs/esm-framework";
import { useTranslation } from "react-i18next";
import { configSchema } from "./config-schema";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

const backendDependencies = {
  fhir2: "^1.2.0",
  "webservices.rest": "^2.2.0",
};
const baseUrl = "death";

function setupOpenMRS() {
  const moduleName = "@mhiseg/esm-decoration-app";

  const options = {
    featureName: "death",
    moduleName,
  };

  registerBreadcrumbs([
    {
      path: `${window.spaBase}/death`,
      title: "Admin-Death",
      parent: `${window.spaBase}/home`,
    },
    {
      path: `${window.spaBase}/death/list-unvalidate`,
      title: "List-Unvalidate",
      parent: `${window.spaBase}/home`,
    },
    {
      path: `${window.spaBase}/death/search`,
      title: "Search-Patient",
      parent: `${window.spaBase}/home`,
    },
    {
      path: `${window.spaBase}/death/patient`,
      title: "Patient",
      parent: `${window.spaBase}/home`,
    },
    {
      path: `${window.spaBase}/death/declare/patient`,
      title: "Declare-Death",
      parent: `${window.spaBase}/home`,
    },
    {
      path: `${window.spaBase}/death/validate/patient`,
      title: "Validate-Death",
      parent: `${window.spaBase}/home`,
    },
    {
      path: `${window.spaBase}/settings`,
      title: "Settings",
      parent: `${window.spaBase}/home`,
    },
  ]);

  defineConfigSchema(moduleName, configSchema);

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import("./root.component"), options),
        route: baseUrl,
        privilege: "App: admin.management",
      },
      {
        load: getAsyncLifecycle(() => import("./root.component"), options),
        route: "settings",
        privilege: "App: coreapps.systemAdministration",
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
