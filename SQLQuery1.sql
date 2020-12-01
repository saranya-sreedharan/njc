/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [NAME]
      ,[AGE]
      ,[DEPT]
      ,[CITY]
      ,[PHONE]
  FROM [testsaru23].[dbo].[testtable]

  select distinct local_net_address, local_tcp_port from sys.dm_exec_connections where local_net_address is not null