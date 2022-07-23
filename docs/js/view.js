function UIctrl (ctrl) {
    let link, linkValue, allSource, 
        allSourceInput, allMedium, allMediumInput,
        buttonGo, buttonReset, readyLink;
    //поле ввода Url страницы
    link = document.querySelector("#block__link").lastElementChild;
      
    //поля выбора source
    allSource = document.querySelector("#all_source");
    allSourceInput = document.querySelectorAll("#all_source > li > input");
    
    //поля выбора medium
    allMedium = document.querySelector("#all_medium");
    allMediumInput = document.querySelectorAll("#all_medium > li > input");
    //полe выбора campaign
    campaignInput = document.querySelector("#block__utm_campaign > input[type=text]");
    //полe выбора content
    contentInput = document.querySelector("#block__utm_content > input[type=text]");
    //полe выбора term
    termInput = document.querySelector("#block__utm_term > input[type=text]");

    //кнопка Go
    buttonGo = document.querySelector('#buttons >input[value="Go"]');
    //кнопка "Сброс"
    buttonReset = document.querySelector('#buttons >input[value="Сброс"]');
    //Кнопка Copy
    buttonCopy = document.querySelector('input[value="Copy"]');
    //Поле готовой ссылки
    readyLink = document.querySelector('#result__link').lastElementChild;


    //---------Анимация----------------

    //---------//Анимация------------
    return {
        DOMstrings:{
                link:link,
                
                allSource:allSource,
                allSourceInput:allSourceInput,
                
                allMedium:allMedium,
                allMediumInput:allMediumInput,

                campaignInput:campaignInput,
                contentInput:contentInput,
                termInput:termInput,

                buttonGo:buttonGo,
                buttonReset:buttonReset,
                buttonCopy:buttonCopy,
                readyLink:readyLink

            }
    }
}(ctrl)