const test = require('tape');
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