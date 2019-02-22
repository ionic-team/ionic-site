#!/bin/bash
set -o errexit

cd "$(dirname "$0")/.."

if [ -f "Brewfile" ] && [ "$(uname -s)" = "Darwin" ]; then
    brew bundle check >/dev/null 2>&1 || {
        echo "==> Installing Homebrew dependencies…"
        brew bundle
    }
fi

export DYNO=web.1
export PORT=${PORT:-3000}

erb config/nginx.conf.erb > config/nginx.conf

mkdir -p logs/nginx
touch logs/nginx/access.log logs/nginx/error.log

node server.js &

echo "Listening on port ${PORT}"
nginx -p . -c config/nginx.conf
