docker build . -f backend/Dockerfile -t fastapi:v1 
docker build . -f frontend/Dockerfile -t sveltekit-docker:latest --no-cache