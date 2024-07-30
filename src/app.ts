import * as bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './server/routes';

class App {
  private express: express.Express;
  private port = process.env.PORT || 4444;

  public constructor() {
    this.express = express();
    this.configureExpressJsonResponse();
    this.addMiddlewares();
    this.addRoutes();
    this.conectarMongoDB();

    this.start();
  }

  public start(): void {
    this.express
      .listen(this.port, () => {
        console.log(`Store started in port ${this.port}`);
      })
      .on('error', (error: Error) => {
        console.log(error.message);
      });
  }

  private configureExpressJsonResponse(): void {
    this.express.set('json replacer', function(key: any, value: any) {
      if (!key) return value;
      return typeof value === 'undefined' ? null : value;
    });
  }

  private addMiddlewares(): void {
    this.express.use(cors({ origin: '*' }));
    this.express.use(bodyParser.json({ limit: '50mb' }));
    this.express.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  }

  private addRoutes(): void {
    this.express.use(router);
  }

  private conectarMongoDB(): void {
    mongoose.set('strictQuery', true);
    mongoose
      .connect(
        'mongodb+srv://loran:backendguilherme@cluster0.m9q8quv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        {
          socketTimeoutMS: 30000,
          keepAlive: true,
          maxPoolSize: 50,
          autoIndex: false,
          retryWrites: false,
        },
      )
      .then(() => {
        console.log('Successfully connected to MongoDB!');
      })
      .catch(error => {
        console.log(error.message, error);
      });
    mongoose.Promise = global.Promise;
  }
}

export default new App();
