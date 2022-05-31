use chi_beas;
db.dropDatabase();

db.monsters.insertMany([
    {
        name:"Shark",
        finalScore: 45
    },
    {
        name:"Eddie",
        finalScore: 32
    },
    {
        name:"Fifi",
        finalScore: 24
    }
]);
