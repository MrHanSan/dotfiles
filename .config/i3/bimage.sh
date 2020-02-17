#!/usr/bin/env bash

CURL='/usr/bin/curl'
CURL_FLAGS='-s'
JQ='/usr/bin/jq'
JQ_FLAGS='-r'
BING_JSON='https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US'


image_json="$($CURL $CURL_FLAGS $BING_JSON)"
base_url="http://www.bing.com"
img_url="$(echo $image_json | $JQ $JQ_FLAGS '.images[0].url')"
img="$($CURL $CURL_FLAGS $base_url$img_url > ~/.config/i3/daily.jpg)"

