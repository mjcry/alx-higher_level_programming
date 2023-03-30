#bin/bash

# Store given URL in a variable
url=$1

# Send request to the given URL and store response body
response=$(curl -s $url)

# Calculate the size of the response body in bytes
size=$(echo -n $response | wc -c)

# Print the size of the response body in bytes
echo $size
