/**
 * user.js
 * User functions that allow the user to select game speed, opponent
 */

setTimeout(gamePrep, 2000);

/** Allows the game to pull in firebase data and gives the user a loading screen for a couple seconds and then a team select menu */
function gamePrep () {
    $(".loadingDiv").fadeOut();
    $(".loadingScreen").fadeIn(1000);

};


/** The teamSelect(x) functions allow the user to view their potential opponent with a minor description. Updates the html accordingly
 * @teamChosen designates which team is selected by the user
 */
function teamSelect (){
    console.log('clicked');
    $(".projTitle").html("Team USA '92")
    $(".projPreview").attr("src", "https://cdn.freebiesupply.com/logos/thumbs/2x/usa-basketball-logo.png");
    $(".projDescription").html("THE Original Dream Team...good luck.");

    teamChosen = 0;
    $(".projButton").fadeIn();
};

function teamSelect1 (){
    console.log('clicked');
    $(".projTitle").html("The Schemers")
    $(".projPreview").attr("src", "https://s3.amazonaws.com/freebiesupply/large/2x/cleveland-cavaliers-logo-transparent.png");
    $(".projDescription").html("Rommel's all-time Cavaliers team.");
    

    teamChosen = 1;
    $(".projButton").fadeIn();
};

function teamSelect2 (){
    console.log('clicked');
    $(".projTitle").html("Lloyd Banks Fan Club")
    $(".projPreview").attr("src", "http://gtalogo.com/img/2091.png");
    $(".projDescription").html("A blast from the past from the early 00s.");

    teamChosen = 2;
    $(".projButton").fadeIn();

};

function teamSelect3 (){
    console.log('clicked');
    $(".projTitle").html("Silk Pajamas")
    $(".projPreview").attr("src", "https://d2w9rnfcy7mm78.cloudfront.net/207396/large_93979ea9f30b49ec1ff7008075e2f076.png");
    $(".projDescription").html("They swear that they're the smoothest.");

    teamChosen = 3;
    $(".projButton").fadeIn();
};
/** Once the Opponent is selected, this function sets the correct teams/stats/players accordingly 
 * @param {teamB} - and properties are updated accordingly. This is the away team, always.
 * @param {teamA} - and properties are updated after the firebase pull, this is always the home team (user team); 
*/
function gameSet () {
        console.log(teamChosen);
        if (teamChosen == 0) {
            teamB.name = "Team USA '92";
            teamB.tag = "USA";
            teamB.players = [player20, player21, player22, player23, player24];
            teamB.offense = 94;
            teamB.defense = 92;
        
            $(".team.B .name").html(teamB.tag);
            $(".team.B- .name-").html(teamB.tag);            

            $(".team.B .logo").attr("src", "https://cdn.freebiesupply.com/logos/thumbs/2x/usa-basketball-logo.png");
            $(".team.B- .logo-").attr("src", "https://cdn.freebiesupply.com/logos/thumbs/2x/usa-basketball-logo.png");

            $(".team.A .name").html(teamA.tag);
            $(".team.A- .name-").html(teamA.tag);            

            if (teamA.logo != ""){
            $(".team.A .logo").attr("src", teamA.logo);
            $(".team.A- .logo-").attr("src", teamA.logo);
            }
        }
        else if (teamChosen == 1) {
            
            teamB.name = "Newark Schemers";
            teamB.tag = "RCM";
            teamB.players = [player5, player6, player7, player8, player9];
            teamB.offense = 93;
            teamB.defense = 91;
           
            $(".team.B .name").html(teamB.tag);
            $(".team.B- .name-").html(teamB.tag);            
            
            $(".team.B .logo").attr("src", "https://s3.amazonaws.com/freebiesupply/large/2x/cleveland-cavaliers-logo-transparent.png");
            $(".team.B- .logo-").attr("src", "https://s3.amazonaws.com/freebiesupply/large/2x/cleveland-cavaliers-logo-transparent.png");

            $(".team.A .name").html(teamA.tag);
            $(".team.A- .name-").html(teamA.tag);            

            if (teamA.logo != ""){
            $(".team.A .logo").attr("src", teamA.logo);
            $(".team.A- .logo-").attr("src", teamA.logo);
            }
        }
        else if (teamChosen == 2) {

            teamB.name = "Lloyd Banks Fan Club";
            teamB.tag = "PAT";
            teamB.players = [player10, player11, player12, player13, player14];
            teamB.offense = 91;
            teamB.defense = 90;
           
            $(".team.B .name").html(teamB.tag);
            $(".team.B- .name-").html(teamB.tag);            

            $(".team.B .logo").attr("src", "http://gtalogo.com/img/2091.png");
            $(".team.B- .logo-").attr("src", "http://gtalogo.com/img/2091.png");

            $(".team.A .name").html(teamA.tag);
            $(".team.A- .name-").html(teamA.tag);            

            if (teamA.logo != ""){
            $(".team.A .logo").attr("src", teamA.logo);
            $(".team.A- .logo-").attr("src", teamA.logo);
            }

        }

        else if (teamChosen == 3) {
                     
            teamB.name = "Silk Pajamas";
            teamB.tag = "DAP";
            teamB.players = [player15, player16, player17, player18, player19];
            teamB.offense = 90;
            teamB.defense = 92;
        
            $(".team.B .name").html(teamB.tag);
            $(".team.B- .name-").html(teamB.tag);            

            $(".team.B .logo").attr("src", "https://d2w9rnfcy7mm78.cloudfront.net/207396/large_93979ea9f30b49ec1ff7008075e2f076.png");
            $(".team.B- .logo-").attr("src", "https://d2w9rnfcy7mm78.cloudfront.net/207396/large_93979ea9f30b49ec1ff7008075e2f076.png");

            $(".team.A .name").html(teamA.tag);
            $(".team.A- .name-").html(teamA.tag);            

            if (teamA.logo != ""){
            $(".team.A .logo").attr("src", teamA.logo);
            $(".team.A- .logo-").attr("src", teamA.logo);
            }
        }

    $(".loadingScreen").fadeOut();
    $(".gameScreen").fadeIn();
};


