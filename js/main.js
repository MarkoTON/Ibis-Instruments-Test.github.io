function searchMain(){
  document.getElementById("search-main").innerHTML = 
  `
  <form class="form-inline pt-3">
  
  <div class="form-group mx-sm-3 mb-2">
  
  <div class="autocomplete mr-4">
  <input id="myInputMac" class="form-control rounded-50 text-center px-5" type="text" onchange="autocompleteInputsMac()" name="macAddress" placeholder="Mac: address">
  </div>
  
  <div class="autocomplete" >
  <input id="myInput" class="form-control rounded-50 text-center px-5" type="text" onchange="autocompleteInputs()" name="myContract" placeholder="Contract ID">
  </div>
  </div>
  
  <div class="input-group">
  <i class="fas fa-sync-alt mt-1 pt-1 mr-3 ml-5"></i>
  <button type="button" id="applyFilter" class="btn rounded-50 text-center mb-2 px-5" onclick="getID_and_Mac()">Apply filters</button>
  </div>
  </form>
  `;
}
searchMain();

var contract = ["54867972","31495080","31452503","79238775","39531833","33992438","93603004"];

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    a = document.createElement("div");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        
        b = document.createElement("div");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        
        b.addEventListener("click", function(e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { 
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("myInput"), contract)


var contractMac = ["58-90-77-22-75-5C","5A-3D-30-13-8F-15","A3-43-AE-41-2E-D7","B6-06-F6-C7-D5-04","9D-01-4A-A4-CB-91","D7-C4-71-4A-47-35","0D-D3-6B-05-86-59"];

function autocompleteMac(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    a = document.createElement("div");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        
        b = document.createElement("div");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        
        b.addEventListener("click", function(e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { 
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocompleteMac(document.getElementById("myInputMac"), contractMac)

// Get Value from input over Enter for Contract
document.getElementById("myInput").addEventListener("keydown", function (e){
  if(e.keyCode === 13){
    autocompleteInputs();
  }
});

//// Autocomplete Input for Contract ID
function autocompleteInputs(){
  // Get Value from input
  let checkContractID = document.getElementById("myInput").value;
  
  // Def contractMac
  let contractMacValid;
  // Loop throu array contract to find === and <= to contractMacValid
  for(let i = 0; i < contract.length; i++){
    if(checkContractID === contract[i]){
      contractMacValid = contractMac[i];
    }
  }
  reloadInput(contractMacValid);
}

// Reload input fild of Mac
function reloadInput(contractMacReload){
  document.getElementById("myInputMac").value = contractMacReload;
}

// Get Value from input over Enter for Mac
document.getElementById("myInputMac").addEventListener("keydown", function (e){
  if(e.keyCode === 13){
    autocompleteInputsMac();
  }
});

// Autocomplete Input for ContractMacID
function autocompleteInputsMac(){
  // Get Value from input
  let checkContractMacID = document.getElementById("myInputMac").value.toUpperCase();
  
  // Def contractMac
  let contractIDValid;
  // Loop throu array contract to find === and <= to contractIDValid
  for(let i = 0; i < contractMac.length; i++){
    if(checkContractMacID === contractMac[i]){
      contractIDValid = contract[i];
    }
  }
  reloadInputMac(contractIDValid);
}
// Reload input fild of Contract
function reloadInputMac(contractIDReload){
  document.getElementById("myInput").value = contractIDReload;
}

document.getElementById("applyFilter").addEventListener("click", getID_and_Mac);

// Uzimanje vrednosti
function getID_and_Mac(){
  let idInput = document.getElementById("myInput").value;
  let idInputMac = document.getElementById("myInputMac").value;
  onClickPrint(idInput, idInputMac);
}

function onClickPrint(idConcractValue, idMacValue){
  let contractID = idConcractValue;
  let MacID = idMacValue;
  let validContractID;
  let validMacID;
  
  for(let i = 0; i < contract.length; i++){
    if(contractID === contract[i]){
      validContractID = true;
    }
  }
  
  for(let k = 0; k < contractMac.length; k++){
    if(MacID === contractMac[k]){
      validMacID = true;
    }
  }
  
  if(validContractID == true && validMacID == true){
    printChartsDayOne();
  }
}




function printChartsDayOne(){
  
  $(getTables);
  function getTables(){
    $("#tables-info").load("tables-info.txt");
  }
  
  $(getGraphis);
  function getGraphis(){
    $("#graphis-info").load("graphis-info.txt");
  }
  
  document.getElementById("search-main").innerHTML = `
  <div class="row">
  <div class="col-md-12">
  <form class="form-inline pt-3">
  <div class="col-md-4">
  <div id="currentlyData">
  <p class="text-primary">Currently viewing data:</p>
  <div class="row">
  <div class="col">
  <p>MAC address: </p>
  <p>Contract ID: </p>
  <p>City: </p>
  </div>
  <div class="col">
  <p class="text-primary">AA.BB.CC.DD.AE</p>
  <p class="text-primary">3141592654</p>
  <p class="text-primary">Budapest</p>
  </div>
  </div>
  </div>
  </div><!-- col-md-4 -->
  <div class="col-md-4">
  <div class="input-group my-3">
  <div class="btn-group  m-auto">
  <button type="button" id="dayOne" class="btn btn-outline-info active rounded-50 text-center mb-2 px-5">
  1 Day
  </button>
  <button type="button" id="daySeven" class="btn btn-outline-info rounded-50 text-center mb-2 px-5">
  7 Days
  </button>
  </div>
  </div>
  </div><!-- col-md-4 -->
  <div class="col-md-4">
  <div class="input-group ">
  <button type="button" id="resetFilter" class="btn btn-outline-info rounded-50 text-center mb-2 mr-4 px-4 ml-auto" onclick="resetApplay()">
  <i class="fas fa-sliders-h pr-2"></i>
  Reset filters
  </button>
  </div>
  </div><!-- col-md-4 -->
  
  </form>
  </div><!-- col-md-12 -->
  </div><!-- row -->
  `;
  addFunctions();
}

function printChartsDaySeven(){
  $(getAJAX);
  function getAJAX(){
    $("#graphis-info").load("graphis-info.txt");
  }
  document.getElementById("search-main").innerHTML = `
  <div class="row">
  <div class="col-md-12">
  <form class="form-inline pt-3">
  <div class="col-md-4">
  <div id="currentlyData">
  <p class="text-primary">Currently viewing data:</p>
  <div class="row">
  <div class="col">
  <p>MAC address: </p>
  <p>Contract ID: </p>
  <p>City: </p>
  </div>
  <div class="col">
  <p class="text-primary">AA.BB.CC.DD.AE</p>
  <p class="text-primary">3141592654</p>
  <p class="text-primary">Budapest</p>
  </div>
  </div>
  </div>
  </div><!-- col-md-4 -->
  <div class="col-md-4">
  <div class="input-group">
  <div class="btn-group  m-auto">
  <button type="button" id="dayOne" class="btn btn-outline-info active rounded-50 text-center mb-2 px-5">
  1 Day
  </button>
  <button type="button" id="daySeven" class="btn btn-outline-info rounded-50 text-center mb-2 px-5">
  7 Days
  </button>
  </div>
  </div>
  <p class="text-center">Marko</p>
  </div><!-- col-md-4 -->
  <div class="col-md-4">
  <div class="input-group ">
  <button type="button" id="resetFilter" class="btn btn-outline-info rounded-50 text-center mb-2 mr-4 px-4 ml-auto" onclick="resetApplay()">
  <i class="fas fa-sliders-h pr-2"></i>
  Reset filters
  </button>
  </div>
  </div><!-- col-md-4 -->
  
  </form>
  </div><!-- col-md-12 -->
  </div><!-- row -->
  `;
}


function resetApplay(){
  document.getElementById("chartTableAndGraphis").innerHTML = "";
  searchMain();
}

function addFunctions(){
  document.getElementById("dayOne").addEventListener("click", dayOne);
  document.getElementById("daySeven").addEventListener("click", daySeven);  
}

function toggleHGwInfo() {
  let x = document.getElementById("chartTableAndGraphis");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}