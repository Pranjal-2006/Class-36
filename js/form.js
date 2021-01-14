class Form{
    constructor(){}

display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(400,100);
    var input = createInput("name");
    var button = createButton("play");
    var greet = createElement('h3');
input.position(400,260);
button.position(400,200);
button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount+=1;
    player.update(name)
    player.updateCount(playerCount);
    var greet = createElement('h3');
    greet.html("Hello"+ name)
    greet.position(130,160);

})

}

    
}