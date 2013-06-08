##Proxypy: Get external HTML, JSON or any other text file

Simple Python proxy module for fetching content of remote webpages on the client without cross-domain limitations. Works with any Python web framework, here is an [example with Flask](https://github.com/aymanfarhat/proxypy/tree/master/example) and you can see it in action [here](http://proxypy.herokuapp.com)

###Usage
Include the [Proxypy](https://github.com/aymanfarhat/proxypy/blob/master/proxypy.py) module in your app path

#####Flask View 
```python
from flask import Flask, request, Response
import json
import proxypy

@app.route("/crossdomain")
def crossdom():
    reply = proxypy.get(request.query_string)
        return Response(reply,status=200,mimetype='application/json')
```
#####Javascript GET Request 
```javascript
var request = $.ajax({
    type: 'GET',
    url: "http://yourwebapp.domain/crossdomain",
    data: {url:"remotecontent.com/file.html", headers: true},
})

Full URL: `http://yourwebapp.domain/crossdomain?url=remotecontent.com/file.html&headers=true`

```
#####Reply
```javascript
{
    "status": {
        "http_code": 200,
        "url": "remotecontent.com/file.html"
    },
    "headers": {
        "content-length": "4867",
        "connection": "close",
        "accept-ranges": "bytes",
        "last-modified": "Fri, 03 May 2013 15:51:47 GMT",
        "content-type": "text/html",
        "date": "Sat, 08 Jun 2013 08:41:05 GMT",
        "server": "Apache"
    },
    "content": "<p>some html</p>"
} 
```

####MIT License

Copyright (c) 2013 Ayman Farhat 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
