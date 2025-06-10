#!/bin/bash

if [ -d "libraries" ]; then
        echo "Forge already installed..."
else
    curl https://maven.minecraftforge.net/net/minecraftforge/forge/1.19.2-43.4.20/forge-1.19.2-43.4.20-installer.jar --output forge-1.19.2-43.4.20-installer.jar
    java -jar forge-1.19.2-43.4.20-installer.jar --installServer .
fi
java -jar packwiz-installer-bootstrap.jar -g -s server https://asphodel.cc/packwiz/Ports/Curse/Raspberry-Server/pack.toml
if [ -d "libraries" ]; then
        echo "Pack already installed..."
else
    java -jar packwiz-installer-bootstrap.jar -g -s server https://cassiancc.github.io/Raspberry-Flavoured-Server-Pack/pack.toml
fi