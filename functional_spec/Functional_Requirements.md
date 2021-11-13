# Functional Requirements
## *DCU Hub (College Networking App)*

### Group Members:

+ Joanna Talvo
+ Chloe Ward

# **Table of Contents**

[**1. Introduction**](#1-introduction) 

-   [1.1 Overview](#11-overview)

-   [1.2 Business Context](#12-business-context)

-   [1.3 Glossary](#13-glossary)

[**2. General Description**](#-general-description)

-   [2.1 Product/System Functions](#21-product-system-functions)

-   [2.2 User Characteristics and Objectives](#22-user-characteristics-and-objectives)

-   [2.3 Operational Scenarios](#23-operational-scenarios)

-   [2.4 Constraints](#24-constraints)

[**3. Functional Requirements**](#3-functional-requirements)

-   [3.1 Registration](#31-registration)

-   [3.2 Login](#32-login)

-   [3.4 User Profile](#34-user-profile)

-   [3.5 Messaging](#35-messaging)

-   [3.6 Timetable](#36-timetable)

-   [3.7 Logout](#37-logout)

[**4. System Architecture**](#4-system-architecture)

-   [4.1 System Architecture diagram](#41-system-architecture-design)

[**5. High-Level Design**](#5-high-level-design)

-   [5.1 Context Diagram](#51-context-diagram)

-   [5.2 Data Flow Diagram](#52-data-flow-diagram)

-   [5.3 Use Case Diagram](#53-use-case-diagram)

[**6. Preliminary Schedule**](#6-preliminary-schedule)

-   [6.1 Task List](#61-task-list) 

-   [6.2 Gantt Diagram](#62-gantt-diagram)

[**7. Appendices**](#7-appendices)

-   [7.1 References](#71-references)

# **1. Introduction**

## **1.1 Overview**

Our project is a college networking mobile application that is exclusively
designed for DCU students. This application will instantly connect students with
their classmates and friends within the university. The primary goal of our
application is to create an environment for DCU students where they will
automatically be able to connect to their classmates without the need to search
for their social media accounts. This will ultimately make the process of
finding their group mates to communicate about their project more convenient as
all students will have access to this app. This will enable them to manage their
groups and projects better than ever before. </font>

The main function of this application is to aid the organisation of student
workload and group projects. Our app will allow students to set up an account
once they’re verified using their DCU credentials. Once verified, the student
will be automatically added into their year chat group where they can start
communicating with their fellow classmates. In addition, the student’s timetable
will be available on their personal dashboard. The news feed section will
contain news about the university and student union updates. Students will also
get the chance to create their own chat groups and connect to other students.

The reason behind this application is because we noticed during the global
pandemic that it must have been significantly difficult for first year students
to make friends and get to know their peers. So, as a result we thought of this
idea to combat this problem. From personal experience, we also noticed that it
was difficult to do remote group projects during the pandemic as some students
would be difficult to reach on social media. Our application is a one-stop place
where students can communicate in regards to group projects and other college
related work, instead of having various group chats on different social media
platforms which is the case for many DCU students. 

## **1.2 Business Context**

The following examples could be implemented in terms of business for this
application

-   DCU could possibly buy our application and distribute it for the use among
    DCU students and possibly be improved for staff use as well.

-   Universities could also create various instances of the application by
    buying our software and adapting it to their own university needs.

-   Allow advertisements on the application in regards to student interests etc
    in order to gain revenue from the application.

## **1.3 Glossary**

-   **Firebase**: a cloud-based platform owned by Google that provides
    developers with tools for building their applications.

-   **Firebase Authentication**: this provides methods for users to create an
    account and to manage their email address and passwords. It also manages
    user authentication and verification.

-   **Firebase Cloud Storage**: this allows users to upload and share
    user-generated content within the application.

-   **Firebase RealTime Database**: a cloud-hosted database that syncs and
    stores data in real time within our application.

-   **React Native**: a cross-platform framework that we will be using for
    building our application.

-   **API**: used for retrieving data from social media and open-timetable to be
    used in our application.

# **2. General Description**

## **2.1 Product/System Functions**

Below are the main functionalities that will be implemented into the
application. We feel that over the course of the next few months that our
functionality might change where we incorporate more or change some
functionalities however, these are the main features of the application that we
plan to implement.

The main functionalities below will at first require the user to create a
profile and verify their student’s status.

-   Downloading the application and creating an account.

-   Verification of DCU student’s status.

-   Login to the application with a password. A reset option included.

-   Creating a user profile.

-   In-app messaging.

-   Newsfeed with data pulled from DCUSU and DCU’s social media.

-   Viewing the students timetable.

-   Logging out.

## **2.2 User Characteristics and Objectives**

The target audience for this application is exclusively for the college students
of Dublin City University. Our app will provide the DCU students to have an
exclusive community online. We believe that having an exclusive community where
they can talk, plan, discuss academics, extracurricular activities and
ultimately make friends. This will benefit their student life immensely as each
student will have a sense of an online connection with the student body even
during a global pandemic which is the case for many students this year.

The application’s user interface will be simple and easy to use while providing
a friendly user experience. The student will be able to make an account and gain
access to all the functionalities such as in application messaging with their
course, university updates and the students timetable. This will essentially be
a one-stop application which will cater for all students' needs. The structure
of the application will be self-explanatory with easy navigation between certain
functionalities to ensure an overall good user experience.

## **2.3 Operational Scenarios**

**User signs up**

After a user has downloaded the application, the user must make an account
before they can access the main functionalities. Upon opening the app, the user
will have the option to sign up or reset password in case password is forgotten.
The user must fill out the sign up form with all their details while also
providing a valid DCU student email address.

The user will then get an email to their DCU email address that they provided in
the form for the system to ensure authenticity. In the email, the user will be
provided with a secured password that they may choose to keep or change. The
student will then be able to log in and out of the application with their DCU
email address and chosen password.

**User creates profile**

Upon getting verified, the user can create their own profile where they can have
an option to display as much information as they want about themselves i.e.
name, degree, year, clubs and socs membership, etc. The user can also add links
to their GitHub, LinkedIn, Spotify and many more. The user can incorporate their
timetables into their profile.

**User joins the course group chat**

Our app will automatically join a user to its class group chat once verified.
The user can connect to its class group by sending messages and photos. The user
can also navigate through the group chat and search for members at their own
discretion.

**User creates group chat**

The user will be able to make their own group chats by selecting which students
that they want to join the group chat. The user will then be able to send
messages to the group instantly, while also being provided with the ability to
add more users at a later stage.

**User views newsfeed**

Upon logging in, the user will be brought to the main page of the app which will
be the newsfeed. The user will be able to view news and updates from both DCUSU
and DCU, which will be news and posts from DCU’s social media platforms.

**User checks timetable**

The timetable will be located under the users profile. The user will be able to
access their timetable in the application through the DCU Open timetable API.

## **2.4 Constraints**

**Time**

-   The team is new to the framework and language that they will be using.

-   The team will have to build a database which both team members have not done
    before.

-   The team will focus on the main functionality of the application such as the
    instant messaging and will then implement the other features over time.

-   The team will be working remotely which will make the process more difficult
    as we won't be able to instantly help each other.

**Internet**

-   Users must acquire access to the internet (wifi or data) in order to use our
    app and its functionality.

-   The team will be communicating remotely due to the pandemic and both members
    need a stable internet connection in order to complete the project.

**Security**

The team cares about privacy and control for each user for the application, so
we will store the users data with encryption. All the users data will be stored
securely and all users will be authenticated to ensure their DCU student status
to keep the application safe and secure to just DCU students.

# **3. Functional Requirements**

## **3.1 Registration**

-   Description

    -   For first time users it is a requirement for users to register before
        being able to login. The registration form requires the users to input
        information such as first and last name while also providing a valid DCU
        student email address. Once a user has submitted their registration
        form, if the email is a valid DCU email address a login password will
        then be sent to the email address. This is a vital step as it ensures
        that the application will be exclusive to just DCU students

-   Criticality

    -   This functionality of the application is essential for ensuring that the
        application will just consist of DCU students as an email can only be
        associated with one account. The verification process is a way for us to
        establish the DCU online community by ensuring that the application
        stays exclusive to just DCU students.

-   Technical Issues

    -   For the verification process we will create an algorithm to ensure that
        the email address is a valid DCU address by checking the email address
        the user has entered. We are also considering allowing the student to
        sign in to the application by using Loop as other DCU applications
        operate in that manner.

-   Dependencies with other requirements

    -   None.

## **3.2 Login**

-   Description

    -   Once the user has successfully registered and got verified, the user can
        now login using their DCU email address and the password sent to them
        through email. These input details of the user will be automatically
        stored in our database. These will be used to compare and check if the
        information they provide matches the ones stored in our database and if
        not correct, a prompt will appear on the screen informing the user. In
        the event that the user forgets their password, a reset option will be
        provided.

-   Criticality

    -   This function is essential for identification and security purposes. It
        is the entry point to establish a connection between the user and the
        application. In addition, it also checks if the user has provided a
        valid account before getting access to the application.

-   Technical Issues

    -   The input details provided by the user must match the ones we have
        recorded in our database. This will be done by querying the database. In
        the event where the user forgets their password, they will receive a new
        password through their DCU email that they can use.

-   Dependencies with other requirements

    -   The user must complete all the necessary requirements in the
        registration process first in order to use this functionality.

**3.3 Newsfeed**

-   Description

    -   Once a user has successfully logged into the application, they will be
        able to view the main functionalities of the application, the first one
        being the newsfeed. The user will be able to view updates from DCU which
        will be pulled from various DCU social media platforms. The user will be
        able to scroll through the newsfeed.

-   Criticality

    -   This isn’t a necessary function in the application, however it can allow
        the user to stay up to date with DCU related news as it is all located
        in one place.

-   Technical Issues

    -   We will be pulling data from other social media platforms to display on
        our application by using Twitter streaming API and Instagram API.

-   Dependencies with other requirements

    -   The user must first be able to log into the application and the social
        media platforms need to be posting for us to update our news feed
        regularly.

## **3.4 User Profile**

-   Description

    -   Upon registration, the user can now start creating their own profile
        where they can add as much information as they want i.e name, degree,
        clubs and socs membership, etc. The user will also be able to change the
        information they provide at any time they want. There will also be an
        option to add a profile picture of the user and links to their GitHub,
        LinkedIn, Spotify and more.

-   Criticality

    -   This is not entirely necessary to the overall functionality of the
        application. However, it could supply a better experience on the app
        since we will be incorporating the timetable into this which will be
        more convenient for the user. In addition to that, the user will be able
        to distinguish the other users they are talking to in the group chat.

-   Technical Issues

    -   Since we are planning to add a profile picture for the user, this will
        take up a lot of storage space in our database so we will have to figure
        out how to tackle this. We will also require the user to give our app
        access to their phone gallery.

-   Dependencies with other requirements

    -   The user must be registered and logged in properly.

## **3.5 Messaging**

-   Description

    -   The main functionality of our application is making premade group chats
        for the users to communicate with the peers in their course or by being
        able to make their own group chats or chat to each other individually.
        The users messages and recipients replies will be stored in the
        application in chronological order for easy viewing like every other
        instant messaging application.

-   Criticality

    -   This is an important feature in the application as it is one of the main
        functionalities so that the users get to know their peers in their
        college course. They will be able to communicate with each other through
        this built in instant messaging system and the user will be able to
        receive notifications when they receive a reply from another user.

-   Technical Issues

    -   At the moment we are currently still contemplating how we will implement
        this feature. We are thinking about using a database to store the
        messages and then assigning an identification number to each user in the
        database to keep track of who is sending and who will be receiving
        messages.

-   Dependencies with other requirements

    -   A user is required to log in and be assigned to a group chat, have
        created their own personal group chat or are partaking in individual
        messaging.

## **3.6 Timetable**

-   Description

    -   With this functionality, the user will be able to access their student
        timetable directly from their profile, without having to directly go to
        the DCU open timetable each time.

-   Criticality

    -   This is not a key component of our application, but we feel that this
        feature would be extremely useful to students as they won’t have to
        visit the DCU open timetable website each time, and that particular
        website tends to refresh after a certain period of time where the user
        will have to input their course again, so we want to combat the need for
        that in our application.

-   Technical Issues

    -   We plan to pull the data from the open timetable website to display
        directly onto our application using the DCU open timetable API.

-   Dependencies with other requirements

    -   None.

## **3.7 Logout**

-   Description

    -   This function provides the user to log out of the application at their
        own discretion. When a user logs out their data and messages will still
        be securely stored in our database, allowing the user to access them
        again once they log back in.

-   Criticality

    -   Since we are providing the user the option to sign in, it is only fair
        to provide them an option to sign out and therefore deem it an essential
        function in our application. It is implemented in the event that the
        user wishes to change devices or to simply just log out of the
        application without affecting the state of their account.

-   Technical Issues

    -   No technical issues as the users data and messages archive will be
        stored in the database and thus will not result in any technical issues
        once the user logs out.

-   Dependencies with other requirements

    -   The user will be required to have been successfully logged in to the
        application in order to log out.

# **4. System Architecture**

## **4.1 System Architecture Diagram**

![System Architecture Diagram](functional_spec/graphs/system_architecture.png)

The system architecture of our application is shown above. The diagram consists
of the user which initiates the starting of the application. The mobile phone is
shown with both Android and IOS which represents the front end which we will be
using React to implement. The backend is also shown which will be implemented
using Firebase. Firebase has many features which we plan to take advantage of
for our application.

-   **User**

    -   The user initiates the interaction between the mobile application and
        the server. The user can send data requests to the server and the server
        shall respond to its request through the mobile app.

-   **Mobile Application**

    -   The mobile application will work on both android and iOS environments.
        This will take request data from the client and send it to the server
        and displays the response from the server to the client.

-   **Server**

    -   Firebase has many features which we plan to take advantage of for our
        application, such as the Realtime Database which will allow us to store
        and sync data in real time. Firebase authentication will allow us to
        build a secure authentication system. Cloud messaging will effectively
        allow us to send and receive notifications from the server and devices
        and cloud storage will easily store and serve user content.

-   **API**

    -   Our application also incorporates various APIs which will allow us to
        add extended functionalities to our application, such as the students
        timetable and newsfeed section.

# **5 High-Level Design**

## **5.1 Context Diagram**

![Context Diagram](functional_spec/graphs/contextdiagram.png)

## **5.2 Data Flow Diagram**

## ![Data Flow Diagram](functional_spec/graphs/dataflowdiagram.png)

## **5.3 Use Case Diagram**

## ![Use Case Diagram](functional_spec/graphs/usecasediagram.png)

# **6. Preliminary Schedule**

## **6.1 Task List**

| **TASK**                        | **START DATE** | **END DATE** | **DURATION** |
|---------------------------------|----------------|--------------|--------------|
| Functional Requirements         | 07/12/2020     | 18/12/2020   | 11           |
| Meeting  with Supervisor        | 15/12/2020     | 15/12/2020   | 0            |
| Submit  Functional Requirements | 21/12/2020     | 21/12/2020   | 0            |
| Study  and Research Period      | 22/12/2020     | 04/01/2021   | 13           |
| UI  Design MockUp               | 27/12/2020     | 01/01/2021   | 5            |
| Project  Commence               | 11/01/2021     | 05/03/2021   | 53           |
| React  Native Set Up            | 13/01/2021     | 13/01/2021   | 0            |
| Firebase  Implementation        | 14/01/2021     | 16/01/2021   | 2            |
| Database  Implementation        | 17/01/2021     | 22/01/2021   | 5            |
| Messaging                       | 23/01/2021     | 28/01/2021   | 5            |
| UI  Implementation              | 29/01/2021     | 03/02/2021   | 5            |
| Login  / Register               | 04/02/2021     | 08/02/2021   | 4            |
| User  Profile                   | 09/02/2021     | 14/02/2021   | 5            |
| Newsfeed                        | 09/02/2021     | 14/02/2021   | 5            |
| API  Implementation             | 15/02/2021     | 17/02/2021   | 2            |
| Incorporate  UI and Code        | 18/02/2021     | 21/02/2021   | 3            |
| Testing  and debugging          | 22/02/2021     | 25/02/2021   | 3            |
| User  Testing                   | 26/02/2021     | 27/02/2021   | 1            |
| Fix  any errors                 | 28/02/2021     | 28/02/2021   | 0            |
| Technical  Specs                | 01/03/2021     | 04/03/2021   | 3            |
| User  Guide                     | 01/03/2021     | 04/03/2021   | 3            |
| Blog  writing                   | 23/11/2020     | 04/03/2021   | 101          |
| Video  walkthrough              | 01/03/2021     | 04/03/2021   | 3            |
| Project  Submission             | 05/03/2021     | 05/03/2021   | 0            |
| Final  Project Demonstration    | 08/03/2021     | 19/03/2021   | 11           |

## **6.2 Gantt Diagram**

![Gantt Diagram](functional_spec/graphs/ganttdiagram.png)

# **7. Appendices**

## **7.1 References**

-   <https://firebase.google.com/>

-   <https://firebase.google.com/products/realtime-database>

-   <https://firebase.google.com/products/cloud-messaging>

-   <https://firebase.google.com/products/storage>

-   <https://firebase.google.com/products/auth>

-   <https://reactnative.dev/>

-   <https://ionicframework.com/resources/articles/what-is-cross-platform-app-development>

-   <https://rnfirebase.io/>
