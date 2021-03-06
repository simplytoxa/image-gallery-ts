import * as path from 'path';
import imageRoutes from './routes/images';
import authRoutes from './routes/auth';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import config from 'config';

const MONGO_URL = config.get<string>('mongoUrl');
const PORT = config.get('port') || 8000;

const app = express();

app.set('port', PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(cookieParser());
app.use(cors());
app.use('/api/images/', imageRoutes);
app.use('/api/auth/', authRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  next({ err, status: 404 });
});

async function start() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log('Express server listening on port', PORT);
    });
  } catch (err) {
    console.error('SERVER ERROR:', err);
    process.exit(1);
  }
}

start();

export default app;
