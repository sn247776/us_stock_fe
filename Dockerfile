FROM node

COPY . /us_stock_client
WORKDIR /us_stock_client
RUN npm install

CMD npm start