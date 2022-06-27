use chi_beas;
db.dropDatabase();

db.monsters.insertMany([
    {
        name:"FIN",
        finalScore: 342
    },
    {
        name:"BOB",
        finalScore: 164
    },
    {
        name:"TIM",
        finalScore: 98
    },
    {
        name:"BRO",
        finalScore: 75
    },
    {
        name:"JON",
        finalScore: 42
    }
]);
