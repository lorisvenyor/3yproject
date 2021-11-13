# User Manual Documentation

# CA326 - Third Year Project

## *DCU Hub App* 

### Group Members:

+ Joanna Talvo
+ Chloe Ward


### Supervisor:
Dr. Malika Bendechache


# **Table of Contents**

### [**1. Background and Study**](#1-background-and-study)

-   [1.1 Overview](#11-overview)

### [**2. User Manual**](#2-user-manual)

-   [2.1 Getting Started](#21-getting-started)

-    [*Installation*](#installation)

-    [*Starting a local server*](#starting-a-local-server)

-    [*Register*](#register)

-    [*Verification*](#verification)

-    [*Login*](#login)

-   [2.2 Reset Password](#22-reset-password)

-   [2.3 Sign Out](#23-sign-out)

-   [2.4 Profile](#24-profile)

-   [2.5 Edit Profile](#25-edit-profile)

-   [2.6 Change Password](#26-change-password)

-   [2.7 Delete Account](#27-delete-account)

-   [2.8 To-Do List](#28-to-do-list)

-   [2.9 TimeTable Home](#29-timetable-home)

-   [2.10 Timetable Display](#210-timetable-display)

-   [2.11 Chat](#211-chat)

### [**3. Navigation**](#3-navigation)

-   [3.1 Bottom Navigation](#31-bottom-navigation)

### [**4. Pages**](#4-pages)

-   [4.1 News Feed](#41-news-feed)

-   [4.2 Profile](#42-profile)

-   [4.3 To-Do List](#43-to-do-list)

-   [4.4 Timetable](#44-timetable)

-   [4.5 Chat](#45-chat)


# **1. Background and Study**
## **1.1 Overview**


The product that we have developed is a cross-platform application called DCU Hub for both Android and IOS devices. It was specifically designed for DCU students providing they have a valid DCU student email address. It is a one-stop place for all things DCU related. 

The application was developed to allow students to be more immersed into DCU student news and student life by compacting all things DCU into a single mobile application.

The application allows students to do various things such as viewing DCU related news from various DCU Twitter accounts such as the main DCU account, DCU Student Union and DCU library. The News Feed is updated in real time with all DCU related news condensed into one single page. Students don’t have to navigate through various different social media accounts anymore to get updates.

The group chats function allows students to network with their college peers. Students can make group chats and also view public group chats in their messaging dashboard. The group chats messages are updated in real time.

The Timetable viewer is an improved navigation version of DCU Opentimetable as students can find their timetable from within the app. The students type their course code and a specific day to view the timetable for that day. 

The Profile page allows users to edit their profile and even upload an avatar. On the profile page, a To-do-List button is displayed where users can create multiple to-do-lists to help them in regards to their college assignments due to college being online this year. 



# **2. User Manual**
## **2.1 Getting Started**

- ### **Installation**
Ensure the following:

- Git is installed on your machine
- Node.js is installed on your machine
- Node Package Manager is installed on your machine
- Expo-cli is installed on your machine
- Expo go app is downloaded on your device (This can be done by searching and downloading “Expo Go” on Play Store (for Android users) or App Store (for iOS users) 

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.001.png)
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.001.png"  width="300"/>


- ### **Starting a local server**
1. Open your terminal 
- Windows
  - Open your start menu
  - Type “cmd” on the search bar
  - Click command prompt on the menu
- Ubuntu
  - Open your start menu
  - Type “terminal” on the search bar
  - Click terminal on the menu
  - For easy access, just press Ctrl+Alt+T
2. Clone the repository on your terminal by typing git clone <https://gitlab.computing.dcu.ie/talvoj2/2021-ca326-talvoj2-wardc35.git> or copying the https link from gitlab.

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.002.png)
![](user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.002.png)


1. On your terminal, type “cd code/dcuhub”
1. Enter “npm install”
1. Enter “expo start”
1. An Expo page should open in your browser. Scan the QR code provided in the terminal or in the browser using your mobile device’s camera.

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.003.png)
![](user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.003.png)


5. The DCU Hub app should now be successfully deployed on your device.

- ### **Register**
An account is required to use the app. 

1. Creating an account involves a valid DCU email address, full name and a password.
1. When entering your email address, the domain of your email address (after the @ symbol) must match with the DCU domain which is “mail.dcu.ie”. 
1. Press the sign up button.

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.004.png)
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.004.png"  width="300"/>

- ### **Verification**
1. After successful registration, an email verification link is sent to the email address provided at registration.

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.005.png)![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.006.png)
<p align="center">
    <img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.005.png"  width="300"/> 
    <img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.006.png"  width="300"/>
</p>

2. Once the email address is verified and you are able to sign into the application.

**                                               
- ### **Login**
1. After you have successfully registered for the application, press Login.
1. On the Login page, you are asked for your email address and password.

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.007.png)
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.007.png"  width="300"/>


3. If you try to log into the application with an unverified email address an error prompt will pop up indicating that your email address is not verified.

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.008.png)
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.008.png"  width="300"/>


4. If any errors arise, such as a badly formatted email address, email address does not exist, password wrong etc., these errors will show up on screen for you to be aware that your login credentials are invalid.

![](Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.009.png)
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.009.png"  width="300"/>


5. Press the login button. 

## **2.2 Reset Password**

1. On the login page, if you have forgotten your password you can press “Forgot Password”. This will redirect you to the forgot password page.

<p align="center">
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.010.png"  width="300"/>
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.011.png"  width="300"/>
</p>

2. Enter your email address.
3. If the email address entered exists in the database then a password reset email will be sent to your email address.

<p align="center">
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.012.png"  width="300"/>
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.013.png"  width="300"/>
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.014.png"  width="300"/>
</p>

4. If the email address is invalid then errors regarding the email address will pop up on screen so you are aware of the error in regards to the email address.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.015.png"  width="300"/>

## **2.3 Sign Out**
1. While logged into the application, press the profile on the bottom bar navigation to be directed to the Users Profile page. On the Profile page, a sign out button is located at the bottom of the page.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.016.png"  width="300"/>

2. Press Log out.
3. You are successfully logged out of the application and redirected back to the Login Page.

# **2.4 Profile**

1. On successful login, you can navigate to the profile page by using the bottom bar navigation that is located on the bottom of the screen. 
1. You can opt to change your profile details by pressing the edit icon. 
1. If you wish to open Loop while on the app, press the “go to loop” button and it should redirect you to the Loop page.
1. If you wish to add to your to-do list or create a to-do list, press the “to-do list” button.
1. If you wish to sign out of the application, press the “sign out” button.

<p align="center">
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.017.png"  width="300"/>
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.018.png"  width="300"/>
</p>

## **2.5 Edit Profile**

1. To change the default image that is shown, press the image or the “change profile picture” button. Your image gallery will show up allowing you to pick an image.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.019.png"  width="300"/>

2. Your selected image will show up on screen. To confirm the new image, press save.
3. You can opt to add details about yourself, such as your name, bio, date of birth, add a link to your profile etc. Only the sections that you have added to will be displayed on your profile.

# **2.6 Change Password**

1. On the Edit profile page, there is a change password option on the lower part of the screen.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.020.png"  width="300"/>

2. On this screen you enter your current password and a password you wish to change your password to.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.021.png"  width="300"/>

3. Once the confirm button is pressed, your password is updated in the database and you are able to login to the application any time using your new login password.

# **2.7 Delete Account**

1. On the Edit profile page, there is a delete account option on the lower part of the screen.
1. You enter your password and then confirm your password, once your details are entered correctly press the confirm button.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.022.png"  width="300"/>


3. Once the confirm button is pressed, all your account details are deleted from the database. 

## **2.8 To-Do List**

1. On the profile page, a “To-Do-List” button is located on screen. Press this button to navigate to the To-Do-list page. 
1. Once on the To-Do-list page there is a button to “Add new list”. If you press this button a new screen will appear with the option for you to create a new list. 

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.023.png"  width="300"/>

3. You will be asked to enter a name for your list. Under the name section, there is an option for the user to change the color of the list. The default colour of the list is orange. There are four colours to choose from.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.024.png"  width="300"/>

4. Once a list has been created, it will be displayed on the To-Do-List page. You can click into the list to add tasks. You can add tasks with the text box that is located at the bottom of the screen. Once you enter a task press the “+” button. Then the task will be added to the list.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.025.png"  width="300"/>


5. Once a task has been completed, press the “square” icon. This will cross out the task.
6. You also have the option to delete a task by pressing the “trash” icon. This will remove the task from your list.
7. Press the “X” icon to navigate out of the list. You are back on the main To-Do-List page. 

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.026.png"  width="300"/>

## **2.9 TimeTable Home**

1. The course code you entered from your user profile is set to default course code.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.027.png"  width="300"/>

2. If you wish to check other courses, just click on the course code box and type the any course code. 
3. Click the button “pick a date” and choose the date you wish you to see.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.028.png"  width="300"/>

4. Press submit.

## **2.10 Timetable Display**

1. You can scroll to see the list of your classes for your chosen date.
1. Press the exit button if you wish to change other dates or courses. 

<p align="center">
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.029.png"  width="300"/>
<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.030.png"  width="300"/>
</p>

## **2.11 Chat**

1. To add a new group chat, enter the name of the chat you wish to add.
1. Press the button on the right side to add the group chat.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.031.png"  width="300"/>

3. An error message will appear if you try to enter a chat with a blank name.
4. Press one of the group chats you wish to enter.
5. Type in your message on the message bar and press send.
6. Your message should be added into the conversation.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.032.png"  width="300"/>

7. Press anywhere on the screen to get rid of the keyboard.

# **3. Navigation**
# **3.1 Bottom Navigation**
1. There are four buttons to choose from namely News, Chats, Timetable and Profile. These buttons will navigate you to corresponding pages. 
1. Various buttons on pages to navigate to different pages such as to-do list, loop, edi profile, etc.

<img src="user_manual/images/Aspose.Words.8827ef43-a304-4228-acd3-b1fc1591061c.033.png"  width="300"/>


# **4. Pages**
## **4.1 News Feed**

The DCU Hub newsfeed is the first page that will be displayed when you have successfully signed in or logged in. This is where you will find the DCU related account tweets such as the DCU main account, DCU Student Union and DCU Library. The top 10 most recent tweets are always shown on the newsfeed.

DCU Emergency contacts are also provided in this section. These numbers are copyable which means you can copy it straightaway to your contacts with no hassle and in case of emergency. To do this, press the number and “copy” button should pop up. Press copy and paste it on your contacts. 

DCU Academic Calendar link is also available in this section for you to check on the current school year’s calendar.
## **4.2 Profile**
Your email address and name will be displayed here based on the information you have given at registration. The details that you enter in the Edit Profile page will be displayed on your profile. Your chosen image will be displayed and if you have not chosen an image yet a default avatar will be displayed.
## **4.3 To-Do List**

Your To-Do list will be summarised on this pYour To-Do list will be summarised on this page such as the number of tasks remaining and the number of tasks completed will be visible on a square box. Inside of each list, your tasks will be displayed in order you added them. Tasks that have been completed will be crossed out. age such as the number of tasks remaining and the number of tasks completed will be visible on a square box. Inside of each list, your tasks will be displayed in order you added them. Tasks that have been completed will be crossed out. 

## **4.4 Timetable**

Your timetable for your chosen date will be displayed on this page. The module code and module name is provided for you. The type of the event (Practical, Synchronous, Asynchronous), class time, lecturer and location of the class are also provided. The list of your classes is ordered by time. 
## **4.5 Chat**

The chat page will have a list of all the public chats available for you to view. Once you press on a chat you will be able to view the chats contents. The sending users chat messages will be displayed in light blue while the received messages will be orange. The other users' avatar of initials will also be displayed. The sender’s email will also be displayed under each message. The chat name is displayed at the top of the chat with a back arrow to exit the chat and get back to the main chat page. 
