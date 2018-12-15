-- select title from dashboard where data like '%data.vds2%'

-- select title from dashboard where data like '%auth%'

-- select *  from dashboard  order by created desc  limit 200

select data from dashboard limit 1;

 -- select data  from dashboard where data like '%data.vds2%' limit 1


-- SELECT 
--     json_extract(POPULATION_JSON_DATA, '$.panels') AS METRIC
-- FROM dashboard;

-- select count(*) from dashboard;