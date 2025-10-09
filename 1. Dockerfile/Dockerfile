FROM nginx:1.27.0

RUN apt-get update 
RUN apt-get -y install vim


# usr/share/nginx/html is the default location for static files
COPY index.html /usr/share/nginx/html/index.html

#change owner of the html file to nginx user
RUN chown nginx:nginx /usr/share/nginx/html/index.html