var userScroll = false;
/** Scrolls the gameLog down according to the user selected scroll speed */
function scrollDown() {
    
    $('.gameBox').animate({scrollTop: $('.gameBox').prop("scrollHeight")}, scrollSpeed);
};

/** The following 3 functions (slowSim, normalSim, fastSim) allow the user to change the speed of the simulation based on milliseconds
 *  @member scrollSpeed - how fast the gameLog scrolls down
 *  @member textSpeed - how fast the game events append to the page
 *  @member logSpeed -  how fast the quarter status appends to the page
 *  @member appendSpeed - how fast the game events fadeIn to the page
 *  @member gameTimeEst - how long the game sim will last from ~30seconds to ~1 minute to ~5 minutes 
 *  @member speedSelected - boolean that tells the game a game speed has been selected

 */
function slowSim () {

    scrollSpeed = 80;
    textSpeed = 365;
    logSpeed = 2430;
    appendSpeed = 1000;
    gameTimeEst = 282000;

    $(".startButton").html("Start Game");
    speedSelected = true;
    $('.slowButton, .normalButton, .fastButton').fadeOut();

    
};

function normalSim () {

    scrollSpeed = 35;
    textSpeed = 60;
    logSpeed = 395;
    appendSpeed = 375;
    gameTimeEst = 47000;


    $(".startButton").html("Start Game");
    speedSelected = true;
    $('.slowButton, .normalButton, .fastButton').fadeOut();

};

function fastSim () {

    scrollSpeed = 20;
    textSpeed = 30;
    logSpeed = 180;
    appendSpeed = 180;
    gameTimeEst = 23000;

    $(".startButton").html("Start Game");
    speedSelected = true;
    $('.slowButton, .normalButton, .fastButton').fadeOut();

};

/** Gives the user information on the state of the game along with the option to see the final stats before the simulation is finished printing to the page */

function notifyUser () {
    $(".statReveal, .boxScoreButton").fadeIn();
};

/** Reveals the game's final stats and removes the notification */
function statReveal () {
    $("tr:even, tr:odd").css("color", "whitesmoke");
    $(".statReveal, .boxScoreButton").fadeOut();
    return
};


/** The simulation will not begin unless the user has selected a simulation speed
 *  @member speedSelected - boolean that tells the game a game speed has been selected
 */
function speedCheck () {
    if (speedSelected == true) {
        jumpBall();
        notifyUser();
        gameFinal();
        $('.startButton').fadeOut();

    }

    else {
        return
    }
};

/** If the user does not want to spoil the results of the game before the simulation is finished printing, the game will automatically reveal the stats once when the sim is finished printing.
*  @member gameTimeEst - variable amount of time for the game to print to the page
*/
function gameFinal () {
setInterval(function(){ statReveal(); }, gameTimeEst);
};

