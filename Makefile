.PHONY: all

all: sync_data

sync_data:
	@OUTPUT=$$(python pyhan/src/tool/han.py); \
    echo "export const data = '$$OUTPUT'" > src/data.js

pre-commit:
	yarn run build && yarn run build_main && git add -A .