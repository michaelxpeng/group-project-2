/**game.js 
 * This is the basketball game simulation
 * Uses user.js to update variables in the game based on user preference
 * Uses firebase to pull in data for the user team
 */

 /** Initial Firebase Information pull
  * The user will see a loading screen and will have to select an opponent
  * Ensures that the game will not have an error due to undefined variables
  * Pushes all required data to global arrays so the game can access them when ready
  * @member userPlayers - array of player objects from firebase
  * @member userTeamName - array that stores the string for user team name
  * @member userTeamLogo - array that stores the string for  imageURL for the logo
  * @member userTeamTag - array that stores the string for the user team abbreviation
  */
$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyC_PVkwDiphyNCRdbZ63bDZ95-Lj7cP0r8",
        authDomain: "rcb-fantasydraft.firebaseapp.com",
        databaseURL: "https://rcb-fantasydraft.firebaseio.com",
        projectId: "rcb-fantasydraft",
        storageBucket: "rcb-fantasydraft.appspot.com",
        messagingSenderId: "308196846996"
    };
    firebase.initializeApp(config);
    var dataRef = firebase.database();
    console.log(dataRef);
    var ref = dataRef.ref();
    // ref.on('value', gotData, errData);

    ref.on("child_added", function(snapshot, prevChildKey) {
        var team = snapshot.val();
        // console.log(snapshot.key);

        var teamDiv = $('<div>').addClass('saved-team');
        if(team.selected === true){
            teamDiv.addClass('selected-team')
            var player0 = team.pg;
            console.log(player0);
            var player1 = team.sg;
            console.log(player1);
            var player2 = team.sf;
            console.log(player2);
            var player3 = team.pf;
            console.log(player3);
            var player4 = team.c;
            console.log(player4);
            var TeamName = team.name;
           console.log(TeamName);
           var TeamLogo = team.image;
           console.log(TeamLogo);
           var TeamTag = team.tag;
           console.log(TeamTag);

            userPlayers.push(player0);
            userPlayers.push(player1);
            userPlayers.push(player2);
            userPlayers.push(player3);
            userPlayers.push(player4);

            userTeamName.push(TeamName);
            userTeamLogo.push(TeamLogo);
            userTeamTag.push(TeamTag);
        }




      });

    // function gotData(data){
    //     var team = data.val();
    //     var keys = Object.keys(team);
    //     // keys will equal to each user team name?
    //     console.log(keys);


    //     for (var i = 0; i < keys.length; i++) {
    //         var k = keys[i];
    //         var player0 = team[k].pg;
    //         console.log(player0);
    //         var player1 = team[k].sg;
    //         console.log(player1);
    //         var player2 = team[k].sf;
    //         console.log(player2);
    //         var player3 = team[k].pf;
    //         console.log(player3);
    //         var player4 = team[k].c;
    //         console.log(player4);

    //     };
     
       
    //     userPlayers.push(player0);
    //     userPlayers.push(player1);
    //     userPlayers.push(player2);
    //     userPlayers.push(player3);
    //     userPlayers.push(player4);


    // }
    // function errData(err){
    //     console.log("Error");
    //     console.log(err);
    // }
});


// console.log(player0);

var userPlayers = [];
var userTeamName = [];
// console.log(userTeamName);
var userTeamLogo = [];
// console.log(userTeamLogo);
var userTeamTag = [];
// console.log(userTeamTag);
//Away team variable declarations, will be changed by user.js
var awayName = "Default";
var awayTag  = "AWAY";
var awayPlayers = [];
var awayOFF = 90;
var awayDEF = 90;
/** This function occurs during the loading screen, and allows the game to register the selected team into the game. */
//timeout gives us time for the async firebase pull
setTimeout(function(){
// console.log(userPlayers);
// console.log(userPlayers[0]);
this.player0 = userPlayers[0];
this.player1 = userPlayers[1];
this.player2 = userPlayers[2];
this.player3 = userPlayers[3];
this.player4 = userPlayers[4];
// console.log(player0);
}, 2000)



//Can replace this.gameLogdotpush with consoledotlog

// Team Template
// var teamA = {
//     name:"",
//     tag: "",
//     logo:"image",
//     players: [],
//     possession: true,
//     wonTipOff: false,
//     defense: 90,
//     offense: 92,
//     FGM:0,
//     FGA:0,
//     ThreePA:0,
//     ThreePM:0,
//     FTM:0,
//     FTA:0,
//     PTS:0,
//     REB:0,
//     OREB:0,
//     AST:0,
//     STL:0,
//     TOV:0,
//     BLK:0,     
//     FLS:0,
//     Q1PTS:0,
//     Q2PTS:0,
//     Q3PTS:0,
//     Q4PTS:0,
//     OTPTS:0
// }



//Rommel Team
var player5 = {
    name: "Kyrie Irving",
    year: "2017-2018",
    position: 1,
    TSpct: .610,
    ThreePAr: .374,
    ThreePct: .408,
    FTr: .240,
    FTpct: .889,
    ORBpct: 1.9,
    DRBpct: 10.8,
    TRBpct: 6.4,
    ASTpct: 30.7,
    STLpct: 1.7,
    BLKpct: 0.7,
    TOVpct: 10.4,
    USGpct: 31.0,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0
};

var player6 = {
    name: "Kyle Korver",
    year: "2014-2015",
    position: 2,
    TSpct: .699,
    ThreePAr: .748,
    ThreePct: .492,
    FTr: .197,
    FTpct: .898,
    ORBpct: .7,
    DRBpct: 13.3,
    TRBpct: 7.2,
    ASTpct: 12.1,
    STLpct: 1.1,
    BLKpct: 1.5,
    TOVpct: 14.1,
    USGpct: 14.4,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0

};

var player7 = {
    name: "LeBron James",
    year: "2017-2018",
    position: 3,
    TSpct: .621,
    ThreePAr: .257,
    ThreePct: .367,
    FTr: .336,
    FTpct: .731,
    ORBpct: 3.7,
    DRBpct: 22.3,
    TRBpct: 13.1,
    ASTpct: 44.4,
    STLpct: 1.9,
    BLKpct: 2.0,
    TOVpct: 16.1,
    USGpct: 31.6,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0

};

var player8 = {
    name: "Kevin Love",
    year: "2017-2018",
    position: 4,
    TSpct: .614,
    ThreePAr: .453,
    ThreePct: .415,
    FTr: .365,
    FTpct: .880,
    ORBpct: 7.0,
    DRBpct: 29.8,
    TRBpct: 18.6,
    ASTpct: 9.8,
    STLpct: 1.3,
    BLKpct: 1.2,
    TOVpct: 10.9,
    USGpct: 25.1,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0

};

