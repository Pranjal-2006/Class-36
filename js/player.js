class Player{
    constructor(){}
    getCount(){
        var playercount_ref = database.ref('playerCount');
        playercount_ref.on("value",function(data){
            playerCount = data.val();
        })

    }

updateCount(count){
    database.ref('/').update({playerCount:count})
}
update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({name:name })
}
}
