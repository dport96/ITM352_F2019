var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write(`Path ${path} not found`);
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        var path = url.parse(request.url).pathname;
     
        if (path == '/') {
            path = "./index.html";
        } else {
            path = "." + path;
        }
        renderHTML(path, response);
        console.log(`Path=${path}`);

        /*
        switch (path) {
            case '/':
                renderHTML('./index.html', response);
                break;
            case '/invoice.html':
                renderHTML('./invoice.html', response);
                break;
            case '/product_data.js':
                renderHTML('./product_data.js', response);
                break;
            case '/Asst1.html':
                renderHTML('./Asst1.html', response);
                break;
            default:
                response.writeHead(404);
                response.write("handleRequest: Page not found");
                response.end();
        }
        */
    }
}