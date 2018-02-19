#!/usr/bin/env bash

arr=$(echo $1|tr "/" "\n")
strA=".js"

basePath=$(cd "$(dirname "$0")"; pwd)

for i in ${arr}; do
  result=$(echo $i | grep "${strA}")
  if [[ "$result" != "" ]]
  then
    file=${basePath}/src/components/$1
    if [ ! -f file ]; then
      touch $file
      # fileDirPath=$(echo `dirname $file`)
    fi
  else
    if [ ! -d ${basePath}/src/components/$i ]; then
      mkdir ${basePath}/src/components/$i
    fi
    indexFile=${basePath}/src/components/$i/index.js
    if [ ! -f indexFile ]; then
      touch $indexFile
    fi
  fi
done
