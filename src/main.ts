import "./polyfills";

// zone.js testing imports
// import "zone.js/dist/zone-testing"; // instead all commented files below
// import 'zone.js/dist/async-test';
// import 'zone.js/dist/fake-async-test';
// import 'zone.js/dist/long-stack-trace-zone';
// import 'zone.js/dist/proxy.js';
// import 'zone.js/dist/sync-test';
// import 'zone.js/dist/jasmine-patch';

import "./test";

import { runCLI } from "jest";

const projectRootPath = "./";

// Add any Jest configuration options here
const jestConfig = {
  roots: [projectRootPath + "app/"],
  testRegex: "\\.spec\\.ts$"
};

bootstrap().then((result: any) => console.log(result));

async function bootstrap() {
  if (window["jest"]) {
    location.reload();
    return;
  } else {
    // Run the Jest asynchronously
    const result = await runCLI(jestConfig as any, [projectRootPath]);

    // Analyze the results
    // (see typings for result format)
    if (result.results.success) {
      console.log(`Tests completed`);
    } else {
      console.error(`Tests failed`);
    }
  }

  // First, initialize the Angular testing environment.
  /*getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );*/
}
