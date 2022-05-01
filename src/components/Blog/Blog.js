import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container mt-5 p-5 blog-container">
      <h5>Difference between JavaScript and nodejs.</h5>
      <p className="mb-4">
        JavaScript is a scripting programming language. It's run on a browser
        and its basic use is the client-side. Javascript is capable enough to
        add HTML and DOM and it's used in frontend development. Otherside,
        NodeJS is a Javascript runtime environment. V8 is the Javascript engine
        inside of node.js that runs Javascript. It's used in server-side
        development. Nodejs is written in C, C++, and Javascript.
      </p>
      <h5>When should you use nodejs and when should you use mongoDB?</h5>
      <p className="mb-4">
        NodeJS is a Javascript runtime and it's an open-source server
        environment that uses JavaScript on the server to develop backend
        applications. Otherside MongoDB is a NoSQL database, generally, there
        are two types of databases in DBMS which are SQL and NoSQL. NoSQL
        Database Management Systems are more flexible than RDBMS and handle a
        variety of data and a huge amount of data. MongoDB is an open-source
        database management system (DBMS) that uses a document-oriented database
        model which supports various forms of data.
      </p>
      <h5>Differences between SQL and noSQL databases.</h5>
      <p>
        SQL databases are primarily called Relational Databases (RDBMS) whereas
        NoSQL databases are primarily called non-relational or distributed
        databases. In SQL databases tables with fixed rows and columns. These
        databases have fixed or static or predefined schema and are best suited
        for complex queries. Oracle, MySQL, Microsoft SQL Server, and PostgreSQL
        are SQL databases. Otherside, NoSQL is a Non-relational or distributed
        database system. They have a dynamic schema and so good for complex
        queries. MongoDB is one of the best examples of a NoSQL database.
      </p>
      <h5>What is the purpose of JWT and how does it work?</h5>
      <p>
        JWT stands for JSON Web Token, is an open standard used to share
        security information between two mediums which are a client and a
        server. Each JWT contains encoded JSON objects, including a set of
        claims. JWT is a string made up of three parts, separated by dots, and
        serialized using base64. In the most common serialization format,
        compact serialization, the JWT looks something like a non-human-readable
        string.
      </p>
    </div>
  );
};

export default Blog;
