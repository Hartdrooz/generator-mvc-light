import { ExpressServer } from 'mvclight';
import { Container, inject } from 'inversify';
import { Request, Response, NextFunction, Express } from 'express';
import * as path from 'path';
import { IHelloWorldService, HelloWorldService } from './services/HelloWorld.service';
import { APP_TYPE } from './core';

export class WebServer extends ExpressServer {
	setPort(): number {
		// Can return null in this case default value
		// will be used
		return 8080;
	}
	registerApplicationDependencies(container: Container): void {
		container
			.bind<IHelloWorldService>(APP_TYPE.HELLO_SERVICE)
			.to(HelloWorldService)
			.inTransientScope();
	}
	errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
		res.render('error');
	}
	setViewEngine(app: Express): void {
		// Empty if you do a rest api
		app.set('views', path.join(__dirname, '../views'));
		app.set('view engine', 'ejs');
	}
	setStaticFolder(): Array<string> {
		return [`${path.join(__dirname, '../public')}`];
	}
	registerMiddleware(app: Express): void {}

	initApplication(container: Container): Promise<Error> {
		const promise = Promise.resolve(null);
		return promise;
	}
}
