#!/usr/bin/env bash

# remove old coverage reports
rm -rf coverage && rm -rf .nyc_output

# run test and collect new coverage
nyc --reporter=html npm test

# achive coverage report by version
mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version

# cleanup
rm -rf coverage && rm -rf .nyc_output

# open coverage report for preview
npm-run-all --parallel cover:serve cover:open
