const PubSub = require("../helpers/pub_sub.js");

// confused - is this the area the data will go or the data passed in to the InfoView?
const InfoView = function(selectedFamily){
  this.selectedFamily = selectedFamily;
}

InfoView.prototype.bindEvents = function (selectedFamily) {
  PubSub.subscribe("InstrumentFamilies:instrument-ready", (instrumentLoaded) => {
    const instrumentFamily = instrumentLoaded.detail;
    this.render(instrumentFamily)
    console.log("object", instrumentFamily);
  });
};

InfoView.prototype.createExampleList = function (examples) {
  const examplesList = document.createElement("ul");

  examples.forEach((example) =>{
    const instrument = document.createElement("li")
    example.textContent = example;
    examplesList.appendChild(instrument)

  });
};

InfoView.prototype.render = function (instrumentFamily) {
  // const infoArea = document.querySelector("#instrument-families")
  // this.infoArea.innerHTML = "";

  const infoArea = document.querySelector("#instrument-details");

  const familyName = document.createElement("h2");
  familyName.textContent = instrumentFamily.name;
  console.log("h2", familyName);

  const familyDescription = document.createElement("p");
  familyDescription.textContent = instrumentFamily.description;
  console.log("p", familyDescription);

  const exampleTitle = document.createElement("h3");
  exampleTitle.textContent = "Examples";


  const examples = this.createExampleList(instrumentFamily.instruments);
  // infoArea.appendchild(examples);

  // infoArea.textContent.innerHTML = " ";
  infoArea.appendChild(familyName);
  infoArea.appendChild(familyDescription);
  infoArea.appendChild(exampleTitle);


};



module.exports = InfoView;
