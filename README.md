
  # Team Profile Generator

  ## Description

  This is a command line application that automatically generates an HTML page for your office team with all of the relevant information. It is a simple but powerful application that allows a team manager or other team member to gather all of the information in one place. By simply answering the prompts an HTML card will be generated for all of the chosen employees. Since all teams must have a leader, it starts by prompting the user to enter the information for the team's manager. Upon completing this the user is prompted to choose whether or not they would like to add another employee. Engineers and Interns top the list because there is typically only a single manager, but in case that the user would like to add another Manager that option is included as well. The User can add as many employees as they would like until they click decide to click none at which point all of the entered information will be written to an already formatted HTML file, in the dist file. Ready to go!

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ## Installation
  
  In order to install the project, download the files from GitHub along with node/npm to install inquirer. Run npm to install inquirer and the installation is complete.

  ## Usage

  Once installed, simply call index.js using node and respond to the prompts. You will continue to be prompted to enter more employees until you choose the "None" option from the menu. At the point the html page is automatically generated in the dist folder and your page is ready for deployment. 

  [For video demonstrating usage, click here](https://drive.google.com/file/d/1lGQWt2s7SMQHjtAjTA385gCE54nylfiu/view)

  ## License

  ![License Badge](https://img.shields.io/badge/license-MIT-orange?style=plastic=appveyor?raw=true)
  <br>
  
  [Click here for more information regarding the above license](https://opensource.org/licenses/MIT)
    
  ---
    
  

  ## How to Contribute

  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  
  [Find the covenant here](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt) 

  ## Tests

  Several tests have been performed and can be utilized by the user. There are four testing suites, one for each class of intern, engineer and manager as well as one for the parent class of Employee. These tests test the integrity of the constructor to confirm that objects are being correctly created according to their class and test the functions that are associated with every class. To run the tests call npm run test. If you would like to only test a single class use npm run test "class name", where the class name is lower case, i.e. employee or intern.

  ## Questions
  
  If you have any questions contact the creator at:
  <br>
  [willwneal@gmail.com](mailto:willwneal@gmail.com)
  <br>
  [GitHub](https://github.com/Will-Neal)

