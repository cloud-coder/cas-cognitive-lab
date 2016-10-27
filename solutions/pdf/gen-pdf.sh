#!/bin/sh

OUTPUT_DIR=`pwd`

# README.md
echo "Generating $OUTPUT_DIR/README.pdf"
cd ../../
markdown-pdf README.md -o "$OUTPUT_DIR/README.pdf"

# setup.md
echo "Generating $OUTPUT_DIR/01-setup.pdf"
cd 01-setup
markdown-pdf setup.md -o "$OUTPUT_DIR/01-setup.pdf"

# Text to Speech
echo "Generating $OUTPUT_DIR/02-text-to-speech.pdf"
cd ../02-text-to-speech
markdown-pdf text-to-speech.md -o "$OUTPUT_DIR/02-text-to-speech.pdf"

# Personality Insights
echo "Generating $OUTPUT_DIR/03-personality-insights.pdf"
cd ../03-personality-insights
markdown-pdf personality-insights.md -o "$OUTPUT_DIR/03-personality-insights.pdf"

# Web Application
echo "Generating $OUTPUT_DIR/04-web-app.pdf"
cd ../04-web-app
markdown-pdf web-app.md -o "$OUTPUT_DIR/04-web-app.pdf"
