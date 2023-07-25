
const slider2 = document.querySelector('.slider2');

if(slider2){
    let counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
            counter = 1;
        }
    }, 5000);
}


