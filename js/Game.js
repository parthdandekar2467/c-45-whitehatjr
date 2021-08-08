class Game {
    constructor()
    {
        
    }

    getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

    }

    update(state)
    {
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      background(background1)
    }

      
    

        earth1 = createSprite(300, 100, 10, 10);
        earth1.addAnimation("earth_spinning", earth);
        earth1.scale = 0.3;
        
        /*satellite = createSprite(displayWidth/2, 200, 10, 10);
        satellite.addAnimation("satellite_spinning", satellite1_up);
        satellite.scale = 0.3;
        console.log(satellite.x)*/

        jupiter = createSprite(200, -1000, 10, 10);
        jupiter.addAnimation("jupiter_spinning", jupiter_image);
        jupiter.scale = 0.5;

        callisto = createSprite(500, -1000, 10, 10);
        callisto.addAnimation("callisto_spinning", callisto_image);
        callisto.scale = 0.10;

        sun = createSprite(displayWidth/2, 1300, 10, 10);
        sun.addAnimation("sun_animation", sun_image);
        sun.scale = 2.4;

        pluto = createSprite(100, 300, 10, 10);
        pluto.addAnimation("pluto_spinning", pluto_image);
        pluto.scale = 0.3;

        

        /*blackHole = createSprite(400, -2000, 20, 20);
        blackHole.addAnimation("blackHole_animation", blackhole_image);
        blackHole.scale = 2;*/

        
        
        
        


    }

    play()
    {
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers !== undefined)
        {
            background(background3);
            //image(background1, 0, displayheight/2, displayWidth, displayHeight/2);

            //ar index = 0;

            //var x;
            //var y;


            /*for(var plr in allPlayers)
            {
                //index = index+1;

                if(index === player.index)
                {
                    
            
            }*/
            camera.position.x = satellite.x;
                    camera.position.y = satellite.y;

        }

        

        if(keyIsDown(UP_ARROW))
        {
            satellite.y = satellite.y-=11;
        }

        if(keyIsDown(DOWN_ARROW))
        {
            satellite.y = satellite.y+=11;
        }

        if(keyIsDown(RIGHT_ARROW))
        {
            satellite.x = satellite.x+=11;
        }

        if(keyIsDown(LEFT_ARROW))
        {
            satellite.x = satellite.x-=11;
        }

        /*if(player.distance === 0 && player.distance === 0)
        {
            gameState = 2
        }*/

        drawSprites();
    }


    end()
    {
        console.log("GOAL REACHED || NOT THE END")
    }
}
