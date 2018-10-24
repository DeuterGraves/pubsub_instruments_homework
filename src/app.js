const InstrumentFamilies = require("./models/instrument_families.js");
const SelectView = require("./views/select_view.js");
const InfoView = require("./views/info_view.js");
const familiesData = require("./data/instrument_families.js");
const PubSub = require("./helpers/pub_sub.js");



document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector("select#instrument-families");
  const instrumentFamilyDropdown = new SelectView(selectElement)
  instrumentFamilyDropdown.bindEvents();

  const instrumentFamiliesDataModel = new InstrumentFamilies(familiesData);
  instrumentFamiliesDataModel.bindEvents();

  const infoArea = document.querySelector("div#instrument-families");
  const infoView = new InfoView(infoArea);
  infoView.bindEvents();


  console.log('JavaScript Loaded');

});
