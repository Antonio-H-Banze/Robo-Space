# Robo-Space
This is a Code exercise from Parkside to to create a simple frontend web application to provide the robots with the stage to dance.

Overview

Features
1. Allow the user to start a new competition
2. Allow the user to create two teams and give them names
3. Team members are filled in automatically using the following criteria:
- Each team is assigned 5 robots
- Robots are fetched from the API provided below
- Robots which are out of order can’t dance
- The total experience of each team can’t exceed 50 points
- The total experience is the sum of the experience property of each team
member


4. Allow the user to start the dancing competition using the following criteria:
5. Each robot dances against another robot of the opponent team in a dance-off
6. or each dance-off, the system picks a winner randomly
7. In total, 5 dance-offs take place
8. The dance-off results should be sent to the backend using the API below
9. Allow the user to see a leaderboard
10. There is an API endpoint to retrieve all dance-offs
11. The leaderboard should ONLY be accessible if at least one competition has been
finished. It should show a list of all robots ranked by most dance-off wins.
