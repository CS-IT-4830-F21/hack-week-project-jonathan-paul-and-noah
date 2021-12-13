# Jonathan, Paul, and Noah²
## Jonathan Sapenaro, Paul Hemingway, Noah Free, Noah Nemec
---
### CS4830 - Web Development II
### 12/14/2021
[http://www.noahfree.me/snipCode](http://www.noahfree.me/snipCode)

#### Introduction
Our group consists of Jonathan Sapenaro, a senior majoring in computer science, Paul Hemingway, a junior majoring in IT, Noah Free, a junior majoring in computer science, and Noah Nemec, a senior majoring in IT.

The service we created, snipCode, is a code-charing app that is designed to be easy to navigate and simple to use. When the site loads, the user will be taken to the home page, which shows the community feed, a list of all the posts from every user on the site (NOTE: If you get stuck on the loading screen for more than 3 seconds, click “Post” on the navbar and then click back to the home page; this is a minor bug we have noticed occasionally and were not able to solve yet, but it does not occur every time the site is loaded).

From the home page, the user has several options. On each post you can click on the profile at the top to be taken to that user’s profile page containing all of their posts. You can also click on the title/description of the post to be taken to a page containing only that post’s code in order to analyze it further.

If you click on “Post” on the navbar, you will be taken to the “Create an Account” page if you are not logged in. From there, you can either create an account or log into an existing account using the “Login” button on the top right. Once logged in, the “Post” page will not allow you to create a post, which will appear on both the logged-in user’s profile page as well as the community feed on the home page. The logged in user can also delete their own posts on their profile page by clicking the red “X” in the top right corner of each post. When a page is refreshed, the user will remain logged in. 

#### Problem
The problem that we intended our application to solve deals with giving the user the ability to show off pieces of code that they are proud of to a community of other programmers. Since programming can be such a difficult practice and everyone likes to share with others things they are proud of, we saw a high demand in a service like snipCode. In addition to sharing code, the app is of course also intended for use solely as a place to quickly learn tips and tricks to use in future projects.  

#### Solution
Our solution, snipCode, is a fairly simple social media website. Users are able to share code snippets to the community which are shown and seen in a community feed, and users can also view all of the posts by a single person on that person’s profile page. The idea behind the application is to create an environment where learning is fostered and programmers of all experience levels are able to learn and share coding tips and tricks.

#### Related Work
Pastebin is the main competitor, as it also provides a way to post code snippets with syntax highlighting, however snipCode’s UI is more simple and easier to navigate. snipCode is also more open to the public, as there is a community feed that does not require an account to view. 
GitHub Gist is also a major competitor, as it provides SSL security for private pastes, and allows users to pull and push pastes with Git. They also have extensions that can auto-post to places like Tumblr. On the other hand, snipCode is for users who prefer a more simple application, with nothing but public code snippets. 
#### Resource: 
[https://www.sitepoint.com/top-5-places-to-share-code-quickly/](https://www.sitepoint.com/top-5-places-to-share-code-quickly/)

#### Implementation
**Technologies**
	Backend: Java Spring, MySQL, AWS, JDBC, Hibernate
	Frontend: Angular, PrismJS, Bootstrap

**Roles**
- **Jonathan Sapenaro:** Backend - using Java Spring, created API endpoints in order to get, save, and delete data in a MySQL database. Managed creation of the 
- **Noah Free:** Backend/Frontend - wrote HTTP requests in order to connect the user interface (view) to the Java backend and also contributed to the frontend functionality of many of the pages
- **Noah Nemec:** Frontend - designed create account page as well as helped create a post page. And contributed to the user interface in other ways as necessary
- **Paul Hemingway:** Frontend - designed navbar, homepage, and create a post page, syntax highlighting with PrismJS, form validation, styling

**Knowledge Gained**
- JSON Web Token Authentication
- How to protect API’s behind token authentication
- How the Angular front-end handles token login
- Hibernate vs. JDBC
- Syntax highlighting with PrismJS

![JDBC Vs Hibernate](/screenshots/JDBC%20VS%20Hibernate.png)

#### Future Work
Having a short period of time to complete this project, we did not complete everything we initially hoped to. Therefore, we have a list of potential improvements to be made before this application could be used in a “finalized” state:
- Like almost any other social media app, the next feature to add to the site would be giving users the ability to follow each other and then see a feed targeted to them in addition to the community feed.
- Currently, the only way for users to change something in a post they made is to delete the post and create a new post with the changes. This is obviously not ideal, so we would like to simply allow users to modify their own posts and most likely show other users that a post has been modified. Along the same lines, there are additional things we would want to add to the posts, such as a link, image, tags, contributing users, and more.
- Another major improvement would be to allow users to upvote or downvote posts in addition to commenting on posts. This would align the function of our app much closer to its intended purpose because then a dialogue between multiple users would be able to be had.
- Lastly, after the improvements listed above are made, we could work on improving the overall experience: decreasing loading time, minimizing bugs, giving objects on the page effects as they appear and go away, and making other updates to make the application even more appealing to the intended audience.

#### Sources
- JWT Authentication with an Angular frontend: [https://www.positronx.io/angular-jwt-user-authentication-tutorial/ ](https://www.positronx.io/angular-jwt-user-authentication-tutorial/)
- PrismJS with Angular [https://allenhwkim.medium.com/angular-syntax-highlighted-code-with-prism-4b9fce7364dd](https://allenhwkim.medium.com/angular-syntax-highlighted-code-with-prism-4b9fce7364dd)
- Hibernate vs. JDBC
[https://www.geeksforgeeks.org/difference-between-jdbc-and-hibernate-in-java/](https://www.geeksforgeeks.org/difference-between-jdbc-and-hibernate-in-java/)

#### Screenshots

![Screenshot](../screenshots/backend1.PNG)
![Screenshot](../screenshots/backend2.PNG)
![Screenshot](../screenshots/backend3.PNG)
![Screenshot](../screenshots/backend4.PNG)
![Screenshot](../screenshots/backend5.PNG)
![Screenshot](../screenshots/backend6.PNG)
![Screenshot](../screenshots/backend7.PNG)
![Screenshot](../screenshots/backend8.PNG)
![Screenshot](../screenshots/backend9.PNG)
![Screenshot](../screenshots/backend10.PNG)
![Screenshot](../screenshots/backend11.PNG)
![Screenshot](../screenshots/backend12.PNG)
![Screenshot](../screenshots/backend13.PNG)
![Screenshot](../screenshots/backend14.PNG)
![Screenshot](../screenshots/backend15.PNG)
![Screenshot](../screenshots/backend16.PNG)
![Screenshot](../screenshots/backend17.PNG)
![Screenshot](../screenshots/backend18.PNG)
![Screenshot](../screenshots/backend19.PNG)
![Screenshot](../screenshots/backend21.PNG)
![Screenshot](../screenshots/backend22.PNG)
![Screenshot](../screenshots/backend23.PNG)
![Screenshot](../screenshots/createAccountValidation.png)
![Screenshot](../screenshots/createAnAccount.PNG)
![Screenshot](../screenshots/createPost.PNG)
![Screenshot](../screenshots/createPost2.PNG)
![Screenshot](../screenshots/feed.PNG)
![Screenshot](../screenshots/feed2AfterPost.PNG)
![Screenshot](../screenshots/frontend1.PNG)
![Screenshot](../screenshots/frontend2.PNG)
![Screenshot](../screenshots/frontend3.PNG)
![Screenshot](../screenshots/frontend4.PNG)
![Screenshot](../screenshots/frontend5.PNG)
![Screenshot](../screenshots/frontend6.PNG)
![Screenshot](../screenshots/frontend7.PNG)
![Screenshot](../screenshots/frontend8.PNG)
![Screenshot](../screenshots/frontend9.PNG)
![Screenshot](../screenshots/frontend10.PNG)
![Screenshot](../screenshots/frontend11.PNG)
![Screenshot](../screenshots/frontend12.PNG)
![Screenshot](../screenshots/frontend13.PNG)
![Screenshot](../screenshots/frontend14.PNG)
![Screenshot](../screenshots/frontend15.PNG)
![Screenshot](../screenshots/frontend16.PNG)
![Screenshot](../screenshots/frontend17.PNG)
![Screenshot](../screenshots/frontend18.PNG)
![Screenshot](../screenshots/frontend19.PNG)
