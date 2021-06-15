const expect = require('chai').expect;
const assert = require('chai').assert;
const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);

describe('GET /', function () {
  it('should has status code 200 and data 0', async function () {
    const response = await request
      .get('/')
      .set('content-type', 'application/json');
    expect(response.statusCode).equal(200);
    expect(response.body.data.length).equal(0);
  });
});
describe('GET / without content-type', function () {
  it('should has status code 200 and data 0', async function () {
    const response = await request.get('/');
    expect(response.statusCode).equal(400);
  });
});

describe('POST /iecho?text=text without content-type', function () {
  it('should has status code 400 because it no has content-type', async function () {
    const text = 'tet';
    const response = await request.post('/iecho?text=' + text);
    expect(response.statusCode).equal(400);
  });
});

describe('POST /iecho?text=tet', function () {
  it('should has status code 200 return palidrome in true', async function () {
    const text = 'tet';
    const response = await request
      .post('/iecho?text=' + text)
      .set('content-type', 'application/json');

    expect(response.statusCode).equal(200);
    assert.deepEqual(response.body.data, {
      text: 'tet',
      palindrome: true,
    });
  });
});

describe('POST /iecho?text=text', function () {
  it('should has status code 200 return palidrome in false', async function () {
    const text = 'text';
    const response = await request
      .post('/iecho?text=' + text)
      .set('content-type', 'application/json');

    expect(response.statusCode).equal(200);
    assert.deepEqual(response.body.data, {
      text: 'txet',
      palindrome: false,
    });
  });
});

describe('GET / after add two words', function () {
  it('should has status code 200 and data 2', async function () {
    const response = await request
      .get('/')
      .set('content-type', 'application/json');
    expect(response.statusCode).equal(200);
    expect(response.body.data.length).equal(2);
  });
});
