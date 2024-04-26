# PROCEDURES

This file works as as a history log and process log for this project. In this file, each and every step related mostly related to commits will be stored.

## Configuring Theme

Since we are using Chakra UI and the app is using dark mode, it is essential to configure the theme early on. The file named `theme.ts` is configured to setup the dark theme for our project.

## Configuring Routes

Since there are gonna be routes in our project because there are multiple sections in the website, we will configure and setup our routes now which will be updated and modified later on.

## Building Auth Page

In this section, we will build our authentication page from scratch using Authentication page that looks similar to the Instagram but with our twist of flavor. We just included a random image for now. The login form will be placed on the right side of the image in the next section.

## Building Authentication Form

Simple form like `Instagram` is made with two login providers: `Google` and `GitHub` . This way, users can login through their github and google profiles. Actual authentication feature will be implemented through `Firebase` authentication.

## Building SideBar Logo Section

First we will build sidebar logo item. The logo item will differ based on the screen size of the viewer. If the device is medium or above, textual logo will be used and for base devices, Icon logo will be used.

## Building SideBar Items

Each item in the sidebar contains a relevant icon and a text that describes the section. In the base mobile devices, the text will be hidden and only icon will be shown. The tooltip with section label will be shown when hovered in the mobile devices.

## Adding the LogOut Button

The logout button will be added similar to sections-button. Clicking the button will take us back to the authentication page.

## Create Feeds and Suggested Developers Section

The area for displaying feed posts and suggested users section is decided. The basic layout is defined. The suggested user section is on the very right with well defined max-width of 300px. The feeds section is on the middle of the page.

## Design Feeds

Feeds section is designed to look similar to the Instagram UI. The changes will be made acccordingly as per the website's requirement. It is necessary for the feed to be responsive for each kind of the devices

## Handle Like And Comments

Once the layout is created, we need to handle the like event. The state needs to be defined for like's state i.e whether you have liked the post or not. Similarly, the comments also needs to be handled in the later module

## Adding skeleton for the posts

During the fetching of the data from the server, we need to capture the attention of the user. So, using skeleton as by many big tech social medias , we will be using the skeleton to show that the content is loading. For now, we are gonna create a delay for fetching data using `setTimeout()` function.

## Adding suggested users section

We add the suggested users section on the right side of the homepage. The random users are selected from database to be shown unlike the users suggested by algorithms as in Instagram.

## Designing Profile Page Header

The header for profile page is designed where the user `avatar`, `posts` , `followers` and `following` will be shown along with the user bio

## Designing Profile Page Tabs

The Profile Page Tab is designed similar to the Instagram page. The tab switch functionality is still not implemented. The Posts are placed underneath the tab switches. On hover of the post, no of comments and likes are shown. The modal featue will be implemented in the next section.

## Designing the Post Modals

When any pic is clicked, the modal of the clicked picture and the related comments need to be shown to the user. The modal can be implemented using `ChakraUI`.

## Designing the Modal Footer

The `postfooter` component is reused as footer for the modal footer.

## Configuring the FireBase

Since the half portion of our UI is done, it is time to handle some backend and database. Instead of using local device as backend server and database server, we are going to use `Firebase` which is BaaS(BackEnd as a Service) for this project. It provides us with database for user info, storage for storing images and authentication for user validation.

### Step 1 : Login Into Google Firebase

### Step 2 : Open console and create a new project

### Step 3 : Install firebase library

Simply run given command to install `firebase` and `react-firebase-hooks` (for firebase authentication) :

```bash
npm i firebase react-firebase-hooks
```

### Step 4 : Create a new web app inside your project

### Step 5 : Copy the firebase SDK configuration

### Step 6 : Setup firebase setup file in src folder

### Step 7: Setup Google, Email and GitHub Authentication for your project

### Step 8: Setup Firebase Storage for your project

### Step 9: Setup Firestore DB for your project

## Implementing Login and SignUp Functionality

We are creating separate components for both login and signup form. This way, we can handle their functionality separately.

### SignUp With Email

