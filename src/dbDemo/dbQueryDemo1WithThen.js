const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("async-demo");

const promiseOfDBResult = pool.query("select * from hiscores");

console.log("DB query has started!");

promiseOfDBResult.then((result) => {
    console.log("DB query has finished!  Results: ");
    console.log("Here are the query rows: ", result.rows);

    console.log(result.rows.keys);
});


console.log("Result-handler has been registered!");
