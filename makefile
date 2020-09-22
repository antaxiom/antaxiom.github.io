output=docs


make:
	rm -rf $(output)	
	mkdir $(output)
	bin/ssg5 src docs 'antaxiom' 'https://antaxiom.github.io/'

push:
	bin/ssg5 src docs 'antaxiom' 'https://antaxiom.github.io/'
	git add .
	git commit
	git push

clean:
	rm -rf $(output)	
	mkdir $(output)
