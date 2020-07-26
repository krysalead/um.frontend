#!/usr/bin/env sh
# Waiting for backend to start and run test, build and start
/wait && npm run tsc && npm test  && npm start