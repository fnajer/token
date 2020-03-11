#!/bin/sh

echo "'$NODE_ENV' environment"

case "$NODE_ENV" in
 stage) CMD=start_stage ;;
 production) CMD=start ;;
 dev) CMD=start_dev ;;
 *) CMD="gatsby serve -H 0.0.0.0"
esac

echo "executing >> $CMD"
$CMD
