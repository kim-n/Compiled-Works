# 1
SELECT matchid, player FROM goal
  WHERE teamid = 'GER';

# 2
SELECT id,stadium,team1,team2
  FROM game
 WHERE id = 1012;

# 3
SELECT player, teamid, mdate
  FROM game JOIN goal ON (id=matchid)
WHERE goal.teamid = 'GER';

# 4
SELECT team1, team2, player
  FROM game JOIN goal ON (id=matchid)
WHERE goal.player LIKE 'Mario%';

# 5
SELECT player, teamid, coach, gtime
  FROM goal  JOIN eteam  ON (id=teamid)
 WHERE gtime<=10

# 6
SELECT mdate, teamname
FROM game JOIN eteam ON (team1=eteam.id)
WHERE coach = 'Fernando Santos';

# 7
SELECT player
FROM game JOIN goal ON (game.id = matchid)
WHERE stadium = 'National Stadium, Warsaw';

# 8
SELECT DISTINCT player
  FROM game JOIN goal ON matchid = id
    WHERE (team1='GER' OR team2 = 'GER')
            AND teamid != 'GER'

# 9
SELECT teamname, count(teamid)
FROM eteam JOIN goal ON id=teamid
GROUP BY teamname
ORDER BY teamname

# 10
SELECT stadium, COUNT(matchid)
FROM game JOIN goal ON id = matchid
GROUP BY stadium

# 11
SELECT matchid,mdate, COUNT(matchid)
FROM game JOIN goal ON matchid = id
WHERE (team1 = 'POL' OR team2 = 'POL')
GROUP BY matchid

# 12
SELECT matchid, mdate, COUNT(matchid)
FROM game JOIN goal ON matchid = id
WHERE teamid = 'GER'
GROUP BY matchid;

# 13
SELECT mdate,
  team1,
  SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) score1,
  team2,
  SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) score2
FROM game JOIN goal ON matchid = id
GROUP BY matchid
ORDER BY mdate, matchid, team1, team2