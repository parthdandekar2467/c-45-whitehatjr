class Player{
    constructor()
    {
        this.index = null;
        this.name = null;
        this.distanceX = 0;
        this.distanceY = 0;
    }

    getCount()
    {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        });
    }

    updateCount(count)
    {
        database.ref('/').update({
            playerCount: count
        });
    }

    update()
    {
        var playerIndex = "player/players"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distanceX:this.distanceX,
            distanceY:this.distanceY
        });
    }

    static getPlayerInfo()
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        });
    }
}