/**
 * Just a little node based server
 */
var http = require("http");
var fs = require("fs");
var port = 9999;

http.createServer(function(req, res) {
  var filename = "public"+ req.url;
  var tracelog = req.method+ ": "+ req.url + " -> ";

  filename == "public/" && (filename += "index");
  req.url.indexOf(".") == -1 && (filename += ".html");

  fs.readFile(filename, function(err, content) {
    if (err) {
      tracelog += "404";
      res.writeHead(404);
      res.end("")
    } else {
      tracelog += filename;
      res.writeHead(200, {'Content-Type': content_type_for(filename)});
      res.end(content);
    }

    console.log(tracelog);
  });

}).listen(port, function() {
  console.log("Running server on http://localhost:"+port+"\n");
});


function content_type_for(filename) {
  if (/\.css$/.test(filename)) {
    return "text/css";
  } else {
    return "text/html";
  }
}
