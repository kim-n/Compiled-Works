# 1
SELECT
  yr,
  subject,
  winner
FROM
  nobel
WHERE
  yr = 1950

# 2
SELECT
  winner
FROM
  nobel
WHERE
  yr = 1962
AND
  subject = 'Literature'

# 3
SELECT
  yr,
  subject
FROM
  nobel
WHERE
  winner = 'Albert Einstein';

# 4
SELECT
  winner
FROM
  nobel
WHERE
  yr >= 2000 AND subject = 'Peace';

# 5
SELECT yr, subject, winner
FROM nobel
WHERE subject = 'Literature'
  AND yr BETWEEN 1980 AND 1989;

# 6
SELECT * FROM nobel
WHERE winner
  IN  ('Theodore Roosevelt', 'Woodrow Wilson',
       'Jed Bartlet', 'Jimmy Carter');

# 7
SELECT winner
FROM nobel
WHERE winner LIKE 'John%';

# 8
SELECT DISTINCT p.yr
FROM nobel p LEFT OUTER JOIN
  (SELECT yr, winner
    FROM nobel
  WHERE subject = 'Chemistry') c
ON p.yr = c.yr
WHERE c.winner IS NULL AND p.subject = 'Physics';