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
