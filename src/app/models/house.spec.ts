import { House } from './house';

describe('House', () => {
  it('should create an instance', () => {
    const house = new House();
    house.name = 'Annonce';
    expect(house).toBeInstanceOf(House);
    expect(house.name).toBe('Annonce');
  });
});
