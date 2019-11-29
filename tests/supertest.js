const test = require("tape");
const supertest = require("supertest");
const router = require("../src/router")


// Back end testing

test("Initialise", t => {
    let num = 2;
    t.equal(num, 2, "Should return 2")
    t.end();
})

test("Search returns data correctly", t => {
    let expectedExample = {
        "bitcoin": {
          "usd": 7469.8,
          "last_updated_at": 1574940331
        }
      }
    supertest(router)
    .get("/search?ids=bitcoin&vs_currencies=usd")
    .expect(200)
    .end((error, response) => {
       let actualExample = JSON.parse(response.text)
        t.error(error);
        t.deepEqual(typeof actualExample, typeof expectedExample, "Response body should be an object");
        t.deepEqual(Object.keys(actualExample), Object.keys(expectedExample), "Response body should have same key (bitcoin)");
        t.deepEqual(Object.keys(actualExample.bitcoin), Object.keys(expectedExample.bitcoin), "Response object key bitcoin should contain object with keys usd and last_updated_at");
        t.deepEqual(typeof actualExample.bitcoin.usd, typeof expectedExample.bitcoin.usd, "USD property of Bitcoin key in object should be a number")
        t.end();
    })
})

test("Home page exists", t => {
    supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type",/html/)
    .end((error, response) => {
        t.error(error);
        t.equal(response.statusCode,200,"Status code should be 200")
        t.end();
    })
})

test("CSS sheet exists", t => {
    supertest(router)
    .get("/public/styles.css")
    .expect(200)
    .expect("Content-Type",/css/)
    .end((error, response) => {
        t.error(error);
        t.equal(response.statusCode,200,"Status code should be 200")
        t.end();
    })
})

test("404 works", t => {
    supertest(router)
    .get("/wallaby")
    .expect(404)
    .expect("Content-Type",/html/)
    .end((error, response) => {
        t.error(error);
        t.equal(response.statusCode,404,"Status code should be 404")
        t.end();
    })
})


// Front end testing

const main = require('../src/create_url');

//createUrl output tests:

test("createUrl returns a string", t => {
    const actual = typeof main.createUrl("bitcoin", "usd");
    t.equal(actual, "string");
    t.end();
});

test("createUrl returns a string that contains first passed currency", t => {
    const actual =  main.createUrl("bitcoin", "usd").includes("bitcoin");
    t.equal(actual, true);
    t.end();
});

test("createUrl returns a string that contains second passed currency", t => {
    const actual =  main.createUrl("bitcoin", "usd").includes("usd");
    t.equal(actual, true);
    t.end();
});

test("createUrl returns a string that contains 'https' or 'http' substring", t => {
    const actual =  main.createUrl("bitcoin", "usd").includes("https") ||
                    main.createUrl("bitcoin", "usd").includes("http") ;
    t.equal(actual, true);
    t.end();
});