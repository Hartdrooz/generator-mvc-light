import { injectable } from 'inversify';

export interface IHelloWorldService {
	helloworld(msg: string): string;
}

@injectable()
export class HelloWorldService implements IHelloWorldService {
	helloworld(msg: string): string {
		return `Hello world ${msg}`;
	}
}
