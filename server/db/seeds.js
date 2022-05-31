use chi_beas;
db.dropDatabase();

db.monsters.insertMany([
    {
        cbName:"Shark",
        score: 45
    },
    {
        cbName:"Eddie",
        score: 32
    },
    {
        cbName:"Fifi",
        score: 24
    }
]);
