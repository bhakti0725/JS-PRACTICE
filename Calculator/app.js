(function(){

    //create a function to make the page alive by first creating variables of the elements on ehich we have got to work on
    let screen= document.querySelector('.screen');
    let buttons= document.querySelectorAll('.btn');
    let red= document.querySelector('.btn-red');
    let green= document.querySelector('.btn-green');

    //we have created first the buttons so that we can click on it and it will get get visible on the screen

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let y= e.target.dataset.num;
            screen.value += y;
        })
    });

    green.addEventListener('click', function(e){
        if(screen.value===""){
            screen.value="Please enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    red.addEventListener('click', function(e){
        screen.value=" ";
    })
})();