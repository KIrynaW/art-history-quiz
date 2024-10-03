# Testing Page
## Table of Contents
 [**Testing Phase**](#testing-phase)
  * [***Bugs***](#bugs)
  * [***Validator Testing***](#validator-testing)
  * [***Accessibility Testing***](#accessibility-testing)
  * [***Manual Testing***](#manual-testing)
  * [***User Story Testing***](#user-story-testing)

## **Testing Phase:**
### **Bugs**
Bugs encountered during the development of the quiz:

  - HTML Bugs:

    ![Html code bugs after running validation test](docs/testing-screenshots/html_midcheck_error.jpg)

    &nbsp;&nbsp;------->&nbsp;&nbsp;![Html code bug fix solution one](docs/testing-screenshots/html_error_fix2.jpg)

    &nbsp;&nbsp;------->&nbsp;&nbsp;![Html code bug fix solution two](docs/testing-screenshots/html_error_fix.jpg)

    &nbsp;&nbsp;------->&nbsp;&nbsp;![Html bug fix solution three](docs/testing-screenshots/html_error_fix3.jpg)

  - CSS Bugs:

    ![CSS code bugs after running validation test](docs/testing-screenshots/css_midcheck_errors.jpg)

    &nbsp;&nbsp;------->&nbsp;&nbsp;![CSS code bug fix solutions](docs/testing-screenshots/css_error_fix.jpg)

  - JavaScript Bugs:
    
    Get Image Bug:

    ![JavaScript code bug that was encountered -no.one](docs/testing-screenshots/javascript_error_one.jpg)
    ![JavaScript getImage code bug solution -no.one](docs/testing-screenshots/js_get_image_error.jpg)
    ![JavaScript getImage code bug solution -no.one](docs/testing-screenshots/js_geimage_error.jpg)

    &nbsp;&nbsp;------->&nbsp;&nbsp;![JavaScript getImage code final refactor](docs/testing-screenshots/js_getimage_fix.jpg)

    Toggle Hidden Items challanges:

     Previous Code:

      ![Code before it was optimised](docs/testing-screenshots/js_toggleerror_fix1.jpg)

     Final Code refactor:

      ![Refactored and optimised code](docs/testing-screenshots/js_toggle_fix.jpg)

     Get facts function is the function that is triggered by the toggle of the button.

      ![Get facts function refactor](docs/testing-screenshots/js_getfact_refactor.jpg)

### **Validator Testing**
  The final validation testing was performed when all the previously encountered bugs were fixed, and the results were of a clean code, with not errors in its final stage.

  - W3C Markup Validation report of the quiz.

    ![HTML code validation results](docs/testing-screenshots/html_final_validation.jpg)

  - Jigsaw CSS Validation report of the quiz.

    ![CSS code validation results](docs/testing-screenshots/css_final_validation.jpg)

  - JSHint JavaScript Code quality report of the quiz.

    ![JavaScript code validation results](docs/testing-screenshots//jshint_final_scan.jpg)

### **Accessibility Testing:**
To check the website *Performance*, *Accessibility*, *Best Practice* and *SEO*, the website was run through the *Lighthouse* Chrome Dev Tools performance statistics generator *Wave* a web accessability tool, and *DeepScan* a Javascript code quality evaluator.
There were no errors detected and the quiz has an overall high performance.
 
 - Lighthouse Desktop Report
  ![Desktop Lightouse Report](docs/testing-screenshots/lighthouse_desktop.jpg)

 - Lighthouse Mobile Report
  ![Mobile Lightouse Report](docs/testing-screenshots/lighthouse_mobile.jpg)

 - Wave Report on the Quiz Site:
  ![Wave evaluation of the quiz site](docs/testing-screenshots/wave_scan.jpg)

- DeepScan Report on the Quiz Site:
  ![DeepScan evaluation of the quiz site](docs/testing-screenshots/final_deepscan.jpg)
  
### **Manual Testing**
 **Browser Testing** 

 **Quiz Responsiveness** 
 
 **Quiz Feature Performance** 
|Feature                | Test                                 |Pass/Fail        |
|-----------------------|--------------------------------------|-----------------|
|When the "Start" button is clicked on landing section, it reveals: the game play section with paintings to identify; four answer options; the score box and hides the landing section| Hover over the start button, it will highlight, and then press on it| Pass |
|When one of four option buttons are pressed: the buttons disable, the right answer turns green and wrong red| Hover over any of four buttons, they will highight, then make your choice by clicking|Pass|
When any of the option buttons are pressed again after answer already selected, the alert message is triggered and this event is same on every question| Hover over any of the four buttons after having chosen an option, they will not highlight, the click one of the buttons|Pass|


### **User Story Testing**
|No.|Result|Evidence                                                             |
|---|------|---------------------------------------------------------------------|
|1  |      |**As a new visitor**, <br> I want to be able to                      |
|2  |      |**As an fine-art history novice**, <br> I want to be able to         |
|3  |      |**As an fine-art history novice**, <br> I want to be able to         |
|4  |      |**As a fine-art student**, <br> I want to be able to                 |
|5  |      |**As a fine-art student**, <br> I want to be able to                 |
|6  |      |**As a fine-art history amateur**, <br> I want to be able to         |
|7  |      |**As a fine-art history amateur**, <br> I want to be able to         |
