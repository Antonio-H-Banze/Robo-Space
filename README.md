# Robo-Space
This is a Code exercise from Parkside to to create a simple frontend web application to provide the robots with the stage to dance.

## Features
● Allow the user to start a new competition
● Allow the user to create two teams and give them names
● Team members are filled in automatically using the following criteria:
○ Each team is assigned 5 robots
○ Robots are fetched from the API provided below
○ Robots which are out of order can’t dance
○ The total experience of each team can’t exceed 50 points
■
The total experience is the sum of the experience property of each team
member
●
●
Allow the user to start the dancing competition using the following criteria:
○ Each robot dances against another robot of the opponent team in a dance-off
○ For each dance-off, the system picks a winner randomly
○ In total, 5 dance-offs take place
○ The dance-off results should be sent to the backend using the API below
Allow the user to see a leaderboard
○ There is an API endpoint to retrieve all dance-offs
○ The leaderboard should ONLY be accessible if at least one competition has been
finished. It should show a list of all robots ranked by most dance-off wins.