var player9 = {
    name: "Ben Wallace",
    year: "2003-04",
    position: 5,
    TSpct: .486,
    ThreePAr: .014,
    FTr: .432,
    FTpct: .490,
    ORBpct: 11.9,
    DRBpct: 34.9,
    TRBpct: 23.2,
    ASTpct: 6.9,
    STLpct: 2.0,
    BLKpct: 5.9,
    TOVpct: 14.5,
    USGpct: 10.2,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0

};
//Pat's Team
var player10 = {
    name: "Stephen Curry",
    year: "2015-16",
    position: 1,
    TSpct: .669 ,
    ThreePAr: .554,
    ThreePct: .454,
    FTr: .250,
    FTpct: .908,
    ORBpct: 2.9 ,
    DRBpct: 13.6, 
    TRBpct: 8.6 ,
    ASTpct: 33.7 ,
    STLpct: 3.0,
    BLKpct: .4,
    TOVpct: 12.9, 
    USGpct: 32.6,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player11 = {
    name: "Dwyane Wade",
    year: "2008-09",
    position: 2,
    TSpct: .574 ,
    ThreePAr: .160,
    ThreePct: .300,
    FTr: .250,
    FTpct: .761,
    ORBpct: 3.5 ,
    DRBpct: 12.2, 
    TRBpct: 7.8 ,
    ASTpct: 40.3 ,
    STLpct: 3.0,
    BLKpct: 2.8,
    TOVpct: 11.6, 
    USGpct: 36.2,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player12 = {
    name: "Andre Iguodala",
    year: "2007-2008",
    position: 3 ,
    TSpct: .543 ,
    ThreePAr: .240 ,
    ThreePct: .307 ,
    FTr: .396 ,
    FTpct: .724 ,
    ORBpct: 3.1 ,
    DRBpct: 13.4 , 
    TRBpct: 8.2 ,
    ASTpct: 20.3 ,
    STLpct: 2.8 ,
    BLKpct: 1.2,
    TOVpct: 12.5, 
    USGpct: 23.8,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player13 = {
    name: "Dirk Nowitzki",
    year:  "2007-08",
    position: 4,
    TSpct: .585,
    ThreePAr: .167,
    ThreePct: .359 ,
    FTr: .414 ,
    FTpct: .879 ,
    ORBpct: 4.1,
    DRBpct: 22.8, 
    TRBpct: 13.8,
    ASTpct: 17.8,
    STLpct: 1.0,
    BLKpct: 1.9,
    TOVpct: 9.3, 
    USGpct: 28.8,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player14 = {
    name: "Marcus Camby" ,
    year: "2005-06",
    position: 5,
    TSpct: .499,
    ThreePAr: .017,
    ThreePct: .091,
    FTr: .240,
    FTpct: .712,
    ORBpct: 8.4,
    DRBpct: 33.3, 
    TRBpct: 21.0,
    ASTpct: 10.2,
    STLpct: 2.2,
    BLKpct: 7.5,
    TOVpct: 11.4, 
    USGpct: 19.5,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

//Dapo Team
var player15 = {
    name: "Chris Paul",
    year: "2008-2009",
    position: 1,
    TSpct: .599,
    ThreePAr: .140,
    ThreePct: .364 ,
    FTr: .418,
    FTpct: .868,
    ORBpct: 2.8,
    DRBpct: 14.6, 
    TRBpct: 8.7,
    ASTpct: 54.5,
    STLpct: 3.9,
    BLKpct: .3,
    TOVpct: 12.1, 
    USGpct: 27.5,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player16 = {
    name: "J.J Redick" ,
    year: "2015-2016",
    position: 2 ,
    TSpct: .632,
    ThreePAr: .478,
    ThreePct: .475,
    FTr: .233,
    FTpct: .888,
    ORBpct: .5,
    DRBpct: 6.6, 
    TRBpct: 3.6,
    ASTpct: 8.6,
    STLpct: 1.0,
    BLKpct: .2,
    TOVpct: 7.4, 
    USGpct: 22.6,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player17 = {
name: "Kevin Durant",
    year: "2010-11",
    position: 3,
    TSpct: .589,
    ThreePAr: .269,
    ThreePct: .350,
    FTr: .439,
    FTpct: .880,
    ORBpct: 2.3,
    DRBpct: 17.7, 
    TRBpct: 10.3,
    ASTpct: 13.2,
    STLpct: 1.5,
    BLKpct: 1.8,
    TOVpct: 10.6, 
    USGpct: 30.6,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player18 = {
    name: "Draymond Green",
    year: "2015-2016",
    position: 4,
    TSpct: .587,
    ThreePAr: .315,
    ThreePct: .388,
    FTr: .402,
    FTpct: .696,
    ORBpct: 5.5,
    DRBpct: 23.0, 
    TRBpct: 14.7,
    ASTpct: 29.0,
    STLpct: 2.0,
    BLKpct: 3.0,
    TOVpct: 21.2, 
    USGpct: 18.8,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

var player19 = {
    name: "Anthony Davis",
    year: "2017-2018",
    position: 5 ,
    TSpct: .612,
    ThreePAr: .111,
    ThreePct: .340,
    FTr: .409,
    FTpct: .828,
    ORBpct: 7.7,
    DRBpct: 24.8, 
    TRBpct: 16.5,
    ASTpct: 10.8,
    STLpct: 1.7,
    BLKpct: 5.1,
    TOVpct: 8.6, 
    USGpct: 30.0 ,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0

};

//Team USA
var player20 = {
    name: "Magic Johnson",
    year: "1990-91",
    position: 1,
    TSpct: .623,
    ThreePAr: .055,
    ThreePct: .320,
    FTr: .587,
    FTpct: .906,
    ORBpct: 4.3,
    DRBpct: 16.9,
    TRBpct: 10.9,
    ASTpct: 49.3,
    STLpct: 1.8,
    BLKpct: 0.3,
    TOVpct: 20.4,
    USGpct: 22.9,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0
};

var player21 = {
    name: "Michael Jordan",
    year: "1991-92",
    position: 2,
    TSpct: .579,
    ThreePAr: .055,
    ThreePct: .270,
    FTr: .325,
    FTpct: .832,
    ORBpct: 3.5,
    DRBpct: 15.3,
    TRBpct: 9.5,
    ASTpct: 25.7,
    STLpct: 3.0,
    BLKpct: 1.5,
    TOVpct: 8.8,
    USGpct: 31.7,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0
};

var player22 = {
    name: "Larry Bird",
    year: "1991-92",
    position: 3,
    TSpct: .547,
    ThreePAr: .169,
    ThreePct: .406,
    FTr: .214,
    FTpct: .926,
    ORBpct: 3.2,
    DRBpct: 24.6,
    TRBpct: 14.4,
    ASTpct: 26.9,
    STLpct: 1.3,
    BLKpct: 1.2,
    TOVpct: 13.1,
    USGpct: 24.7,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0
};

var player23 = {
    name: "Charles Barkley",
    year: "1991-92",
    position: 4,
    TSpct: .612,
    ThreePAr: .122,
    ThreePct: .234,
    FTr: .580,
    FTpct: .695,
    ORBpct: 10.9,
    DRBpct: 22.0,
    TRBpct: 16.5,
    ASTpct: 18.1,
    STLpct: 2.4,
    BLKpct: 0.9,
    TOVpct: 14.3,
    USGpct: 25.1,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0
};

var player24 = {
    name: "Patrick Ewing",
    year: "1991-92",
    position: 5,
    TSpct: .563,
    ThreePAr: .004,
    ThreePct: .167,
    FTr: .335,
    FTpct: .738,
    ORBpct: 8.4,
    DRBpct: 24.9,
    TRBpct: 16.8,
    ASTpct: 8.5,
    STLpct: 1.4,
    BLKpct: 5.0,
    TOVpct: 10.7,
    USGpct: 27.2,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0
};

//Other test time
// var player5 = {
//     name: "Russell Westbrook",
//     year: "2016-2017",
//     position: 30.6,
//     TSpct: .554,
//     ThreePAr: .300,
//     ThreePct: .343,
//     FTr: .433,
//     FTpct: .845,
//     ORBpct: 5.4,
//     DRBpct: 28.8,
//     TRBpct: 17.1,
//     ASTpct: 57.3,
//     STLpct: 2.3,
//     BLKpct: .9,
//     TOVpct: 15.9,
//     USGpct: 41.7,
//     FGM: 0,
//     FGA: 0,
//     ThreePA: 0,
//     ThreePM: 0,
//     FTM: 0,
//     FTA: 0,
//     PTS: 0,
//     REB: 0,
//     OREB: 0,
//     AST: 0,
//     STL: 0,
//     TOV: 0,
//     BLK: 0,
//     FLS: 0
// };

// var player6 = {
//     name: "Klay Thompson",
//     year: "2014-2015",
//     position: 20.8,
//     TSpct: .591,
//     ThreePAr: .420,
//     ThreePct: .439,
//     FTr: .197,
//     FTpct: .879,
//     ORBpct: 1.2,
//     DRBpct: 9.4,
//     TRBpct: 5.4,
//     ASTpct: 14.6,
//     STLpct: 1.7,
//     BLKpct: 1.8,
//     TOVpct: 9.5,
//     USGpct: 27.6,
//     FGM: 0,
//     FGA: 0,
//     ThreePA: 0,
//     ThreePM: 0,
//     FTM: 0,
//     FTA: 0,
//     PTS: 0,
//     REB: 0,
//     OREB: 0,
//     AST: 0,
//     STL: 0,
//     TOV: 0,
//     BLK: 0,
//     FLS: 0
// };

// var player7 = {
//     name: "Carmelo Anthony",
//     year: "2012-13",
//     position: 24.8,
//     TSpct: .560,
//     ThreePAr: .278,
//     ThreePct: .379,
//     FTr: .344,
//     FTpct: .830,
//     ORBpct: 6.1,
//     DRBpct: 15.9,
//     TRBpct: 10.8,
//     ASTpct: 14.1,
//     STLpct: 1.1,
//     BLKpct: 1.1,
//     TOVpct: 9.3,
//     USGpct: 35.6,
//     FGM: 0,
//     FGA: 0,
//     ThreePA: 0,
//     ThreePM: 0,
//     FTM: 0,
//     FTA: 0,
//     PTS: 0,
//     REB: 0,
//     OREB: 0,
//     AST: 0,
//     STL: 0,
//     TOV: 0,
//     BLK: 0,
//     FLS: 0

// };

// var player8 = {
//     name: "Al Horford",
//     year: "2016-2017",
//     position: 17.7,
//     TSpct: .553,
//     ThreePAr: .302,
//     ThreePct: .355,
//     FTr: .169,
//     FTpct: .800,
//     ORBpct: 6.3,
//     DRBpct: 18.6,
//     TRBpct: 11.8,
//     ASTpct: 24.4,
//     STLpct: 1.2,
//     BLKpct: 3.2,
//     TOVpct: 11.8,
//     USGpct: 19.7,
//     FGM: 0,
//     FGA: 0,
//     ThreePA: 0,
//     ThreePM: 0,
//     FTM: 0,
//     FTA: 0,
//     PTS: 0,
//     REB: 0,
//     OREB: 0,
//     AST: 0,
//     STL: 0,
//     TOV: 0,
//     BLK: 0,
//     FLS: 0
// };

// var player9 = {
//     name: "Steven Adams",
//     year: "2016-2017",
//     position: 16.5,
//     TSpct: .589,
//     ThreePAr: .002,
//     ThreePct: .000,
//     FTr: .392,
//     FTpct: .611,
//     ORBpct: 13.0,
//     DRBpct: 15.4,
//     TRBpct: 14.2,
//     ASTpct: 5.4,
//     STLpct: 1.8,
//     BLKpct: 2.6,
//     TOVpct: 16.0,
//     USGpct: 16.2,
//     FGM: 0,
//     FGA: 0,
//     ThreePA: 0,
//     ThreePM: 0,
//     FTM: 0,
//     FTA: 0,
//     PTS: 0,
//     REB: 0,
//     OREB: 0,
//     AST: 0,
//     STL: 0,
//     TOV: 0,
//     BLK: 0,
//     FLS: 0

// };

//Rommel's Test Team
// var teamA = {
//     name: "Cleveland Steamers",
//     tag: "CLE",
//     players: [player0, player1, player2, player3, player4],
//     possession: true,
//     wonTipOff: false,
//     defense: 90,
//     offense: 92,
//     FGM: 0,
//     FGA: 0,
//     ThreePA: 0,
//     ThreePM: 0,
//     FTM: 0,
//     FTA: 0,
//     PTS: 0,
//     REB: 0,
//     OREB: 0,
//     AST: 0,
//     STL: 0,
//     TOV: 0,
//     BLK: 0,
//     FLS: 0,
//     Q1PTS: 0,
//     Q2PTS: 0,
//     Q3PTS: 0,
//     Q4PTS: 0,
//     OTPTS: 0
// }


//User Team
var teamA = {
    name: userTeamName,
    tag: userTeamTag,
    logo:userTeamLogo,
    players: userPlayers,
    possession: true,
    wonTipOff: false,
    defense: 90,
    offense: 92,
    FGM:0,
    FGA:0,
    ThreePA:0,
    ThreePM:0,
    FTM:0,
    FTA:0,
    PTS:0,
    REB:0,
    OREB:0,
    AST:0,
    STL:0,
    TOV:0,
    BLK:0,     
    FLS:0,
    Q1PTS:0,
    Q2PTS:0,
    Q3PTS:0,
    Q4PTS:0,
    OTPTS:0
}


//Away Team
var teamB = {
    name: awayName,
    tag: awayTag,
    players: awayPlayers,
    possession: false,
    wonTipOff: false,
    defense: awayDEF,
    offense: awayOFF,
    FGM: 0,
    FGA: 0,
    ThreePA: 0,
    ThreePM: 0,
    FTM: 0,
    FTA: 0,
    PTS: 0,
    REB: 0,
    OREB: 0,
    AST: 0,
    STL: 0,
    TOV: 0,
    BLK: 0,
    FLS: 0,
    Q1PTS: 0,
    Q2PTS: 0,
    Q3PTS: 0,
    Q4PTS: 0,
    OTPTS: 0
}

//Game Propositionties 
//Teams
this.teams = [teamA, teamB];
//Team array allows the sim to switch posessions while recording stats for each team
//PossessionArrow is set at the tip and helps determine which team is on offense amd v/v
this.possessionArrow;
this.OFFteam
this.DEFteam
//The Sim relies on sorting the offensive/defensive teams and compares stats to determine the possession outcome
this.selectedPlayerOff = "";
this.selectedPlayerDef = "";
this.selectedPlayerAST = "";
this.selectedPlayerSTL = "";
this.selectedPlayerBLK = "";
this.selectedPlayerDREB = "";
this.selectedPlayerOREB = "";

//Team scoring arrays for scoreboard updates
this.gameLogA = [0];
this.gameLogB = [0];
this.gameLogAQ1 = [];
this.gameLogAQ2 = [];
this.gameLogAQ3 = [];
this.gameLogAQ4 = [];
this.gameLogAOT = [];
this.gameLogBQ1 = [];
this.gameLogBQ2 = [];
this.gameLogBQ3 = [];
this.gameLogBQ4 = [];
this.gameLogBOT = [];
//Event Log
this.gameLog = [];
this.quarterLog = [];
//Stats to be updated on screen using the gameLog numbers
var pointLogA = 0;
var pointLogB = 0;



//Point Differentials for scoreboard and tiebreakers
this.diff = Math.abs((this.teamA.PTS) - (this.teamB.PTS));
this.teamA.DIFF = (this.diff);
this.teamB.DIFF = (-(this.diff));


//Clock
this.pace = 48 / (240); // Time elapsed position possession
this.gameTime = (48); // Game clock, in minutes
this.gameTime = moment.duration(.0008, 'minutes'); //moment.js allows printing of mm:ss timestamps for each event
this.quarterLength = (12); //in minutes
this.quarter = 1; //which quarter
this.overtimes = 0; // Number of overtime positioniods that have taken place

//Default sim speed
// var simSpeed; 
var userSimSpeed = 1;

//User selects these speeds with the buttons
var textSpeed
var logSpeed
var appendSpeed
var scrollSpeed
var gameTimeEst
var speedSelected = false;

var teamChosen




//Shot variables help determine what shot is taken and helps in recording stats, even for free throws and and 1s. 
this.playtype = "";
this.shot = "";
this.amount // is FTS rewarded
this.liveBall //To curb blocks/steals/turnovers, sometimes the ball goes out of bounds 



//A lot of this is based on the BasketballGM but when I tried running a sim on my console fo the first time, the game wasn't working,
//Once I had a feel for how the game flowed, I created my own style of game. And since I'm a big basektball nerd, I used advanced stats
//to get a more realistic reflection of player tendencies and effectiveness
//The game selects OFF/DEF players, compares stats and if the result is greater than a random number, any play can happen.
//To avoid the same players being used all the time I have it randomly select a player on each team after the initial check for shot 
// distribution


//On click the game tips off, result is already decided onclick but is presented to the user/console dynamically

//Start the game and set the possession, whichever team wins the jump gets 1st possession 
//This also starts every OT possession
/** This function begins the game 
 * variables within are described above
 */
function jumpBall() {
    var jumpCheck = (Math.floor(Math.random() * 2) == 0);
    if (jumpCheck != 0) {
        //home team gets poss
        this.possessionArrow = true;
        this.OFFteam = this.teams[0];
        this.OFFteam.wonTipOff = true;
        this.DEFteam = this.teams[1];
    } else {
        //away team gets poss
        this.possessionArrow = false;
        this.OFFteam = this.teams[1];
        this.OFFteam.wonTipOff = true;
        this.DEFteam = this.teams[0];
    }
    //Set Time
    minTommss();
    this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.OFFteam.players[4].name + " won the tip!");
    this.gameLog.push(this.OFFteam.tag + " - " + this.OFFteam.name + " has possession.");
    this.liveBall = true;
    //Game chain begins
    simPossession();
};

//Determines Winner
//If the game is tied, it goes to OT
function checkWinner() {


    if (this.teamA.PTS > this.teamB.PTS) {
        this.gameLog.push("0:00 " + this.teamA.name + " won the game " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
    }
    else if (this.teamB.PTS > this.teamA.PTS) {
        this.gameLog.push("0:00 " + this.teamB.name + " won the game " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
    }
    else if (((this.teamA.PTS = this.teamB.PTS)) && (this.overtimes <= 0)) {
        this.gameLog.push("End of Regulation " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
        this.gameLog.push("Begin OT positioniod");
        this.overtimes += 1;
        simOvertime();
    }
    else {
        this.gameLog.push("End of OT " + this.overtimes + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
        this.overtimes += 1;
        this.gameLog.push("Begin OT positioniod" + this.overtimes);
        simOvertime();

    }
    // this.gameLog.push(this.teamA);
    // this.gameLog.push(this.teamB);
    // this.gameLog.push(this.diff);
    // this.gameLog.push(this.teamA.PTS - this.teamB.PTS);
    // this.gameLog.push(this.gameLog);
    boxScore();

    // this.gameLog.push(this.gameLogB);
    return
}

//OT function, just runs a 5 minute quarter - goes on until the game is over
function simOvertime() {
    this.gameTime = 5;
    this.quarterLength = 5;
    jumpBall();
}

//Central Game - Every posession goes through here
function simPossession() {
    // Clock progression and quarter updates, allows the game to progress even after the ball goes out of bounds or after OREBS
    minTommss();

    //Checks to see if the game is over
    if ((this.gameTime <= 0)) {
        checkWinner();
        // boxScore();    
    }
    //As long as time remains the game will go on...
    else if (this.gameTime > 0) {
        //Each Possession takes the same amount of time, but every posession is different
        //This function is also run after OREBS or when the ball is out of bounds
        this.liveBall = true;
        this.gameTime -= this.pace;
        this.quarterLength -= this.pace;

        //Sets the quarters depending on time left remaining in the game
        //OT ignores these
        if (this.gameTime <= 36.00 && this.overtimes == 0) {

            if (this.quarter === 1) {
                this.quarter = 2;
                gameLog.push("End of 1st Quarter " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
                gameLog.push("Start of 2nd Quarter");
            }
        }
        if (this.gameTime <= 24.00 && this.overtimes == 0) {
            if (this.quarter === 2) {
                this.quarter = 3;
                gameLog.push("End of 2nd Quarter " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
                gameLog.push("Start of 3rd Quarter");
            }

        }
        if (this.gameTime <= 12.00 && this.overtimes == 0) {
            if (this.quarter === 3) {
                this.quarter = 4;
                gameLog.push("End of 3rd Quarter " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
                gameLog.push("Start of 4th Quarter");
            }

        }
        //Once time has degraded, the game now decides the possession outcome
        getPossessionOutcome();
    }

};


function boxScore() {

    this.gameLog.push("Stats were reported");
    this.quarterLog.push("FINAL");

    gameEnd();
    return

}


function gameEnd() {
    printStats();
    return
}


function printStats() {
    // console.log(this.gameLog);
    // console.log(this.gameLogA);
    // console.log(this.gameLogB);
    // console.log(this.teams);
    // console.log(this.gameLogAQ1);
    // console.log(this.gameLogAQ2);
    // console.log(this.gameLogAQ3);
    // console.log(this.gameLogAQ4);
    // console.log(this.gameLogAOT);
    // console.log(this.quarterLog);


        this.teamB.players.sort(function (a, b) {
            return a.position - b.position
        });


    $(".boxscore-headingA").html(this.teamA.name);


    $("#name-player0").html(this.player0.name).css("color", "whitesmoke");
    $("#PTS-player0").html(this.player0.PTS);
    $("#FG-player0").html((this.player0.FGM) + "-" + (this.player0.FGA));
    $("#3PT-player0").html((this.player0.ThreePM) + "-" + (this.player0.ThreePA));
    $("#FT-player0").html((this.player0.FTM) + "-" + (this.player0.FTA));
    $("#OREB-player0").html(this.player0.OREB);
    $("#REB-player0").html(this.player0.REB);
    $("#AST-player0").html(this.player0.AST);
    $("#STL-player0").html(this.player0.STL);
    $("#BLK-player0").html(this.player0.BLK);
    $("#TOV-player0").html(this.player0.TOV);
    $("#FLS-player0").html(this.player0.FLS);

    $("#name-player1").html(this.player1.name).css("color", "whitesmoke");
    $("#PTS-player1").html(this.player1.PTS);
    $("#FG-player1").html((this.player1.FGM) + "-" + (this.player1.FGA));
    $("#3PT-player1").html((this.player1.ThreePM) + "-" + (this.player1.ThreePA));
    $("#FT-player1").html((this.player1.FTM) + "-" + (this.player1.FTA));
    $("#OREB-player1").html(this.player1.OREB);
    $("#REB-player1").html(this.player1.REB);
    $("#AST-player1").html(this.player1.AST);
    $("#STL-player1").html(this.player1.STL);
    $("#BLK-player1").html(this.player1.BLK);
    $("#TOV-player1").html(this.player1.TOV);
    $("#FLS-player1").html(this.player1.FLS);

    $("#name-player2").html(this.player2.name).css("color", "whitesmoke");
    $("#PTS-player2").html(this.player2.PTS);
    $("#FG-player2").html((this.player2.FGM) + "-" + (this.player2.FGA));
    $("#3PT-player2").html((this.player2.ThreePM) + "-" + (this.player2.ThreePA));
    $("#FT-player2").html((this.player2.FTM) + "-" + (this.player2.FTA));
    $("#OREB-player2").html(this.player2.OREB);
    $("#REB-player2").html(this.player2.REB);
    $("#AST-player2").html(this.player2.AST);
    $("#STL-player2").html(this.player2.STL);
    $("#BLK-player2").html(this.player2.BLK);
    $("#TOV-player2").html(this.player2.TOV);
    $("#FLS-player2").html(this.player2.FLS);

    $("#name-player3").html(this.player3.name).css("color", "whitesmoke");
    $("#PTS-player3").html(this.player3.PTS);
    $("#FG-player3").html((this.player3.FGM) + "-" + (this.player3.FGA));
    $("#3PT-player3").html((this.player3.ThreePM) + "-" + (this.player3.ThreePA));
    $("#FT-player3").html((this.player3.FTM) + "-" + (this.player3.FTA));
    $("#OREB-player3").html(this.player3.OREB);
    $("#REB-player3").html(this.player3.REB);
    $("#AST-player3").html(this.player3.AST);
    $("#STL-player3").html(this.player3.STL);
    $("#BLK-player3").html(this.player3.BLK);
    $("#TOV-player3").html(this.player3.TOV);
    $("#FLS-player3").html(this.player3.FLS);

    $("#name-player4").html(this.player4.name).css("color", "whitesmoke");
    $("#PTS-player4").html(this.player4.PTS);
    $("#FG-player4").html((this.player4.FGM) + "-" + (this.player4.FGA));
    $("#3PT-player4").html((this.player4.ThreePM) + "-" + (this.player4.ThreePA));
    $("#FT-player4").html((this.player4.FTM) + "-" + (this.player4.FTA));
    $("#OREB-player4").html(this.player4.OREB);
    $("#REB-player4").html(this.player4.REB);
    $("#AST-player4").html(this.player4.AST);
    $("#STL-player4").html(this.player4.STL);
    $("#BLK-player4").html(this.player4.BLK);
    $("#TOV-player4").html(this.player4.TOV);
    $("#FLS-player4").html(this.player4.FLS);

    $("#total-teamA").html("Team");
    $("#PTS-teamA").html(this.teamA.PTS);
    $("#FG-teamA").html((this.teamA.FGM) + "-" + (this.teamA.FGA));
    $("#3PT-teamA").html((this.teamA.ThreePM) + "-" + (this.teamA.ThreePA));
    $("#FT-teamA").html((this.teamA.FTM) + "-" + (this.teamA.FTA));
    $("#OREB-teamA").html(this.teamA.OREB);
    $("#REB-teamA").html(this.teamA.REB);
    $("#AST-teamA").html(this.teamA.AST);
    $("#STL-teamA").html(this.teamA.STL);
    $("#BLK-teamA").html(this.teamA.BLK);
    $("#TOV-teamA").html(this.teamA.TOV);
    $("#FLS-teamA").html(this.teamA.FLS);

    $("#FG-teamApct").html((((this.teamA.FGM) / (this.teamA.FGA) * 100).toFixed(1)) + "%");
    $("#3PT-teamApct").html((((this.teamA.ThreePM) / (this.teamA.ThreePA) * 100).toFixed(1)) + "%");
    $("#FT-teamApct").html((((this.teamA.FTM) / (this.teamA.FTA) * 100).toFixed(1)) + "%");

    $(".boxscore-headingB").html(this.teamB.name);

    
    $("#name-player5").html(teamB.players[0].name).css("color", "whitesmoke");
    $("#PTS-player5").html(teamB.players[0].PTS);
    $("#FG-player5").html((teamB.players[0].FGM) + "-" + (teamB.players[0].FGA));
    $("#3PT-player5").html((teamB.players[0].ThreePM) + "-" + (teamB.players[0].ThreePA));
    $("#FT-player5").html((teamB.players[0].FTM) + "-" + (teamB.players[0].FTA));
    $("#OREB-player5").html(teamB.players[0].OREB);
    $("#REB-player5").html(teamB.players[0].REB);
    $("#AST-player5").html(teamB.players[0].AST);
    $("#STL-player5").html(teamB.players[0].STL);
    $("#BLK-player5").html(teamB.players[0].BLK);
    $("#TOV-player5").html(teamB.players[0].TOV);
    $("#FLS-player5").html(teamB.players[0].FLS);

    $("#name-player6").html(teamB.players[1].name).css("color", "whitesmoke");
    $("#PTS-player6").html(teamB.players[1].PTS);
    $("#FG-player6").html((teamB.players[1].FGM) + "-" + (teamB.players[1].FGA));
    $("#3PT-player6").html((teamB.players[1].ThreePM) + "-" + (teamB.players[1].ThreePA));
    $("#FT-player6").html((teamB.players[1].FTM) + "-" + (teamB.players[1].FTA));
    $("#OREB-player6").html(teamB.players[1].OREB);
    $("#REB-player6").html(teamB.players[1].REB);
    $("#AST-player6").html(teamB.players[1].AST);
    $("#STL-player6").html(teamB.players[1].STL);
    $("#BLK-player6").html(teamB.players[1].BLK);
    $("#TOV-player6").html(teamB.players[1].TOV);
    $("#FLS-player6").html(teamB.players[1].FLS);

    $("#name-player7").html(teamB.players[2].name).css("color", "whitesmoke");
    $("#PTS-player7").html(teamB.players[2].PTS);
    $("#FG-player7").html((teamB.players[2].FGM) + "-" + (teamB.players[2].FGA));
    $("#3PT-player7").html((teamB.players[2].ThreePM) + "-" + (teamB.players[2].ThreePA));
    $("#FT-player7").html((teamB.players[2].FTM) + "-" + (teamB.players[2].FTA));
    $("#OREB-player7").html(teamB.players[2].OREB);
    $("#REB-player7").html(teamB.players[2].REB);
    $("#AST-player7").html(teamB.players[2].AST);
    $("#STL-player7").html(teamB.players[2].STL);
    $("#BLK-player7").html(teamB.players[2].BLK);
    $("#TOV-player7").html(teamB.players[2].TOV);
    $("#FLS-player7").html(teamB.players[2].FLS);

    $("#name-player8").html(teamB.players[3].name).css("color", "whitesmoke");
    $("#PTS-player8").html(teamB.players[3].PTS);
    $("#FG-player8").html((teamB.players[3].FGM) + "-" + (teamB.players[3].FGA));
    $("#3PT-player8").html((teamB.players[3].ThreePM) + "-" + (teamB.players[3].ThreePA));
    $("#FT-player8").html((teamB.players[3].FTM) + "-" + (teamB.players[3].FTA));
    $("#OREB-player8").html(teamB.players[3].OREB);
    $("#REB-player8").html(teamB.players[3].REB);
    $("#AST-player8").html(teamB.players[3].AST);
    $("#STL-player8").html(teamB.players[3].STL);
    $("#BLK-player8").html(teamB.players[3].BLK);
    $("#TOV-player8").html(teamB.players[3].TOV);
    $("#FLS-player8").html(teamB.players[3].FLS);

    $("#name-player9").html(teamB.players[4].name).css("color", "whitesmoke");
    $("#PTS-player9").html(teamB.players[4].PTS);
    $("#FG-player9").html((teamB.players[4].FGM) + "-" + (teamB.players[4].FGA));
    $("#3PT-player9").html((teamB.players[4].ThreePM) + "-" + (teamB.players[4].ThreePA));
    $("#FT-player9").html((teamB.players[4].FTM) + "-" + (teamB.players[4].FTA));
    $("#OREB-player9").html(teamB.players[4].OREB);
    $("#REB-player9").html(teamB.players[4].REB);
    $("#AST-player9").html(teamB.players[4].AST);
    $("#STL-player9").html(teamB.players[4].STL);
    $("#BLK-player9").html(teamB.players[4].BLK);
    $("#TOV-player9").html(teamB.players[4].TOV);
    $("#FLS-player9").html(teamB.players[4].FLS);

    $("#total-teamB").html("Team");
    $("#PTS-teamB").html(this.teamB.PTS);
    $("#FG-teamB").html((this.teamB.FGM) + "-" + (this.teamB.FGA));
    $("#3PT-teamB").html((this.teamB.ThreePM) + "-" + (this.teamB.ThreePA));
    $("#FT-teamB").html((this.teamB.FTM) + "-" + (this.teamB.FTA));
    $("#OREB-teamB").html(this.teamB.OREB);
    $("#REB-teamB").html(this.teamB.REB);
    $("#AST-teamB").html(this.teamB.AST);
    $("#STL-teamB").html(this.teamB.STL);
    $("#BLK-teamB").html(this.teamB.BLK);
    $("#TOV-teamB").html(this.teamB.TOV);
    $("#FLS-teamB").html(this.teamB.FLS);

    $("#FG-teamBpct").html((((this.teamB.FGM) / (this.teamB.FGA) * 100).toFixed(1)) + "%");
    $("#3PT-teamBpct").html((((this.teamB.ThreePM) / (this.teamB.ThreePA) * 100).toFixed(1)) + "%");
    $("#FT-teamBpct").html((((this.teamB.FTM) / (this.teamB.FTA) * 100).toFixed(1)) + "%");




    for (let i = 0; i < this.quarterLog.length; i++) {

        if (this.quarterLog[i] === 1) {
            // $(".gameState").css({"top": "-31px", "left": "200px", "font-size": "1.5em"})
            this.quarterLog[i] = "1ST";
        }
        else if (this.quarterLog[i] === 2) {
            // $(".gameState").css({"top": "-30px", "left": "188px", "font-size": "1.4em"})
            this.quarterLog[i] = "2ND";
        }
        else if (this.quarterLog[i] === 3) {
            // $(".gameState").css({"top": "-30px", "left": "188px", "font-size": "1.4em"})
            this.quarterLog[i] = "3RD";
        }
        else if (this.quarterLog[i] === 4) {
            // $(".gameState").css({"top": "-30px", "left": "188px", "font-size": "1.4em"})
            this.quarterLog[i] = "4TH";
        }
        else if (this.quarterLog[i] = "FINAL") {
            // $(".gameState").removeAttr("style")

        }

        var hmm = parseInt(400 * userSimSpeed);
        var wut = (hmm / 2);
        var ayy = 400;

        (function (i) {
            setTimeout(function () {
                $(".gameState").html(quarterLog[i])
                // console.log(400 * i * userSimSpeed);
                var hmm = parseInt((((quarterLog.length * 400) / 120)) * userSimSpeed);
                var wut = (((hmm * i) / i));
                // console.log (ayy * i);
                // console.log(wut * i);
            }, logSpeed * i);
        })(i);;

    }




    for (let i = 0; i < this.gameLogA.length; i++) {


        (function (i) {
            setTimeout(function () {
                pointLogA += this.gameLogA[i];
                $(".scoreA").html(pointLogA)
                var hmm = parseInt((((quarterLog.length * 400) / 120)) * userSimSpeed);
                var wut = ((hmm * i) / i)
                // console.log(hmm);
            }, logSpeed * i);
        })(i);
    }

    for (let i = 0; i < this.gameLogB.length; i++) {


        (function (i) {
            setTimeout(function () {
                pointLogB += this.gameLogB[i];
                $(".scoreB").html(pointLogB)
                var hmm = parseInt((((quarterLog.length * 400) / 120)) * userSimSpeed);
                var wut = ((hmm * i) / i)

            }, logSpeed * i);
        })(i);
    }

    for (let i = 0; i < (this.gameLog.length ); i++) {
        (function (i) {
            setTimeout(function () {
                // var div = $('.gameBox'),
                // height = div.height();
                $(".gameLog").append('<div class="gameEvent">' + this.gameLog[i] + '</div>')
                    .fadeIn({
                        duration: appendSpeed,
                        start: scrollDown
                    });
                // updateScroll();
                // div.animate({scrollTop: height}, i);
                // height += div.height();
                // $(".gameLog").scrollTop = div.height;
                var hmm = parseInt((((quarterLog.length * 400) / 120)) * userSimSpeed);
                var wut = (.175 * ((hmm * i) / i))
            }, textSpeed * i);
        })(i);
    }
    return;
};



//Sets the quarter length when time runs out
//OT doesn't use this
function qtrCheck() {


    if (this.quarter === 1) {

        this.quarterLength = 12;

    }

    else if (this.quarter === 2) {

        this.quarterLength = 12;


    }

    else if (this.quarter === 3) {


        this.quarterLength = 12;


    }
    else if (this.quarter === 4) {


        this.quarterLength = this.gameTime;


    }

    else {
        return;
    }

}


//Each Possession will be different
function getPossessionOutcome() {

    //Makes sure the quarter is correct
    if (this.quarterLength <= .200) {
        qtrCheck();
    };

    //Selects the Offensive/Defensive Player compares them
    pickPlayer();



    // Each matchup begins with a check if the offensive player will turn it over, if not, a shot goes up. Shots go up more than not.
    if (Math.floor(Math.random() * 101) < (this.probTov())) {
        return probStl(); // tov
    }
    else {
        doShot();
    }
};


//Possession Change Play - Changes possession arrow and allows teams to switch sides
function changePossession() {
    // Possession change
    this.possessionArrow = !this.possessionArrow;
    //New possession
    simPossession();
};

//Turnover Chance
function probTov() {
    //First Checker - Utilizes player's TOV% and matchup's STLpct along with boosts from team OVR rating; //Max is ~20, 11.5 seems to be lowest
    //on my last check
    //OVR Team rating gives a boost so each iteration of teams can change how a player generally positionforms
    return (((this.selectedPlayerOff.TOVpct - ((this.OFFteam.offense) / 10))) + ((this.selectedPlayerDef.STLpct) + ((this.DEFteam.defense) / 10)));
};



//Turnover Play - Updates Stats and changes possession
function doTov() {

    var offensiveFoul = Math.random();


    // $(".gameLog").append('<li>'+ this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " lost the ball!" +'</li>');
    // console.log((selectedPlayerOff.position/10) - (selectedPlayerDef.position/10) );
    if (offensiveFoul > .200) {
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " lost the ball!");
        this.selectedPlayerOff.TOV += 1;
        this.OFFteam.TOV += 1;
        this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " TOV:" + this.selectedPlayerOff.TOV);
    }

    else if (offensiveFoul <= .200) {
        // console.log("offensive foul");
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " committed an offensive foul.");
        this.selectedPlayerOff.TOV += 1;
        this.selectedPlayerOff.FLS += 1;
        this.OFFteam.TOV += 1;
        this.OFFteam.FLS += 1;
        this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " FLS:" + this.selectedPlayerOff.FLS + " TOV:" + this.selectedPlayerOff.TOV);
    }

    // this.recordPlay("tov", this.o, [this.team[this.o].player[p].name]);
    changePossession();
    // return "tov";

};



//Steal play - Updates Stats and changes possession
function doSteal() {

    this.gameLog.push(minTommss(this.quarterLength) + " " + this.DEFteam.tag + " - " + this.selectedPlayerSTL.name + " stole the ball from " + this.selectedPlayerOff.name + "!");
    this.selectedPlayerSTL.STL += 1;
    this.DEFteam.STL += 1;
    this.selectedPlayerOff.TOV += 1;
    this.OFFteam.TOV += 1;
    this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " TOV:" + this.selectedPlayerOff.TOV + " " + this.selectedPlayerSTL.name + "(" + this.DEFteam.tag + ")" + " STL:" + this.selectedPlayerSTL.STL);
    changePossession();
    // return "stl";
};


//Even if the Offensive Player loses the matchup, there is a chance the ball goes out of bounds and the possession doesn't change
//Defensive Player will not always get the steal, but if they are good enough, they'll get it most of the time
function probStl() {

    var possPlayersSTL = this.DEFteam.players;

    var inbounds = Math.random();

    //Chooses random player on defensive team based on STL%, different than defensive matchup to stat distrubution (help defense)
    for (let i = 0; i < possPlayersSTL.length; i++) {
        var defenderSTL = possPlayersSTL.sort(function (a, b) {
            return b.STLpct - a.STLpct
        });
        this.selectedPlayerSTL = defenderSTL[Math.floor(Math.random() * defenderSTL.length)];
    }

    //Steal Check
    if ((Math.random()) > (.03 * ((this.selectedPlayerOff.TOVpct + this.OFFteam.offense / 10000) - (this.selectedPlayerSTL.STLpct) + (this.DEFteam.defense / 10000)))) {
        //Comparison of Offensive player's TOV% and the potential defender's STL% with OVR Ratings giving slight boosts
        //   Calculation below
        //   this.gameLog.push( .03 * ( (this.selectedPlayerOff.TOVpct + this.OFFteam.offense/10000) - (this.selectedPlayerSTL.STLpct) + (this.DEFteam.defense/10000)))

        //If the defensive player gets the ball loose, they'll get it 80% of the time, otherwise, it goes out of bounds and the offensive
        //team gets another chance to score

        if (inbounds <= .80) {
            // return .3 * (this.selectedPlayerBLK.BLKpct/10) + (this.DEFteam.defense/10000);
            doSteal();
        }
        else {
            this.liveBall = false;
            this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " lost the ball!");
            this.gameLog.push("The ball went out of bounds.");
            simPossession();
        }
    }
    //If Steal Check fails, sometimes unforced errors happen
    else {
        doTov();
    }
};


//The Assist Check - Sorts by AST% on same team
//OVR gives a slight boost
//SORT BY USG
function probAst() {


    var possPlayersAST = this.OFFteam.players;

    var assisted = Math.random();

    for (let i = 0; i < possPlayersAST.length; i++) {
        var teamMate = possPlayersAST.sort(function (a, b) {
            return b.USGpct - a.USGpct
        });
        this.selectedPlayerAST = teamMate[Math.floor(Math.random() * teamMate.length)];
        // console.log(this.selectedPlayerAST);
    }

    // console.log(.3 *(((this.selectedPlayerAST.ASTpct/100 + ((this.OFFteam.offense)/100)))));

    // if (inbounds <= .80){
    //     // return .3 * (this.selectedPlayerBLK.BLKpct/10) + (this.DEFteam.defense/10000);
    //            doSteal();
    //     }

    //AST Check - Has to be a different player to get the assist
    if ((assisted <= (((2.57 * (this.selectedPlayerAST.ASTpct + ((this.OFFteam.offense) / 10)))) / 100)) && (this.selectedPlayerAST.name != this.selectedPlayerOff.name)) {
        // console.log(this.selectedPlayerAST);
        return
    }

    //Prevents same player assisting themselves is AST check failed
    else if (this.selectedPlayerAST.name === this.selectedPlayerOff.name) {
        this.selectedPlayerAST = "";
        // console.log(this.selectedPlayerAST);
        // return (0);
        return
    }
    //AST check failure  
    else {
        this.selectedPlayerAST = "";

        return
    }
    // else {   
    //     console.log(( .1 * ((this.selectedPlayerAST.ASTpct/100 + ((this.OFFteam.offense)/10)))));
    // return ( .3 * ((this.selectedPlayerAST.ASTpct + ((this.OFFteam.offense)/10))));
    // }
};


//Block check - Sorts defensive players by BLK%
//OVR team gives slight boost
function probBlk() {
    var possPlayersBLK = this.DEFteam.players;

    for (let i = 0; i < possPlayersBLK.length; i++) {
        var defenderBLK = possPlayersBLK.sort(function (a, b) {
            return b.BLKpct - a.BLKpct
        });
        this.selectedPlayerBLK = defenderBLK[Math.floor(Math.random() * defenderBLK.length)];
    }
    return .3 * (this.selectedPlayerBLK.BLKpct / 10) + (this.DEFteam.defense / 10000);
};

//Block play 
//Sometimes blocks go into the stands/out of bounds so the offensive team will keep possession, otherwise a rebound follows
function doBlk() {

    var inbounds = (Math.floor(Math.random() * 2) == 0);

    this.selectedPlayerBLK.BLK += 1;
    this.DEFteam.BLK += 1;
    this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " attempted a " + this.shot + " and was blocked by " + this.selectedPlayerBLK.name + "!");
    this.selectedPlayerOff.FGA += 1;
    this.OFFteam.FGA += 1;
    this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " FG%: " + (((this.selectedPlayerOff.FGM / this.selectedPlayerOff.FGA) * 100).toFixed(1)) + "%   " + this.selectedPlayerBLK.name + "(" + this.DEFteam.tag + ")" + " BLK:" + this.selectedPlayerBLK.BLK);

    if (inbounds != 0) {
        this.gameLog.push("The ball went out of bounds!");
        this.liveBall = false;
        simPossession();
    }
    else {

        doReb();
    }
};

//Player Selection
//  Finds offensive/defensive player based on this.possessionArrow and picks randomly according to USG%
function pickPlayer() {

    //OFFensive player Selection
    // Sorts team array by usage % and selects the player 

    for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].possession == this.possessionArrow) {
            this.OFFteam = this.teams[i];
            var availablePlayersOff = this.teams[i].players;
            // The Offensive player is selected randomly for better distribution, the best players have the ball 30+% of the time 
        }
        //DEFensive player Selection
        // Sorts team array by usage % and selects the player 

        else if (this.teams[i].possession !== this.possessionArrow) {
            this.DEFteam = this.teams[i];
            var availablePlayersDef = this.teams[i].players;
        }
    }

    for (let j = 0; j < availablePlayersOff.length; j++) {

        // this.gameLog.push(availablePlayersOff[1].USGpct);

        var availablePlayerUSG = availablePlayersOff.sort(function (a, b) {
            return b.USGpct - a.USGpct
        });
        //Offensive Player
        this.selectedPlayerOff = availablePlayerUSG[Math.floor(Math.random() * availablePlayerUSG.length)];

    }

    for (let i = 0; i < availablePlayersDef.length; i++) {

        // this.gameLog.push(availablePlayersOff[1].USGpct);

        var availablePlayerDefUSG = availablePlayersDef.sort(function (a, b) {
            return b.USGpct - a.USGpct
        });
        //Defensive player
        this.selectedPlayerDef = availablePlayerDefUSG[Math.floor(Math.random() * availablePlayerDefUSG.length)];

    }
    //Reference to see initial matchup
    // this.gameLog.push(this.selectedPlayerDef.name + " is on defense");
    // this.gameLog.push(this.selectedPlayerOff.name + " is on offense");  
    probTov();
};


//Default Play - The Shot Selection
function doShot() {
    // var shooter = this.selectedPlayerOff;
    //Check to see if assisted
    probAst();
    var passer = this.selectedPlayerAST;


    //Basketball GM's model works but it needed tweaking for how the game is currently played
    //Selects shot based on player tendencies using Advanced Stats
    // Pick the type of shot and store the success rate
    //Success Rate is based on the player, shot type, assists, and Team OVR ratings
    var probAndOne;
    var probMake;
    var probMissAndFoul;

    //Default check - 3PT Attempt 
    //Uses 3PAr so non-shooters aren't shooting 3s often
    if (this.selectedPlayerOff.ThreePAr > Math.random()) {   // Three pointer
        this.shot = "three pointer";
        probMissAndFoul = 0.05;
        probMake = ((this.selectedPlayerOff.ThreePct + (this.OFFteam.offense / 100)) - (this.DEFteam.defense / 100)) * 0.7 + 0.30;
        console.log(selectedPlayerOff);
        console.log(probMake);
        probAndOne = 0.01;
    } else {
        const r1 =
            0.25 *
            Math.random() *
            (this.OFFteam.offense / 100);
        const r2 =
            0.60 *
            Math.random() *
            (this.OFFteam.offense / 100);
        const r3 =
            0.15 *
            Math.random() *
            (this.OFFteam.offense / 100);
        //Of the 2PT FGAs, distributed based on how often such plays typically happen in the NBA
        //Most attempts are at the rim
        //Mid-range and low-post shots less so
        if (r1 > r2 && r1 > r3) {
            // Two point jumposition
            this.shot = "mid-range jumposition";
            probMissAndFoul = 0.05;
            probMake = ((this.selectedPlayerOff.TSpct + (this.OFFteam.offense / 100)) - (this.DEFteam.defense / 100)) * 0.25 + 0.25;
            probAndOne = 0.05;
        } else if (r2 > r3) {
            // Dunk, fast break or half court
            this.shot = "layup/dunk";
            probMissAndFoul = 0.37;
            probMake = ((this.selectedPlayerOff.TSpct + (this.OFFteam.offense / 100)) - (this.DEFteam.defense / 100)) * 0.35 + 0.50;

            probAndOne = 0.25;
        } else {
            // Post up
            this.shot = "low post shot";
            probMissAndFoul = 0.33;
            probMake = ((this.selectedPlayerOff.TSpct + (this.OFFteam.offense / 100)) - (this.DEFteam.defense / 100)) * 0.2 + 0.25;

            probAndOne = 0.15;
        }
    }

    //Chance of a foul
    var foulFactor = 2.8 * (this.selectedPlayerOff.FTr);
    probMissAndFoul *= foulFactor;
    probAndOne *= foulFactor;



    // this.gameLog.push(foulFactor);
    //Success rate - Uses TS% - Maybe use 3PT% later on
    probMake = (probMake - 0.27 * (this.DEFteam.defense / 100))

    // Assisted shots are easier
    if (passer !== "") {
        probMake += 0.1;
        // console.log(probMake);
    }

    // this.gameLog.push(probMake);

    //Chance of getting blocked
    if (probBlk() > Math.random()) {
        return doBlk(); // orb or drb
    }

    // Make
    if (probMake > Math.random()) {
        // And 1
        if (probAndOne > Math.random() && this.shot === "three pointer") {

            this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " attempts a " + this.shot + ", gets hit on the release by " + this.selectedPlayerDef.name + "...and still nails it! A four point play opportunity!");
            //Stat updates
            this.selectedPlayerOff.PTS += 3;
            this.selectedPlayerOff.FGA += 1;
            this.selectedPlayerOff.FGM += 1;
            this.selectedPlayerOff.ThreePA += 1;
            this.selectedPlayerOff.ThreePM += 1;
            this.OFFteam.PTS += 3;
            this.OFFteam.FGA += 1;
            this.OFFteam.FGM += 1;
            this.OFFteam.ThreePA += 1;
            this.OFFteam.ThreePM += 1;
            this.amount = 1;

            //Ensures that points are added to proposition team/quarter array
            if (this.overtimes <= 0) {
                this.quarterLog.push(this.quarter);
            }
            else if (this.overtimes >= 1) {
                this.quarterLog.push("OT");
            }

            if (this.quarter === 1 && (this.possessionArrow == this.teamA.possession)) {

                this.OFFteam.Q1PTS += 3;
                this.gameLogA.push(3);
                this.gameLogB.push(0);
                this.gameLogAQ1.push(3);
                this.gameLogBQ1.push(0);
            }
            else if (this.quarter === 1 && (this.possessionArrow == this.teamB.possession)) {

                this.OFFteam.Q1PTS += 3;
                this.gameLogB.push(3);
                this.gameLogA.push(0);
                this.gameLogAQ1.push(0);
                this.gameLogBQ1.push(3);
            }
            else if (this.quarter === 2 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q2PTS += 3;
                this.gameLogA.push(3);
                this.gameLogB.push(0);
                this.gameLogAQ2.push(3);
                this.gameLogBQ2.push(0);

            }
            else if (this.quarter === 2 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q2PTS += 3;
                this.gameLogB.push(3);
                this.gameLogA.push(0);
                this.gameLogAQ2.push(0);
                this.gameLogBQ2.push(3);
            }
            else if (this.quarter === 3 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q3PTS += 3;
                this.gameLogA.push(3);
                this.gameLogB.push(0);
                this.gameLogAQ3.push(3);
                this.gameLogBQ3.push(0);
            }
            else if (this.quarter === 3 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q3PTS += 3;
                this.gameLogB.push(3);
                this.gameLogA.push(0);
                this.gameLogBQ3.push(3);
                this.gameLogAQ3.push(0);
            }
            else if (this.quarter === 4 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q4PTS += 3;
                this.gameLogA.push(3);
                this.gameLogB.push(0);
                this.gameLogAQ4.push(3);
                this.gameLogBQ4.push(0);
            }
            else if (this.quarter === 4 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q4PTS += 3;
                this.gameLogB.push(3);
                this.gameLogA.push(0);
                this.gameLogBQ4.push(3);
                this.gameLogAQ4.push(0);
            }
            else if (this.overtimes >= 1 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.OTPTS += 3;
                this.gameLogA.push(3);
                this.gameLogB.push(0);
                this.gameLogAOT.push(3);
                this.gameLogBOT.push(0);

            }
            else if (this.overtimes >= 1 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.OTPTS += 3;
                this.gameLogB.push(3);
                this.gameLogA.push(0);
                this.gameLogBOT.push(3);
                this.gameLogAOT.push(0);

            }


            //Which shot is attempted 
            this.shot = "andOne";

            // return doFg(); // fg, orb, or drb
        }

        else if (probAndOne > Math.random() && this.shot != "three pointer") {

            this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " attempts a " + this.shot + ", takes the contact from " + this.selectedPlayerDef.name + "...and gets the and-1!");
            //Amount of FTS awarded
            this.amount = 1;
            //Which shot is attempted
            this.shot = "andOne";
            //Update stats
            this.selectedPlayerOff.PTS += 2;
            this.selectedPlayerOff.FGA += 1;
            this.selectedPlayerOff.FGM += 1;
            this.OFFteam.PTS += 2;
            this.OFFteam.FGA += 1;
            this.OFFteam.FGM += 1;
            //Ensures that points are added to proposition team/quarter array
            if (this.overtimes <= 0) {
                this.quarterLog.push(this.quarter);
            }
            else if (this.overtimes >= 1) {
                this.quarterLog.push("OT");
            }
            if ((this.quarter === 1) && (this.possessionArrow == this.teamA.possession)) {

                this.OFFteam.Q1PTS += 2;
                this.gameLogA.push(2);
                this.gameLogB.push(0);
                this.gameLogAQ1.push(2);
                this.gameLogBQ1.push(0);

            }
            else if ((this.quarter === 1) && (this.possessionArrow == this.teamB.possession)) {

                this.OFFteam.Q1PTS += 2;
                this.gameLogB.push(2);
                this.gameLogA.push(0);
                this.gameLogBQ1.push(2);
                this.gameLogAQ1.push(0);

            }
            else if (this.quarter === 2 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q2PTS += 2;
                this.gameLogA.push(2);
                this.gameLogB.push(0);
                this.gameLogAQ2.push(2);
                this.gameLogBQ2.push(0);

            }
            else if (this.quarter === 2 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q2PTS += 2;
                this.gameLogB.push(2);
                this.gameLogA.push(0);
                this.gameLogBQ2.push(2);
                this.gameLogAQ2.push(0);
            }
            else if (this.quarter === 3 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q3PTS += 2;
                this.gameLogA.push(2);
                this.gameLogB.push(0);
                this.gameLogAQ3.push(2);
                this.gameLogBQ3.push(0);
            }
            else if (this.quarter === 3 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q3PTS += 2;
                this.gameLogB.push(2);
                this.gameLogA.push(0);
                this.gameLogBQ3.push(2);
                this.gameLogAQ3.push(0);
            }
            else if (this.quarter === 4 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q4PTS += 2;
                this.gameLogA.push(2);
                this.gameLogB.push(0);
                this.gameLogAQ4.push(2);
                this.gameLogBQ4.push(0);
            }
            else if (this.quarter === 4 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q4PTS += 2;
                this.gameLogB.push(2);
                this.gameLogA.push(0);
                this.gameLogBQ4.push(2);
                this.gameLogAQ4.push(0);
            }
            else if (this.overtimes >= 1 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.OTPTS += 2;
                this.gameLogA.push(2);
                this.gameLogB.push(0);
                this.gameLogAOT.push(2);
                this.gameLogBOT.push(0);


            }
            else if (this.overtimes >= 1 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.OTPTS += 2;
                this.gameLogB.push(2);
                this.gameLogA.push(0);
                this.gameLogBOT.push(2);
                this.gameLogAOT.push(0);

            }

        }
        //And ones have to be recorded differently since FTs are variable
        doFg(); // fg
        return

    }

    // this.gameLog.push(probMissAndFoul);
    // Miss, but fouled
    // Stats are updated as well
    if (probMissAndFoul > Math.random()) {

        if (this.shot === "three pointer") {
            //Amount of FTs
            this.amount = 3;
            this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " was fouled on a " + this.shot + " by " + this.selectedPlayerDef.name);
            this.selectedPlayerDef.FLS += 1;
            this.DEFteam.FLS += 1;
            this.gameLog.push(this.selectedPlayerDef.name + "(" + this.DEFteam.tag + ")" + " FLS: " + (this.selectedPlayerDef.FLS));
        }

        else {
            //Amount of FTs
            this.amount = 2;
        }
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " was fouled on a " + this.shot + " by " + this.selectedPlayerDef.name);
        this.selectedPlayerDef.FLS += 1;
        this.DEFteam.FLS += 1;
        this.gameLog.push(this.selectedPlayerDef.name + "(" + this.DEFteam.tag + ")" + " FLS: " + (this.selectedPlayerDef.FLS));

        doFt(); // fg, orb, or drb
        return
    }

    // Miss
    //Stats are updated
    if (this.shot === "layup/dunk") {
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " missed a layup/dunk.");
        this.selectedPlayerOff.FGA += 1;
        this.OFFteam.FGA += 1;
    } else if (this.shot === "low post shot") {
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " missed from the low post.");
        this.selectedPlayerOff.FGA += 1;
        this.OFFteam.FGA += 1;

    } else if (this.shot === "mid-range jumposition") {
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " missed from mid-range.");
        this.selectedPlayerOff.FGA += 1;
        this.OFFteam.FGA += 1;

    } else if (this.shot === "three pointer") {
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " missed from three.");
        this.selectedPlayerOff.FGA += 1;
        this.selectedPlayerOff.ThreePA += 1;
        this.OFFteam.FGA += 1;
        this.OFFteam.ThreePA += 1;

    }
    return doReb(); // orb or drb
};


