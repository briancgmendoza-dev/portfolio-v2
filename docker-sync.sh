# Load the environment variables from .env file, ignoring comments and empty lines
export $(grep -v '^#' .env | xargs)

# 1. Check if there is an existing image with the same values from .env
if [ "$(docker images -q $DOCKER_USERNAME/$DOCKER_REPOSITORY:$DOCKER_TAG 2> /dev/null)" = "" ]; then
    # 2. If no image, run build-image.sh --> it will build the image
    echo "Image not found. Building the image..."
    ./docker-build.sh
    echo "Connecting to docker hub..."
    docker login
    echo "Pushing the newly built image to Docker Hub..."
    docker push "$DOCKER_USERNAME/$DOCKER_REPOSITORY:$DOCKER_TAG"
else
    echo "Image already exists."
    docker login
    encho "Pushing to docker hub..."
    docker push "$DOCKER_USERNAME/$DOCKER_REPOSITORY:$DOCKER_TAG"
fi
