let modelCtrl = function () {
    let data, one;
    data = {
            sitelink:"sew-world.ru",
            name_utm:{
                utm_source: "utm_source",
                utm_medium: "utm_medium",
                utm_campaign: "utm_campaign",
                utm_content: "utm_content",
                utm_term: "utm_term"
            },
            source : {
                myTarget: "mytarget",
                yandex: "yandex",
                google: "google",
                vk: "vk",
                yandexMap: "yandex_map",
                sms: "sms",
                otherSource: "",
            },
            medium : {
                cpm:"cpm",
                cpc:"cpc",
                display:"display",
                social_post:"social_post",
                referral:"referral",
                social:"social"
            }
            };

//Условие если есть знак "/" в конце страницы или нет что делать
//Условие есть знак "?" или нет в странице  что делать
//если да - проставить в метке уже не ?, а &
//Фукнция объединения объектов
    

return {
    
    data:data,
    }
}