//FG Stat Updates
function doFg() {

    if (this.shot === "layup/dunk") {
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " drives to the rim for a layup/dunk.");
        this.selectedPlayerOff.PTS += 2;
        this.OFFteam.PTS += 2;
        this.OFFteam.FGA += 1;
        this.OFFteam.FGM += 1;
        this.selectedPlayerOff.FGA += 1;
        this.selectedPlayerOff.FGM += 1;
        this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " PTS: " + (this.selectedPlayerOff.PTS) + " FG%: " + (((this.selectedPlayerOff.FGM / this.selectedPlayerOff.FGA) * 100).toFixed(1)) + "%  " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");

        //Stat Allocation
        if (this.overtimes <= 0) {
            this.quarterLog.push(this.quarter);
        }
        else if (this.overtimes >= 1) {
            this.quarterLog.push("OT");
        }
        if ((this.quarter === 1) && (this.possessionArrow == this.teamA.possession)) {

            this.OFFteam.Q1PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ1.push(2);
            this.gameLogBQ1.push(0);

        }
        else if ((this.quarter === 1) && (this.possessionArrow == this.teamB.possession)) {

            this.OFFteam.Q1PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ1.push(2);
            this.gameLogAQ1.push(0);

        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q2PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ2.push(2);
            this.gameLogBQ2.push(0);

        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q2PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ2.push(2);
            this.gameLogAQ2.push(0);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q3PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ3.push(2);
            this.gameLogBQ3.push(0);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q3PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ3.push(2);
            this.gameLogAQ3.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q4PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ4.push(2);
            this.gameLogBQ4.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q4PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ4.push(2);
            this.gameLogAQ4.push(0);
        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.OTPTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAOT.push(2);
            this.gameLogBOT.push(0);


        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.OTPTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBOT.push(2);
            this.gameLogAOT.push(0);

        }

    } else if (this.shot === "low post shot") {
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " attempts a shot from the low post.");
        this.selectedPlayerOff.PTS += 2;
        this.OFFteam.PTS += 2;
        this.OFFteam.FGA += 1;
        this.OFFteam.FGM += 1;
        this.selectedPlayerOff.FGA += 1;
        this.selectedPlayerOff.FGM += 1;
        this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " PTS: " + (this.selectedPlayerOff.PTS) + " FG%: " + (((this.selectedPlayerOff.FGM / this.selectedPlayerOff.FGA) * 100).toFixed(1)) + "%  " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");


        if (this.overtimes <= 0) {
            this.quarterLog.push(this.quarter);
        }
        else if (this.overtimes >= 1) {
            this.quarterLog.push("OT");
        }

        if ((this.quarter === 1) && (this.possessionArrow == this.teamA.possession)) {

            this.OFFteam.Q1PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ1.push(2);
            this.gameLogBQ1.push(0);

        }
        else if ((this.quarter === 1) && (this.possessionArrow == this.teamB.possession)) {

            this.OFFteam.Q1PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ1.push(2);
            this.gameLogAQ1.push(0);

        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q2PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ2.push(2);
            this.gameLogBQ2.push(0);

        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q2PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ2.push(2);
            this.gameLogAQ2.push(0);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q3PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ3.push(2);
            this.gameLogBQ3.push(0);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q3PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ3.push(2);
            this.gameLogAQ3.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q4PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ4.push(2);
            this.gameLogBQ4.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q4PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ4.push(2);
            this.gameLogAQ4.push(0);
        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.OTPTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAOT.push(2);
            this.gameLogBOT.push(0);


        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.OTPTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBOT.push(2);
            this.gameLogAOT.push(0);

        }
    } else if (this.shot === "mid-range jumposition") {

        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " pulls up for a mid-range jumposition.")
        this.selectedPlayerOff.PTS += 2;
        this.OFFteam.PTS += 2;
        this.OFFteam.FGA += 1;
        this.OFFteam.FGM += 1;
        this.selectedPlayerOff.FGA += 1;
        this.selectedPlayerOff.FGM += 1;
        this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " PTS: " + (this.selectedPlayerOff.PTS) + " FG%: " + (((this.selectedPlayerOff.FGM / this.selectedPlayerOff.FGA) * 100).toFixed(1)) + "%  " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");

        if (this.overtimes <= 0) {
            this.quarterLog.push(this.quarter);
        }
        else if (this.overtimes >= 1) {
            this.quarterLog.push("OT");
        }

        if ((this.quarter === 1) && (this.possessionArrow == this.teamA.possession)) {

            this.OFFteam.Q1PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ1.push(2);
            this.gameLogBQ1.push(0);

        }
        else if ((this.quarter === 1) && (this.possessionArrow == this.teamB.possession)) {

            this.OFFteam.Q1PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ1.push(2);
            this.gameLogAQ1.push(0);

        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q2PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ2.push(2);
            this.gameLogBQ2.push(0);

        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q2PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ2.push(2);
            this.gameLogAQ2.push(0);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q3PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ3.push(2);
            this.gameLogBQ3.push(0);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q3PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ3.push(2);
            this.gameLogAQ3.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q4PTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAQ4.push(2);
            this.gameLogBQ4.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q4PTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBQ4.push(2);
            this.gameLogAQ4.push(0);
        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.OTPTS += 2;
            this.gameLogA.push(2);
            this.gameLogB.push(0);
            this.gameLogAOT.push(2);
            this.gameLogBOT.push(0);


        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.OTPTS += 2;
            this.gameLogB.push(2);
            this.gameLogA.push(0);
            this.gameLogBOT.push(2);
            this.gameLogAOT.push(0);

        }


    } else if (this.shot === "three pointer") {

        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " shoots from downtown.");
        this.selectedPlayerOff.PTS += 3;
        this.selectedPlayerOff.ThreePA += 1;
        this.selectedPlayerOff.ThreePM += 1;
        this.OFFteam.PTS += 3;
        this.OFFteam.ThreePA += 1;
        this.OFFteam.ThreePM += 1;
        this.OFFteam.FGA += 1;
        this.OFFteam.FGM += 1;
        this.selectedPlayerOff.FGA += 1;
        this.selectedPlayerOff.FGM += 1;

        //Allocation
        if (this.overtimes <= 0) {
            this.quarterLog.push(this.quarter);
        }
        else if (this.overtimes >= 1) {
            this.quarterLog.push("OT");
        }

        if (this.quarter === 1 && (this.possessionArrow == this.teamA.possession)) {

            this.OFFteam.Q1PTS += 3;
            this.gameLogA.push(3);
            this.gameLogB.push(0);
            this.gameLogAQ1.push(3);
            this.gameLogBQ1.push(0);
        }
        else if (this.quarter === 1 && (this.possessionArrow == this.teamB.possession)) {

            this.OFFteam.Q1PTS += 3;
            this.gameLogB.push(3);
            this.gameLogA.push(0);
            this.gameLogAQ1.push(0);
            this.gameLogBQ1.push(3);
        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q2PTS += 3;
            this.gameLogA.push(3);
            this.gameLogB.push(0);
            this.gameLogAQ2.push(3);
            this.gameLogBQ2.push(0);

        }
        else if (this.quarter === 2 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q2PTS += 3;
            this.gameLogB.push(3);
            this.gameLogA.push(0);
            this.gameLogAQ2.push(0);
            this.gameLogBQ2.push(3);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q3PTS += 3;
            this.gameLogA.push(3);
            this.gameLogB.push(0);
            this.gameLogAQ3.push(3);
            this.gameLogBQ3.push(0);
        }
        else if (this.quarter === 3 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q3PTS += 3;
            this.gameLogB.push(3);
            this.gameLogA.push(0);
            this.gameLogBQ3.push(3);
            this.gameLogAQ3.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.Q4PTS += 3;
            this.gameLogA.push(3);
            this.gameLogB.push(0);
            this.gameLogAQ4.push(3);
            this.gameLogBQ4.push(0);
        }
        else if (this.quarter === 4 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.Q4PTS += 3;
            this.gameLogB.push(3);
            this.gameLogA.push(0);
            this.gameLogBQ4.push(3);
            this.gameLogAQ4.push(0);
        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamA.possession)) {
            this.OFFteam.OTPTS += 3;
            this.gameLogA.push(3);
            this.gameLogB.push(0);
            this.gameLogAOT.push(3);
            this.gameLogBOT.push(0);

        }
        else if (this.overtimes >= 1 && (this.possessionArrow == this.teamB.possession)) {
            this.OFFteam.OTPTS += 3;
            this.gameLogB.push(3);
            this.gameLogA.push(0);
            this.gameLogBOT.push(3);
            this.gameLogAOT.push(0);

        }

        this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " PTS: " + (this.selectedPlayerOff.PTS) + " FG%: " + (((this.selectedPlayerOff.FGM / this.selectedPlayerOff.FGA) * 100).toFixed(1)) + "%  " + " 3PT%: " + (((this.selectedPlayerOff.ThreePM / this.selectedPlayerOff.ThreePA) * 100).toFixed(1)) + "%  " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");

    } else if (this.shot === "andOne") {
        this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " PTS: " + (this.selectedPlayerOff.PTS) + " FG%: " + (((this.selectedPlayerOff.FGM / this.selectedPlayerOff.FGA) * 100).toFixed(1)) + "%  " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");
        //Assisted Player Update for andOnes
        if (this.selectedPlayerAST != "") {
            this.selectedPlayerAST.AST += 1;
            this.OFFteam.AST += 1;
            this.gameLog.push(this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " was assisted by " + this.selectedPlayerAST.name + " AST: " + (this.selectedPlayerAST.AST));
        };
        doFt(); // fg, orb, or drb
        return
    }
    if (this.shot != "andOne" && this.selectedPlayerAST != "") {

        this.selectedPlayerAST.AST += 1;
        this.OFFteam.AST += 1;
        this.gameLog.push(this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " was assisted by " + this.selectedPlayerAST.name + " AST: " + (this.selectedPlayerAST.AST));

    }
    //New Possession
    changePossession();
    // return "fg";
};


