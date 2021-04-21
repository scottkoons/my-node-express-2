### Conceptual Exercise

Answer the following questions below:

- **What is a JWT?**
	
	* 	A JWT is a JSON Web Token. It's used for securely transmitting information between client/server as a JSON object.

- **What is the signature portion of the JWT?  What does it do?**

	* 	The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

- **If a JWT is intercepted, can the attacker see what's inside the payload?**

	* 	Yes, the payload can be viewed by de-encoding it from base-64.
- **How can you implement authentication with a JWT?  Describe how it works at a high level.**
	*  The frontend (client) first sends some credentials to authenticate itself, which could be username and password. The server then checks those credentials, and if valid, it generates a JWT and returns it. After this step client has to provide this token in the request’s Authorization header in the “Bearer TOKEN” form. Backend will check the validity of this token and authorize or reject requests. Token may also store user roles and authorize the requests based on the given authorities.
	
- **Compare and contrast unit, integration and end-to-end tests.**
	*  Unit test should be small, fast, contained tests targeting a specific unit or function. End-to-end test are large and not very specific, but they test the whole system from beginning to end. Integration tests are in between unit and end-to-end tests. Integration tests typically focus on a small number of modules and test their interactions. This allows you to see how the individual units will work together.
- **What is a mock? What are some things you would mock?**
	* A mock is something that simulates the behavior of an external object.  A good example of using a mock is when testing out API integrations.
- **What is continuous integration?**
	*  Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project. This allows developers to merge their small units of code (that they know work) rather than waiting to merge large pieces of code towards the end of development.
	
- **What is an environment variable and what are they used for?**
	*  Environmental variables (NODE_ENV) allows an app to be run in either production of development mode. An example is when NODE_ENV is set to 'test', the app may use a different/testing database for running various tests.
	
- **What is TDD? What are some benefits and drawbacks?**
	* TDD stands for Test Driven Development and it is the process of building unit tests before any code it written. One advantage of TDD is that the specification for the code must be known before work on that code is started. However, in general, TDD must be implemented by the whole company/project in order for it to be effective.

	
- **What is the value of using JSONSchema for validation?**
	* In using a JSONSchema, you are able to ensure that JSON responses (from an API) are valid before they are sent to the database.
	
- **What are some ways to decide which code to test?**
	* Code that interacts with external APIs should be tested. You can test the various calls and CRUD verbs to ensure that the entire API interaction is valid.
	
- **What are some differences between Web Sockets and HTTP?**
	* HTTP is a protocol where a client makes a specific request and waits for the files to be returned to it. Whereas, websockets communication persists beyond a simple request/response cycle. Websockets ale establish a two-way communication. This allows the client/server to communicate very quickly.
	
- **Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?**
	* There are parts of each platform that I like over the other.  Overall, I think I like the node/express framework better since it is based on JavaScript.  However, I like the ORM we used in Flask better than making direct calls to the database. Flask also seemed to be a little more"touchy" with its various packages. 