# 1
SELECT
  count(id)
FROM
  stops;

# 2
SELECT
  id
FROM
  stops
WHERE
  name = 'Craiglockhart'

# 3
SELECT
  id,
  name
FROM
  stops
JOIN
  route ON stops.id = route.stop
WHERE
  num = 4
  AND company = 'LRT'

# 4
SELECT
  company,
  num,
  COUNT(*)
FROM
  route
WHERE
  stop=149
  OR stop=53
GROUP BY
  company,
  num
HAVING
  COUNT(*) = 2

# 5
SELECT
  a.company,
  a.num,
  a.stop,
  b.stop
FROM
  route a
JOIN
  route b ON
  (a.company=b.company AND a.num=b.num)
JOIN
  stops s ON b.stop = s.id
WHERE
  a.stop=53
  AND s.name = 'London Road'

# 6
SELECT
  a.company,
  a.num,
  stopa.name,
  stopb.name
FROM
  route a
JOIN
  route b ON
  (a.company=b.company AND a.num=b.num)
JOIN
  stops stopa ON (a.stop=stopa.id)
JOIN
  stops stopb ON (b.stop=stopb.id)
WHERE
  stopa.name='Craiglockhart'
  AND stopb.name = 'London Road'

# 7
SELECT DISTINCT
  a.company,
  a.num
FROM
  route a,
  route b
WHERE
  a.stop = 115 AND b.stop = 137 AND a.num = b.num

# 8
SELECT
  a.company,
  a.num
FROM
  route a JOIN stops sa ON a.stop = sa.id,
  route b JOIN stops sb ON b.stop = sb.id
WHERE
  sa.name = 'Craiglockhart'
  AND sb.name = 'Tollcross'
  AND a.num = b.num

# 9
SELECT DISTINCT
  s.name,
  r.company,
  r.num
FROM
  stops s
JOIN
  route r ON s.id = r.stop
JOIN
  (SELECT DISTINCT r_c.num, r_c.company
  FROM stops s_c JOIN route r_c ON r_c.stop = s_c.id
  WHERE s_c.name = 'Craiglockhart') c
ON r.num = c.num AND r.company = c.company


# 10
SELECT *
FROM

(SELECT DISTINCT
  s.name,
  r.company,
  r.num
FROM
  stops s
JOIN
  route r ON s.id = r.stop
JOIN
  (SELECT DISTINCT r_c.num, r_c.company
  FROM stops s_c JOIN route r_c ON r_c.stop = s_c.id
  WHERE s_c.name = 'Craiglockhart') c
ON r.num = c.num AND r.company = c.company) clh_stops

JOIN

(SELECT DISTINCT
  s.name,
  r.company,
  r.num
FROM
  stops s
JOIN
  route r ON s.id = r.stop
JOIN
  (SELECT DISTINCT r_c.num, r_c.company
  FROM stops s_c JOIN route r_c ON r_c.stop = s_c.id
  WHERE s_c.name = 'Sighthill') c
ON r.num = c.num AND r.company = c.company) sh_stops

ON clh_stops.name = sh_stops.name