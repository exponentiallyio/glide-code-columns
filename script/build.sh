#!/bin/bash

for COLUMN in src/columns/*.ts
do
    F=$(basename -- $COLUMN)
    SLUG="${F%.*}"

    mkdir -p public/$SLUG

    # First build is to extract metadata and build manifest
    esbuild $COLUMN --bundle --outfile=public/$SLUG/index.js --format=cjs --log-level=silent
    cp script/manifest.js public/$SLUG
    node public/$SLUG/manifest.js
    rm public/$SLUG/manifest.js

    # Now we build the actual column
    esbuild $COLUMN --bundle --outfile=public/$SLUG/index.js
    echo "<script src='/$SLUG/index.js'></script>" > public/$SLUG/index.html
done

ts-node src/manifest.ts