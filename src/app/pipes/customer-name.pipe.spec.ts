import { CustomerNamePipe } from './customer-name.pipe';

describe('CustomerNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerNamePipe();
    expect(pipe).toBeTruthy();
  });
});
