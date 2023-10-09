const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        const colorId = event.target.id;
        switch (colorId) {
            case 'grey':
                body.style.backgroundColor = colorId; 
                break;
            case 'white':
                body.style.backgroundColor = colorId; 
                break;
            case 'blue':
                body.style.backgroundColor = colorId; 
                break;
            case 'yellow':
                body.style.backgroundColor = colorId; 
                break;
            case 'purple':
                body.style.backgroundColor = colorId; 
                break;
        }
    })
})