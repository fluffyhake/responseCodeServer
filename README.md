# responseCodeServer
A node server that can respond with different error codes based on user parameters.


Generate a cert and put it in the certs folder:

certs/
    |  cert.pem
    |  key.pem


openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem