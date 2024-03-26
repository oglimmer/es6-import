#!/bin/bash

set -eu

node require/main-1.js
node require/main-2.js

node import/main-1.mjs
node import/main-2.mjs
node import/main-3.mjs
node import/main-4.mjs

node import-as-js/main-1.js

node import-in-code/main-1.mjs
