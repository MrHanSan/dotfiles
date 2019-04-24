#!/usr/bin/env bash

CITY=${1:-trondheim}
COUNTRY=${2:-NO}

CURL='/usr/bin/curl'
WEATHER_API='http://api.openweathermap.org/data/2.5/forecast?q='$CITY','$COUNTRY'&units=metric&appid=9a453a2833879410c818c814f65aa6d9'
CURL_FLAGS='-s'
JQ='/usr/bin/jq'
JQ_FLAGS='-r'

all_weather="$($CURL $CURL_FLAGS $WEATHER_API)"
now_weather="$(echo $all_weather | $JQ $JQ_FLAGS '.list[0].weather[0].icon')"
now_temp="$(echo $all_weather | $JQ $JQ_FLAGS '.list[0].main')"
min_temp=$(echo $now_temp | $JQ $JQ_FLAGS '.temp_min')
max_temp=$(echo $now_temp | $JQ $JQ_FLAGS '.temp_max')

if [ $now_weather = "01d" ] ; then
    icon="" #Sun
elif [ $now_weather = "01n" ] ; then
    icon="" #Moon
elif [ $now_weather = "02d" ] || [ $now_weather = "03d" ] ; then
    icon="" #Some clouds sun
elif [ $now_weather = "02n" ] || [ $now_weather = "03n" ] ; then
    icon="" #Some clouds moon
elif [ $now_weather = "04d" ] || [ $now_weather = "04n" ] ; then
    icon="" #Cloud
elif [ $now_weather = "11d" ] ; then
    icon="" #Lightningbolt
elif [ $now_weather = "09d" ] ; then
    icon="" #Drizzle
elif [ $now_weather = "10d" ] ; then
    icon="" #Rain
elif [ $now_weather = "13d" ] || [ $now_weather = "13n" ] ; then
    icon="" #Snow
elif [ $now_weather = "50d" ] ; then
    icon="" #Fog/ dust/ haze/ mist
else
    icon="??" # Unknown/ check speck
fi

#low_temp=$(echo $min_temp | awk '{split($0, a, "."); print int(a[1])}')
low_temp=$(echo $min_temp | awk '{print int($0+0.5)}')
#high_temp=$(echo $max_temp | awk '{split($0, a, "."); print int(a[1])}')
high_temp=$(echo $max_temp | awk '{print int($0+0.5)}')

echo "$icon    $low_temp    $high_temp  "

