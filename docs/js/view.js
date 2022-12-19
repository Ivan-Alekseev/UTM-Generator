function UIctrl(ctrl) {
  let link,
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

  //-------- input section_url_link ------------//
  link = document.querySelector(".section_url_link input");
  //--------// input section_url_link ------------//

  //-------- choice of sources ------------//
  listSources = document.querySelector(".list_sources");
  listSourcesInput = document.querySelectorAll(".list_sources > li > input");
  yoursVariantSource = document.querySelector(
    ".yours_variant_source > input[type=text]"
  );
  //--------// choice of sources ------------//

  //-------- choice of medium ------------//
  listMedium = document.querySelector(".list_medium");
  listMediumInput = document.querySelectorAll(".list_medium > li > input");
  yoursVariantMedium = document.querySelector(
    ".yours_variant_medium > input[type=text]"
  );
  //--------// choice of medium ------------//

  //-------- choice of campaign ------------//
  campaignInput = document.querySelector(".utm_campaign input[type=text]");
  //--------// choice of campaign ------------//

  //-------- choice of content ------------//
  contentInput = document.querySelector(".utm_content input[type=text]");
  //--------// choice of content------------//

  //-------- choice of term ------------//
  termInput = document.querySelector(".utm_term input[type=text]");
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
  readyLink = document.querySelector("#result__link-input > textarea");
  //--------// ready link -------- //

  //-------- Animation ----------------//

  //--------// Animation ----------------//
  return {
    DOMstrings: {
      link: link,

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
