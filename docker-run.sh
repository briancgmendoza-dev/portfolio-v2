# Load the environment variables from .env file, ignoring comments and empty lines
export $(grep -v '^#' .env | xargs)

# Define the container name based on the repository name
CONTAINER_NAME="${DOCKER_REPOSITORY}_container"

# 1. Check if there is an existing image with the same values from .env
if [ "$(docker images -q $DOCKER_USERNAME/$DOCKER_REPOSITORY:$DOCKER_TAG 2> /dev/null)" = "" ]; then
    # 2. If no image, run build-image.sh --> it will build the image
    echo "Image not found. Building the image..."
    ./docker-build.sh
else
    echo "Image already exists."
fi

# 3. Check if the container is running and stop it if it is
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping existing container..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME  # Optionally remove the container
fi

# 4. Use Docker Compose to start the services
echo "Running services with Docker Compose..."
docker-compose logs
docker-compose up -d --build