// this.gameLog.push(this.selectedPlayerAST);
function doFt() {
    // this.doPf(this.d);


    for (let i = 0; i < this.amount; i++) {

        if (Math.random() < this.selectedPlayerOff.FTpct) {
            this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " makes free throw " + (i + 1) + " of " + this.amount);

            this.selectedPlayerOff.PTS += 1;
            this.selectedPlayerOff.FTA += 1;
            this.selectedPlayerOff.FTM += 1;
            this.OFFteam.PTS += 1;
            this.OFFteam.FTA += 1;
            this.OFFteam.FTM += 1;
            // Proposition Allocation
            if (this.overtimes <= 0) {
                this.quarterLog.push(this.quarter);
            }
            else if (this.overtimes >= 1) {
                this.quarterLog.push("OT");
            }
            if ((this.quarter === 1) && (this.possessionArrow == this.teamA.possession)) {

                this.OFFteam.Q1PTS += 1;
                this.gameLogA.push(1);
                this.gameLogB.push(0);
                this.gameLogAQ1.push(1);
                this.gameLogBQ1.push(0);

            }
            else if ((this.quarter === 1) && (this.possessionArrow == this.teamB.possession)) {

                this.OFFteam.Q1PTS += 1;
                this.gameLogB.push(1);
                this.gameLogA.push(0);
                this.gameLogBQ1.push(1);
                this.gameLogAQ1.push(0);

            }
            else if (this.quarter === 2 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q2PTS += 1;
                this.gameLogA.push(1);
                this.gameLogB.push(0);
                this.gameLogAQ2.push(1);
                this.gameLogBQ2.push(0);

            }
            else if (this.quarter === 2 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q2PTS += 1;
                this.gameLogB.push(1);
                this.gameLogA.push(0);
                this.gameLogBQ2.push(1);
                this.gameLogAQ2.push(0);
            }
            else if (this.quarter === 3 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q3PTS += 1;
                this.gameLogA.push(1);
                this.gameLogB.push(0);
                this.gameLogAQ3.push(1);
                this.gameLogBQ3.push(0);
            }
            else if (this.quarter === 3 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q3PTS += 1;
                this.gameLogB.push(1);
                this.gameLogA.push(0);
                this.gameLogBQ3.push(1);
                this.gameLogAQ3.push(0);
            }
            else if (this.quarter === 4 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.Q4PTS += 1;
                this.gameLogA.push(1);
                this.gameLogB.push(0);
                this.gameLogAQ4.push(1);
                this.gameLogBQ4.push(0);
            }
            else if (this.quarter === 4 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.Q4PTS += 1;
                this.gameLogB.push(1);
                this.gameLogA.push(0);
                this.gameLogBQ4.push(1);
                this.gameLogAQ4.push(0);
            }
            else if (this.overtimes >= 1 && (this.possessionArrow == this.teamA.possession)) {
                this.OFFteam.OTPTS += 1;
                this.gameLogA.push(1);
                this.gameLogB.push(0);
                this.gameLogAOT.push(1);
                this.gameLogBOT.push(0);


            }
            else if (this.overtimes >= 1 && (this.possessionArrow == this.teamB.possession)) {
                this.OFFteam.OTPTS += 1;
                this.gameLogB.push(1);
                this.gameLogA.push(0);
                this.gameLogBOT.push(1);
                this.gameLogAOT.push(0);

            }
            this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " PTS: " + (this.selectedPlayerOff.PTS) + " FT%: " + (((this.selectedPlayerOff.FTM / this.selectedPlayerOff.FTA) * 100).toFixed(1)) + "%  " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");


            this.liveBall = false


        } else {
            this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOff.name + " misses free throw " + (i + 1) + " of " + this.amount);

            this.selectedPlayerOff.FTA += 1;
            this.OFFteam.FTA += 1;

            this.gameLog.push(this.selectedPlayerOff.name + "(" + this.OFFteam.tag + ")" + " PTS: " + (this.selectedPlayerOff.PTS) + " FT%: " + (((this.selectedPlayerOff.FTM / this.selectedPlayerOff.FTA) * 100).toFixed(1)) + "%  " + "(" + this.teamA.tag + ")" + " " + this.teamA.PTS + "-" + this.teamB.PTS + " " + "(" + this.teamB.tag + ")");



            this.liveBall = false

            if (this.amount === (i + 1)) {
                this.liveBall = true
                return doReb(); // orb or drb

            }

        }


    }



    changePossession();

};

