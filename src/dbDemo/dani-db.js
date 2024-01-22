const { makeDBConnectionPool } = require("./dbHelp");
const pool = makeDBConnectionPool("omdb");

pool.query("select name from movies where name like 'The %' limit 10").then(
    (movienames) => {
    console.log('here are all the movies that match your description:');
    console.log(movienames.rows)
});

 