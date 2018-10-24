const PubSub = require("../helpers/pub_sub.js");

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe("InstrumentFamilies:all-instruments-ready", (loadedEvent) => {
    const allInstrumentFamilies = loadedEvent.detail;
    this.populate(allInstrumentFamilies);
  });
  this.element.addEventListener("change", (changeEvent) =>{
  const selectedFamilyIndex = changeEvent.target.value;
  PubSub.publish("SelectView:family-selected", selectedFamilyIndex);
  // console.log(selectedFamilyIndex);
});
};

  SelectView.prototype.populate = function (allInstrumentFamilies) {
    allInstrumentFamilies.forEach((family, index) => {
      const option = document.createElement("option");
      option.textContent = family.name;
      option.value = index;
      this.element.appendChild(option);
    });
  };



module.exports = SelectView;
