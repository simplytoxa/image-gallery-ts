const express    = require( 'express' );
const bodyParser = require( 'body-parser' );
const http       = require( 'http' );
const path       = require( 'path' );
const fs       = require( 'fs' );
const cors       = require( 'cors' );
const fileUpload = require( 'express-fileupload' );
const cookieParser = require('cookie-parser');

const app = module.exports = express();
app.set( 'port', process.env.PORT || 8000 );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use(fileUpload());
app.use(cookieParser());
app.use( cors() );

app.post('/upload', (req, res) => {
    let imageFile = req.files.imageFile;
    console.log('File name: ' + imageFile.name);

    fs.readdir('./public/uploadedImages', (err, files) => {
        if ( !files.includes(imageFile.name) ) {
            imageFile.mv(`${__dirname}/public/uploadedImages/${imageFile.name}`, function(err) {
                if (err) {
                    return res.status(500).send(err);
                }

                res.status(200);
                res.json({file: `public/uploadedImages/${imageFile.name}`});
            });
        } else {
            console.log( `File ${imageFile.name} is already included!` );
            res.status(200);
            res.json({message: `File ${imageFile.name} is already included!`, alreadyExist: true});
        }
    });
});

app.get('/images', (req, res) => {
    console.log('GET');
    const dir = './public/uploadedImages';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.readdir('./public/uploadedImages', (err, files) => {
        const images = files.map( fileName => {
            return {
                path: path.join('./uploadedImages', fileName),
                name: fileName
            }
        } );

        res.status(200);
        res.json({ images, count: files.length });
    });
});

app.post('/remove', (req, res) => {
    const { name } = req.body;

    fs.unlink(`./public/uploadedImages/${name}`, (err) => {
        if (err) throw err;

        const message = `${name} was deleted`;
        console.log(message);
        res.status(200);
        res.json({ status: 'OK', message });
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Starting express server
http.createServer( app ).listen( app.get( 'port' ), function() {
    console.log( 'Express server listening on port ' + app.get( 'port' ) );
} );
