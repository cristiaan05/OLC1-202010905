import express, { application,Request } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import api from './routes/api.routes'

//const port = 3000;
const makeApp=async():Promise<typeof application>=>{
  const app = express();
  const bodyParser=require('body-parser')
  app.use(morgan('dev',{
    skip:(req: Request)=>req.url==='/api/ping'
  }))

  app.use(cors());
  app.use(bodyParser.urlencoded({extended:false,limit:'100mb'}));
  app.use(bodyParser.json({type:'application/json'}));

  app.use('/api',api);
  return app
}

export default makeApp;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });