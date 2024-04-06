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
