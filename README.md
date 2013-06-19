This is a collection of notes or annotations which would have not fit in the code otherwise.

Tic Tac Toe:
Burned through way too much time trying to do the row/col checks with `forEach` and subsequently decided to move on to Image Viewer after nearly 2 hours. After finishing that, I came back with about 20 mins left and finished up a rather inefficient solution for the `Board.winner` method. I struggled the most with checking for a winner, simply because my initial approach with nested `forEach`s to check both cols & rows simultaneously was too confusing to keep track of in my head. Overall it was an interesting challenge but I wonder if there is a better approach for measuring a potential candidate's skill.

Image Viewer:
No styling as I just didn't have the time. I'm certain this is a horrible implementation for any production app because the potential for a user to bombard the API with next/prev requests is huge. Alas no time to implement caching of any sort but it should get the job done with the proper api endpoint.
