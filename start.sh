#!/usr/bin/env sh
# Generate Client Stub from Swagger, backend build should have been run first
SWAGGER_FILE=src/swagger.json
OUTPUT_DIR=api
if [ ! -f "$SWAGGER_FILE" ]; then
    echo "You need to run the backend swagger generation first, check the backend readme"
    exit -1
fi
java -jar swagger-codegen-cli.jar generate -i $SWAGGER_FILE -l typescript-fetch -o $OUTPUT_DIR

# Waiting for backend to start and run test, build and start
/wait && npm test && npm run tsc && npm start