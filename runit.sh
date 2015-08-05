#!/bin/sh


# Copy to /runit.sh
# Change port add other options
# Start server with ./runit.sh
# Profit
# 

EM_PORT=4400
EM_LR_PORT=$(( $EM_PORT + 1 ));

ember server --port ${EM_PORT} --live-reload-port ${EM_LR_PORT}
