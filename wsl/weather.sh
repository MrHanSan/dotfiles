#!/usr/bin/env bash

CURL='/usr/bin/curl'
CURL_FLAGS='-s'
JQ='/usr/bin/jq'
JQ_FLAGS='-r'
API_KEY='9a453a2833879410c818c814f65aa6d9'

if [ -z $1 ] || [ $1 = "-ip" ] || [ $1 = "-i" ] ; then
    IPINFO=$(dig +short myip.opendns.com @resolver1.opendns.com | (read ip; $CURL $CURL_FLAGS http://ip-api.com/json/$ip))
    CITY='lat='$(echo $IPINFO | $JQ $JQ_FLAGS '.lat')
    COUNTRY='&lon='$(echo $IPINFO | $JQ $JQ_FLAGS '.lon')
elif [ -z $3 ] ; then
    CITY=${1:-oslo}
    CITY='q='$CITY
    if [ -z $2 ] ; then
        COUNTRY=''
    else
        COUNTRY=','$2
    fi
elif [ $1 = "-coord" ] || [ $1 = "-c" ] ; then
    CITY='lat='$2
    COUNTRY='&lon='$3
else
    echo 'Use Blank, city, city and country, ip, or lat lon'
    echo 'To use IP use flag "-ip or -i"'
    echo 'To use lat lon use parameter "-coord or -c [lat] [lon]"'
fi

WEATHER_API='http://api.openweathermap.org/data/2.5/weather?'$CITY$COUNTRY'&units=metric&appid='$API_KEY

all_weather="$($CURL $CURL_FLAGS $WEATHER_API)"
now_weather="$(echo $all_weather | $JQ $JQ_FLAGS '.weather[0].icon')"
now_temp="$(echo $all_weather | $JQ $JQ_FLAGS '.main')"
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
elif [ $now_weather = "11d" ] || [ $now_weather = "11n" ] ; then
    icon="" #Lightningbolt
elif [ $now_weather = "09d" ] || [ $now_weather = "09n" ] ; then
    icon="" #Drizzle
elif [ $now_weather = "10d" ] || [ $now_weather = "10n" ] ; then
    icon="" #Rain
elif [ $now_weather = "13d" ] || [ $now_weather = "13n" ] ; then
    icon="" #Snow
elif [ $now_weather = "50d" ] || [ $now_weather = "50n" ] ; then
    icon="" #Fog/ dust/ haze/ mist
else
    icon="??" # Unknown/ check https://openweathermap.org/weather-conditions
fi

#low_temp=$(echo $min_temp | awk '{split($0, a, "."); print int(a[1])}')
low_temp=$(echo $min_temp | awk '{print int($0+0.5)}')
#high_temp=$(echo $max_temp | awk '{split($0, a, "."); print int(a[1])}')
high_temp=$(echo $max_temp | awk '{print int($0+0.5)}')

echo "$icon  $low_temp  $high_temp"

