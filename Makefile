i:
	npm ci
deploy:
	npm run predeploy && npm run deploy
docker-build-dev:
	docker build -t flappy-bird .
docker-run-dev:
	docker run -p 5000:5000 -t flappy-bird
