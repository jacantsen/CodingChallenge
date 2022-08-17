Dependencies: None
How to run: Web Browser (live server via VS code is what I used)
Time spent: 4 hours





Here are my notes while doing this coding challenge:

My first thought is to create a 3x3 table, so maybe 9 boxes contained in divs

I created the boxes, and made an event listener for each box so that on click I can place an X in each box

I need to make it now so that the "AI" will recognize the inner html of each box, and place a circle in empty boxes. 
It needs to also be able to decide which boxes to fill. This can perhaps be done with conditional statments. 

Since each box has a unique number, a for loop is also needed in order to look through each box and check if it is empty or not. 
I have it so that whenever I click on a box, a function will run which will act as the computers turn

I need the function to run all the time, because if it is only on click, then it will restart the loop each click
I changed my thinking. I thought about async functions, and learned about promises in javascript. 

I made it so that the function ran upon click. The function now generates a random number(i), and then looks at the cell(i) using a query selector. 
If the box has an X, then it will not put a O. If the box is empty, then it will put an O.

Now I need to add another condition so that if the box already has an O, a new empty box will be picked.
I added the condition, so now it recognizes when a box has already has an X or an O, and will not replace it with an O.

I think a while loop will allow me to continuosly generate random numbers until a box can be filled with an O. 

**I wasn't able to get the while loop figured out completely, but the goal was that while the box was empty,
  and if the corresponding box was empty, then an O would be placed there
  
  Some things are logged to the console, which I forgot to take out**



Final Product Notes: 
User is asked if they want to go first
If yes, User may pick a box, if no, the computer will choose an empty space.
User can replace boxes with an O as of now.
Computer recognizes filled box, does not replace X with O, but cannot as of yet pick another box if the box it picked is already filled
Thus far, a win is only recognized for X combinations only.
(I used many else if statements here, and understand that there is likely a better way to do this with much less code)
However, a win is alerted only after picking another box
After win, user is asked if they want to play again 
If user wants to play again, the page refreshes and game starts automatically.
If user does not want to play again, the page(browser tab) will close.
It would be better if the boxes were simply all cleared, and perhaps a button could be used to begin a game, but for lack of time this was the simplest solution


