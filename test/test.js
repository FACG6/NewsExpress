const tape=require('tape');
const runDbBuild=require('../src/dataBase/db_build');
tape('testing the test',(t)=>{
    runDbBuild
    t.equal(1,1,"should return one");
    t.end();
})
