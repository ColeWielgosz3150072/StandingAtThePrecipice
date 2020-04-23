$(window).on("scroll", function(){

    var windowHeight = $(window).height()
    var documentHeight = $(document).height()
    var scrollTop = $(window).scrollTop()
    var trackLength = documentHeight - windowHeight
    var percentageScrolled = Math.floor(scrollTop/trackLength * 100)

    console.log(percentageScrolled + '% scrolled')

/*–––––––TITLE––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 9){
		$(".title").css({
		"top": -500+"vh",
		"left":-500+"vw"
		})
		$(".titleCard").css({
		"top": -500+"vh",
		"left":-500+"vw"
		})
	}
	else{
		$(".title").css({
		"top": 0,
		"left": 0
		})
		$(".titleCard").css({
		"top": 80 +"vh",
		"left":0+"vw"
		})
	}
/*–––––––INTRO––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 9 && percentageScrolled < 18){
		$(".introductionImageContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".introductionImageContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––HIB––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 17 && percentageScrolled < 27){
		$(".hibContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".hibContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––EARTH DAY––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 26 && percentageScrolled < 36){
		$(".earthDayContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".earthDayContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––MELT––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 35 && percentageScrolled < 45){
		$(".meltContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".meltContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––TSHIRTS––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 44 && percentageScrolled < 54){
		$(".tshirtsContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".tshirtsContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––BEAR––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 53 && percentageScrolled < 63){
		$(".bearContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".bearContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––MARCHBOOK––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 62 && percentageScrolled < 72){
		$(".marchBookContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".marchBookContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––ORACLE––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 71 && percentageScrolled < 81){
		$(".oracleContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".oracleContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––OBJECTS––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 80 && percentageScrolled < 90){
		$(".objectsContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".objectsContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––CONSUMPTION––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 89 && percentageScrolled < 99){
		$(".consumptionContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".consumptionContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
/*–––––––ONGOING––––––––––––––––––––––––––––––––––––*/
	if(percentageScrolled > 98 && percentageScrolled < 101){
		$(".ongoingContainer").css({
		"left": 0,
		"top": 0
		})
	}
	else{
		$(".ongoingContainer").css({
		"left":-500+"vw",
		"top": -500+"vh"
		})
	}
})


	$( function() {
		$( ".aboveImg" ).draggable({
			 containment: ".introductionImageContainer",
             scroll: false
		});
		$( ".compImg" ).draggable({
			 containment: ".introductionImageContainer",
             scroll: false
		});
		$( ".floodImg" ).draggable({
			 containment: ".introductionImageContainer",
             scroll: false
		});
		$( ".desertImg" ).draggable({
			 containment: ".introductionImageContainer",
             scroll: false
		});
		$( ".elevationImg" ).draggable({
			 containment: ".introductionImageContainer",
             scroll: false
		});
		$( ".hibImg1" ).draggable({
			 containment: ".hibContainer",
             scroll: false
		});
		$( ".hibImg2" ).draggable({
			 containment: ".hibContainer",
             scroll: false
		});
		$( ".hibImg3" ).draggable({
			 containment: ".hibContainer",
             scroll: false
		});
		$( ".hibImg4" ).draggable({
			 containment: ".hibContainer",
             scroll: false
		});
		$( ".hibImg5" ).draggable({
			 containment: ".hibContainer",
             scroll: false
		});
		$( ".earthDayImg1" ).draggable({
			 containment: ".earthDayContainer",
             scroll: false
		});
		$( ".earthDayImg2" ).draggable({
			 containment: ".earthDayContainer",
             scroll: false
		});
		$( ".earthDayImg3" ).draggable({
			 containment: ".earthDayContainer",
             scroll: false
		});
		$( ".earthDayImg4" ).draggable({
			 containment: ".earthDayContainer",
             scroll: false
		});
		$( ".tshirtImg1" ).draggable({
			 containment: ".tshirtsContainer",
             scroll: false
		});
		$( ".tshirtImg2" ).draggable({
			 containment: ".tshirtsContainer",
             scroll: false
		});
		$( ".tshirtImg3" ).draggable({
			 containment: ".tshirtsContainer",
             scroll: false
		});
		$( ".tshirtImg4" ).draggable({
			 containment: ".tshirtsContainer",
             scroll: false
		});
		$( ".bearImg1" ).draggable({
			 containment: ".bearContainer",
             scroll: false
		});
		$( ".marchImg1" ).draggable({
			 containment: ".marchBookContainer",
             scroll: false
		});
		$( ".marchImg2" ).draggable({
			 containment: ".marchBookContainer",
             scroll: false
		});
		$( ".marchImg3" ).draggable({
			 containment: ".marchBookContainer",
             scroll: false
		});
		$( ".oracleImg1" ).draggable({
			 containment: ".oracleContainer",
             scroll: false
		});
		$( ".oracleImg2" ).draggable({
			 containment: ".oracleContainer",
             scroll: false
		});
		$( ".oracleImg3" ).draggable({
			 containment: ".oracleContainer",
             scroll: false
		});
		$( ".objectsImg1" ).draggable({
			 containment: ".objectsContainer",
             scroll: false
		});
		$( ".objectsImg2" ).draggable({
			 containment: ".objectsContainer",
             scroll: false
		});
		$( ".objectsImg3" ).draggable({
			 containment: ".objectsContainer",
             scroll: false
		});
		$( ".objectsImg4" ).draggable({
			 containment: ".objectsContainer",
             scroll: false
		});
		$( ".babyImg" ).draggable({
			 containment: ".ongoingContainer",
             scroll: false
		});
} );


 $(document).ready(function (){
            $(".compImg").click(function (){
                $('html, body').animate({
                    scrollTop: $("title").offset().top
                }, 2000);
            });
        });



	// $( function() {
	// 	$( ".introBearGif" ).draggable({
	// 		 containment: ".introductionImageContainer",
 //             scroll: false
	// 	});
	// 	$( ".introOutWithABang" ).draggable({
	// 		 containment: ".introductionImageContainer",
 //             scroll: false
	// 	});
	// 	} );


	// $( function() {
	// 	$( ".introBearGif" ).resizable();
	// 	$( ".introOutWithABang" ).resizable();
	// 	} );



// function amountscrolled(){
//     var windowHeight = $(window).height()
//     var documentHeight = $(document).height()
//     var scrollTop = $(window).scrollTop()
//     var trackLength = documentHeight - windowHeight
//     var percentageScrolled = Math.floor(scrollTop/trackLength * 100)
//     console.log(percentageScrolled + '% scrolled')
// }
 
// $(window).on("scroll", function(){
//     amountscrolled()


// })


// if(percentageScrolled > 7){
// 	$(".title").css({
// 	"top": -500+"vh",
// 	"left":-500+"vw"
// 	})
// }
// else{
// 	$(".title").css({
// 	"top": 0,
// 	"left": 0
// 	})
// }


// $(".slowScroll").css({
// 	"top": clockPositionTop,
// 	"left":clockPositionLeft
// })
// $(".title").css({
// 	if()
// 	"top": clockPositionTop,
// 	"left":clockPositionLeft
// })

// $(document).scroll(function(){

// 	var scrolledSoFarVert = $(document).scrollTop()
	
// 	var totalHeight = $(document).height()- $(window).height()

// 	var scrolledSoFarHor = $(document).scrollLeft()

// 	var totalWidth = $(document).width()- $(window).width()



// 	var clockPositionTop = (scrolledSoFarVert/2) + 600


// }) 
