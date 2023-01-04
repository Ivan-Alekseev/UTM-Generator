(function ctrl (modelCtrl, UIctrl) {
    modelCtrlObj = modelCtrl();
    //--------- Get object with elements --------//
    DOMstrings = UIctrl().DOMstrings;
    //--------- variables ---------//
    let link, linkValue,
        source, medium, campaign, content, term,
        readylink;

    campaign ="";
    content ="";
    term ="";
    //---------// variables ---------//

    //Event - introduction links
    DOMstrings.link.addEventListener("change", getLink);
    
    function getLink () {
        linkValue = DOMstrings.link.value;
        //Сhecking empty string or not
        /* надо сделать чекбокс для включения и отключения поправки*/
        if (linkValue !== '') {
        /* Regexp - все вхождения "/" более 1 раза,
               но не начинающиеся на "https:" или "http:" замеяем на "/" */
               let reg = /(?<!https:|http:)(\/+)/g;
               linkValue = linkValue.replace(reg, "/");
            //Проверка - есть ли в конце строки "/"
            if(linkValue.endsWith("/")) {
                if(linkValue.indexOf("?") > 0){
                    //Убираем "/" в конце
                    linkValue = linkValue.slice(0,-1);
                    //Если не "/?", то заменяем "?" на знак "/?"
                    if(!(linkValue.indexOf("/?") > 0)) {
                        linkValue = linkValue.replace(/\?/, "/?");
                    }
                }
            } else {
                if((linkValue.indexOf("?") > 0)){
                    //Если не "/?", то заменяем "?" на знак "/?"
                    if(!(linkValue.indexOf("/?") > 0)) {
                        linkValue = linkValue.replace(/\?/, "/?");
                    }
                } else {
                    //Добавляем "/" в конце
                    linkValue = `${linkValue}/`;
                }
            }
            DOMstrings.link.value = linkValue;
            link = linkValue;
            
        }
        return link;
    }


    //Event - выбор галочек на source
    DOMstrings.listSources.addEventListener("click", getSource);
    function getSource (e) {
        if (e.target.type == 'radio') {
                
                //События, чтобы стирать все radio метки и оставлять только выбранную
                DOMstrings.listSourcesInput.forEach((element)=> {
                    if (element != e.target) {
                       element.checked = false;
                    }          
                })
                if (e.target.value == ".yours_variant_source") {
                    
                    source = `utm_source=${DOMstrings.yoursVariantSource.value}`;
                } else {
                    source = e.target.value;
                }
                
                return source;
            }
    }


    //Event - выбор галочек на medium
    DOMstrings.listMedium.addEventListener("click", getMedium);
    function getMedium (e) {
        if (e.target.type == 'radio') {
            //События, чтобы стирать все radio метки и оставлять только выбранную
            DOMstrings.listMediumInput.forEach((element)=> {
                
                if (element != e.target) {
                   element.checked = false;
                }          
            })
            if (e.target.value == ".yours_variant_medium") {
                
                medium = `utm_medium=${DOMstrings.yoursVariantMedium.value}`;
                
            } else {
                medium = e.target.value;
            }

            return medium;
        }    
    }
    //Event - выбор галочек на campaign
    DOMstrings.campaignInput.addEventListener("change", getCampaign);
    function getCampaign () {
        
        if (DOMstrings.campaignInput.value !== "" || DOMstrings.campaignInput.value !== indefined) {
            if(DOMstrings.campaignInput.value.indexOf (" ", 0) !==-1) {
                DOMstrings.readyLink.value =
            `Не корректно заполнены поля. Поле utm_campaign не должно иметь пробелов`;
            } else if (DOMstrings.campaignInput.value == "") {
                campaign = "";
            } else {
                campaign = `&utm_campaign=${DOMstrings.campaignInput.value}`;
            }
        }
        
        return campaign;
    }
    //Event - выбор галочек на content
    DOMstrings.contentInput.addEventListener("change", getContent);
    function getContent () {
        
        if (DOMstrings.contentInput.value !== "" || DOMstrings.contentInput.value !== undefined) {
            if(DOMstrings.contentInput.value.indexOf (" ", 0) !==-1) {
                DOMstrings.readyLink.value =
            `Не корректно заполнены поля. Поле utm_content не должно иметь пробелов`;
            } else if (DOMstrings.contentInput.value == "") {
                content = "";
            } else {
                content = `&utm_content=${DOMstrings.contentInput.value}`;
            } 
        }
        
        return content;
    }

    //Event - выбор галочек на term
    DOMstrings.termInput.addEventListener("change", getTerm);
    function getTerm () {
        
        if (DOMstrings.termInput.value !== "" || DOMstrings.termInput.value !== undefined) {
            if(DOMstrings.termInput.value.indexOf (" ", 0) !==-1) {
                DOMstrings.readyLink.value =
            `Не корректно заполнены поля. Поле utm_term не должно иметь пробелов`;
            } else if (DOMstrings.termInput.value == "") {
                term = "";
            } else {
                term = `&utm_term=${DOMstrings.termInput.value}`;
            }
            
        }
        
        return term;
    }

    //Event - нажатие на кнопку Сгенерировать
    DOMstrings.buttonGenerate.addEventListener("click", getResult)
    function getResult (e) {
        
        //Если поля заполнены, то проверяем на знак /?
        if(link && source && medium !== undefined) {
            if (link.indexOf("/?", 1)>0) {
                DOMstrings.readyLink.value = `${link}&${source}&${medium}${campaign}${content}${term}`;
                readylink = DOMstrings.readyLink.value;

            } else {
                DOMstrings.readyLink.value = `${link}?${source}&${medium}${campaign}${content}${term}`;
                readylink = DOMstrings.readyLink.value;
            }
        } else {
            DOMstrings.readyLink.value ="Не корректно заполнены поля";
        }
    }
    //Event - нажатие на кнопку Сброс
    DOMstrings.buttonReset.addEventListener("click", reset)
    function reset () {
        window.location.reload ();
    }
    //Event - нажатие на кнопку Скопировать
    DOMstrings.buttonCopy.addEventListener("click", copy)
    function copy () {
        /* сохраняем текстовое поле в переменную text */
        
       //document.execCommand("copy");
       navigator.clipboard.writeText(readylink);
      //очистим выделение текста, чтобы пользователь "не парился"
      window.getSelection().removeAllRanges();
    }

    
    return {
        getLink:getLink(),
        getSource:getSource(),
        getMedium:getMedium(),

    }


})(modelCtrl, UIctrl);

