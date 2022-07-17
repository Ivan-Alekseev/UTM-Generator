(function ctrl (modelCtrl, UIctrl) {
    modelCtrlObj = modelCtrl();
    ///Получаем объект с элементами
    DOMstrings = UIctrl().DOMstrings;
    //Переменные
    let link,source,medium, readylink,campaign,content,term;
    campaign ="";
    content ="";
    term ="";

    //Событие - введение ссылки
    DOMstrings.link.addEventListener("change", getLink);
    function getLink () {
        //Проверка содержит ли что-то
        if (DOMstrings.link.value !== '') { 
        if (DOMstrings.link.value.indexOf("/?", 1)>0) {
            //Проверка если нашёл /?, то проверяем на // и /
            if (DOMstrings.link.value.indexOf("/?", 1)>0 && DOMstrings.link.value.endsWith("//")) {
                //Убираем знак /
                DOMstrings.link.value = DOMstrings.link.value.slice(0, -2);
                link = DOMstrings.link.value;
            } else if (DOMstrings.link.value.indexOf("/?", 1)>0 && DOMstrings.link.value.endsWith("/")) {
                DOMstrings.link.value = DOMstrings.link.value.slice(0, -1);
                link = DOMstrings.link.value;
            } else {
                link = DOMstrings.link.value;
            }
        } else {
            //Если знака /? нет, то проверяем также на // и /
            if (DOMstrings.link.value.endsWith("//")) {
                DOMstrings.link.value = DOMstrings.link.value.slice(0, -1);
                link = DOMstrings.link.value;
            } else if (!DOMstrings.link.value.endsWith("/")) {

                        DOMstrings.link.value = `${DOMstrings.link.value}/`;
                        link = DOMstrings.link.value;
            } else {
                link = DOMstrings.link.value;
            }
            
        }
    }
        return link;
    }
    //Событие - выбор галочек на source
    DOMstrings.allSource.addEventListener("click", getSource);
    function getSource (e) {
        if (e.target.type == 'radio') {
                
                //События, чтобы стирать все radio метки и оставлять только выбранную
                DOMstrings.allSourceInput.forEach((element)=> {
                    if (element != e.target) {
                       element.checked = false;
                    }          
                })
                source = e.target.value;
                
                return source;
            }
    }
    //Событие - выбор галочек на medium
    DOMstrings.allMedium.addEventListener("click", getMedium);
    function getMedium (e) {
        if (e.target.type == 'radio') {
            //События, чтобы стирать все radio метки и оставлять только выбранную
            DOMstrings.allMediumInput.forEach((element)=> {
                
                if (element != e.target) {
                   element.checked = false;
                }          
            })
            medium =e.target.value;
            
            return medium;
        }    
    }
    //Событие - выбор галочек на campaign
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
    //Событие - выбор галочек на content
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

    //Событие - выбор галочек на term
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

    //Событие - нажатие на кнопку Go
    DOMstrings.buttonGo.addEventListener("click", getResult)
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
    //Событие - нажатие на кнопку сбросить
    DOMstrings.buttonReset.addEventListener("click", reset)
    function reset () {
        window.location.reload ();
    }
    //Событие - нажатие на кнопку Copy
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