const express = require('express');
const path = require('path');
const ejs = require('ejs');

const multer  = require('multer');

let upload = multer({ dest: '../public/upload/' });

let app = express();
// 当渲染模板的时候，没有指定后缀名的时候自动添加此后缀名来查找模板文件
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));
app.engine('.html', ejs.__express);

// 静态文件中间件 指定静态文件存放的根目录的绝对路径
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(request, response){
    response.render('upload/iframe', {
        msg: 'upload iframe demo'
    });
});


app.post('/upload', upload.single('file'), function(request, response){
    console.log(request.file);
    let person = {
        name: 'od',
        age: 24
    };
    person = JSON.stringify(person);
    let callback = request.query.cb;
//     let script = `<script type="text/javascript">
// 　　　　window.top.window['callback'](11);
//         ${callback}(1);
// 　　</script>`;
    console.log(callback);
    let script = `<script type="text/javascript">
        window.top.${callback}(${person});
　　</script>`;
    response.end(script);
});

app.listen(8080);
