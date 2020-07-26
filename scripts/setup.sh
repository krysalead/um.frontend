#!/usr/bin/env sh
BASEDIR=$(dirname "$0")
BASEDIR=${BASEDIR/\/scripts/}

# Generate Client Stub from Swagger, backend build should have been run first
SWAGGER_FILE=$BASEDIR/src/swagger.json
OUTPUT_DIR=$BASEDIR/api
if [ ! -f "$SWAGGER_FILE" ]; then
    echo "You need to run the backend swagger generation first, check the backend readme"
    exit -1
fi
echo "Generating Client Stub"
java -jar $BASEDIR/scripts/tools/swagger/swagger-codegen-cli.jar generate -i $SWAGGER_FILE -l typescript-fetch -o $OUTPUT_DIR

echo "Frontend all set!!!"