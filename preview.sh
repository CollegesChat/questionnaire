#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/website"
node build.mjs

PORT="${1:-8080}"
echo "Serving at http://localhost:$PORT"
cd dist && python3 -m http.server "$PORT" --bind 127.0.0.1
