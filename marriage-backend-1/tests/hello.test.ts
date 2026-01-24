import { HelloController } from '../src/controllers/helloController';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(() => {
    helloController = new HelloController();
  });

  it('should return "Hello World"', () => {
    const response = helloController.getHello();
    expect(response).toBe('Hello World');
  });
});