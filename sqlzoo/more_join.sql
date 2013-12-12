# 1
SELECT id, title
 FROM movie
 WHERE yr=1962;

# 2
SELECT yr
FROM movie
WHERE title = 'Citizen Kane';

# 3
SELECT id, title, yr
FROM movie
WHERE title LIKE 'Star Trek%'
ORDER BY yr;

# 4
SELECT title
FROM movie
WHERE id IN (11768, 11955, 21191);

# 5
SELECT id
FROM actor
WHERE name = 'Glenn Close';

# 6
SELECT id
FROM movie
WHERE title =  'Casablanca';

# 7
SELECT name
FROM casting JOIN actor ON actorid = id
WHERE movieid = 11768;

# 8
SELECT name
FROM casting JOIN actor ON actorid = id
WHERE movieid = (SELECT id FROM movie WHERE title = 'Alien');

# 9
SELECT title
FROM movie JOIN
  (SELECT movieid
  FROM casting JOIN actor ON id = actorid
  WHERE name = 'Harrison Ford') c
ON movie.id = c.movieid;

# 10
SELECT title
FROM movie JOIN
  (SELECT movieid
  FROM casting JOIN actor ON id = actorid
  WHERE name = 'Harrison Ford' AND ord != 1) c
ON movie.id = c.movieid

# 11
SELECT title, c.name
FROM movie JOIN
(SELECT movieid, name
FROM casting JOIN actor ON id = actorid
WHERE ord = 1 ) c
ON movie.id = c.movieid
WHERE yr = 1962;

# 12
SELECT yr,COUNT(title) FROM
  movie JOIN casting ON movie.id=movieid
         JOIN actor   ON actorid=actor.id
WHERE name='John Travolta'
GROUP BY yr
HAVING COUNT(title)=(SELECT MAX(c) FROM
(SELECT yr,COUNT(title) AS c FROM
   movie JOIN casting ON movie.id=movieid
         JOIN actor   ON actorid=actor.id
 WHERE name='John Travolta'
 GROUP BY yr) AS t
)

# 13
SELECT title, name
FROM movie JOIN

  (SELECT actorid, c.movieid
  FROM casting c JOIN

    (SELECT DISTINCT movieid
    FROM casting JOIN actor ON id = actorid
    WHERE name =  'Julie Andrews' ) jamovies

  ON jamovies.movieid = c.movieid
  WHERE ord = 1) movie_actor_id

ON id = movie_actor_id.movieid

JOIN actor ON actor.id = movie_actor_id.actorid

# 14
SELECT name
FROM actor JOIN casting
ON casting.actorid = actor.id
WHERE ord = 1

GROUP BY name
HAVING COUNT(*) >= 30

ORDER BY name

# 15
SELECT title, COUNT(actorid)
FROM movie JOIN casting
ON movie.id = movieid

WHERE yr = 1978

GROUP BY title
ORDER BY COUNT(actorid) DESC, title ASC

# 16
SELECT name
FROM actor JOIN casting
ON actor.id = casting.actorid JOIN
  (SELECT movieid
  FROM actor JOIN casting
  ON actor.id = casting.actorid
  WHERE name = 'Art Garfunkel') agmovies

ON (casting.movieid = agmovies.movieid)
WHERE name != 'Art Garfunkel'