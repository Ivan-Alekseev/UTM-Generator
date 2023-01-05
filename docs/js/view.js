function UIctrl(ctrl) {
  let linkInput,
    linkValue,
    listSources,
    listSourcesInput,
    yoursVariantSource,
    listMedium,
    listMediumInput,
    yoursVariantMedium,
    campaignInput,
    contentInput,
    termInput,
    buttonGenerate,
    buttonReset,
    buttonCopy,
    readyLink;

  //-------- link input ------------//
  linkInput = document.querySelector(".link__input");
  //--------// link input ------------//

  //-------- choice of sources ------------//
  listSources = document.querySelector(".list-sources");
  listSourcesInput = document.querySelectorAll(".list-sources input");
  yoursVariantSource = document.querySelector(
    ".custom-source input[type=text]"
  );
  //--------// choice of sources ------------//

  //-------- choice of medium ------------//
  listMedium = document.querySelector(".list-mediums");
  listMediumInput = document.querySelectorAll(".list-mediums input");
  yoursVariantMedium = document.querySelector(
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
  //-------- button reset -//
  buttonReset = document.querySelector('input[name="reset"]');
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

      listSources: listSources,
      listSourcesInput: listSourcesInput,
      yoursVariantSource: yoursVariantSource,

      listMedium: listMedium,
      listMediumInput: listMediumInput,
      yoursVariantMedium: yoursVariantMedium,

      campaignInput: campaignInput,
      contentInput: contentInput,
      termInput: termInput,

      buttonGenerate: buttonGenerate,
      buttonReset: buttonReset,
      buttonCopy: buttonCopy,
      readyLink: readyLink,
    },
  };
}
ctrl;
