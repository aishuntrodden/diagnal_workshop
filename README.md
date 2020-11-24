To install all packages required: npm install
To start: npm start
To start in development mode: npm run dev-start

To configure port:
write:-

PORT=[desired port]

in .env file

To supply input URL:
Post request to whichever port you are running server on for example,
if the port in .env file is set to 3000 then make a post request to
http://localhost:3000/

with the body :
{
"url": "[AMAZON PRODUCT URL]"
}
