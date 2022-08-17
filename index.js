//problem 1
// for(let icount = 0; icount<11;icount++){
//     if (icount%2 == 0){
//         console.log(icount);
//     }
//     else{
//         continue
//     }
// }
//Problem 2
// for (let iouter = 1; iouter<11;iouter++){
//     for(let iinner = 1;iinner<11; iinner++){
//         console.log(iouter*iinner)

//     }
// }
//Problem 3
// function kilometersToMiles(){
//     let input = prompt("Enter the number of kilometers");
//     let kilometers = parseInt(input);
//     let miles = kilometers * .62137
//     miles = miles.toFixed(2)
//     alert(miles);
// }
// kilometersToMiles()
//Problem 4
    // let array = [-4, -2, 2, 4, 6].reduce((partialSum, a) => partialSum + a, 0);
    // console.log(array)

    // const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
    // console.log(sum); // 6
//Fizzbuzz
// function fizzbuzz(){
//     for(let i = 1; i<=100; i++){
//         if(i%3===0 && i%5 ===0){
//             console.log('Fizzbuzz');
//         } else if (i%3 ===0){
//             console.log('Fizz');
//         } else if (i%5===0){
//             console.log('Buzz');
//         } else{
//             console.log(i);
//         }
//     }

// }
// fizzbuzz();


        


let box1 = document.querySelector('.cell1');
box1.addEventListener('click', e =>{
    box1.innerText = "X"
    // setTimeout(()=>{
    //     box1.innerText = ""
    // },2000)
    
   
})
let box2 = document.querySelector('.cell2');
box2.addEventListener('click', e =>{
    box2.innerText = "X"
    
   
})
let box3 = document.querySelector('.cell3');
box3.addEventListener('click', e =>{
    box3.innerText = "X"
    
})
let box4 = document.querySelector('.cell4');
box4.addEventListener('click', e =>{
    box4.innerText = "X"
    
})
let box5 = document.querySelector('.cell5');
box5.addEventListener('click', e =>{
    box5.innerText = "X"
    
})
let box6 = document.querySelector('.cell6');
box6.addEventListener('click', e =>{
    box6.innerText = "X"
    
})
let box7 = document.querySelector('.cell7');
box7.addEventListener('click', e =>{
    box7.innerText = "X"
    
})
let box8 = document.querySelector('.cell8');
box8.addEventListener('click', e =>{
    box8.innerText = "X"
    
})
let box9 = document.querySelector('.cell9');
box9.addEventListener('click', e =>{
box9.innerText = "X"
    
})
function play(){
    let answer= prompt('Do you want to go first? (Y/N)').toUpperCase();
    console.log(answer);
    if(answer=== 'Y'){
        alert('Pick a box!')
    }
    else{
        alert('The computer will go first');
        Tictactoe();
    }
}   
function Tictactoe(){
    
    let i = parseInt((Math.random()*9)+1)
    console.log(i)
    let cell = document.querySelector('.cell'+i)
    
       let p = new Promise((resolve, reject)=>{
        if(cell.innerText ==='X'){
            resolve('There is an X here')
            win()
        }
        else if(cell.innerText==='O'){
            resolve('There is already an O here')
            win()
        }
        else{
            reject('You may put an O here')
            win()
        }
       })
    p.then((message)=>{
        console.log(message)
          
        // document.querySelector('.cell'+i).innerText='O'
    }).catch((message)=>{
        console.log( message)
        document.querySelector('.cell'+i).innerText='O'
        
    })   
}
//Unfinished
function win(){
    let cell1= document.querySelector('.cell1');
    let cell2= document.querySelector('.cell2');
    let cell3= document.querySelector('.cell3');
    let cell4= document.querySelector('.cell4');
    let cell5= document.querySelector('.cell5');
    let cell6= document.querySelector('.cell6');
    let cell7= document.querySelector('.cell7');
    let cell8= document.querySelector('.cell8');
    let cell9= document.querySelector('.cell9');
    if (cell1.innerText=="X"&& 
        cell2.innerText=="X"&& 
        cell3.innerText=="X")
        {
            alert('You win!')
          winner()
        }
    else if(cell4.innerText=="X"&& 
            cell5.innerText=="X"&& 
            cell6.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
    else if(cell7.innerText=="X"&& 
            cell8.innerText=="X"&& 
            cell9.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
    else if(cell1.innerText=="X"&& 
            cell4.innerText=="X"&& 
            cell7.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
    else if(cell2.innerText=="X"&& 
            cell5.innerText=="X"&& 
            cell8.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
    else if(cell3.innerText=="X"&& 
            cell6.innerText=="X"&& 
            cell9.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
    else if(cell1.innerText=="X"&& 
            cell5.innerText=="X"&& 
            cell9.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
    else if(cell4.innerText=="X"&& 
            cell5.innerText=="X"&& 
            cell6.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
    else if(cell3.innerText=="X"&& 
            cell5.innerText=="X"&& 
            cell7.innerText=="X")
    {
        alert('You win!')
        winner()
        
    }
}

function winner(){
    let newGame= prompt('Do you want to play again? (Y/N)').toUpperCase();
    console.log(newGame);
if(newGame=== 'Y'){
        location.reload();
    }
else{
        alert('Thanks for playing');
        window.close()
    }
}

//Unfinished
//while loop function, currently just makes an endless loop occur
// function random(cell){
//     do{
//         let i = parseInt((Math.random()*9)+1)
//         console.log(i)
//         continue
//     }
//     while(cell.innerText=='X'|| cell.innerText=='O')
// }


play()