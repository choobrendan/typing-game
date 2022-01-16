var temp = document.querySelector('.time');
var button = document.querySelector("button");
var words = document.querySelector(".words");
var timerDiv = document.querySelector(".time");
var scoreDiv = document.querySelector(".score");
var scores = 0;
var spans;
var type;
var sec = 20;
// declare musics for background and correctly typed words.
var music = new Audio("musics/music.mp3");
var correct = new Audio("musics/correct.mp3");

//function to countdown the time from 0 to 20s
function countdown() {
    scores = 0;
    //once start button clicked, background musics starts to play.
    music.play();
    var timer = setInterval(function () {
        sec--;
        temp.innerHTML = sec;
        if (sec < 0) {
            //pop up message appears to display time out and scores obtained.
            alert("Game over! Your score is " + scores);
            // Reset score to 0
            scoreDiv.innerHTML = "0";
            // Reset word area to blank.
            words.innerHTML = "";
            clearInterval(timer);
            sec = 20;
            //reset time to 20s
            timerDiv.innerHTML = "20";
            // Start button can be clicked again.
            button.disabled = false;
        }
    }, 1000);
}
// selects a random number out of 350 to output the words in the array
function random() {
    words.innerHTML = "";
    var random = Math.floor(Math.random() * (350 - 0 + 1)) + 0;
    var wordArray = list[random].split("");
    for (var i = 0; i < 5; i++) { //Create space to display the words.
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = wordArray[i];
        words.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
}

//list of words available in array named list
const list = ['ANGST', 'ANIMA', 'ANIME', 'ANION', 'ANISE', 'ANKLE', 'ANNAS', 'ANNEX', 'ANNOY',
    'ANNUL', 'ANODE', 'ANOLE', 'ANTIC', 'ANTIS', 'ANTSY', 'ANVIL', 'AORTA', 'APACE', 'APART', 'APEAK',
    'APHID', 'APNEA', 'APPLE', 'APPLY', 'APRON', 'APSES', 'APTER', 'APTLY', 'AQUAS', 'ARBOR', 'ARDOR',
    'AREAL', 'AREAS', 'ARECA', 'ARENA', 'ARGON', 'ARGOT', 'ARGUE', 'ARGUS', 'ARIAS', 'ARILS', 'ARISE',
    'ARMED', 'ARMOR', 'AROMA', 'AROSE', 'ARRAY', 'ARROW', 'ARSES', 'ARSON', 'ARTSY', 'AWARD', 'AWFUL',
    'BADLY', 'BASIC', 'BEACH', 'BEGIN', 'BERET', 'BERGS', 'BERMS', 'BERRY', 'BERTH', 'BERYL', 'BESET',
    'BESTS', 'BETAS', 'BETEL', 'BETTA', 'BEVEL', 'BEZEL', 'BHAJI', 'BIBLE', 'BICEP', 'BIDDY', 'BIDED',
    'BIDES', 'BIDET', 'BIGHT', 'BIGOT', 'BIJOU', 'BIKED', 'BIKER', 'BIKES', 'BILES', 'BILGE', 'BILLS',
    'BILLY', 'BIMBO', 'BINDI', 'BINDS', 'BINGE', 'BINGO', 'BIOME', 'BIOTA', 'BIPOD', 'BIRCH', 'BIRDS',
    'BIRTH', 'BISON', 'BITCH', 'BITER', 'BITES', 'BITSY', 'BITTY', 'BLACK', 'BLADE', 'BLAME', 'BLAND',
    'BLANK', 'BLARE', 'BLASE', 'BLAST', 'BLAZE', 'BLEAK', 'BLEAT', 'BLEBS', 'BLEED', 'BLEEP', 'BLEND',
    'BLESS', 'BLIMP', 'BLIND', 'BLING', 'BLINI', 'BLINK', 'BLIPS', 'BLISS', 'BLITZ', 'BLOAT', 'BLOBS',
    'BLOCK', 'BLOCS', 'BLOGS', 'BLOKE', 'BLOND', 'BLOOD', 'BLOOM', 'CARRY', 'CENTS', 'CHALK', 'CHIEF',
    'CIVIL', 'DRANK', 'DREAM', 'DRESS', 'DRINK', 'DRIVE', 'EARTH', 'EATER', 'ZESTY', 'ZONES', 'ZONAL',
    'ENEMY', 'ENTRY', 'ERROR', 'EVENT', 'FAINT', 'FIFTH', 'FINAL', 'FLIER', 'FLING', 'FLOCK', 'FOCUS',
    'FRESH', 'FRONT', 'FUNNY', 'GASSY', 'GENRE', 'GHOST', 'GIANT', 'GIFTS', 'GIRLS', 'GIVEN', 'GIVES',
    'GLAND', 'GLASS', 'GLOBE', 'GLORY', 'GLOSS', 'GLOVE', 'GLUED', 'GOALS', 'GOATS', 'GOING', 'GOODS',
    'GRACE', 'GRADE', 'GRAIN', 'GRAMS', 'GRAND', 'GRANT', 'GRASS', 'GREEN', 'HAPPY', 'HEART', 'HENCE',
    'HIGHS', 'HILLS', 'HINTS', 'HIRED', 'HOBBY', 'HOLDS', 'HOLES', 'HOLLY', 'HOMES', 'HONEY', 'HONOR',
    'HOOKS', 'HOPED', 'HOPES', 'HORNS', 'HORSE', 'HOSTS', 'HOTEL', 'HOURS', 'HOUSE', 'HOVER', 'HUMAN',
    'JUDGE', 'KINDS', 'KINGS', 'KNEES', 'KNIFE', 'KNOCK', 'KNOTS', 'LAUGH', 'LEMON', 'LEVEL', 'LEVER',
    'LIGHT', 'LIKED', 'LIKES', 'LIMBS', 'LIMIT', 'LINED', 'LINEN', 'LINER', 'LINES', 'LINKS', 'LIONS',
    'LISTS', 'LIVED', 'LIVER', 'LIVES', 'LOADS', 'LOANS', 'LOBBY', 'LOCAL', 'LOCKS', 'LODGE', 'LOGIC',
    'LUCKY', 'MYTHS', 'NEVER', 'OCCUR', 'OFTEN', 'OLIVE', 'OMEGA', 'ONION', 'ONSET', 'OPENS', 'OPERA',
    'ORBIT', 'PASTA', 'PEACE', 'PEDAL', 'PILOT', 'PIZZA', 'PLOWS', 'PLUTO', 'POSED', 'POSET', 'PRESS',
    'PRIDE', 'QUIET', 'QUITS', 'QUOTE', 'RACER', 'RADAR', 'RAZOR', 'RISER', 'ROUND', 'SCARF', 'SCARY',
    'SCENE', 'SCENT', 'SCOOP', 'SCOPE', 'SCORE', 'SCOUT', 'SCRAP', 'SCREW', 'SEALS', 'SENSE', 'SINCE',
    'SOLAR', 'STILL', 'SUITS', 'SUNNY', 'SUPER', 'SURGE', 'SUSHI', 'SWEAR', 'SWEAT', 'SWEET', 'SWEPT',
    'SWIFT', 'SWING', 'SWISS', 'SWORD', 'SYRUP', 'TESLA', 'TIDAL', 'TWICE', 'TWINS', 'TWIST', 'TYPES',
    'TYRES', 'UNCLE', 'UNDER', 'UNION', 'UNTIL', 'UPSET', 'USUAL', 'VAGUE', 'VISIT', 'VOICE', 'WAGES',
    'WALKS', 'WASTE', 'WATCH', 'WATER', 'WEARY', 'WEEKS', 'WHERE', 'WHICH', 'WHILE', 'WHOSE', 'WOMAN',
    'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WRATH', 'WRIST', 'YEARS', 'YEAST', 'YOURS',];

//Once the button is clicked, all the following functions will be called.
button.addEventListener("click", function (e) {
    countdown();
    random();
    //once start button clicked, background musics starts to play.
    button.disabled = true;
});


function typing(e) {
    type = String.fromCharCode(e.which);
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerHTML === type) // if the letter matches with the word
        {
            if (spans[i].classList.contains("bg")) // if the word has been highlight 
            {
                continue;
            }         // if the word does not highlight then the letter is wrong
            else if (spans[i].classList.contains("bg") === false && spans[i - 1] === undefined || spans[i - 1].classList.contains("bg") !== false) {
                spans[i].classList.add("bg");
                break;
            }
        }
    }
    var checker = 0;
    for (var j = 0; j < spans.length; j++) {
        if (spans[j].className === "span bg") {
            checker++;
        }
        if (checker === spans.length) {
            words.classList.add("animated");
            words.classList.add("fadeOut");
            scores++; // increase the number for the scores each correct guess
            scoreDiv.innerHTML = scores; // add the score to the total scores
            correct.play();// the correct music will be played
            document.removeEventListener("keydown", typing, false);
            setTimeout(function () {
                words.className = "words";
                random(); // generate another word
                document.addEventListener("keydown", typing, false);
            }, 400);
        }

    }
}

document.addEventListener("keydown", typing, false);