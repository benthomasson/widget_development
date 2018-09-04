.PHONY: all main lint lessc install

all: clean install lessc lint main

clean:
	rm -f js/bundle.js
	rm -f js/vendor.bundle.js
	rm -f css/style.css

install:
	npm i

main: install
	webpack

lint:
	jshint --verbose src/*js

lessc:
	lessc src/style.less css/style.css

deploy: lint lessc main
	mkdir -p ../staticfiles/11
	rsync -av  native.manifest index.html js css *.png ../staticfiles/11/
	cp ../index.html ../staticfiles/

