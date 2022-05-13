exports.seed = async function(knex) {
  await knex('movie').del()
  await knex('movie').insert([
    {
      title: 'Secret People',
      year: '1952',
      character: 'Nora Brentano',
      cover: 'https://i.imgur.com/LuXVzFdm.jpg',
      genre: 'Drama',
      summary: `In 1930, Maria Brentano (Valentina Cortese) and her younger sister Nora (Audrey Hepburn) flee to London as their father is about to be executed by his country's dictator. Seven years later, Maria unexpectedly meets Louis (Serge Reggiani), her childhood sweetheart, who is engaged in a plot to assassinate the dictator. Maria is persuaded to play an active part in the plan, but it all goes horribly wrong when the bomb they plant kills an innocent waitress, causing Maria much distress.`,
      fact: `This is the first movie where Audrey played an important role in a movie, and some Hollywood story specialists consider this to be a major step for her being cast on her first main character a year later.`,
      id: 'secretPeople',
      media: 'movie',
    },
    {
      title: 'Monte Carlo Baby',
      year: '1951',
      character: 'Linda Farrel / Melissa Farrell',
      cover: 'https://i.imgur.com/qjyFSPjm.jpg',
      genre: 'Comedy',
      summary: `When a measles epidemic forces the temporary closing of a child care center, the son of a film star and her estranged husband,a concert pianist, is mistakenly delivered to a touring musician.`,
      fact: `This movie was shot in English and French, and since Audrey Hepburn was fluent in both languages, she kept her part when the second version was filmed, although her character name was changed. During filming she met Collete, who recommended her to play Gigi on Broadway.`,
      id: 'monteCarlo',
      media: 'movie',
    },
    {
      title: 'Roman Holiday',
      year: '1953',
      character: 'Princess Ann',
      cover: 'https://i.imgur.com/X1kZWJmm.jpg',
      genre: 'Romantic Comedy',
      summary: `Ann, a crown princess from an unnamed European nation on a state visit to Rome, becomes frustrated with her tightly scheduled life and secretly leaves her country's embassy. The delayed effect of a sedative makes her fall asleep on a bench, where Joe Bradley, an expatriate reporter for the "American News Service", finds her, without recognizing who she is.`,
      fact: `The first leading role of Audrey Hepburn in Hollywood, after a very successful work on Broadway playing the lead character on Gigi. Hard to imagine a better debut for young Audrey, since she was nominated and won the Academy Award for Best Actress in a Leading Role in 1954.`,
      id: 'romanHoliday',
      media: 'movie',
    },
    {
      title: 'Sabrina',
      year: '1954',
      character: 'Sabrina Fairchild',
      cover: 'https://i.imgur.com/nMv2faqm.jpg',
      genre: 'Romantic Comedy',
      summary: `Sabrina Fairchild is the young daughter of the Larrabee family's chauffeur, Thomas, and has been in love with David Larrabee all her life. David is a three-times-married playboy who has never paid attention to Sabrina because to him she was still a child.After being rescued by Linus Larrabee from an attempted suicide she is sent to Paris, and whe she returns completely different from the child she was, both brothers start to develop an interest in her.`,
      fact: `Sabrina marks the first time Audrey worked with Hubert de Givenchy on dresses for a movie, this partnership would become an iconic side of Audrey, that most people recognize her for, and was the start of a work collab that lasted her entire life, aside from their enduring friendship.`,
      id: 'sabrina',
      media: 'movie',
    },
    {
      title: 'War and Peace',
      year: '1956',
      character: 'Natasha Rostova',
      cover: 'https://i.imgur.com/LgwPGumm.jpg',
      genre: 'Epic Historical Drama',
      summary: `In the years leading to Napoleon's invasion, members of the Russian aristocracy face a myriad of personal tragedies. After his father dies, Count Pierre Bezukhov, a friend of Prince Andrei Bolkonsky, receives a substantial inheritance. When he decides to marry, Bezukhov unwisely chooses a conniving princess. As for Bolkonsky, his wife dies during childbirth, after which he falls in love with Natasha Rostova but is soon called to war.`,
      fact: `Audrey Hepburn's salary of three hundred fifty thousand dollars for this movie was the highest salary an actress had ever received to date. When notified of her record salary, Hepburn modestly told her agent, "I'm not worth it. It's impossible. Please don't tell anyone."`,
      id: 'warAndPeace',
      media: 'movie',
    },
    {
      title: 'Love in the Afternoon',
      year: '1957',
      character: 'Ariane Chavasse',
      cover: 'https://i.imgur.com/JDoXIflm.jpg',
      genre: 'Romantic Comedy',
      summary: `French private investigator Claude Chavasse discovers his client's wife has been having an affair with an American playboy, Frank Flannagan. When the client decides to kill Frank, Claude's sheltered daughter, Ariane, throws off the plan and saves his life. The two are instantly attracted to one another, but Ariane doesn't reveal her name. Frank then hires Claude to locate Ariane, unaware he has sent him on a mission to find his own daughter.`,
      fact: `When Audrey Hepburn won her Best Actress Oscar for "Roman Holiday (1953)" four years earlier, her co-star in this film, Gary Cooper who had won Best Actor the year before (1952), read out the list of nominees while out on location in Mexico before Donald O'Connor presented her with the award.`,
      id: 'loveInTheAfternoon',
      media: 'movie',
    },
    {
      title: 'Funny Face',
      year: '1957',
      character: 'Jo Stockton',
      cover: 'https://i.imgur.com/N0u2mzXm.jpg',
      genre: 'Musical Romantic Comedy',
      summary: `Dispatched on an assignment, New York City-based fashion photographer Dick Avery is struck by the beauty of Jo Stockton, a shy bookstore employee he's photographed by accident, who he believes has the potential to become a successful model. He gets Jo to go with him to France, where he snaps more pictures of her against iconic Parisian backdrops. In the process, they fall for one another, only to find hurdles in their way.`,
      fact: `In order to secure Audrey Hepburn and Fred Astaire on the cast, producers told each the other was already signed, figuring they would not pass up the opportunity to work together.`,
      id: 'funnyFace',
      media: 'movie',
    },
    {
      title: 'Green Mansions',
      year: '1959',
      character: 'Rima',
      cover: 'https://i.imgur.com/ggBPTkEm.jpg',
      genre: 'Romantic Adventure',
      summary: `When his father is murdered by a corrupt political regime, Abel flees Caracas and for the Venezuelan forests, searching for hidden gold to fund his revenge. In the jungle, he finds Rima, a "bird girl" who has reverted to a natural and innocent state. Rima was raised by an evil grandfather who still tries to exercise dominion over her. It is up to Abel to try and save the girl from her grandfather, and also to protect her from superstitious natives.`,
      fact: `During the film, Rima is shown accompanied by a fawn. In order for the animal to properly bond with the actress, Audrey Hepburn effectively adopted the baby deer in the weeks preceding production.`,
      id: 'greenMansions',
      media: 'movie',
    },
    {
      title: `The Nun's Story`,
      year: '1959',
      character: 'Sister Luke / Gabrielle van der Mal',
      cover: 'https://i.imgur.com/fxFdauOm.jpg',
      genre: 'Drama',
      summary: `Willful and outspoken Gabrielle van der Mal, the daughter of a prominent Belgian surgeon, leaves her upper-class existence to become a nun. As Sister Luke, she is eventually sent to the Belgian Congo, where she excels as a nurse working with a skilled doctor. However, her willingness to continue as a nun is challenged when her father is killed by the Nazis, and she no longer feels that she can maintain the neutrality of her order.`,
      fact: `This was one of Audrey Hepburn's favorite between her films. It was also one of her most financially successful. According to family members, this movie also was one of the reasons why Audrey later in life decided to devote so much time on travels to help children in poor countries.`,
      id: 'theNunsStory',
      media: 'movie',
    },
    {
      title: 'The Unforgiven',
      year: '1960',
      character: 'Rachel Zachary',
      cover: 'https://i.imgur.com/J1njbI1m.jpg',
      genre: 'Western',
      summary: `The Zachary family live quietly on a cattle ranch in post-Civil War Texas. A stranger appears and disturbs their bucolic existence by spreading a malicious rumor that their adopted daughter, Rachel, is a Kiowa Native American. Soon, the Zachary brothers and their mother must defend themselves from both racist whites and vengeful Kiowa.`,
      fact: `"The Unforgiven" was Audrey Hepburn's only Western. After Green Mansions she was meant to go on vacation, but decided to make this movie because she felt it was a great opportunity to star in a genre she never had before.`,
      id: 'theUnforgiven',
      media: 'movie',
    },
    {
      title: `Breakfast at Tiffany's`,
      year: '1961',
      character: 'Holly Golightly',
      cover: 'https://i.imgur.com/d07IKKDm.jpg',
      genre: 'Romantic Comedy',
      summary: `Based on Truman Capote's novel, this is the story of a young woman in New York City who meets a young man when he moves into her apartment building. He is with an older woman who is very wealthy, but he wants to be a writer. She is working as an expensive escort and searching for a rich, older man to marry.`,
      fact: `Henry Mancini wrote "Moon River" specifically for Audrey Hepburn. He later said that while many version of the song have been done, he feels that Audrey's was the best. And this a great feat by Audrey Hepburn, since she did not consider herself a singer and the song sparked more than 400 renditions already, even from legends like Judy Garland and Frank Sinatra.`,
      id: 'breakfastAtTiffanys',
      media: 'movie',
    },
    {
      title: `The Children's Hour`,
      year: '1961',
      character: 'Karen Wright',
      cover: 'https://i.imgur.com/Fq8W03Om.jpg',
      genre: 'Romantic Comedy',
      summary: `Longtime friends Martha and Karen run a boarding school for girls. When an unruly child, Mary, is punished for lying, she concocts a story that Karen and Martha are having a lesbian relationship. When the story spreads, parents withdraw their children from the school. The women's lawsuit for libel hits many snags when they lack witnesses to speak for them. All the stress adversely affects Karen's engagement to Joe Cardin.`,
      fact: `Audrey Hepburn had a dog named "Mr. Famous" that she would bring to the studio while she was making this film. Mr. Famous got out of her trailer one day for about an hour and Hepburn had the studio police looking for him. They eventually found him on top of a wall that he had somehow managed to climb.`,
      id: 'theChildrensHour',
      media: 'movie',
    },
    {
      title: `Charade`,
      year: '1963',
      character: 'Regina Lampert',
      cover: 'https://i.imgur.com/dwkDbwbm.jpg',
      genre: 'Romantic Mistery',
      summary: `After Regina Lampert falls for the dashing Peter Joshua on a skiing holiday in the French Alps, she discovers upon her return to Paris that her husband has been murdered. Soon, she and Peter are giving chase to three of her late husband's World War II cronies, Tex, Scobie and Gideon, who are after a quarter of a million dollars the quartet stole while behind enemy lines. But why does Peter keep changing his name?`,
      fact: `According to Audrey Hepburn, the scene where Regina spilled ice cream on Alex's suit was based on a real-life accident where Hepburn spilled red wine on Cary Grant's suit at a dinner party.`,
      id: 'charade',
      media: 'movie',
    },
    {
      title: `Paris When It Sizzles`,
      year: '1964',
      character: 'Gabrielle Simpson',
      cover: 'https://i.imgur.com/xmqC9WAm.jpg',
      genre: 'Romantic Comedy',
      summary: `Hotshot Hollywood screenwriter Richard Benson is in trouble. He sold a script idea to decadent producer Alexander Meyerheim, but has wasted all the time he had to finish the screenplay by traipsing around Paris. With just a couple of days left before the deadline, Benson gets a new assistant named Gabrielle Simpson, who helps him put together a love story by acting out all the possible scenarios. But life eventually beginning to imitate art.`,
      fact: `Hubert de Givenchy was the first person to receive a screen credit for a scent. He got screen credit for Audrey Hepburn's perfume.`,
      id: 'parisWhenItSizzles',
      media: 'movie',
    },
    {
      title: `My Fair Lady`,
      year: '1964',
      character: 'Eliza Doolittle',
      cover: 'https://i.imgur.com/5hsuFyJm.jpg',
      genre: 'Musical Romantic Comedy',
      summary: `In this beloved musical, pompous phonetics professor Henry Higgins is so sure of his abilities that he takes it upon himself to transform a Cockney working-class girl into someone who can pass for a cultured member of high society. His subject turns out to be the lovely Eliza Doolittle, who agrees to speech lessons to improve her job prospects. Higgins and Eliza clash, then form an unlikely bond -- one that is threatened by an aristocratic suitor.`,
      fact: `When Audrey Hepburn (Eliza Doolittle) was first informed that her voice wasn't strong enough and that she would have to be dubbed, she walked out. She returned the next day and, in a typically graceful Hepburn gesture, apologized to everybody for her "wicked behavior.`,
      id: 'myFairLady',
      media: 'movie',
    },
    {
      title: `How to Steal a Million`,
      year: '1966',
      character: 'Nicole Bonnet',
      cover: 'https://i.imgur.com/hCOM7bMm.jpg',
      genre: 'Heist Comedy',
      summary: `Charles Bonnet expresses his passion for art by forging masterpieces -- and selling them at a hefty profit. The trouble starts when his reproduction of a prized sculpture winds up in a famous Paris museum. If experts determine that it is inauthentic, Bonnet's reputation will be tarnished. That's why his fetching daughter, Nicole, hires cat burglar Simon Dermott to steal the sculpture back before it's too late.`,
      fact: `When Peter O'Toole breaks into the house, Audrey Hepburn is in bed reading Alfred Hitchcock's mystery magazine. In her Oscar-winning performance as the princess in Roman Holiday in 1953, she is shown in bed reading a book about Hitchcock.`,
      id: 'howToStealAMillion',
      media: 'movie',
    },
    {
      title: `Two for the Road`,
      year: '1967',
      character: 'Joanna Wallace',
      cover: 'https://i.imgur.com/7RAJnGcm.jpg',
      genre: 'Romantic Comedy-Drama',
      summary: `Architect Mark Wallace and his wife, Joanna, travel to France to meet with an affluent client. While there, they reflect on their first decade of marriage -- memories of when they first met, of courtship and of road trips through the French countryside. As flirtation and playful quarreling turn to boredom with the banality of married life, the Wallaces struggle to rekindle their passion, while mutual infidelity threatens to tear them apart.`,
      fact: `Is one of the very few films in which Audrey Hepburn uses profanity. She says "damn" and "bastard" over the course of the film.`,
      id: 'twoForTheRoad',
      media: 'movie',
    },
    {
      title: `Wait Until Dark`,
      year: '1967',
      character: 'Susy Hendrix',
      cover: 'https://i.imgur.com/HEm6Pjzm.jpg',
      genre: 'Psychological Thriller',
      summary:`After a flight back home, Sam Hendrix returns with a doll he innocently acquired along the way. As it turns out, the doll is actually stuffed with heroin, and a group of criminals led by the ruthless Roat has followed Hendrix back to his place to retrieve it. When Hendrix leaves for business, the crooks make their move -- and find his blind wife, Susy, alone in the apartment. Soon, a life-threatening game begins between Susy and the thugs.`,
      fact: `Audrey Hepburn's first and only horror film, despite it more commonly being categorized as a suspense-thriller. She accepted the role out of a desire to play against type.`,
      id: 'waitUntilDark',
      media: 'movie',
    },
    {
      title: `Robin and Marian`,
      year: '1976',
      character: 'Maid Marian',
      cover: 'https://i.imgur.com/gULaN8Lm.jpg',
      genre: 'Romantic Adventure',
      summary: `Long after their original adventures in Sherwood Forest, Robin Hood and his trusty sidekick, Little John, fight alongside Richard the Lion-Heart in France. After Richard dies in battle, the pair revisit Sherwood, where Robin learns that his beloved Maid Marian serves as mother superior at a nearby convent. When the Sheriff of Nottingham orders her arrest by royal edict, Robin faces his old nemesis one last time.`,
      fact: `Audrey Hepburn was convinced to take the role of Marian, in part, from the insistence of her sons. Once her young sons learned that Sir Sean Connery had been cast as Robin Hood, they begged their mother to take the part, so she could act with "James Bond". She happily complied.`,
      id: 'robinAndMarian',
      media: 'movie',
    },
    {
      title: `Bloodline`,
      year: '1979',
      character: 'Elizabeth Roffe',
      cover: 'https://i.imgur.com/C5Xf4PWm.jpg',
      genre: 'Thriller',
      summary: `A pampered heiress inherits her father's pharmaceutical empire when he dies in a suspicious accident, and soon finds herself surrounded by ruthless board members and grasping family members who will seemingly stop at nothing to profit.`,
      fact: `Audrey Hepburn was aged about 50 when this movie was made and released. The character she plays was much younger and in her 30s. Writer Sidney Sheldon revised his "Bloodline" novel to accommodate the literary age of the film version's lead actress. Hepburn had been in semi-retirement when she agreed to do this picture. The DVD sleeve notes declare that this movie was one of the final films of actress Audrey Hepburn. `,
      id: 'bloodline',
      media: 'movie',
    },
    {
      title: `They All Laughed`,
      year: '1981',
      character: 'Angela Niotes',
      cover: 'https://i.imgur.com/LH9CyVqm.jpg',
      genre: 'Romantic Comedy',
      summary: `The employees of New York City's Odyssey Detective Agency can't seem to prevent themselves from getting over-involved in their clients' lives. When aging gumshoe John Russo is assigned to trail an Italian millionaire's wife, Angela, he inevitably falls for her continental charm. His partner, Charles, is similarly unable to keep his hands off the woman he's trailing -- a winsome cheating spouse named Dolores.`,
      fact: `Star Audrey Hepburn said of this movie in which she stars: "I chose to work with Peter because he is so fond of the lovely old movies they used to make - not that there aren't some outstanding ones today, but to some extent, they've strayed too far from the positive romantic aspects of life".`,
      id: 'theyAllLaughed',
      media: 'movie',
    },
    {
      title: `Always`,
      year: '1989',
      character: 'Hap',
      cover: 'https://i.imgur.com/zN06uGSm.jpg',
      genre: 'Romantic Drama',
      summary: `Aerial firefighter Pete risks himself and his vintage World War II airplane in a constant and death-defying quest to fight forest wildfires, much to the dismay of his girlfriend, Dorinda. His love for Dorinda and the advice of fellow pilot Al convince Pete to give up his perilous career, but he flies one last mission. Pete heroically saves Al's plane from certain destruction, but with supernatural consequences.`,
      fact: `Audrey Hepburn had to be carried on a stretcher by crew members when shooting her scenes in the burned-out forest so that the dirt and ashes wouldn't smudge her white costume. The sweater and slacks Hepburn wears were from her own, personal wardrobe.`,        
      id: 'always',
      media: 'movie',
    }
  ]);
};
