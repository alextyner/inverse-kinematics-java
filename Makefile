VERSION=1.0.0
html:
	cp -r ./target/game-$(VERSION)/js ./docs
	cp ./target/game-$(VERSION)/index.html ./docs
