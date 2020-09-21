make:
	bin/ssg5 src docs 'antaxiom' 'https://antaxiom.github.io/site/'

push:
	bin/ssg5 src docs 'antaxiom' 'https://antaxiom.github.io/site/'
	git add .
	git commit
	git push

