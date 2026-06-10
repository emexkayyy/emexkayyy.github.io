buttons= document.querySelectorAll("button");
console.log(buttons);
// for(const button in buttons){
//     console.log(button);
//     button.addEventListener ("click", (event) => {
//         alert("clicked this button " + event.target.id)

//     } );
// }
buttons.forEach((button) => {
    button.addEventListener ("click", (event) => {
        alert("clicked this button " + event.target.id)

    } );
});