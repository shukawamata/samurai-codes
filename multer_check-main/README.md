# How to run this app using docker

1. docker build -t multer_check .
2. docker run --rm -v $(pwd):/app -it --name multer -p 5050:5050 multer_check
3. please open insomnia or postman to send a query to this app. at that time you should choose multipart form and please name the name part as file.
