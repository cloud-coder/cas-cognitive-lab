# Web Application Client

In earlier parts of this tutorial, [Advance REST Client][arc] and cURL utilities were used to
test the cognitive APIs.  In this section, we will use a pre-built web application to test the
Text to Speech and Personality Insight APIs built earlier.  This web application uses
AngularJS (1.x) and Bootstrap web frameworks. 

```
NOTE: Building the web application from is not part of this tutorial.  You are welcome to
to review the code and modify it as you see fit.
```

## Download Web Application

- Open Terminal window.
- Change directory to the `~/workshop` folder

  ```
  cd ~/workshop
  ```
- Clone the [web application GIT repository][appgit] into this folder

  ```bash
  git clone https://github.com/cloud-coder/cas-cognitive-lab.git
  ```
- Alternatively, unzip `my-cognitive-app1.zip` from solutions folder into `~/workshop/<email-id>-cognitive-app1`
  as shown below.

  ```bash
  cd ~/workshop
  unzip ~/workshop/solutions/04-web-app/my-cognitive-app1.zip -d ~/workshop/<email-id>-cognitive-app1
  ```

## Setup Web Application

- Launch `VS Code` text editor and open the directory where you cloned the web application
  git repository or extracted the application zip file.
- Click on `public/app/app.js` and open it.
- Search for `apiBaseUrl` in the code and change it to point to your API base URL.  Your
  `apiBaseUrl` is `http://<email id>-cognitive-api1.mybluemix.net/`.  Replace `<email id>`
  with your email id.

```
NOTE: Try to use the default API url https://cas-cognitive-api1.mybluemix.net as it.  This
API already exists on Bluemix and has been published for demonstration purposes.  In addition,
the default API exposes twitter APIs as well such that the Web Application can retrieve
twitter feeds for a given twitter username.  This saves the users from typing 100+ words
for analysis
```  

## Publish Web Application to Bluemix

- Launch `VS Code` text editor and open the directory where you cloned the web application
  git repository or extracted the application zip file.
- Edit `manifest.yml` and change the `name` and `host`.  Keep the two values same.  Change both
  values to `<email-id>-cognitive-app1`.  Replace `<email id>` with your email id.  Save the
  file.
- Edit `package.json` and change the `name` to `<email-id>-cognitive-app1`.  Replace `<email id>`
  with your email id.  Save the file.

- Open Terminal window.
- Change directory to the `~/workshop/<email-id>-cognitive-app1` folder.  Replace `<email id>`
  with your email id.

  ```
  cd ~/workshop/<email-id>-cognitive-app1
  ```
- Sign into Bluemix.  Make sure to select `cascon` space when prompted.

  ```bash
  cf login
  ```
- Now, publish the application to Bluemix

  ```bash
  cf push
  ```

## Test API using Web Application

- Once the application is deployed and running in Bluemix, launch the application URL to test it
  on Bluemix, `http://<email-id>-cognitive-app1.mybluemix.net/index.html`.  Replace `<email id>`
  with your email id.
- In `Text to Speech` tab, enter a free form text and pick a voice from the drop-down.  Hit the
  `Invoke API` button retrieve the audio from API.  The web application UI will automatically play
  the audio.
- In `Personality Insights` tab, enter at least 100 words in text area and hit the `Invoke API`
  button.  This will retrieve the Big 5 personality attributes and display them in the UI.  


[comment]: # "------------------------------------------------------------------------------"
[comment]: # "                              Links / Reference                               "
[comment]: # "------------------------------------------------------------------------------"

[setup-image-1]: images/setup-1.png "Log in Screen"

[arc]: https://advancedrestclient.com/ "Advance REST Client"
[appgit]: git@github.ibm.com:CASCON/cas-cognitive-app1.git "Web App Source Code on Github"
