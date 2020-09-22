make:
	bin/ssg5 src docs 'antaxiom' 'https://antaxiom.github.io/'

push:
	bin/ssg5 src docs 'antaxiom' 'https://antaxiom.github.io/'
	git add .
	git commit
	git push

