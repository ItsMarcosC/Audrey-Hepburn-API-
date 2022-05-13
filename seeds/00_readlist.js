exports.seed = async function(knex) {
  await knex('readlist').del()
  await knex('readlist').insert([
    {
      title: 'The Diary of a Young Girl',
      author: 'Anne Frank',
      releaseYear: '1997',
      pages: '400',
      cover: 'https://i.imgur.com/IoavVuVm.jpg',
      summary: `In 1942, with Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, they and another family lived cloistered in the “Secret Annex” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and amusing, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.`,
      link: `https://www.google.com/search?q=The+Diary+of+a+Young+Girl:+The+Definitive+Edition&source=lmns&tbm=shop&bih=948&biw=1848&hl=en&sa=X&ved=2ahUKEwi_5Oaan830AhUvRLgEHQk-ClgQ_AUoA3oECAEQAw`,
      ISBN: '0553577123',
      id: 'diaryOfYoungGirl',
      media : 'audreyReadlist',
    },
    {
      title: 'The Secret Garden',
      author: 'Frances Hodgson Burnett',
      releaseYear: '2010',
      pages: '384',
      cover: 'https://i.imgur.com/WsUVlZjm.jpg',
      summary: `When orphaned Mary Lennox comes to live at her uncle's great house on the Yorkshire Moors, she finds it full of secrets. The mansion has nearly one hundred rooms, and her uncle keeps himself locked up. And at night, she hears the sound of crying down one of the long corridors.`,
      link: `https://www.google.com/search?hl=en&tbm=shop&sxsrf=AOaemvKBvVzwvIiF9jTCzkW-xvvUlWseLw:1638727555442&q=The+Secret+Garden+(Harper+Classics)&spell=1&sa=X&ved=0ahUKEwjpg83un830AhUqLLkGHfCrCz4QBQjiBygA&biw=1848&bih=948&dpr=1`,
      ISBN: '006440188X',
      id: 'theSecretGarden',
      media : 'audreyReadlist',
    },
    {
      title: 'The Jungle Book',
      author: 'Rudyard Kipling',
      releaseYear: '2018',
      pages: '186',
      cover: 'https://i.imgur.com/6eXCUkEm.jpg',
      summary: `Rudyard Kipling's "The Jungle Book" is a childhood classic that has seen many adaptations since it was first published.  This is the original 1894 edition that started it all.  It includes the original illustrations which introduced the imagination of Kipling to a generation of readers.  While many know Mowgli and Baloo and other beloved favorites from the movies, many parents will enjoy presenting the original tale to their children almost exactly the way young people enjoyed it from the beginning.  In fact, this original edition also includes illustrations that were drawn by Rudyard Kipling's own father.  This 1894 reprint edition will be a family heirloom for generations to come.`,
      link: `https://www.google.com/search?hl=en&tbm=shop&sxsrf=AOaemvLgCBMFzSbb4XpsEQzDkKdWELnKOA:1638728318418&q=The+Jungle+Book:+The+Original+Illustrated+1894+Edition&tbs=vw:l,mr:1,root_cat:529627&sa=X&ved=0ahUKEwiutLXaos30AhV9rZUCHYS7AZ8QyY4HCNsCKAA&biw=1848&bih=887&dpr=1`,
      ISBN: '1947844679',
      id: 'theJungleBook',
      media : 'audreyReadlist',
    },
    {
      title: 'The Four Just Men',
      author: 'Edgar Wallace',
      releaseYear: '2021',
      pages: '146',
      cover: 'https://i.imgur.com/GqjXa8am.jpg',
      summary: `The Four Just Men is a detective thriller published in 1905 by the British writer Edgar Wallace. The eponymous "Just Men" appear in several sequels`,
      link: `https://www.google.com/search?q=The+Four+Just+Men+Original+Edition(Annotated)&bih=948&biw=1848&hl=en&tbm=shop&sxsrf=AOaemvKw55LM3Q9OOl1rA9ivTi4c-jXGLw:1638728290987&source=lnms&sa=X&ved=2ahUKEwiY9qrNos30AhVwpZUCHbB8DOUQ_AUoAnoECAEQBA`,
      ISBN: '979-8750490639',
      id: 'theFourJustMen',
      media : 'audreyReadlist',
    },
    {
      title: 'The Mind of Mr. J. G. Reeder',
      author: 'Edgar Wallace',
      releaseYear: '1925',
      pages: '142',
      cover: 'https://i.imgur.com/F74ARq0m.jpg',
      summary: `The Mind of Mr. J. G. Reeder is a collection of short stories by the English crime writer Edgar Wallace, published in 1925. The stories, which concern a former police officer working for the Director of Public Prosecutions`,
      link: `https://www.google.com/search?q=The+Mind+of+Mr.+J.+G.+Reeder&bih=887&biw=1848&hl=en&tbm=shop&sxsrf=AOaemvLl7fLUer_ssmEqczEP-L8fnW3Jmw%3A1638728819084&ei=cwStYZDDBIqZwbkPm5e9mAQ&ved=0ahUKEwjQyJPJpM30AhWKTDABHZtLD0MQ4dUDCAs&uact=5&oq=The+Mind+of+Mr.+J.+G.+Reeder&gs_lcp=Cgtwcm9kdWN0cy1jYxADMggIABAWEB4QGDIICAAQFhAeEBgyCAgAEBYQHhAYSgQIQRgAUABYAGDkEWgAcAB4AIABuQGIAbkBkgEDMC4xmAEAoAECoAEBwAEB&sclient=products-cc`,
      ISBN: '1636373496',
      id: 'theMindOfMrReeder',
      media : 'audreyReadlist',
    },
    {
      title: 'The Great Impersonation',
      author: 'E. Phillips Oppenheim',
      releaseYear: '2021',
      pages: '210',
      cover: 'https://i.imgur.com/kgytXHYm.jpg',
      summary: `When a German spy meets an English lookalike, he devises a plan to travel to London, assume his identity, and gather intel for his government. The Englishman’s new persona catches several people off guard including his wife. While living in East Africa, Sir Everard Dominey encounters a man named Leopold von Ragastein. He’s a native German who can easily pass as Sir. Everard’s doppelgänger. Leopold isn’t just a friendly host, he’s a spy for the German government. When Sir. Everard returns to London, he is confronted by his wife, Lady Rosamund, with a serious accusation. Is this the real Sir Everard or has Leopold von Ragastein taken his place? `,
      link: `https://www.google.com/search?q=The+Great+Impersonation+%28Mint+Editions%29&source=lmns&tbm=shop&bih=887&biw=1848&hl=en&sa=X&ved=2ahUKEwj2l_K8pM30AhUCO98KHXRrB6oQ_AUoAnoECAEQAg`,
      ISBN: '1513281216',
      id: 'theGreatImpersonation',
      media : 'audreyReadlist',
    },
    {
      title: 'Pygmalion',
      author: 'George Bernard Shaw',
      releaseYear: '1994',
      pages: '96',
      cover: 'https://i.imgur.com/CtNUgqPm.jpg',
      summary: `One of George Bernard Shaw's best-known plays, Pygmalion was a rousing success on the London and New York stages, an entertaining motion picture and a great hit with its musical version, My Fair Lady. An updated and considerably revised version of the ancient Greek legend of Pygmalion and Galatea, the 20th-century story pokes fun at the antiquated British class system.In Shaw's clever adaptation, Professor Henry Higgins, a linguistic expert, takes on a bet that he can transform an awkward cockney flower seller into a refined young lady simply by polishing her manners and changing the way she speaks. In the process of convincing society that his creation is a mysterious royal figure, the Professor also falls in love with his elegant handiwork. The irresistible theme of the emerging butterfly, together with Shaw's brilliant dialogue and splendid skills as a playwright, have made Pygmalion one of the most popular comedies in the English language. A staple of college drama courses, it is still widely performed.`,
      link: `https://www.google.com/search?q=Pygmalion+%28Dover+Thrift+Editions%29&source=lmns&tbm=shop&bih=887&biw=1848&hl=en&sa=X&ved=2ahUKEwityv6Ap830AhUCRLgEHSF1DGsQ_AUoA3oECAEQAw`,
      ISBN: '0486282228',
      id: 'pygmalion',
      media : 'audreyReadlist',
    },
    {
      title: 'The Cocktail Party',
      author: 'T.S. Eliot',
      releaseYear: '1964',
      pages: '204',
      cover: 'https://i.imgur.com/eY9uBmjm.jpg',
      summary: `A modern verse play about the search for meaning, in which a psychiatrist is the catalyst for the action. “An authentic modern masterpiece” (New York Post). “Eliot really does portray real-seeming characters. He cuts down his poetic effects to the minimum, and then finally rewards us with most beautiful poetry” (Stephen Spender).`,
      link: `https://www.google.com/search?hl=en&tbm=shop&sxsrf=AOaemvJcGv-CvM1taqP0MPldmV9KuAfPiw:1638729614608&q=The+Cocktail+Party&tbs=vw:g,mr:1,root_cat:529627&sa=X&ved=0ahUKEwiq9r3Ep830AhV6qJUCHWaiB_UQyY4HCIwIKAA&biw=1848&bih=887&dpr=1`,
      ISBN: '0156182890',
      id: 'theCocktail',
      media : 'audreyReadlist',
    },
    {
      title: 'Heidi',
      author: 'Johanna Spyri',
      releaseYear: '2020',
      pages: '168',
      cover: 'https://i.imgur.com/HVR1YMVm.jpg',
      summary: `Heidi is an orphaned girl initially raised by her maternal aunt Dete in Maienfeld, Switzerland after the early deaths of her parents, Tobias and Adelheid. When some people ask Dete to come to the city and be their maid, Dete takes 5-year-old Heidi to her paternal grandfather's house, up the mountain from the Dörfli. He has been at odds with the villagers and embittered against God for years and lives in seclusion on the alm, which has earned him the nickname 'The Alm-Uncle'. He briefly resents Heidi's arrival, but the girl's evident intelligence and cheerful yet unaffected demeanor soon earn his genuine, if reserved, affection. Heidi enthusiastically befriends her new neighbors, young Peter the goatherd, his mother, Brigitte, and his blind maternal grandmother. With each season that passes, the mountaintop inhabitants grow more attached to Heidi.`,
      link: `https://www.google.com/search?q=Heidi+by+Johanna+Spyri&source=lmns&tbm=shop&bih=887&biw=1848&hl=en&sa=X&ved=2ahUKEwjR07DFqc30AhUognIEHTrnCkcQ_AUoAnoECAEQAg`,
      ISBN: '1679612700',
      id: 'heidi',
      media : 'audreyReadlist',
    },
    {
      title: 'Romeo and Juliet',
      author: 'William Shakespeare',
      releaseYear: '2010',
      pages: '144',
      cover: 'https://i.imgur.com/6CEIwlGm.jpg?1',
      summary: `William Shakespeare's passionate tale of two young lovers whose relationship is doomed from the start due to their families-the Capulets and the Montagues-being mortal enemies.`,
      link: `https://www.google.com/search?hl=en&tbm=shop&sxsrf=AOaemvLLzzkQb_2uHEjrA0csLqTvPTR4bg:1638731660277&q=Romeo+and+Juliet&tbs=vw:l,mr:1,root_cat:529627&sa=X&ved=0ahUKEwi2o_iTr830AhUySzABHegDB5MQyY4HCMoCKAA&biw=1848&bih=887&dpr=1`,
      ISBN: '145155205X',
      id: 'romeoAndJuliet',
      media : 'audreyReadlist',
    },
    {
      title: 'The Taming of the Shrew',
      author: 'William Shakespeare',
      releaseYear: '2014',
      pages: '98',
      cover: 'https://i.imgur.com/RaQvI9im.jpg',
      summary: `It follows the form of a "revenge tragedy," in which the hero, Hamlet, seeks vengeance against his father's murderer, his uncle Claudius, now the king of Denmark. Much of its fascination, however, lies in its uncertainties. Among them: What is the Ghost--Hamlet's father demanding justice, a tempting demon, an angelic messenger? Does Hamlet go mad, or merely pretend to? Once he is sure that Claudius is a murderer, why does he not act? Was his mother, Gertrude, unfaithful to her husband or complicit in his murder?`,
      link: `https://www.google.com/search?q=Hamlet+%28+Folger+Library+Shakespeare%29+&hl=en&biw=1848&bih=887&tbm=shop&sxsrf=AOaemvIlC2rxRvR8zY1MSJ4awiiGhnM3Rw%3A1638731663019&ei=jw-tYdE0qJDBuQ_j6ZCwCg&ved=0ahUKEwiRuJ-Vr830AhUoSDABHeM0BKYQ4dUDCAs&uact=5&oq=Hamlet+%28+Folger+Library+Shakespeare%29+&gs_lcp=Cgtwcm9kdWN0cy1jYxADMggIABAWEB4QGDIICAAQFhAeEBhKBAhBGABQAFgAYPwEaABwAHgAgAGSAogBkgKSAQMyLTGYAQCgAQKgAQHAAQE&sclient=products-cc`,
      ISBN: '1500368636',
      id: 'theTamingOfTheShrew',
      media : 'audreyReadlist',
    },
    {
      title: 'Hamlet',
      author: 'William Shakespeare',
      releaseYear: '1992',
      pages: '342',
      cover: 'https://i.imgur.com/j9pbSEEm.jpg',
      summary: `The Taming of the Shrew is a comedy by William Shakespeare, believed to have been written between 1590 and 1592. The play begins with a framing device, often referred to as the induction, in which a mischievous nobleman tricks a drunken tinker named Christopher Sly into believing he is actually a nobleman himself. The nobleman then has the play performed for Sly's diversion. The main plot depicts the courtship of Petruchio and Katherina, the headstrong, obdurate shrew. Initially, Katherina is an unwilling participant in the relationship; however, Petruchio "tames" her with various psychological torments, such as keeping her from eating and drinking, until she becomes a desirable, compliant, and obedient bride.`,
      link: `https://www.google.com/search?q=The+Taming+of+the+Shrew&source=lmns&tbm=shop&bih=887&biw=1848&hl=en&sa=X&ved=2ahUKEwiFgte6sc30AhW2n3IEHTDEBRIQ_AUoA3oECAEQAw`,
      ISBN: '9780743477123',
      id: 'hamlet',
      media : 'audreyReadlist',
    },
  ]);
};
