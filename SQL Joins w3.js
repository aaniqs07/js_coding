

// (INNER) JOIN: Returns records that have matching values in both tables
// LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
// RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
// FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table




// INNER JOINS 

// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

// select orderdetails.orderdetailid, orders.customerid
// from orderdetails 
// inner join orders ON orderdetails.orderid = orders.orderid
// order by orderdetailid asc

// SELECT ProductID, ProductName, CategoryName
// FROM Products
// INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;




// LEFT JOINS 

// SELECT Products.ProductName, Categories.CategoryName
// FROM Products
// LEFT JOIN Categories ON Products.CategoryID = Categories.CategoryID;

// select suppliers.suppliername, shippers.phone
// from shippers
// left join suppliers on shippers.phone = suppliers.phone


// Right Join:

// SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
// FROM Orders
// RIGHT JOIN Employees
// ON Orders.EmployeeID = Employees.EmployeeID
// ORDER BY Orders.OrderID desc;





//UNION 

// SELECT City FROM Customers
// UNION
// SELECT City FROM Suppliers
// ORDER BY City;
