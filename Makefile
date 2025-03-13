.PHONY: all

all: han

han:
	node docs/han.js

pre-commit:
	npm run build && git add -A .