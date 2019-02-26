const tape = require("tape");
const runDbBuild = require("../src/dataBase/db_build");
const addJournalist = require("../src/dataBase/quires/postData");
const getData = require("../src/dataBase/quires/getData");

tape('hhhhhhhh',(t)=>{
    t.equal(1,1,'should return 1');
    t.end();
})
// tape("test get all users", t => {
//   runDbBuild((error, res) => {
//     const user = {
//         fullname: 'fff',
//         email:'ffff@gmail.com'
//         , password: ',,,,,,,,,,,,,'
//     };
//     addJournalist(user, (err, resp) => {

//         if (err) t.error('hhhhhhhhhhhhh');

//         const expected = "add is success";

//       t.deepEqual(resp, expected, "shao");
//       t.end();
//     });
//   });
// });
// tape("hgfhgf", t => {
//   runDbBuild((err, res) => {
//     const expect = "jamalat";
//     getData((err, res) => {
//       if (err) t.error(err);
//       t.equal(expect, res, "hhhhhhhhhh");
//       t.end();
//     });
//   });
// });
// tape.onFinish(() => process.exit(0));
