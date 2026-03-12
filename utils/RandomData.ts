import { faker } from '@faker-js/faker';

export class RandomData {
  static getUserData() {
    const firstName = faker.person.firstName().toLowerCase();
    const lastName = faker.person.lastName().toLowerCase();
    const username = `${firstName}_${lastName}_${faker.number.int(1000)}`;
    
    return {
      username: username,
      email: `${username}@example.com`,
      password: faker.internet.password({ length: 12 }),
    };
  }
}
