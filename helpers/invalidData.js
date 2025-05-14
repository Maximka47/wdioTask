// utils/invalidData.js
const { faker } = require('@faker-js/faker');

function generateInvalidFormData() {
    return {
        name: faker.string.alpha(2),       // Too short
        email: faker.lorem.word(),                    // Not a valid email
        phone: faker.word.sample(),                   // Not a valid phone
        password: faker.string.alpha(3),       // Too short password
        zipCode: faker.string.alpha(5),               // Only letters
    };
}

module.exports = {
    generateInvalidFormData
};
