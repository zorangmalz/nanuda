var express = require('express');
const app = express();
var cors = require('cors')
const client_id = 'niz7fq7bMSOMVInWyV3w';
const client_secret = 'rfa8lA_Uu7';
const port = 3000

app.use(cors());
app.options('*', cors());

app.get('/search/shop', function (req, res) {
    const api_url = 'https://openapi.naver.com/v1/search/shop.json?=query' + encodeURI(req.query.query); // json 결과
    var request = require('request');
    const options = {
        url: api_url,
        headers: { 
            'X-Naver-Client-Id': client_id, 
            'X-Naver-Client-Secret': client_secret,
        }
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response)
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

app.listen(3002, function () {
    console.log('http://127.0.0.1:3002/search/shop?query=검색어 app listening on port 3002!');
});