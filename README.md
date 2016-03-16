# Canvas REST API Tool 

This tool exists to simplify certain admin-level tasks and Canvas and helps to expose the power of the API to support staff without development experience. You can access and [use the full tool live at this URL](https://canvas-api-tool.herokuapp.com/#/home)

## Connecting 

1. Obtain an API key from your Canvas instance. Note: all operations supported by this tool currently require an admin level API key. 

2. Login on the authentication screen using the base URL for your Canvas instance. For example, https://longwood.beta.instructure.com should be placed into the text input as just "longwood.beta.instructure.com". The https will be appended when the app makes an API call to authenticate against the specified Canvas instance. Include your admin API key in the second input field on the login screen. 

3. The API key is stored in the browser for the duration of your session, so reloading the page will cause the API key to lose its reference in the application. To reauthenticate at any time, click the "Auth" tab in the dashboard. 

## Supported Operations 

1. Crosslist Courses w/ Error Checking 
We've had a lot of issues with support staff crosslisting courses incorrectly or crosslisting a course into another course and then crosslisting that course into another course, which causes some pretty big issues. This tool lets you check to see if a parent course is already a child course or if the child course has its own children. Also, the interface and language used to describe crosslisting is much easier than crosslisting through the Canvas UI. 

2. Single or Bulk Course Creation
We end up building a lot of courses in the default term to support a variety of iniatives. This tool lets you build a single course or specify and number of bulk courses to create with an auto-increment field to help you decide how to increment the course codes. 

3. DEV Shell Creation 
We run faculty development out of a single Canvas shell that all participating instructors are loaded into as students. You give this tool a course ID, it gets the student enrollments, create a course shell for each student in the list, and enrolls them in the newly created DEV shell as a teacher.  


## How Can You Help? 

We don't want to develop this in a vacuum, so input and support from the open source community can help this project thrive. Here are just a few ways you can help:

1. Suggest a Module 
Canvas can be used and configured differently across institutions, so let us know how we can make this tool more useful for you and your needs. Do you have multiple accounts? Do you run specific reports or collect specific data? Let us know what you want/need.
2. Submit a Pull Request 
Consider contributing to this project in some way. It is written on the MEAN stack, so the only pre-requisite is that you know JavaScript. Here are just a few of the things you could help with: 
	* Error checking everywhere. If something fails, whether on the server or the client, we need error messages. 
	* Options for more complex implmentations of Canvas. We only support one account, so help us help universities with more than one account. 
	* Bug fixes
	* Additional modules 
3. Fork. Then Build and Share
Take this template and run with it, but let us know what you've done and put it out there in the ed tech community so that we can build cool stuff together. 
4. Buy Jeff a Beer
If you like this and think I'm awesome, buy me a pint. I like a good Hefe. Check out my other stuff on [GitHub](http://jeverhart383.github.io) and [my blog](http://www.jeffreyeverhart.com).	
