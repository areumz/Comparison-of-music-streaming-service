const times = document.getElementById('time');
let date = new Date();
let hours = date.getHours();

let greetings = () => {
    if (hours > 6 && hours <= 12) {
        times.innerText = `아침`;
    }
    else if (hours > 12  && hours <= 17) {
        times.innerText = `오후`;
    }
    else if (hours > 17 && hours < 21) {
        times.innerText = `저녁`;
    }
    else {
        times.innerText = `밤`;
    }
}

greetings();

//Bookmark 공통

const actives = document.querySelectorAll('.active');

    for (let i =0; i< actives.length; i++) {
        actives[i].classList.remove('active');
        actives[i].addEventListener("click", () => {
            actives[i].classList.toggle('active');
        })
        
    }

//Melon
let paints = document.querySelector(".paint");
let melons = document.getElementById('melon-id');
let observermelon = new MutationObserver(fnHandlerDocsmelon),
    elTargetmelon = melons,
    objConfigmelon = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsmelon() {
    paints.innerText = '　Melon';
}
observermelon.observe(elTargetmelon, objConfigmelon);

//Genie
let paints2 = document.querySelector(".paint2");
let genies = document.getElementById('genie-id');
let observergenie = new MutationObserver(fnHandlerDocsgenie),
    elTargetgenie = genies,
    objConfiggenie = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsgenie() {
    paints2.innerText = '　Genie';
}
observergenie.observe(elTargetgenie, objConfiggenie);

//Flo
let paints3 = document.querySelector(".paint3");
let flos = document.getElementById('flo-id');
let observerflo = new MutationObserver(fnHandlerDocsflo),
    elTargetflo = flos,
    objConfigflo = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsflo() {
    paints3.innerText = '　Flo';
}
observerflo.observe(elTargetflo, objConfigflo);

//Bugs
let paints4 = document.querySelector(".paint4");
let bugss = document.getElementById('bugs-id');
let observerbugs = new MutationObserver(fnHandlerDocsbugs),
    elTargetbugs = bugss,
    objConfigbugs = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsbugs() {
    paints4.innerText = '　Bugs';
}
observerbugs.observe(elTargetbugs, objConfigbugs);

//Vibe
let paints5 = document.querySelector(".paint5");
let vibes = document.getElementById('vibe-id');
let observervibe = new MutationObserver(fnHandlerDocsvibe),
    elTargetvibe = vibes,
    objConfigvibe = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsvibe() {
    paints5.innerText = '　Vibe';
}
observervibe.observe(elTargetvibe, objConfigvibe);

//Applemusic
let paints6 = document.querySelector(".paint6");
let applemusics = document.getElementById('applemusic-id');
let observerapplemusic = new MutationObserver(fnHandlerDocsapplemusic),
    elTargetapplemusic = applemusics,
    objConfigapplemusic = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsapplemusic() {
    paints6.innerText = '　Apple music';
}
observerapplemusic.observe(elTargetapplemusic, objConfigapplemusic);

//Spotify
let paints7 = document.querySelector(".paint7");
let spotifys = document.getElementById('spotify-id');
let observerspotify = new MutationObserver(fnHandlerDocsspotify),
    elTargetspotify = spotifys,
    objConfigspotify = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsspotify() {
    paints7.innerText = '　Spotify';
}
observerspotify.observe(elTargetspotify, objConfigspotify);

//Youtube Music
let paints8 = document.querySelector(".paint8");
let youtubemusics = document.getElementById('youtubemusic-id');
let observeryoutubemusic = new MutationObserver(fnHandlerDocsyoutubemusic),
    elTargetyoutubemusic = youtubemusics,
    objConfigyoutubemusic = {
        childlist: false,
        subtree: false,
        attributes: true,
        CharacterData: false
    };
function fnHandlerDocsyoutubemusic() {
    paints8.innerText = '　Youtube music';
}
observeryoutubemusic.observe(elTargetyoutubemusic, objConfigyoutubemusic);
