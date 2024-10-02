# Welcome to Art History Quiz
This fun Quiz provides users with a fun way of testing their knowledge of famous Art History paintings of 17-20 century. Here, one can not only test their knowledge, but also learn some interesting facts about the art and artist in question. The Quiz is targeted at students, aspiring art historians and anyone intersted in art history.

***

***(Designed by Iryna Walsh)***

![Responsive Design](docs/screenshots/responsive_design.jpg)
## [Play the Art History Quiz](https://kirynaw.github.io/art-history-quiz/)

## Table of Contents:
1. [**Exploration Phase**](#exploration-phase)
    * [***User Experience(UX)***](#user-experienceux)
      * [*Goals*](#goals)
      * [*User Stories*](#user-stories)
    * [***User Interface(UX)***](#user-interfaceui)
      * [*Wireframes*](#wireframes)
      * [*Color Scheme*](#color-scheme)
      * [*Typography*](#typography)
2. [**Implementation Phase**](#implementation-phase)
    * [***Current Quiz Features***](#current-quiz-features)
      * [*Landing Section*](#landing-section)
      * [*Game Section*](#game-section)
      * [*Game End Section](#game-end-section)
    * [***Possible Future Features***](#possible-future-features)
3. [**Testing Phase**](#testing-phase)
4. [**Deployment**](#deployment)
5. [**Credits**](#credits)
    * [**Languages Used**](#languages-used)
    * [**Technologies Used**](#tchnologies-used)
    * [***Code***](#code)
    * [***Content***](#content)
    * [***Media***](#media)
    * [***Acknowledgements***](#acknowledgements)

***

## **Exploration Phase:**
Who does not like a good quiz to test their knowlege on a random topic? Generic Quiz games have an ability to engage a wide demographic, from a school student to one's grandmother.

While digital technology continues to reshape human interactions with art, quiz games have emerged as a popular method for engaging audiences in the exploration of artistic knowledge. 
In the exploration stage of the game development, we aproached a variet of people, of different ages and vocations; a secondary school student studying art, an art college graduate, a senior software developer, a housewife and a retired mechanical engeneer. We showed them a selection of historical fine art paintings and asked them to either name the art movement or the artist who created it. Surprisingly, our participants showed a lot more knowlege than antisipated; while the students who studied art, exhbited greater knowlege on the subgect, those with no background in art had some knowlege on almost every image shown. 
Thus the conclusion was made that many must have a basic knowlege in art history; having aquired it in school or from attending museum as enetratinment, and as long as the game is simple enough, it CAN be accessible and experienced by many demographics and also offer extra information to those who like to learn. 
### **User Experience(UX)**
***The Users :***  
- The target audience for this quiz are: secondary school students studing art-history, fine-art college students, users interested in interactive quizes, fine-art history novices and amateurs and anyone who like a visualy engaging quiz challage.

***The Purpose of the Quiz :*** 
- To provide users with a fun and interactive way of testing their knowlege in fine-art history of 17-20 century.

### *Goals:*
- ***User Goal:***
  - *A Chance Visitors:* to experience a visualy stimulating and entertaining interactive quiz game while learning interesting art history facts.<br>
  - *Fine-Art Students:* to test their knowlege in fine-art history, specificaly the 17-20 century art and their creators, while comparing their current knowlege to the information presented.<br>
  - *Fine-Art History Amateurs:* to enjoy the visual experience while testing their current knowlege and learning new facts about a selection of 17-20 century fine-art paintings.

- ***Site Owner Goal :***
  - The owner of the Quiz site is a fine-art graduate, who loves art-history and plans to created different types of art-quizes available for students, novices and art-history enthusiasts who enjoy art and want to test their knowlege, learn more about art-history while experiencing an entertaining and visualy stimulating quiz game.
### *User Stories:*
  |No.|Story|
  |------|--------|
  |1|**As a new visitor**, <br> I want to be able to understand the aim of the quiz from the landing page and experience a simple interactive and visualy engaging game. <br><br> **I know I can do it when the directions are clear, visualy engaing and the game is well organised and not cluttered.**|
  |2|**As a new visitor**, <br> I want to be experience clear navigation and user-friendly interface; ensuring that players of all ages can enjoy the game.
 <br><br>
  |3|**As an fine-art history novice**, <br> I want to be able to particiape in a quiz that gives you extra information on the art topic in question, to gain more knowlege|
  |4|**As an fine-art history novice**, <br> I want to be able to receive instant feedback on the answers, to know which is right and wrong|
  |5|**As a fine-art student**, <br> I want to be engage in a quiz that incorporates images of artworks and artists, allowing for visual recognition and engagement.|
  |6|**As a fine-art student**, <br> I want to be able to receive a comment on my performance in the art quiz|
  |7|**As a fine-art history amateur**, <br> I want to be able I can test my knowledge, discover new artists, and improve my appreciation of art.|
  |8|**As a fine-art history amateur**, <br> I want to be able to track my progress and the score throughout the quiz, with a final score tallied|

### **User Interface(UI)**
Art History Quiz site comprises of three sections, each activated when a specific button is triggered.

- **Landing Section :**
  - This section introduces the quiz and gives instruction explaining the task and aim of the game to the user. 
  - It's aim is not only to introduce but visually entise the user to play the quiz game.

- **Game Section :**
  - This section contains the game board in it's entirty. It consists of a heading section with the name of the quiz and reveals a score box; the main section contains 11 historicaly famous paintings, with four option buttons. 
  - Some features are disguised and revealed when a selection is made and give instant feedback on whether the selection is right or wrong.

- **Game End Section :**
  - This section consists of a heading that only shows the name of the quiz; and a main section notifying the user that they reached the end of the quiz with a final score number and a message that changes depending on the score aquired.
  - It also provides the user with a button option to play again.
  
#### **Wireframes:**
The quiz is responsive on all screen types: Mobiles, Tablets and Laptops.

  - __Mobile Screen view and all featured described:__

    ![Wireframes for mobile screen with functionality described](docs/screenshots/wireframes_mobile.jpg)

  - __IPad Screen View:__

    ![Wireframes for iPad screens](docs/screenshots/wireframes_ipad.jpg)

  - __Laptop Screen View:__

    ![Wireframes for Laptop screens](docs/screenshots/wireframes_laptop.jpg)

#### **Color Scheme:**
 - This color palette was generated from [Coolors](https://coolors.co/)

    ![Color Scheme chosen for the project](docs/screenshots/color_scheme.jpg)
#### **Typography:**
- Fonts used
    ![Two font styles used:Limelight and Antic Slab](docs/screenshots/site_fonts.jpg)

## **Implementation Phase:**
### **Current Quiz Features**
#### **Landing Section**
- It comprises of a heading section that contains the name of the quiz; main section, with an image, visualy depicting the quiz; and a "Start" button, that triggers the **Game Section**.

  ![Landing section with game introduction and an image](docs/features-screenshots/landing_section.jpg)
  ![Start the quiz button function](docs/features-screenshots/start_function.jpg)

#### **Game Section**
- The main section overview, displaying responsivnes on all screen sizes, featuring the standard Laptop, Tablet and Smartphone screens.

  ![Responsivnes of the Game Section on all screen sizes](docs/features-screenshots/all_screen_views.jpg)
  ![Header transformation revealing the score-box](docs/features-screenshots/score_box1.jpg)

  ![Answer options Laptop](docs/features-screenshots/option_bar.jpg)
  ![Answer options Laptop bar hover](docs/features-screenshots/option_bar_hover.jpg)

- When the selected answer is correct, the button turns green; but if selected answer is incorrect, the button turns red and the correct answer is also revealed in green.

  ![Option selection reveals right and wrong answer](docs/features-screenshots/option_highlight.jpg)

- The selection of an answer option also reveals a "Next" button and a "Interesting Facts" paragraph.

  ![Next button reveal when option selected](docs/features-screenshots/nextbtn_factsreveal.jpg)

- When "Next" button is clicked, it shows the next question/painting and hides the "Next" button and "Interesting Facts" paragraph.

  ![Next button hover feature](docs/features-screenshots/next_function.jpg)
    
- The process repeats until all 11 painting are named and the final "Next" button reveals the **Game End Section**.

#### **Game End Section**
  ![Game End heading section](docs/features-screenshots/endgame_heading.jpg)
  ![Game End all message variations](docs/features-screenshots/end_game_messages.jpg)

- At the bottom of the **Game End Section** there is a "Play Again" button that allows the user to try to play again; when clicked, it bring the user back to the **Game Section**.

  ![Play Agian button hover function](docs/features-screenshots/startagain_function.jpg)
 


### **Possible Future Deatures**
## **Testing Phase:**
The Testing Phase Content is available in a separate document file that can be accessed at [TESTING.md](TESTING.md)

## **Deployment:**
## **Credits:**
### **Languages Used**
### **Technologies Used**
### **Code**
### **Content**
### **Media**
### **Acknowledgements**



        
