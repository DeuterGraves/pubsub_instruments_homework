const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(familiesData) {
  this.familiesData = familiesData;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish("InstrumentFamilies:all-instruments-ready", this.familiesData);
  // console.dir(this.familiesData);

  PubSub.subscribe("SelectView:family-selected", (selectedEvent) =>{
    const selectedFamilyIndex = selectedEvent.detail;
    const selectedFamilyObject = this.familiesData[selectedFamilyIndex];

    PubSub.publish("InstrumentFamilies:instrument-ready", selectedFamilyObject);
    // console.dir(selectedFamilyObject);
  });
};

// this could've been broken down into 2 smaller functions:
// this as part 2 of the pubsub
// PubSub.subscribe('SelectView:change', (evt) => {
//   const selectedIndex = evt.detail;
//   this.publishFamilyDetail(selectedIndex);
// });
// };
//
// and this outside
// InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
// const selectedFamily = this.data[selectedIndex];
// PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
// };

module.exports = InstrumentFamilies;
