#!/bin/bash

echo "Resizing image file from $1 to $2"

echo -n "Downloading..."
aws s3 cp "$1" /tmp/image
echo " Done"

echo -n "Converting..."
convert /tmp/image -resize 64x64 /tmp/resized
echo " Done"

echo -n "Uploading..."
aws s3 cp /tmp/resized "$2"
echo " Done"
