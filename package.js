/* Information about this package */
Package.describe({
  summary: "A CSS Framework for Meteor",
  version: "0.0.1",
  name: "ganymed:base",
  git: "https://github.com/lampe/ganymed-base",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.imply('templating');
  api.addFiles(['libs/normalize.css', 'base.css', 'grid.css', 'responsiveGrid.css'], 'client');
});
