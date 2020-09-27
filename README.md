# IT Rockstars Music App

The Rockstars Music app is a web application developed to manage playlits and songs.

### What features included ?

- User can search artist by artist name.
- On click of Artist name, Artist details page will open and Songs by an artist can be found on same page.
- User can select playlist tab where user can create playlists and add songs to his playlist.
- On click of playlist name user can go to playlist details page and get songs added to a playlist.
- To delete songs from playlist swipe songs name to left on playlist details page, this will show the delete button.

### Requirements to run app?

- NodeJS environment preferably latest version but minimum version >=12.
- Ionic must be installed version >=6.4

### How do I get set up?

First clone repo

- Clone repo : 'git clone'

Go to project folder and run these commands in git bash:

- npm install
- cd server
- npm install
- npm start

Now that server is running, open a second Git Bash in the app directory and run:

- ionic serve
This will load the app in the browser

### Dependencies

- NodeJS v>= 12
- ionic version >= 6.
- json-server globally installed: npm i -g json-server
- Any good editor preferably vscode editor.

### Database configuration

Default there is db.json in server/db folder used for database with json-server.

### How to run tests

For running test cases there are spec file in every component and services to allow unit and e2e testing.

### Deployment instructions

For deployment of this app we can build app using command

- ionic build --prod
  Then there will be www folder created and that can be deployed to any hosting provider.

We can deploy as pwa for more please check official docs[https://ionicframework.com/docs/angular/pwa]

### Contribution guidelines

- Writing tests
- Code review
- Other guidelines

### Who do I talk to?

- Repo owner or admin
- Other community or team contact
