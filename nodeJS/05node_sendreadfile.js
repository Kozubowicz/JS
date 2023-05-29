let http = require("http");
let formidable = require("formidable");
let fs = require("fs");
let htmlform = `
<!DOCTYPE html>
<html>
    <head><title>Send and read file</title></head>
    <body>
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="file1" > <br>
            <input type="submit" value="send" >
        </form>
    </body>
</html>
`;

http
  .createServer(function (req, res) {
    if (req.url === "/upload") {
      let form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        console.log(JSON.stringify(files.file1));
        let tempPath = files.file1.filepath;
        let newPath = "./public/" + files.file1.originalFilename;
        fs.rename(tempPath, newPath, function (err) {
          if (err) {
            res.write("error uploding file");
          } else {
            res.write("file uploaded sucesfully");
          }
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(htmlform);
    }
  })
  .listen(8080);
