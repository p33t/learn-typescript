import { hello } from './basic';

test('smoke', () => {
   expect(hello("bruce")).toBe("Hello bruce"); 
});