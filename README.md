# TasksManager
  1. Download project;
  2. install npm
  3. start in project folder server - json-server --watch db.json
  4. start localhost - ng serve
  
  Data about Manager or Developers you can find in db.json.

# Task

1. Create imitation of Token Based Authentication. As a server You can use JSON Server API: https://github.com/typicode/json-server. As a token creation logic, You can use same hardcoded tokens for similar cases (to avoid backend JWT creation and checking). If user is not authorized – redirecting to the login page.
2. User can be Manager or Developer. On main page 2 reports are available according to the user role: Developers Report and Tasks Report.
a. Developer has access only to the Tasks Report with tasks assigned to current (authorized) Developer.
b. Manager has access to the Developers Report with Developers related to current (authorized) Manager and also to the Tasks Report, where Manager can select Developer (also related to current (authorized) Manager) to see tasks. Also add navigation from Developers Report to Tasks Report with selected Developer. 
