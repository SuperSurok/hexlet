install: install-deps
install-deps:
	npm ci
lint:
	npm eslint .
.PHONY: bin
