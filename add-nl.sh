#!/usr/bin/env bash

[ -n "`tail -c1 "$1"`" ] && echo >> "$1" ## stolen from https://unix.stackexchange.com/a/263965/55707

exit 0
