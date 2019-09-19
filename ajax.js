
const axios = require("axios");

let tableData = [];

//using axios getting api data from server to use and display 

axios.get("http://localhost:3000/tables").then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    tableData = response.data;
   // console.log(response.data);
    testTableData();
    
  },

  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
);

//test fuction to make sure table data was saved to new variable
function testTableData(){

    console.log("\n************\n" + tableData[0].name);

}

