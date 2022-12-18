function UIctrl (ctrl) {
    let link, linkValue, listSources, 
        listSourcesInput, listMedium, listMediumInput,
        buttonGo, buttonReset, readyLink, yoursVariantSource;

    //--------input section_url_link------------//
    link = document.querySelector(".section_url_link input");
    //--------// input section_url_link------------//

    //--------choice of sources------------//
    listSources = document.querySelector(".list_sources");
    listSourcesInput = document.querySelectorAll(".list_sources > li > input");
    yoursVariantSource = document.querySelector(".yours_variant_source > input[type=text]");
    //--------// choice of sources------------//

    //--------choice of medium------------//
    listMedium = document.querySelector(".list_medium");
    listMediumInput = document.querySelectorAll(".list_medium > li > input");
    MyVariantMedium = document.querySelector("#My_variant_medium > input[type=text]");
    //--------// choice of medium------------//

    //полe выбора campaign
    campaignInput = document.querySelector("#block__utm_campaign > input[type=text]");
    //полe выбора content
    contentInput = document.querySelector("#block__utm_content > input[type=text]");
    //полe выбора term
    termInput = document.querySelector("#block__utm_term > input[type=text]");

    //кнопка "Сгенерировать"
    buttonGo = document.querySelector('input[name="generate"]');
    //кнопка "Сброс"
    buttonReset = document.querySelector('input[name="reset"]');
    //Кнопка "Скопировать"
    buttonCopy = document.querySelector('input[name="сopy"]');
    //Поле готовой ссылки
    readyLink = document.querySelector('#result__link-input > textarea');


    //---------Анимация----------------

    //---------//Анимация------------
    return {
        DOMstrings:{
                link:link,
                
                listSources:listSources,
                listSourcesInput:listSourcesInput,
                yoursVariantSource:yoursVariantSource,

                listMedium:listMedium,
                listMediumInput:listMediumInput,
                MyVariantMedium:MyVariantMedium,

                campaignInput:campaignInput,
                contentInput:contentInput,
                termInput:termInput,

                buttonGo:buttonGo,
                buttonReset:buttonReset,
                buttonCopy:buttonCopy,
                readyLink:readyLink,

                

            }
    }
}(ctrl)