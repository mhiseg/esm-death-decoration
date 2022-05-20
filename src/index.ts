import { getAsyncLifecycle, defineConfigSchema } from "@openmrs/esm-framework";
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
  const moduleName = "@mhiseg/esm-death-app";

  const options = {
    featureName: "death",
    moduleName,
  };

  defineConfigSchema(moduleName, configSchema);

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import("./root.component"), options),
        route: baseUrl,
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
