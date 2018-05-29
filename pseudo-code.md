
layout HTML and basic css to replicate provided example

set wins, losses, number of guesses remaining, and letters guessed to initial values

create event to strat the game 

Create function to generate a random letter between a and z

set global variable computerGuess

trap keyboard input

ignore / alert for any keys that are not a to z

set local variable userGuess

Loop either 9 times or until user wins 

compare userGuess (uG) to computerGuess (cG)

    if uG = cG 
        incriment wins by 1
        reset all paramenters to initial values
    elseif uG <> cG decrement numGuessRemaining by 1
        decrement numGuessRemaining by 1
        add guess to lettersGuessed
            if numGuessRemaining = 0
                increment losses by 1
                reset game
                exit loop
    else
        decrement numGuessRemaining by 1
        add guess to lettersGuessed
