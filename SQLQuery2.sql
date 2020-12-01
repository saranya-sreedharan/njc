/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [NAME]
      ,[AGE]
      ,[DEPT]
      ,[CITY]
      ,[PHONE]
  FROM [testsaru23].[dbo].[testtable]

  SELECT * FROM testtable WHERE AGE='30';
  SELECT * FROM testtable WHERE CITY='wayanad';
  INSERT INTO testtable VALUES('Dhiya','20','ae','jaipur','8390765438');