const axios = require('axios');
const { expect } = require('chai');

describe('GET Request to Reqres API', function() {
  it('should return status code 200', async function() {
    const response = await axios.get('https://reqres.in/api/users/2');
    expect(response.status).to.equal(200);
  });
});
