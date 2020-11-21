class Form{
    constructor(){
     this.title = createElement('H1');
     this.title.html("Car Race");
     this.input = createInput("Name");
     this.button = createButton("Play");
     this.greeting = createElement('H3');  
    }
    display(){
        this.title.position(150,20);
        this.input.position(150,100);
        this.button.position(150,150);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            this.greeting.html("Hello "+name);
            this.greeting.position(130,180);

    })
  }
}
