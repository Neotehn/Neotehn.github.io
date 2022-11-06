var language;
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    console.log("Get language: " + localStorage.getItem('language'));
    $.ajax({
        url:  '/frontEnd/Javascript/internationalization/' +  localStorage.getItem('language') + '.json',
//        url:  '/Tree4Free/frontEnd/Javascript/internationalization/' +  localStorage.getItem('language') + '.json',
        dataType: 'json', async: false,
        success: function (lang) { language = lang }
    });
    console.log("Got file: " + language);
}

function setLanguage(lang) {
    console.log("Set language to: " + lang);
    localStorage.setItem('language', lang);
    fillText();
}

function fillText() {
    getLanguage();
    $('#lang-home').text(language.home);
    $('#lang-concept').text(language.concept);
    $('#lang-why-us').text(language.whyUs);
    $('#lang-features').text(language.features);
    $('#lang-join').text(language.join);
    $('#lang-about-us').text(language.aboutUs);
    $('#lang-contact').text(language.contact);

    $('#lang-home-mobile').text(language.home);
    $('#lang-concept-mobile').text(language.concept);
    $('#lang-why-us-mobile').text(language.whyUs);
    $('#lang-features-mobile').text(language.features);
    $('#lang-join-mobile').text(language.join);
    $('#lang-about-us-mobile').text(language.aboutUs);
    $('#lang-contact-mobile').text(language.contact);

    $('#lang-concept-title').text(language.conceptTitle);
    $('#lang-concept-text-one').text(language.conceptTextOne);
    $('#lang-concept-text-two').text(language.conceptTextTwo);

    $('#lang-why-us-title').text(language.whyUs);
    $('#lang-why-us-general').text(language.whyUsGeneral);
    $('#lang-why-us-earnings').text(language.whyUsEarnings);
    $('#lang-why-us-earnings-answer').text(language.whyUsEarningsAnswer);
    $('#lang-why-us-participate').text(language.whyUsParticipate);
    $('#lang-why-us-participate-answer').text(language.whyUsParticipateAnswer);
    $('#lang-why-us-where').text(language.whyUsWhere);
    $('#lang-why-us-where-answer').text(language.whyUsWhereAnswer);
    $('#lang-why-us-transparency').text(language.whyUsTransparency);
    $('#lang-why-us-transparency-general').text(language.whyUsTransparencyGeneral);
    $('#lang-why-us-transparency-one').text(language.whyUsTransparencyOne);
    $('#lang-why-us-transparency-two').text(language.whyUsTransparencyTwo);
    $('#lang-why-us-transparency-three').text(language.whyUsTransparencyThree);
    $('#lang-why-us-partner').text(language.whyUsPartner);
    $('#lang-why-us-partner-one').text(language.whyUsPartnerAnswerOne);
    $('#lang-why-us-partner-two').text(language.whyUsPartnerAnswerTwo);
    $('#lang-why-us-partner-three').text(language.whyUsPartnerAnswerThree);
    $('#lang-why-us-partner-four').text(language.whyUsPartnerAnswerFour);
    $('#lang-why-us-app').text(language.whyUsApp);
    $('#lang-why-us-app-one').text(language.whyUsAppOne);
    $('#lang-why-us-app-two').text(language.whyUsAppTwo);
    $('#lang-why-us-app-three').text(language.whyUsAppThree);

    $('#dietary-prefs').text(language.dietaryPrefs);
    $('#dietary-prefs-text').text(language.dietaryPrefsText);
    $('#overview').text(language.overview);
    $('#overview-text').text(language.overviewText);
    $('#menu').text(language.menu);
    $('#menu-text').text(language.menuText);

    $('#join-us').text(language.join);
    $('#join-as-restaurant').text(language.joinAsRestaurant);
    $('#join-intro').text(language.joinIntro);
    $('#email').text(language.email);
    $('#address').text(language.address);
    $('#name').text(language.name);
    $('#add-info').text(language.addInfo);
    $('#send').text(language.send);
    $('#join-as-guest').text(language.joinAsGuest);
    $('#join-guest-text').text(language.joinAsGuestText);

    $('#who-team').text(language.whoTeam);
    $('#who-team-one').text(language.whoTeamOne);
    $('#who-team-two').text(language.whoTeamTwo);
    $('#alban-text').text(language.albanText);
    $('#renan-text').text(language.renanText);
    $('#ramon-text').text(language.ramonText);
    $('#marc-text').text(language.marcText);
    $('#josi-text-one').text(language.josiTextOne);
    $('#josi-text-two').text(language.josiTextTwo);
    $('#gylian-text').text(language.gylianText);

    $('#lang-contact-title').text(language.contact);
}

$(document).ready(function(){
    fillText();
});