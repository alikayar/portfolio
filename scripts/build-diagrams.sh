#!/usr/bin/env bash

set -euo pipefail

image="ghcr.io/mermaid-js/mermaid-cli/mermaid-cli:11.16.0"

mkdir -p public/diagrams

shopt -s nullglob
inputs=(diagrams/*.mmd)

if [ "${#inputs[@]}" -eq 0 ]; then
  echo "No Mermaid files found in diagrams/"
  exit 0
fi

for input in "${inputs[@]}"; do
  name="$(basename "$input" .mmd)"

  docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$PWD:/data" \
    -w /data \
    "$image" \
    -i "diagrams/$name.mmd" \
    -o "public/diagrams/$name.svg" \
    -b transparent
done
