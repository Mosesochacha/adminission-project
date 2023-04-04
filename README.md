# adminission-project

# School Admission System

- The School Admission System is a web-based application designed to help school administrators manage student and teacher data. The system allows users to add, delete, and update student and teacher records. The data is then stored in a database for easy access and retrieval.

# Description

  -The project is a simple web application that allows users to manage the school. The backend is built using Ruby and ActiveRecord, while the frontend is built using React. The application allows users to create, read, update, and delete Students and teachers they have added.

# Getting started

- In order for you to use the content in this repo ensure you have the following:
  - Linux
  - Mac Os
- To use this repo on your machine you need to clone by either using:
  - terminal
  - forking directly from the repo.

###### Cloning using button labelled forking

      - click on the the fork button in the top most right corner of the github to fork the repo to your own account

###### Data sample

- for us to come up with this application there has been afew website that offers free access to and adding pets .

I used Entity Relationship Diagram in order to come up with this application.



## Deployment

Use the link below to for a live website

https://adminission-project.vercel.app/

## Running and testing

Running the application is very straight forward. You can use the following steps to run the app.

- Before testing this application you need to do the following in your terminal:

  - Navigate through the the folder called client and run the command below to install npm dependencies by running;

                      cd client
                      npm install

  - Secondly after all the npms hava installed sucvcesfully roll back to the parent folder then naivigate to the folder called server.

                    cd ..

                    cd server

                    bundle install

        -              rails db:migrate db:seed:replant

###### Test the application by:

        - First Login by clicking the "Login" button is you already have authenticated

        -else if you haven't authenticated signup by clicking the "sign up" button

### - In the app there is a Navbar which have the following features:

###### -Home

- This allows you to view all services that are available.

###### About

- Shows details of the school.

###### Courses

This allows user to view the corses available.

###### Sign up button

- it allows user to Either sign up or sign in

Login page has also a reset password that allows users to reset there password and they will be required to provide an email where the secret code will be send to and will be allowed to reset there password and we made sure that the scret code expires after three hours.

-After Logging In you can see the teachers who are availbale then the student can send a request for admission.After sending admission request they will receive an email for review.

-The admin then will get the student who have send  there request then the admin can accept or decline there arequest and the email shall be same send to the student about what the admin have decided.

-When the admin rejects the student will be deleted in the student table after three houtrs and only those whose admission have been accepted will be in students table.


## Author

Moses Ochacha

## License

[Apache License 2.0](https://choosealicense.com/licenses/)

## Tech Stack

        - Sinatra
        - Bootstrap
       -Active Record
        - JavaScript
        - cascading stylesheets