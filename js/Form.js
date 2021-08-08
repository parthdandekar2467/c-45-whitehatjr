class Form {
    constructor()
    {
        this.input = createInput("Name");
        this.button = createButton('START');
        this.title = createElement('h3');
        this.reset = createButton('RESET')
        this.greeting = createElement('h2');
    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }

    display()
    {
        
        this.title.html("Mystery Of The Lost Planet");
        this.title.position(displayWidth/2-50, 100);

        this.input.position(displayWidth/2-50, 300);

        this.button.position(displayWidth/2, 325);
        this.reset.position(displayWidth-100, 20);

        this.button.mousePressed(()=>{
            /*this.input.hide();
            this.button.hide();
            //player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);*/
            this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);

        });

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0);
        })
        
        

        
    }




}