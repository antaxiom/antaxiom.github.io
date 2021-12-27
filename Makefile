output=docs


make:
	rm -rf $(output)
	mkdir $(output)
	bin/ssg6 src docs 'antaxiom' 'https://antaxiom.github.io/'

push:
	bin/ssg6 src docs 'antaxiom' 'https://antaxiom.github.io/'
	git add .
	git commit
	git push

clean:
	rm -rf $(output)
	mkdir $(output)

post:
	@read -p "Enter Post Name: " name; \
	cat src/templates/blog.md > src/posts/$$name.md; \
	nvim src/posts/$$name.md

