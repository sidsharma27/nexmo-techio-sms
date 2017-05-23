./node_modules/mocha/bin/mocha -R spec $1.js

chmod +x ./bin/server.js

echo "CG> open --port=3000 /inbound"

node ./bin/server.js
