export default {
  "allow-uncaught": false,
  "async-only": false,
  bail: false,
  "check-leaks": false,
  color: true,
  delay: false,
  diff: true,
  exit: false, // could be expressed as "'no-exit': true"
  extension: ["js", "cjs", "mjs"],
  "fail-zero": true,
  "full-trace": true,
  jobs: 1,
  package: "./package.json",
  parallel: true,
  recursive: false,
  // reporter: 'spec',
  require: "chai/expect",
  retries: 2,
  sort: false,
  spec: ["**.spec.js"], // the positional arguments!
  timeout: "2000", // same as "timeout: '2s'"
};
