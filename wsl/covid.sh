#!/usr/bin/env bash

CURL='/usr/bin/curl'
CURL_FLAGS='-s'
JQ='/usr/bin/jq'
JQ_FLAGS='-r'
WEBREQ='https://services5.arcgis.com/EO5L9fs5hD546rSC/ArcGIS/rest/services/AktuellSmitte_Bydel_Oppsummering/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=AkumulertSumBydelSiste14dg+&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=AkumulertSumBydelSiste14dg+&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token='
TODAY='https://services5.arcgis.com/EO5L9fs5hD546rSC/ArcGIS/rest/services/AktuellSmitte_Bydel_Oppsummering/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=AntallNye_Dato_Bydel+&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token='

all_city_district=$( echo "$($CURL $CURL_FLAGS $WEBREQ)" )
all_last_day=$( echo "$($CURL $CURL_FLAGS $TODAY)" )
sum="$(echo "$all_city_district" | grep ":" | grep "Aku" | awk '{ SUM += $3} END { print SUM }')"
sumDay="$(echo "$all_last_day" | grep ":" | grep "AntallNye" | awk '{ SUM += $3} END { print SUM }')"
echo " $sum/$sumDay"

