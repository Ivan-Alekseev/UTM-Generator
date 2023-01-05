function UIctrl(ctrl) {
  let 
    linkInput,
    linkCheckboxInput,
    linkValue,
    listSources,
    listSourcesInput,
    customSourceInput,
    listMedium,
    listMediumInput,
    customMediumInput,
    campaignInput,
    contentInput,
    termInput,
    buttonGenerate,
    buttonCopy,
    readyLink;

  //-------- link input ------------//
  linkInput = document.querySelector(".link__input");
  linkCheckboxInput = document.querySelector(".link__checkbox-input");
  //--------// link input ------------//

  //-------- choice of sources ------------//
  listSources = document.querySelector(".list-sources");
  listSourcesInput = document.querySelectorAll(".list-sources input");
  customSourceInput = document.querySelector(
    ".custom-source input[type=text]"
  );
  //--------// choice of sources ------------//

  //-------- choice of medium ------------//
  listMedium = document.querySelector(".list-mediums");
  listMediumInput = document.querySelectorAll(".list-mediums input");
  customMediumInput = document.querySelector(
    ".custom-medium input[type=text]"
  );
  //--------// choice of medium ------------//

  //-------- choice of campaign ------------//
  campaignInput = document.querySelector(".utm-campaign input[type=text]");
  //--------// choice of campaign ------------//

  //-------- choice of content ------------//
  contentInput = document.querySelector(".utm-content input[type=text]");
  //--------// choice of content------------//

  //-------- choice of term ------------//
  termInput = document.querySelector(".utm-term input[type=text]");
  //--------// choice of term------------//

  //------------ buttons ------------//

  //-------- button generate -//
  buttonGenerate = document.querySelector('input[name="generate"]');
  //-------- button copy -//
  buttonCopy = document.querySelector('input[name="copy"]');
  //------------// buttons ------------//

  //-------- ready link -------- //
  readyLink = document.querySelector(".ready-link__textarea");
  //--------// ready link -------- //

  //-------- Animation ----------------//

  //--------// Animation ----------------//
  return {
    DOMstrings: {
      linkInput: linkInput,
      linkCheckboxInput: linkCheckboxInput,

      listSources: listSources,
      listSourcesInput: listSourcesInput,
      customSourceInput: customSourceInput,

      listMedium: listMedium,
      listMediumInput: listMediumInput,
      customMediumInput: customMediumInput,

      campaignInput: campaignInput,
      contentInput: contentInput,
      termInput: termInput,

      buttonGenerate: buttonGenerate,
      buttonCopy: buttonCopy,
      readyLink: readyLink,
    },
  };
}
ctrl;
