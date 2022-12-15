import { Content } from "./content";
describe('Notification Content ', () => {
  it(' should be able to create a notification content', () => {
    const content = new Content('Voce recebeu um pedido de amizade')
    expect(content).toBeTruthy();
  });


  it(' should be able to create a notification content with less 5 chars', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it(' should be able to create a notification content with more 240 chars', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
})
