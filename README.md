# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
   ```html
   {child name} will be making memories with {celebrity name}, a {celebrity
   sport} star, by {child wish}
   ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   The Kids.js module is currently housing the eventlistener on the doucment that will execute the event. First, the click event checks to see if the data type that was click on matches, in thise case "child". Next, if the if statement is a child, it grabs the data-id and converts it to a number (parseInt). Then using a loop, it checks whos child.id matches that number. Once the numbers match, it shows the alert as instructed.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   findCelebrityMatch() must be invoked inside of the loop due to the unique IDs. Each kid gets their own unique celebrity match. If it was located on the outside it would only find one math and incorrectly use it each time (except once I suppose).

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   In short it has to do with the Metadata, checks, and loops. The eventlistner is listening for a click that will display a pop-up once clicked if the dataset.type is "celebrity" (celebrityClickEvent.dataset.type === "celebrity"). Once it confirms that was click it checks the matching id and uses the .method to pull the sports and name from an array that ultimately comes from the database.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The Main module is everything. It first imports kids from kids.js, Celebrities from CelebrityList.js, and Pairings from pairings.js. Next there is variable created in which stores information from the document that matches a CSS element #container. Next is builds the HTML and stores it in applicationHTML. This HTML includes headers and functions imported from their respect modules (kids(), celeberities(), and pairings()). This ultimately creates the entire webpage using the HTML each function creates on its own individual module.
