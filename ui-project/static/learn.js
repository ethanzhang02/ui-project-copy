$("#exposition").click(function () {
	window.location.href = "/learn/2"
})
$("#risingaction").click(function () {
	window.location.href = "/learn/4"
})
$("#climax").click(function () {
	window.location.href = "/learn/6"
})
$("#fallingaction").click(function () {
	window.location.href = "/learn/8"
})
$("#resolution").click(function () {
	window.location.href = "/learn/10"
})

$("#next-btn").click(function () {
	let next_id = parseInt(data) + 2
	window.location.href = "/learn/" + next_id
})
$("#previous-btn").click(function () {
	let next_id = parseInt(data) - 2
	window.location.href = "/learn/" + next_id
})


$(document).ready(function () {
	var currentTime = new Date();

	// Store the current time in local storage
	localStorage.setItem('pageLoadTime', currentTime);

	// Output the result
	console.log("Page load time:", currentTime);

	if (data % 2 != 1) {
		$('#select').hide();
		$('#info').css({ "display": "flex" });
		if (data == 2) {
			$('#previous-btn').hide();

			$('.symbol').css({ "transform": "rotate(180deg)" })

			$("#box-1")
				.html("<a class='button-name'>exposition</a><br><a class='symbol'>𓂡</a>")
				.css({ "background": "#211400", "color": "#E9E6DE", "transform": "translateY(-10px)", "box-shadow": "0 10px 15px rgba(33, 20, 0, 0.3)" })
				.click(function () { window.location.href = "/learn/1" })
				.mouseenter(function () {
					$(this)
						.html("<a class='button-name'>back</a><br><a class='symbol'>⤹</a>")
				})
				.mouseleave(function () {
					$(this)
						.html("<a class='button-name'>exposition</a><br><a class='symbol'>𓂡</a>")
				})
				.mousedown(function () {
					$(this)
						.html("<a class='button-name'>exposition</a><br><a class='symbol'>𓂡</a>")
						.css({ "background": "rgba(33, 20, 0, 0.05)", "color": "#211400", "transition": "color 0.1s ease, transform 0.3s ease", "transform": "translateY(0px)", "box-shadow": "0 0 0 rgba(33, 20, 0, 0)" })
				})

			$("#box-2")
				.html("<h5> what? </h5><br> <p>Ah, the gentle breezes of the beginning! <br><br>The exposition is where you set the stage, introduce your characters, establish the setting, and hint at the conflicts. <br><br>It’s like inviting your audience into your world, offering them a cup of tea, and whispering, 'Let me tell you a story.'</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-3")
				.html("<h5> examples! </h5><br> <p>Fantasy:<br>In the mystical land of Eldoria, young Elara discovers her ability to speak with animals on her 16th birthday, a secret that could either save her kingdom or doom it. <br><br> Science Fiction:<br>Captain Rex of the starship Orion is tasked with delivering a mysterious artifact across the galaxy, unaware of its true power and the cosmic entities tracking him. <br><br> Romantic Comedy:<br>Julie, a quirky bookshop owner in New York, juggles her uneventful love life and her dream of becoming a writer, all while dealing with a comically overbearing family.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-4")
				.html("<h5> impact... </h5><br> <p>The exposition is your first impression. <br><br> It sets the tone and hooks your audience. <br><br> Without this solid foundation, your story might just float away like a leaf on the wind.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-5")
				.html("<img src='/static/gifs/exposition.gif' alt='Exposition'>")
				.css({ "cursor": "default"})


		}
		if (data == 4) {
			$("#box-1")
				.html("<h5> what? </h5><br> <p>Climbing the plot mountain! <br><br>This section involves complications and developments that propel the story forward.<br><br>The stakes rise, challenges abound, and your characters are tested at every turn.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-2")
				.html("<a class='button-name'>rising action</a><br><a class='symbol'>𓂦</a>")
				.css({ "background": "#211400", "color": "#E9E6DE", "transform": "translateY(-10px)", "box-shadow": "0 10px 15px rgba(33, 20, 0, 0.3)" })
				.click(function () { window.location.href = "/learn/1" })
				.mouseenter(function () {
					$(this)
						.html("<a class='button-name'>back</a><br><a class='symbol'>⤹</a>")
				})
				.mouseleave(function () {
					$(this)
						.html("<a class='button-name'>rising action</a><br><a class='symbol'>𓂦</a>")
				})
				.mousedown(function () {
					$(this)
						.html("<a class='button-name'>rising action</a><br><a class='symbol'>𓂦</a>")
						.css({ "background": "rgba(33, 20, 0, 0.05)", "color": "#211400", "transition": "color 0.1s ease, transform 0.3s ease", "transform": "translateY(0px)", "box-shadow": "0 0 0 rgba(33, 20, 0, 0)" })
				})
			$("#box-3")
				.html("<h5> examples! </h5><br> <p>Fantasy:<br>As Elara bonds with creatures great and small, an ancient prophecy surfaces, suggesting she’s the key to unleashing boundless nature magic that some wish to harness for war. <br><br> Science Fiction:<br>Pursued by interstellar bounty hunters, Rex forms unlikely alliances, each starport offering both aid and betrayal, as the artifact begins to unveil its secrets, altering Rex's perception of reality. <br><br> Romantic Comedy:<br>Julie’s life spirals into chaos when a famous author visits her shop, sparking not only a potential romance but also a series of hilarious misunderstandings and mishaps.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-4")
				.html("<h5> impact... </h5><br> <p>The rising action stokes the fires of your story’s engine, building momentum. <br><br> It’s the thrilling roller coaster part of your tale, ensuring that your audience clings to every twist and turn.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-5")
				.html("<img src='/static/gifs/risingaction.gif' alt='Risingaction'>")
				.css({ "cursor": "default"})
		}
		if (data == 6) {
			$("#box-1")
				.html("<h5> what? </h5><br> <p>The peak of the mountain, the moment of highest tension and drama! <br><br>The climax is where conflicts reach their boiling point, decisions are made, and the fate of your characters hangs in the balance.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-2")
				.html("<h5> examples! </h5><br> <p>Fantasy:<br>In a grand confrontation, Elara must choose between using her powers to end the war or to preserve the natural harmony of her world, risking her life in the process. <br><br> Science Fiction:<br> In a cosmic showdown, Rex confronts the entities desiring the artifact, using his newfound knowledge and alliances to forge a path of peace for the galaxy. <br><br> Romantic Comedy:<br>During a hilariously disastrous book signing, Julie must decide whether to follow her heart with the author or pursue her dreams independently, culminating in a heartfelt declaration.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-3")
				.html("<a class='button-name'>climax</a><br><a class='symbol'>𓂞</a>")
				.css({ "background": "#211400", "color": "#E9E6DE", "transform": "translateY(-10px)", "box-shadow": "0 10px 15px rgba(33, 20, 0, 0.3)" })
				.click(function () { window.location.href = "/learn/1" })
				.mouseenter(function () {
					$(this)
						.html("<a class='button-name'>back</a><br><a class='symbol'>⤹</a>")
				})
				.mouseleave(function () {
					$(this)
						.html("<a class='button-name'>climax</a><br><a class='symbol'>𓂞</a>")
				})
				.mousedown(function () {
					$(this)
						.html("<a class='button-name'>climax</a><br><a class='symbol'>𓂞</a>")
						.css({ "background": "rgba(33, 20, 0, 0.05)", "color": "#211400", "transition": "color 0.1s ease, transform 0.3s ease", "transform": "translateY(0px)", "box-shadow": "0 0 0 rgba(33, 20, 0, 0)" })
				})

			$("#box-4")
				.html("<h5> impact... </h5><br> <p>The climax is the turning point. <br><br>It’s the “aha!” or the “oh no!” moment. <br><br>It’s where your story makes its mark, leaving the audience breathless and eager for resolution.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-5")
				.html("<img src='/static/gifs/climax.gif' alt='Climax'>")
				.css({ "cursor": "default"})
		}
		if (data == 8) {
			$("#box-1")
				.html("<h5> what? </h5><br> <p>After the storm comes the calm. <br><br>The falling action deals with the aftermath of the climax, resolving remaining conflicts and guiding our characters towards stability.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-2")
				.html("<h5> examples! </h5><br> <p>Fantasy:<br>Elara’s choice brings a fragile peace to Eldoria, and she works to rebuild her kingdom, knowing the balance she chose is tenuous. <br><br> Science Fiction:<br> Rex returns to his life of exploration, now revered as a diplomat, with lingering effects of the artifact’s power hinting at future adventures.<br><br> Romantic Comedy:<br>Julie finds both love and success, her book inspired by her comedic misadventures becomes a bestseller, bringing her both joy and a new set of challenges.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-3")
				.html("<h5> impact... </h5><br> <p>The falling action is like gently lowering your audience from the high of the climax. <br><br>It’s essential for satisfying resolution and tying up loose ends, ensuring everyone disembarks from your story’s journey content and fulfilled.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-4")
				.html("<a class='button-name'>falling action</a><br><a class='symbol'>𓂤</a>")
				.css({ "background": "#211400", "color": "#E9E6DE", "transform": "translateY(-10px)", "box-shadow": "0 10px 15px rgba(33, 20, 0, 0.3)" })
				.click(function () { window.location.href = "/learn/1" })
				.mouseenter(function () {
					$(this)
						.html("<a class='button-name'>back</a><br><a class='symbol'>⤹</a>")
				})
				.mouseleave(function () {
					$(this)
						.html("<a class='button-name'>falling action</a><br><a class='symbol'>𓂤</a>")
				})
				.mousedown(function () {
					$(this)
						.html("<a class='button-name'>falling action</a><br><a class='symbol'>𓂤</a>")
						.css({ "background": "rgba(33, 20, 0, 0.05)", "color": "#211400", "transition": "color 0.1s ease, transform 0.3s ease", "transform": "translateY(0px)", "box-shadow": "0 0 0 rgba(33, 20, 0, 0)" })
				})
			$("#box-5")
				.html("<img src='/static/gifs/fallingaction.gif' alt='Fallingaction'>")
				.css({ "cursor": "default"})
		}

		if (data == 10) {
			$('#next-btn').hide();

			$("#box-1")
				.html("<h5> what? </h5><br> <p>The ship docks, and the journey ends. <br><br>The resolution is where all storylines wrap up neatly, providing closure to your narrative odyssey. <br><br>It’s the final goodbye or the lingering kiss — the last note in your symphonic tale.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-2")
				.html("<h5> examples! </h5><br> <p>Fantasy:<br>Eldoria thrives under Elara’s reignas nature and society find a new harmony. She remains a legend, a queen who speaks to beasts and trees, ensuring her people never forget the balance of power and peace. <br><br> Science Fiction:<br> Captain Rex, now a seasoned and wise leader, gazes into the stars, knowing that while peace reigns, the universe is vast and full of mysteries yet to be explored.<br><br> Romantic Comedy:<br>Julie opens a new chain of bookshops and marries her author beau in a quirky, book-themed wedding, surrounded by her loving, albeit still overbearing, family.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-3")
				.html("<h5> impact... </h5><br> <p>The resolution provides the final closure and satisfaction. <br><br>It's the dessert after a fine meal, leaving your audience with a sense of completion and a lingering taste of the journey they've just enjoyed.</p>")
				.css({ "flex-direction": "column" , "cursor": "default"})

			$("#box-4")
				.html("<img src='/static/gifs/resolution.gif' alt='Resolution'>")
				.css({ "cursor": "default"})

			$("#box-5")
				.html("<a class='button-name'>resolution</a><br><a class='symbol'>𓂟</a>")
				.css({ "background": "#211400", "color": "#E9E6DE", "transform": "translateY(-10px)", "box-shadow": "0 10px 15px rgba(33, 20, 0, 0.3)" })
				.click(function () { window.location.href = "/learn/1" })
				.mouseenter(function () {
					$(this)
						.html("<a class='button-name'>back</a><br><a class='symbol'>⤹</a>")
				})
				.mouseleave(function () {
					$(this)
						.html("<a class='button-name'>resolution</a><br><a class='symbol'>𓂤</a>")
				})
				.mousedown(function () {
					$(this)
						.html("<a class='button-name'>resolution</a><br><a class='symbol'>𓂤</a>")
						.css({ "background": "rgba(33, 20, 0, 0.05)", "color": "#211400", "transition": "color 0.1s ease, transform 0.3s ease", "transform": "translateY(0px)", "box-shadow": "0 0 0 rgba(33, 20, 0, 0)" })
				})
		}

	}
	else {
		$('#info').hide();
	}

})
