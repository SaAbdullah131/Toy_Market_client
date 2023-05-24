import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-indigo-200'>
            <h3 className='text-bold text-3xl  text-center underline mb-4'>Answering Question</h3>
            <div tabIndex={0} className="collapse collapse-plus border border-violet-300 bg-base-100 rounded-box text-center mb-2 ">
                <div className="collapse-title text-xl font-medium ">
                    What is an access token and refresh token ? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>Access Token: Access Token is security credential provided by json webtoken or jwt.which is used for authentication and authorization to access protected resources .It verify indentity and permission of the request. <br /> Refresh Token: Refresh Token is Special token which is obtain during authentication that allows the  client to obtain a new access token.Access token is generated during authentication and included in API requests to the server for authorization.We shouldn't store them into the client side. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  text-center mb-2">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL Database?
                </div>
                <div className="collapse-content">
                    <p>SQL: Sql is a relational database use a structured data model with tables, rows, and columns, enforcing a predefined schema.It has fixed schema, meaning the table structure and relationships between tables are defined in advance. It has scale vertically by adding more powerful hardware resources to a single server. <br /> NoSql: Non-relational database use various data models like key-value, document, columnar, or graph .It has schema-less, allowing dynamic and flexible schema changes. It's mainly horizontal scale by adding more machine.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  text-center mb-2">
                <div className="collapse-title text-xl font-medium">
                    What is Express js? What is Nest Js?
                </div>
                <div className="collapse-content">
                    <p>Express js: Express js is node js Framework. It provides a minimalistic and flexible set of features for building web applications and APIs. <br /> Nest Js: Nest js is typescript based framework for building  server side application ..Which is also top of node js.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  text-center mb-2">
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>In Mongodb aggregate framework is a powerful feature that allows you to perform complex data processing and analysis operations on collections of documents.The aggregate framework in MongoDB allows you to perform various operations like filtering, grouping, sorting, joining, projecting, and aggregating data within a collection </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;