//Rebound play 
//DREB - Possession changes
//OREB - Offensive team gets another chance
//Potential rebounders sorted by DREB%/OREB%
//Team OVR and TRB% give boosts
function doReb() {

    var possPlayersDREB = this.DEFteam.players;
    var possPlayersOREB = this.OFFteam.players;

    var glassCleaner = Math.random();

    //Defensive Rebunders
    for (let i = 0; i < possPlayersDREB.length; i++) {
        var defenderREB = possPlayersDREB.sort(function (a, b) {
            return a.TRBpct - b.TRBpct
        });
        this.selectedPlayerDREB = defenderREB[Math.floor(Math.random() * defenderREB.length)];
    }
    //Offensive Rebounders
    for (let i = 0; i < possPlayersOREB.length; i++) {
        var teamMateREB = possPlayersOREB.sort(function (a, b) {
            return b.TRBpct - a.TRBpct
        });
        this.selectedPlayerOREB = teamMateREB[Math.floor(Math.random() * teamMateREB.length)];
    }
    //    console.log((((this.selectedPlayerOREB.ORBpct/10) + this.OFFteam.offense/100) / ((this.selectedPlayerDREB.DRBpct/10) + (this.selectedPlayerDREB.TRBpct/100))));

    // console.log(this.selectedPlayerDREB);

    //OFF rebound check
    if ((((this.selectedPlayerOREB.ORBpct / 10) + this.OFFteam.offense / 100) / ((this.selectedPlayerDREB.DRBpct / 10) + (this.selectedPlayerDREB.TRBpct / 100)) / 6) > Math.random()) {
        this.selectedPlayerOREB.REB += 1;
        this.selectedPlayerOREB.OREB += 1;
        this.OFFteam.REB += 1;
        this.OFFteam.OREB += 1;
        // this.gameLog.push(this.selectedPlayerOREB.ORBpct/10) + this.OFFteam.offense/100 / ((this.selectedPlayerDREB.DRBpct/100) + (this.selectedPlayerDREB.TRBpct/100));
        this.gameLog.push(minTommss(this.quarterLength) + " " + this.OFFteam.tag + " - " + this.selectedPlayerOREB.name + " grabbed the offensive rebound!");
        this.gameLog.push(this.selectedPlayerOREB.name + "(" + this.OFFteam.tag + ")" + " REB: " + (this.selectedPlayerOREB.REB) + " OREB: " + this.selectedPlayerOREB.OREB);
        //update time and go through player matchups again
        simPossession();
        return "orb";
    }
    //DEF rebound
    //For better distribution, a few checks
    else {
        //If their DRBpct > a random number, they get it
        if (this.selectedPlayerDREB.DRBpct / 100 > glassCleaner) {
            // console.log(this.selectedPlayerDREB);
            // console.log(this.selectedPlayerDef);
            // console.log(this.selectedPlayerDREB.DRBpct/100);
            this.selectedPlayerDREB.REB += 1;
            this.DEFteam.REB += 1;
            this.gameLog.push(minTommss(this.quarterLength) + " " + this.DEFteam.tag + " - " + this.selectedPlayerDREB.name + " grabbed the defensive rebound.");
            this.gameLog.push(this.selectedPlayerDREB.name + "(" + this.DEFteam.tag + ")" + " REB: " + (this.selectedPlayerDREB.REB));
            changePossession();
            return "drb";
        }
        //If it's less than a random number, another player gets a chance at the rebound
        else if (this.selectedPlayerDREB.DRBpct / 100 < glassCleaner) {

            //If they are different, the one with the higher TRB% will get the rebound
            //Some players just concede rebounds to their teammates who are known for rebounding.
            if (this.selectedPlayerDREB != this.selectedPlayerDef) {


                if (this.selectedPlayerDREB.TRBpct < this.selectedPlayerDef.TRBpct) {
                    this.selectedPlayerDef.REB += 1;
                    this.DEFteam.REB += 1;
                    this.gameLog.push(minTommss(this.quarterLength) + " " + this.DEFteam.tag + " - " + this.selectedPlayerDef.name + " grabbed the defensive rebound.");
                    this.gameLog.push(this.selectedPlayerDef.name + "(" + this.DEFteam.tag + ")" + " REB: " + (this.selectedPlayerDef.REB));
                    changePossession();
                    return "drb";
                }

                else {
                    this.selectedPlayerDREB.REB += 1;
                    this.DEFteam.REB += 1;
                    this.gameLog.push(minTommss(this.quarterLength) + " " + this.DEFteam.tag + " - " + this.selectedPlayerDREB.name + " grabbed the defensive rebound.");
                    this.gameLog.push(this.selectedPlayerDREB.name + "(" + this.DEFteam.tag + ")" + " REB: " + (this.selectedPlayerDREB.REB));
                    changePossession();
                    return "drb";

                }
            }

            //If the Defensive Player and the Rebounder are the same player
            // for loop and re-sort by DRB%
            // Rebound goes to the best 3 defensive rebounders randomly 
            //This prevents players not known for grabbing a lot of rebounds from doing so
            //The best rebounders are usually forwards and centers, some shooting guards are good rebounders
            //Few PGs will get rebounds in this scenario, if any
            else if (this.selectedPlayerDREB = this.selectedPlayerDef) {

                for (let i = 0; i < possPlayersDREB.length; i++) {
                    var defenderREB = possPlayersDREB.sort(function (a, b) {
                        return b.DRBpct - a.DRBpct
                    });

                    this.selectedPlayerDREB = defenderREB[Math.floor(Math.random() * 3)];
                }


                // console.log(this.selectedPlayerDREB);
                this.selectedPlayerDREB.REB += 1;
                this.DEFteam.REB += 1;
                this.gameLog.push(minTommss(this.quarterLength) + " " + this.DEFteam.tag + " - " + this.selectedPlayerDREB.name + " grabbed the defensive rebound.");
                this.gameLog.push(this.selectedPlayerDREB.name + "(" + this.DEFteam.tag + ")" + " REB: " + (this.selectedPlayerDREB.REB));
                changePossession();
                return "drb";


            }

        }
        // else {
        //     this.selectedPlayerDef.REB +=1;
        //     this.DEFteam.REB +=1;
        //     this.gameLog.push(minTommss(this.quarterLength) + " " + this.DEFteam.tag + " - " + this.selectedPlayerDef.name + " grabbed the defensive rebound.");
        //     this.gameLog.push(this.selectedPlayerDef.name + "("+this.DEFteam.tag+")" + " REB: " + (this.selectedPlayerDef.REB));
        //     changePossession();
        //     return "drb";
        // }
        // console.log(this.selectedPlayerDREB);
        // this.selectedPlayerDREB.REB +=1;
        // this.DEFteam.REB +=1;
        // this.gameLog.push(minTommss(this.quarterLength) + " " + this.DEFteam.tag + " - " + this.selectedPlayerDREB.name + " grabbed the defensive rebound.");
        // this.gameLog.push(this.selectedPlayerDREB.name + "("+this.DEFteam.tag+")" + " REB: " + (this.selectedPlayerDREB.REB));
        // changePossession();
        // return "drb";
    }
};




//Clock Converter into mm:ss
function minTommss() {
    //Also updates differntials and quarter stats
    this.diff = ((this.teamA.PTS) - (this.teamB.PTS));
    this.teamA.DIFF = (this.diff);
    this.teamB.DIFF = (-1 * (this.diff));

    var min = Math.floor(Math.abs(this.quarterLength))
    var sec = Math.floor((Math.abs(this.quarterLength) * 60) % 60);
    if (this.quarter === 4 && this.gameTime <= 0) {
        var sec = 3
    }
    return (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
};
