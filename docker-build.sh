# Load the environment variables from .env file, ignoring comments and empty lines
export $(grep -v '^#' .env | xargs)

# Build the Docker image using the variables from .env
docker build --no-cache -t $DOCKER_USERNAME/$DOCKER_REPOSITORY:$DOCKER_TAG .
