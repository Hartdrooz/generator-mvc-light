import { controller, IController } from 'mvclight';
import { Router, Request, Response } from 'express';
import { inject } from 'inversify';
import { IHelloWorldService } from './../services/HelloWorld.service';
import { APP_TYPE } from './../core/constant';

@controller('/')
export class HomeController implements IController {
	constructor(@inject(APP_TYPE.HELLO_SERVICE) private helloWorldService: IHelloWorldService) {}

	registerRoutes(router: Router): void {
		router.get('/', (req: Request, res: Response) => this.get(res));
		router.get('/api/hello/:msg', (req: Request, res: Response) => this.getMsg(req, res));
	}

	private get(res: Response): void {
		res.render('index');
	}

	private getMsg(req: Request, res: Response): void {
		const message = this.helloWorldService.helloworld(req.params.msg);
		res.json(message);
	}
}
