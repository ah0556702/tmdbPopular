/*   Assignment: Exam 3
     JS of Exam 3
     Author: Audrey Harmon
     Date: November 4, 2022
*/
// declares the document ready instead of using onload
$(document).ready( () => {
    // pulls the data from the moviedb api
    $.ajax({url: "https://api.themoviedb.org/3/person/popular?api_key=344a400562bbf683b831534b49dcda8e&language=en-US&page=1", success: function(result){
      // for statement to loop through the div ids and appends created child elements to the page
      for(var i = 0; i <= 8; i++){
        // declares a variable to hold the id of the current person
        var currentPerson = result.results[i].id;
        // creates an h1 element
        var name = document.createElement('h1')
        // assigns the elements class name
        name.className = "name " + i
        // inserts the persons name into the h1 element
        name.innerHTML = "<strong>" + result.results[i].name + "</strong>"
        // assigns the persons name element an id
        name.id = "name" + i;

        // creates the image element
        var profilePic = document.createElement('img')
        // assigns the class name
        profilePic.className = "posterImg " + i
        // appends the images source path from the person object on the
        // appropriate basic URL
        profilePic.src = "https://image.tmdb.org/t/p/original/" + result.results[i].profile_path
        profilePic.style.display = 'none';
        // assigns the profile pic id
        profilePic.id = "poster" + i
        // grabs the div by id
        var divID = document.getElementById(i)
        // creates a button element

        var button = document.createElement('BUTTON')
        // assigns the innerHTML of the button
        button.innerHTML = "More info"
        // assigns button class name
        button.className = "button " + i;
        //assigns the button an id
        button.id = "button" + i

        // function for appending the details to each div
        var details = personDetails(currentPerson, divID);

        // appends all created elements to the div
        divID.append(name, profilePic, button);

        // assigns a click event function to the button
        $(button).click(function(event){
          // grabs the id from the target event and assigns it to a variable
          var theID = "#" + event.target.id;
          // passes the variable id to the function for calling the person details api and creating element to append
          toggleContent(theID)
        });
      }
    }});

    // declares a function that calls the api and returns the data for each person called from the popular people api
    function personDetails(currentPerson, divID){
      // api is called, information is received based on the current persons id
      $.ajax({url: "https://api.themoviedb.org/3/person/"+ currentPerson + "?api_key=344a400562bbf683b831534b49dcda8e&language=en-US&page=1", success: function(person){
        // persons biography is pulled from object
        var details = person.biography
        // element is created to hold biography
        var info = document.createElement('p')
        // class name is assigned
        info.className = "info"
        // biography is inserted in the innerHTML of the element
        info.innerHTML = details
        // display is set to none
        info.style.display = 'none'
        // if the string is empty within the biography for the person
        if(info.innerHTML == "") {
          // no details in displayed to indicate that there is no biography provided for the person
          info.innerHTML = "No details"
        }
        
        // the info element is appended to the dom
        divID.append(info)
      }});
    }

    // declares a function that takes the buttons click event target id as an arg
    function toggleContent(theID){
      // checks to see if the id matches the first button elements id
      if(theID == "#button0"){
        // if it matches the first div image is toggled
        $('img:first').toggle(3000);
        // and the p element for details is toggled
        $('p:first').toggle(3000);
      }
      // else if statements check to see which buttons id matches the event target id 
      // for the matching button id elements the img and details are toggled for that div
      else if(theID == "#button1"){
        $('img:nth(1)').toggle(3000);
        $('p:nth(1)').toggle(3000);
      }
      else if(theID == "#button2"){
        $('img:nth(2)').toggle(3000);
        $('p:nth(2)').toggle(3000);
      }
      else if(theID == "#button3"){
        $('img:nth(3)').toggle(3000);
        $('p:nth(3)').toggle(3000);
      }
      else if(theID == "#button4"){
        $('img:nth(4)').toggle(3000);
        $('p:nth(4)').toggle(3000);
      }
      else if(theID == "#button5"){
        $('img:nth(5)').toggle(3000);
        $('p:nth(5)').toggle(3000);
      }
      else if(theID == "#button6"){
        $('img:nth(6)').toggle(3000);
        $('p:nth(6)').toggle(3000);
      }
      else if(theID == "#button7"){
        $('img:nth(7)').toggle(3000);
        $('p:nth(7)').toggle(3000);
      }
      // if none of the former ids match the concurring button ids
      // it is assumed that the last button was clicked and the img and p details elements are toggled
      else{
        $('img:nth(8)').toggle(3000);
        $('p:nth(8)').toggle(3000);
      }
    }
})