Gooogle Firebase Authentication service is used to handle the signup functionality by email. When the user tries to create a new account, it verifies if the user is actually new i.e the user doesn't already exist on the database. After verification, the user is created and the necessary details are stored on `firestore` and localStorage.

### Logout Functionality from SideBar

Similar to implemenatation of user login functionality, we can implement user signout functionality using `react-firebase-hooks`. If user is logged out, the data from local storage will be removed.

### Restricting User After LogOut

After the user is logged out, we need to restrict the homepage access to the user. For this, we need global state management library `zustand`. First, we need to install it.

```bash
    npm i zustand
```

- We use zustand `create()` function to create a global store which store the `user` related state and can be accessed from anywhere. When the user uses website, it is checked if the the local storage item has `user-info` item.If it exists, `user` state is assigned that value.
- Whenever the user is signed in, `user` state in zustand will be assigned a `User` object and when user logs out, `user` state becomes null. Similar is done for the `login` and `logout` functionality.
- If there is, the user is redirected to homepage even if the user tries to open the authentication page. Otherwise, the user is redirected to authentication page even if the user tries to open the home page.
- For the profile page, anyone can access it but only user can interact on it.
- If the user is not signed in, the sidebar will not be shown.
- Alternatively, a NavBar needs to be shown to prompt user to login or sign up.

### Showing NavBar to Signed Out Users

When the user is logged out on the profile page, they are prompted to sign up or log in. The form will be shown based on which button they click. If they click signup page, they will be shown SignUp Form. Else, they will be shown the Login Form.

### Adding Page Spinner

If the user has slow internet connection during authentication, the page is gonna show a spinner while the authentication is being done in the background.

### Fixing A Possible SignUp Issue

While signing up the user, we check if the email and password already exists. What if the user tries to take the existing username? There are no checks for that. Not yet !  
We are going to run a query on the `firestore` DB tp check if the username already exists. If it does, a toast will be thrown to the user.Else, user will be logged in.

### Handling Email Login Functionality

Similar to signing up, the login functionality is implemented with ease.

### Handling Google and GitHub Authentication

Google and GitHub authentication is handled based on the chosen provider. The one thing to be considered here is:

- If user is logged in for the first time
  For this, new user document need to be created in the firestore `users` collection.
- Otherwise, user has logged in before.
  For this, no new user document need to be created in the firestore `users` collection.

For checking the condition, a query on the firestore is run to check if the user already exists . If user is already created before, the retrieved data can be stored in the local storage and authStore in zustand similar to signIn and LogIn functionality.

### Fetching Profile Header Data

If the user is found on the `users` collection, their information will be shown to the user instead of random values and data. `ProfileStore` is created using zustand to keep track of the searched user or selected user profile. This way, our media app is going to be dynamic and reactive in nature.

### Edit User Profile

- Case I : User not logged in
  No button will be shown to the user in the header section.
- Case II: User logged and visiting own profile
  If logged user is visiting own profile, button `Edit Profile` is shown.
- Case III: User logged in but visiting somebody else's profile
  If logged user is visiting somebody else's profile, button `Follow / Unfollow` is shown.

### Edit Profile Functionality

1. Create a modal behaviour on the click of the `Edit Profile` button.  
   A profile edit modal should open up when the button is clicked which enables the user to edit their profile pic, username, full name and bio. On top of that, we can enable user to change their email and password using hooks defined in `react-firebase-hooks` library.
2. Edit Profile picture  
   The profile picture must be of type `image`. It can be jpeg, png or any other image formats. Its size must be less than 2MB which I think is enough for a profile picture. When button is clicked, a file select dialog is opened which urges user to upload the new image for profile picture.
3. Changing the data on the firestore  
   All the changes that we made till now will only be reflected on the user interface but not on the actual server. Now we need to handle this by creating a hook.  
   This can be done by uploading image to the firestore storage and updating the user data using `uid` in `users` collection. Localstorage and `userProfile` state store from zustand needs to be updated for new user data. The changes made on the server needs to be reflected on UI dependent on the server data.
