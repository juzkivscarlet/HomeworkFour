$(document).ready(function() {

    // Universal variables
    var page = 0;
    var charOne;
    var charTwo;

    // Class for setting up the characters
    class Character {
        constructor(name,image,face) {
            this.name = name;
            this.image = "assets/" + image;
            this.face = "assets/faces/" + face;
        }
        setImgs(a) {
            this.fightImgs = [];
            a = "assets/fightimgs/" + a;
            // Images used in fight game play are all: firstname-f1.png or firstname-f2.png
            var n = this.name.substring(0,this.name.indexOf(" "));      // gets first name isolated
            var b = "assets/fightimgs/" + n.toLowerCase() + "-f1.png";
            var c = "assets/fightimgs/" + n.toLowerCase() + "-f2.png";
            this.fightImgs.push(a,b,c);
        }
        setInstruments(x) {
            this.instruments = x.split(",");
        }
        setPowers(a,b,c) {
            this.powers = [a,b,c];
        }
        setShortPowers(a,b,c) {
            this.short = [a,b,c];
        }
        setPowerXP(x,y,z) {
            this.powerStrength = [x,y,z];
        }
        choosePower(p,x) {
            console.log(this.name + " has chosen power #" + x);
            if(p==1) {
                $("#p1toast-body").text(this.name+" has chosen power #"+x+", "+this.short[x-1]);
                $("#p1toast").toast('show');
                $("#p1fightImg").attr('src',this.fightImgs[2]);
                setTimeout(function() {
                    $("#p1fightImg").attr('src',charOne.fightImgs[1]);
                },500);
            } else {
                $("#p2toast-body").text(this.name+" has chosen power #"+x+", "+this.short[x-1]);
                $("#p2toast").toast('show');
                $("#p2fightImg").attr('src',this.fightImgs[2]);
                setTimeout(function() {
                    $("#p2fightImg").attr('src',charTwo.fightImgs[1]);
                },500);
            }
            if(x==1) this.powerOne();
            else if(x==2) this.powerTwo();
            else if(x==3) this.powerThree();
            this.changeHealth(p,x-1);
        }
        changeHealth(c,x) {
            if(c==1) {
                // change p2 health
                var health = $("#p2health").attr('aria-valuenow');
                var blow = this.powerStrength[x];
                health -= blow;
                $("#p2health").attr('aria-valuenow',health);
                $("#p2health").css('width',health+"%");
                $("#p2health").text(health+"%");
                // p2 dies
                if(health<=0) this.die(2);
            } else {
                // change p1 health
                var health = $("#p1health").attr('aria-valuenow');
                var blow = this.powerStrength[x];
                health -= blow;
                $("#p1health").attr('aria-valuenow',health);
                $("#p1health").css('width',health+"%");
                $("#p1health").text(health+"%");
                // p1 dies
                if(health<=0) this.die(1);
            }
        }
        die(p) {
            if(p==1) {
                $("#modal-text").text("You died.");
                $("#modal-img").attr('src',charTwo.face);
            } else {
                $("#modal-text").text("Congrats! You won!");
                $("#modal-img").attr('src',charOne.face);
            }
            $("#modal-title").text("Game over.");
            $("#forfeit-confirm").text("OK");
            $("#forfeit-modal").modal('show');
        }
    }

    // setting up character objects
    var jaredDines = new Character("Jared Dines","jared-dines.jpg","dines.png");
    jaredDines.setImgs("jared-dines-fighting.png");
    jaredDines.setInstruments("Guitar,Bass,Drums,Vocals");
    jaredDines.setPowers("18-string guitar dj0nt, bruh!","Drop Q tuning. Ya know, for DJENT!!","TRVE metal scream. Br00tal.");
    jaredDines.setShortPowers("18-string guitar","Drop Q tuning","Trve metal");
    jaredDines.setPowerXP(8,3,4);
    jaredDines.powerOne = function() {
        // 18-string guitar
    }
    jaredDines.powerTwo = function() {
        // Drop Q tuning
    }
    jaredDines.powerThree = function() {
        // Trve metal
    }

    var stevieT = new Character("Stevie T","stevie-t.jpg","steve.png");
    stevieT.setImgs("stevie-fighting.png");
    stevieT.setInstruments("Guitar,Ukulele,Triangle");
    stevieT.setPowers("You can't handle the 20-string djent!","Shout 'Pickles!', then shred a face-ripping guitar solo","Funny face for absurdity points.");
    stevieT.setShortPowers("20-string guitar!","'PICKLES!'","Funny face");
    stevieT.setPowerXP(7,3,5);
    stevieT.powerOne = function() {
        // 20-string guitar
    }
    stevieT.powerTwo = function() {
        // PICKLES!
    }
    stevieT.powerThree = function() {
        // Funny face
    }

    var adamNeely = new Character("Adam Neely","adam-neely.jpg","neely.png");
    adamNeely.setImgs("adam-neely-fighting.png","adam-f1.png","adam-f2.png");
    adamNeely.setInstruments("Bass,Keyboards");
    adamNeely.setPowers("Blow your mind with some good ol' music theory","BASS!","Ya like Jazz?");
    adamNeely.setShortPowers("Music theory","'BASS!'","Ya like Jazz?");
    adamNeely.setPowerXP(6,3,6);
    adamNeely.powerOne = function() {
        // Music theory
    }
    adamNeely.powerTwo = function() {
        // BASS!
    }
    adamNeely.powerThree = function() {
        // Ya like Jazz?
    }

    var austinDickey = new Character("Austin Dickey","austin-dickey.jpg","dickey.png");
    austinDickey.setImgs("austin-dickey-fighting.png","austin-f1.png","austin-f2.png");
    austinDickey.setInstruments("Vocals");
    austinDickey.setPowers("Most br00tal gutteral growl in existence.","Display hilarious off-the-top humor.","Laugh at your musician fails.");
    austinDickey.setShortPowers("RAWR","Memez","Ha! You failed!");
    austinDickey.setPowerXP(8,5,2);
    austinDickey.powerOne = function() {
        // RAWR
    }
    austinDickey.powerTwo = function() {
        // Memez
    }
    austinDickey.powerThree = function() {
        // Ha! You failed!
    }

    var nikNocturnal = new Character("Nik Nocturnal","nik-nocturnal.jpg","nik.png");
    nikNocturnal.setImgs("nik-fighting.png","nik-f1.png","nik-f2.png");
    nikNocturnal.setInstruments("Guitar");
    nikNocturnal.setPowers("Monday? MEME DAY! XD","Learn to play your song on guitar in an hour.","React to your metal song.");
    nikNocturnal.setShortPowers("Monday meme day.","Learn your song","React to your song");
    nikNocturnal.setPowerXP(7,6,2);
    nikNocturnal.powerOne = function() {
        // Monday meme day
    }
    nikNocturnal.powerTwo = function() {
        // Learn your song
    }
    nikNocturnal.powerThree = function() {
        // React to your song
    }

    var rudyAyoub = new Character("Rudy Ayoub","rudy-ayoub.jpg","rudy.jpg");
    rudyAyoub.setImgs("rudy-fighting.png","rudy-f1.png","rudy-f2.png");
    rudyAyoub.setInstruments("Guitar,Bass");
    rudyAyoub.setPowers("Play 'Smoke on the Water'... again.","Make uncomfortable, relatable skit for other musicians.","Jumpscare ending");
    rudyAyoub.setShortPowers("'Smoke on the Water'","Terrifying awkwardness","Jumpscare");
    rudyAyoub.setPowerXP(9,3,3);
    rudyAyoub.powerOne = function() {
        // Snoke on the Water
    }
    rudyAyoub.powerTwo = function() {
        // Terrifying awkwardness
    }
    rudyAyoub.powerThree = function() {
        // Jumpscare
    }

    var kmac = new Character("kmac 2021","kmac2021.jpg","kmac.jpg");
    kmac.setImgs("kmac2021-fighting.png","kmac-f1.png","kmac-f2.png");
    kmac.setInstruments("Guitar,Vocals");
    kmac.name = "kmac2021";
    kmac.setPowers("Mank dankest and most pointless meme on the internet.","Play guitar solo he didn't learn for views... onstage... with an actual band... that isn't even his...","Actually write good sadboi music");
    kmac.setShortPowers("Dankest meme ever","Fail on guitar","Sadboi music");
    kmac.setPowerXP(7,7,1);
    kmac.powerOne = function() {
        // Dankest meme ever
    }
    kmac.powerTwo = function() {
        // Fail on guitar
    }
    kmac.powerThree = function() {
        // Sadboi music
    }

    var robScallon = new Character("Rob Scallon","rob-scallon.jpg","rob.png");
    robScallon.setImgs("rob-fighting.png","rob-f1.png","rob-f2.png");
    robScallon.setInstruments("Guitar,Banjo,Bass,Sitar,Harp,Shovel");
    robScallon.setPowers("Learn yet another obscure musical instrument.","Play beautiful guitar solo, flexing his superior skillz.","Play 'Job for a Cowboy' song on banjo.");
    robScallon.setShortPowers("Learn another instrument","Play guitar beautifully","Death metal on banjo"); 
    robScallon.setPowerXP(6,2,7);
    robScallon.powerOne = function() {
        // Learn another instrument
    }
    robScallon.powerTwo = function() {
        // Play guitar beautifully
    }
    robScallon.powerThree = function() {
        // Death metal on banjo
    }

    $("#game").hide();

    // click start button
    $("#start-button").click(function() {
        $("#start").fadeOut(500);
        setTimeout(function() {
            $("#game").slideDown(500);
        },500);
        page = 1;
    });

    // arrow key functionality
    function checkKey(e) {
        e = e || window.event;
        if(page==1||page==2) {
            if(e.keyCode=='37') {
                // left arrow
                $("#carousel").carousel('prev');
                $("#carousel").carousel('pause');
            } else if(e.keyCode=='39') {
                // right arrow
                $('#carousel').carousel('next');
                $("#carousel").carousel('pause');
            }
        }
    }

    // function to convert character name to format same as objects
    // Example: turn 'adam-neely' into 'Adam Neely'
    function getPlayerObj(char) {
        var player = char.split("");
        for(var i=0; i<player.length; i++) {
            if(player[i]=='-') {
                player[i+1] = player[i+1].toUpperCase();
                player[i] = "";
            }
        }
        return player.toString().replace(/,/g,'');
    }

    // choose character
    function chooseChar(char) {
        if(page==1) {
            // choose user player
            $("#game").fadeOut(500);
            setTimeout(function() {
                $("#title").text("Choose computer player: ");
                $("#game").slideDown(500);
            },500);
        } else if(page==2) {
            // choose computer player
            $("#game").fadeOut(500);
            setTimeout(function() {
                // change title and make sure it shows
                $("#title").text("BATTLE: ");
                $("#title").show();
                $("#carousel").hide();
                $("#game").slideDown(500);
                playerImgs(charOne,charTwo);

                // hide gameplay elements
                $("#p1fighting").hide();
                $("#p1img").hide();
                $("#p2fighting").hide();
                $("#p2img").hide();
                $("#forfeit-div").hide();

                // make sure following elements are shown (esp. after forfeit)
                $("#playerOne").show();
                $("#p1ConfirmText").show();
                $("#p1powers").show();
                $("#playerTwo").show();
                $("#p2ConfirmText").show();
                $("#p2powers").show();
                $("#confirm-btns").show();

                // show battle-confirm page
                $("#battle-confirm").slideDown(500);
            },500);
        }
    }

    // display correct player images for confirmation page
    function playerImgs(char1,char2) {
        char1 = getPlayerObj(char1);
        char2 = getPlayerObj(char2);
        charOne = new Object();
        charTwo = new Object();

        // Character 1 (User)
        if(char1=='jaredDines')         charOne = jaredDines;
        else if(char1=='stevieT')       charOne = stevieT;
        else if(char1=='adamNeely')     charOne = adamNeely;
        else if(char1=='austinDickey')  charOne = austinDickey;
        else if(char1=='nikNocturnal')  charOne = nikNocturnal;
        else if(char1=='rudyAyoub')     charOne = rudyAyoub;
        else if(char1=='kmac')          charOne = kmac;
        else if(char1=='robScallon')    charOne = robScallon;

        // Character 2 (Computer)
        if(char2=='jaredDines')         charTwo = jaredDines;
        else if(char2=='stevieT')       charTwo = stevieT;
        else if(char2=='adamNeely')     charTwo = adamNeely;
        else if(char2=='austinDickey')  charTwo = austinDickey;
        else if(char2=='nikNocturnal')  charTwo = nikNocturnal;
        else if(char2=='rudyAyoub')     charTwo = rudyAyoub;
        else if(char2=='kmac')          charTwo = kmac;
        else if(char2=='robScallon')    charTwo = robScallon;

        // Set player names and powers
        $("#user-header").text(charOne.name);
        $("#pOneTitle").text(charOne.name);
        $("#playerOne").attr('src',charOne.image);
        $("#p1inst").text(charOne.instruments.toString());
        $("#c1p1").text(charOne.powers[0]);
        $("#c1p2").text(charOne.powers[1]);
        $("#c1p3").text(charOne.powers[2]);

        $("#comp-header").text(charTwo.name);
        $("#pTwoTitle").text(charTwo.name);
        $("#playerTwo").attr('src',charTwo.image);
        $("#p2inst").text(charTwo.instruments.toString());
        $("#c2p1").text(charTwo.powers[0]);
        $("#c2p2").text(charTwo.powers[1]);
        $("#c2p3").text(charTwo.powers[2]);

    }

    // Arrow key functionality 
    document.onkeydown = checkKey;

    // user clicks button to choose characters
    $(".char-choose").click(function() {
        if(page==1) {
            charOne = this.value;
            chooseChar(charOne);
            page=2;
        } else if(page==2) {
            charTwo = this.value;
            chooseChar(charTwo);
            page=3;
        }
    });

    // user reconsiders character choices, goes back to choosing characters
    $("#reconsiderbtn").click(function() {
        if(this.hasClass("disabled")==false) {
            $("#battle-confirm").fadeOut(500);
            $("#battle-confirm").hide();
            $("#title").text("Choose your character: ");

            setTimeout(function() {
                $("#carousel").slideDown(500);
            },500);
            page = 1;
        }
        
    });

    // user clicks button to confirm characters and begins gameplay
    $("#beginbtn").click(function() {
        // Hide confirm/reconsider buttons & page-title
        $("#confirm-btns").fadeOut();
        $("#title").slideUp(500);
        $('#title').hide();

        // reset modal text to default (forfeit)
        $("#modal-text").text("Are you sure you want to forfeit the battle?");
        $("#modal-title").text("Forfeit game?");
        $("#modal-img").attr('src','assets/headstock.png');

        // Hide powers & descriptions
        $("#p1powers").slideUp(500);
        $("#p2powers").slideUp(500);
        $("#p1ConfirmText").slideUp(500);
        $("#p2ConfirmText").slideUp(500);

        // Put powers into player buttons
        $("#c1p1btn").text(charOne.short[0]);
        $("#c1p2btn").text(charOne.short[1]);
        $("#c1p3btn").text(charOne.short[2]);

        $("#c2p1btn").text(charTwo.short[0]);
        $("#c2p2btn").text(charTwo.short[1]);
        $("#c2p3btn").text(charTwo.short[2]);

        // display fighting images for characters
        $("#p1fightImg").attr('src',charOne.fightImgs[1]);
        $("#p2fightImg").attr('src',charTwo.fightImgs[1]);

        // Power description popovers
        var c1pList = document.createElement("ul");
        var c2pList = document.createElement("ul");
        for(var d=0; d<3; d++) {
            var pu = document.createElement("li");
            pu.innerHTML = "-- " + charOne.powers[d];
            if(d!=2) pu.innerHTML += "<br>";
            c1pList.appendChild(pu);

            var pc = document.createElement("li");
            pc.innerHTML = "-- " + charTwo.powers[d];
            if(d!=2) pc.innerHTML += "<br>";
            c2pList.appendChild(pc);
        }
        $("#c1pDesc").popover({content: c1pList, html: true});
        $("#c2pDesc").popover({content: c2pList, html: true});

        // Display instrument buttons
        for(var t=0; t < charOne.instruments.length; t++) {
            var btn = document.createElement("button");
            if(t==0) btn.innerHTML += "-- ";
            btn.innerHTML += charOne.instruments[t];
            btn.className = "btn btn-success";
            var text = 'c1-' + charOne.instruments[t];
            btn.setAttribute('id',text);
            $("#p1instBtns").append(btn);
        }

        for(var t=0; t < charTwo.instruments.length; t++) {
            var btn = document.createElement("button");
            if(t==0) btn.innerHTML += "-- ";
            btn.innerHTML += charTwo.instruments[t];
            btn.className = "btn btn-danger disabled";
            var text = 'c2-' + charTwo.instruments[t];
            btn.setAttribute('id',text);
            $("#p2instBtns").append(btn);
        }

        // Hide player images, replace with fight images
        $("#playerOne").slideUp(500);
        $("#playerTwo").slideUp(500);
        setTimeout(function() {
            $("#p1fighting").slideDown(500);
            $("#p1img").slideDown(500);
            $("#p2fighting").slideDown(500);
            $("#p2img").slideDown(500);
            $("#forfeit-div").slideDown(500);
        },500);
        
        $("#reconsiderbtn").addClass("disabled");
        $("#beginbtn").addClass("disabled");

        $(function() {
            $('[data-toggle="popover"').popover();
        });

        $("#forfeit-confirm").click(function() {
            $("#battle-confirm").fadeOut(500);
            $("#title").text("Choose your character: ");
            $("#title").slideDown(500);

            setTimeout(function() {
                $("#carousel").slideDown(500);
            },500);
            page = 1;
        });

    });

    // Activate appropriate power when button clicked
    $("#c1p1btn").click(function() {
        charOne.choosePower(1,1);
        var n = Math.ceil(Math.random()*3);
        charTwo.choosePower(2,n);
    });
    $("#c1p2btn").click(function() {
        charOne.choosePower(1,2);
        var n = Math.ceil(Math.random()*3);
        charTwo.choosePower(2,n);
    });
    $("#c1p3btn").click(function() {
        charOne.choosePower(1,3);
        var n = Math.ceil(Math.random()*3);
        charTwo.choosePower(2,n);
    });

    
});