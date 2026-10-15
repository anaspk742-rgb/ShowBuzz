export type WorkLine = {
  year: string;
  title: string;
  role: string;
  note: string;
  slug?: string;
  kind: "Film" | "Drama" | "Show";
};

export type Career = {
  paragraphs: string[];
  awards: string[];
  works: WorkLine[];
};

export const CAREERS: Record<string, Career> = {
  "shah-rukh-khan": {
    paragraphs: [
      "Shah Rukh Khan was born on 2 November 1965 in New Delhi. He came to films from television, not from a film family. Fauji (1988) and Circus made him a TV face. Deewana (1992) was the film debut. Baazigar and Darr, both 1993, made him a star by playing men the audience was not supposed to trust. By Dilwale Dulhania Le Jayenge in 1995 the part had flipped: Raj, who will not take the bride without her father’s consent, became the romantic lead Hindi cinema copied for a decade.",
      "The 2000s split him in two. There is the Karan Johar and Yash Raj lover: Kuch Kuch Hota Hai, Kabhi Khushi Kabhie Gham, Kal Ho Naa Ho, Kabhi Alvida Naa Kehna, My Name Is Khan. There is the other Shah Rukh: Swades, Chak De! India, Don, and later Fan and Raees, where the charm is the problem rather than the solution. He produces through Red Chillies Entertainment, the company he runs with Gauri Khan.",
      "After Zero (2018) the theatrical run went quiet. Pathaan (25 January 2023), Jawan (7 September 2023) and Dunki (2023, directed by Rajkumar Hirani) put him back in cinemas in a single year. The next dated theatrical lead on this desk is King, directed by Siddharth Anand, set for 24 December 2026, with Suhana Khan, Deepika Padukone, Abhishek Bachchan and Anil Kapoor in the published cast. He also hosted Kaun Banega Crorepati for one season, season 3, in 2007. Amitabh Bachchan has hosted the rest.",
    ],
    awards: [
      "Padma Shri, 2005.",
      "Filmfare Award for Best Actor for Baazigar, Dilwale Dulhania Le Jayenge, Dil To Pagal Hai, Kuch Kuch Hota Hai, Devdas, Swades, Chak De! India and My Name Is Khan. That is the Best Actor list in his published Filmfare record, eight wins.",
      "France’s Ordre des Arts et des Lettres: Chevalier, and later Officier. Both decorations are part of the public record of his overseas honours.",
      "He has not been given a National Film Award for Best Actor. This page does not invent one.",
    ],
    works: [
      { year: "1988", title: "Fauji", role: "Abhimanyu Rai", note: "The television serial that made him known before films.", kind: "Show" },
      { year: "1993", title: "Baazigar", role: "Ajay / Vicky", note: "The vengeful lead. A Filmfare Best Actor win.", kind: "Film" },
      { year: "1993", title: "Darr", role: "Rahul", note: "Yash Chopra. The stalker, opposite Juhi Chawla and Sunny Deol.", kind: "Film" },
      { year: "1995", title: "Dilwale Dulhania Le Jayenge", role: "Raj", note: "Aditya Chopra. Kajol as Simran. The film that set the 1990s romantic rule.", slug: "dilwale-dulhania-le-jayenge", kind: "Film" },
      { year: "1998", title: "Kuch Kuch Hota Hai", role: "Rahul", note: "Karan Johar’s first film. Kajol, Rani Mukerji, and Salman Khan as Aman.", slug: "kuch-kuch-hota-hai", kind: "Film" },
      { year: "2001", title: "Kabhi Khushi Kabhie Gham", role: "Rahul", note: "The adopted son cut off by his father. Kajol, Amitabh Bachchan, Hrithik Roshan, Kareena Kapoor Khan.", slug: "kabhi-khushi-kabhie-gham", kind: "Film" },
      { year: "2002", title: "Devdas", role: "Devdas", note: "Sanjay Leela Bhansali. Aishwarya Rai as Paro, Madhuri Dixit as Chandramukhi.", slug: "devdas", kind: "Film" },
      { year: "2003", title: "Kal Ho Naa Ho", role: "Aman", note: "Nikhil Advani. Preity Zinta and Saif Ali Khan. A man who knows he is dying.", slug: "kal-ho-naa-ho", kind: "Film" },
      { year: "2004", title: "Swades", role: "Mohan Bhargava", note: "Ashutosh Gowariker. A NASA scientist who stays longer than he planned.", slug: "swades", kind: "Film" },
      { year: "2007", title: "Chak De! India", role: "Kabir Khan", note: "Shimit Amin. The disgraced captain who coaches the women’s hockey team.", slug: "chak-de-india", kind: "Film" },
      { year: "2007", title: "Om Shanti Om", role: "Om", note: "Farah Khan. Deepika Padukone’s first Hindi lead.", slug: "om-shanti-om", kind: "Film" },
      { year: "2010", title: "My Name Is Khan", role: "Rizwan Khan", note: "Karan Johar. Kajol as Mandira. Set in post-9/11 America.", slug: "my-name-is-khan", kind: "Film" },
      { year: "2017", title: "Raees", role: "Raees", note: "Rahul Dholakia. Mahira Khan opposite him. The Pakistan release became a political argument of its own.", kind: "Film" },
      { year: "2023", title: "Pathaan", role: "Pathaan", note: "Siddharth Anand. Deepika Padukone and John Abraham. The spy-universe comeback.", slug: "pathaan", kind: "Film" },
      { year: "2023", title: "Jawan", role: "Double lead", note: "Atlee. Nayanthara and Vijay Sethupathi. Deepika Padukone in a special role.", slug: "jawan", kind: "Film" },
      { year: "2023", title: "Dunki", role: "Hardayal Singh Dhillon", note: "Rajkumar Hirani. Taapsee Pannu. An illegal-migration story, not an action film.", kind: "Film" },
      { year: "2026", title: "King", role: "Lead", note: "Siddharth Anand. Dated 24 December 2026. Suhana Khan, Deepika Padukone, Abhishek Bachchan and Anil Kapoor are in the published cast.", slug: "king", kind: "Film" },
    ],
  },
  "salman-khan": {
    paragraphs: [
      "Salman Khan was born Abdul Rashid Salim Salman Khan on 27 December 1965 in Indore. His father is Salim Khan, half of the writing pair Salim–Javed. He is the eldest of the brothers who also include Arbaaz and Sohail. A small part in Biwi Ho To Aisi (1988) came first. Maine Pyar Kiya (1989), directed by Sooraj Barjatya for Rajshri, made him Prem, and Prem is the name Barjatya kept giving him.",
      "Hum Aapke Hain Koun..! (1994), again with Barjatya and with Madhuri Dixit, was for years the biggest Hindi film by ticket sales. The 1990s and early 2000s then wander: Karan Arjun, Kuch Kuch Hota Hai in a supporting part that won him a Filmfare, Hum Dil De Chuke Sanam, Tere Naam, and a long stretch of films that did not hold. Wanted (2009), the Prabhu Deva remake, is the film that changed the offer. Dabangg (2010) turned that into a character, Chulbul Pandey.",
      "The 2010s are the Salman Khan that theatres meant by a festival release. Bodyguard, Ready, Ek Tha Tiger and its sequels Tiger Zinda Hai (2017) and Tiger 3 (2023), Kick, Bajrangi Bhaijaan, Sultan, Bharat, and Sikandar (2025, directed by A. R. Murugadoss). Bajrangi Bhaijaan is the one on this site’s all-time list because it is the film where the star vehicle is also a story about a border. He has hosted the Hindi Bigg Boss since season 4 in 2010. Season 19 is the 2026 edition. Being Human, the foundation he started in 2007, is the charity attached to his name.",
    ],
    awards: [
      "Filmfare Award for Best Supporting Actor for Aman in Kuch Kuch Hota Hai (1998).",
      "He does not have a Filmfare Award for Best Actor, and he does not have a National Film Award for Best Actor. Pages that list either are ahead of the record.",
      "Bigg Boss Hindi: host from season 4 (2010) through season 19 (2026).",
    ],
    works: [
      { year: "1989", title: "Maine Pyar Kiya", role: "Prem", note: "Sooraj Barjatya. Bhagyashree as Suman. The film that made him a star.", slug: "maine-pyar-kiya", kind: "Film" },
      { year: "1994", title: "Hum Aapke Hain Koun..!", role: "Prem", note: "Barjatya again. Madhuri Dixit as Nisha. The wedding film of the 1990s.", slug: "hum-aapke-hain-koun", kind: "Film" },
      { year: "1995", title: "Karan Arjun", role: "Karan", note: "Rakesh Roshan. With Shah Rukh Khan, Kajol and Mamta Kulkarni. A reincarnation revenge.", kind: "Film" },
      { year: "1998", title: "Kuch Kuch Hota Hai", role: "Aman", note: "The supporting part. Filmfare Best Supporting Actor.", slug: "kuch-kuch-hota-hai", kind: "Film" },
      { year: "1999", title: "Hum Dil De Chuke Sanam", role: "Sameer", note: "Sanjay Leela Bhansali. Aishwarya Rai and Ajay Devgn. The lover who loses.", kind: "Film" },
      { year: "2003", title: "Tere Naam", role: "Radhe", note: "Satish Kaushik. The film his fans still treat as the serious one.", kind: "Film" },
      { year: "2009", title: "Wanted", role: "Radhe", note: "Prabhu Deva’s Hindi remake. The start of the second career.", kind: "Film" },
      { year: "2010", title: "Dabangg", role: "Chulbul Pandey", note: "Abhinav Kashyap. Sonakshi Sinha. Two sequels followed.", slug: "dabangg", kind: "Film" },
      { year: "2012", title: "Ek Tha Tiger", role: "Tiger", note: "Kabir Khan. Katrina Kaif. The spy film later continued as Tiger Zinda Hai and Tiger 3.", kind: "Film" },
      { year: "2015", title: "Bajrangi Bhaijaan", role: "Pawan / Bajrangi", note: "Kabir Khan. A devotee takes a mute Pakistani child home. Harshaali Malhotra as the child.", slug: "bajrangi-bhaijaan", kind: "Film" },
      { year: "2016", title: "Sultan", role: "Sultan Ali Khan", note: "Ali Abbas Zafar. Anushka Sharma as Aarfa. A wrestling comeback.", slug: "sultan", kind: "Film" },
      { year: "2017", title: "Tiger Zinda Hai", role: "Tiger", note: "Ali Abbas Zafar. Katrina Kaif returns as Zoya.", kind: "Film" },
      { year: "2023", title: "Tiger 3", role: "Tiger", note: "Maneesh Sharma. The third Tiger film, with Katrina Kaif.", kind: "Film" },
      { year: "2025", title: "Sikandar", role: "Sikandar", note: "A. R. Murugadoss. His Eid theatrical release of 2025.", kind: "Film" },
      { year: "2010–26", title: "Bigg Boss", role: "Host", note: "Hindi seasons from season 4. Season 19 is the 2026 edition.", slug: "bigg-boss-19", kind: "Show" },
    ],
  },
  "aamir-khan": {
    paragraphs: [
      "Aamir Khan, born 14 March 1965 in Mumbai, is the third of the Khans and the one who works least often. Qayamat Se Qayamat Tak (1988) made him a romantic lead. He then spent the 2000s choosing fewer films and producing them: Lagaan, Dil Chahta Hai, Rang De Basanti, Taare Zameen Par (which he also directed), 3 Idiots, PK, Dangal and Secret Superstar.",
      "Lagaan (2001) was nominated for the Academy Award for Best Foreign Language Film. Dangal (2016) became one of the highest-grossing Indian films worldwide. He has also used a television show, Satyamev Jayate, to do reported social episodes rather than a game show.",
    ],
    awards: [
      "Padma Shri and Padma Bhushan.",
      "Lagaan: India’s Oscar-nominated foreign-language film for 2001. The nomination is the film’s, not a personal acting Oscar.",
      "National Film Award for Best Popular Film for Lagaan, and further National Awards as producer and, for Taare Zameen Par, as director of a film that won Best Film on Family Welfare among other citations. This page does not inflate those into a Best Actor trophy he did not receive for every hit.",
    ],
    works: [
      { year: "1988", title: "Qayamat Se Qayamat Tak", role: "Raj", note: "Mansoor Khan. The debut that stuck.", kind: "Film" },
      { year: "2001", title: "Lagaan", role: "Bhuvan", note: "Ashutosh Gowariker. The cricket match against the colonial tax.", slug: "lagaan", kind: "Film" },
      { year: "2001", title: "Dil Chahta Hai", role: "Akash", note: "Farhan Akhtar’s first film.", slug: "dil-chahta-hai", kind: "Film" },
      { year: "2006", title: "Rang De Basanti", role: "DJ", note: "Rakeysh Omprakash Mehra.", slug: "rang-de-basanti", kind: "Film" },
      { year: "2007", title: "Taare Zameen Par", role: "Ram Shankar Nikumbh", note: "He directed. Darsheel Safary as Ishaan.", slug: "taare-zameen-par", kind: "Film" },
      { year: "2009", title: "3 Idiots", role: "Rancho", note: "Rajkumar Hirani.", slug: "3-idiots", kind: "Film" },
      { year: "2014", title: "PK", role: "PK", note: "Rajkumar Hirani. Anushka Sharma.", slug: "pk", kind: "Film" },
      { year: "2016", title: "Dangal", role: "Mahavir Singh Phogat", note: "Nitesh Tiwari. Fatima Sana Shaikh and Sanya Malhotra.", slug: "dangal", kind: "Film" },
    ],
  },
  "kajol": {
    paragraphs: [
      "Kajol, born 5 August 1974, is from the Mukherjee-Samarth family. Bekhudi (1992) was the debut. Baazigar (1993) opposite Shah Rukh Khan made the pairing, and Dilwale Dulhania Le Jayenge (1995) made it permanent. She has never worked as often as her male co-stars. The films that remain are Baazigar, DDLJ, Kuch Kuch Hota Hai, Kabhi Khushi Kabhie Gham, Fanaa and My Name Is Khan.",
      "She is married to Ajay Devgn. Their daughter Nysa is not a performer on this site, and this page does not treat her as one.",
    ],
    awards: [
      "Filmfare Award for Best Actress for Baazigar, Dilwale Dulhania Le Jayenge, Kuch Kuch Hota Hai, Kabhi Khushi Kabhie Gham and Fanaa. Five Best Actress wins is the published Filmfare count.",
      "Padma Shri, 2011.",
    ],
    works: [
      { year: "1993", title: "Baazigar", role: "Priya", note: "Abbas-Mustan. Opposite Shah Rukh Khan.", kind: "Film" },
      { year: "1995", title: "Dilwale Dulhania Le Jayenge", role: "Simran", note: "Aditya Chopra.", slug: "dilwale-dulhania-le-jayenge", kind: "Film" },
      { year: "1998", title: "Kuch Kuch Hota Hai", role: "Anjali", note: "Karan Johar.", slug: "kuch-kuch-hota-hai", kind: "Film" },
      { year: "2001", title: "Kabhi Khushi Kabhie Gham", role: "Anjali", note: "The woman Rahul marries against his father.", slug: "kabhi-khushi-kabhie-gham", kind: "Film" },
      { year: "2006", title: "Fanaa", role: "Zooni", note: "Kunal Kohli. Aamir Khan. A Filmfare Best Actress win.", kind: "Film" },
      { year: "2010", title: "My Name Is Khan", role: "Mandira", note: "Karan Johar.", slug: "my-name-is-khan", kind: "Film" },
    ],
  },
  "deepika-padukone": {
    paragraphs: [
      "Deepika Padukone, born 5 January 1986 in Copenhagen and raised in Bangalore, is the daughter of the badminton player Prakash Padukone. Om Shanti Om (2007) was the Hindi debut, opposite Shah Rukh Khan. The lead roles that changed the offer were Cocktail, Yeh Jawaani Hai Deewani, Chennai Express, and then the run of Piku, Bajirao Mastani, Padmaavat and Gehraiyaan, where she is not only the romantic interest.",
      "Pathaan (2023) put her back in a large action film. She is also in the published cast of King, Shah Rukh Khan’s film dated 24 December 2026.",
    ],
    awards: [
      "Filmfare Award for Best Actress for Piku and for Padmaavat.",
      "A Filmfare Critics Award for Best Actress is also attached to Piku in the same season. This page counts the Best Actress wins, not every nomination.",
    ],
    works: [
      { year: "2007", title: "Om Shanti Om", role: "Shanti / Sandy", note: "First Hindi lead. Farah Khan.", slug: "om-shanti-om", kind: "Film" },
      { year: "2013", title: "Yeh Jawaani Hai Deewani", role: "Naina", note: "Ayan Mukerji. Ranbir Kapoor.", slug: "yeh-jawaani-hai-deewani", kind: "Film" },
      { year: "2015", title: "Piku", role: "Piku", note: "Shoojit Sircar. Amitabh Bachchan and Irrfan Khan.", slug: "piku", kind: "Film" },
      { year: "2015", title: "Bajirao Mastani", role: "Mastani", note: "Sanjay Leela Bhansali.", slug: "bajirao-mastani", kind: "Film" },
      { year: "2018", title: "Padmaavat", role: "Padmavati", note: "Bhansali. Ranveer Singh and Shahid Kapoor.", slug: "padmaavat", kind: "Film" },
      { year: "2023", title: "Pathaan", role: "Rubai", note: "Siddharth Anand.", slug: "pathaan", kind: "Film" },
      { year: "2026", title: "King", role: "Published cast", note: "Siddharth Anand. Dated 24 December 2026.", slug: "king", kind: "Film" },
    ],
  },
  "priyanka-chopra": {
    paragraphs: [
      "Priyanka Chopra Jonas, born 18 July 1982 in Jamshedpur, won Miss World in 2000 and then built a Hindi-film career that did not stay inside glamour parts. Fashion (2008) is the film that changed how she was cast. Barfi!, Bajirao Mastani (as Kashibai) and Mary Kom followed. She then moved a large part of her work to American television, as Alex Parrish in Quantico (2015–18), and to English-language films.",
      "She is married to Nick Jonas. That is public record. This page is about the work.",
    ],
    awards: [
      "Miss World, 2000.",
      "National Film Award for Best Actress for Fashion (2008).",
      "Padma Shri, 2016.",
      "Filmfare Award for Best Actress for Fashion, and Best Supporting Actress citations that include Barfi! in some seasons’ supporting lists. The National Award is the one that is not in dispute.",
    ],
    works: [
      { year: "2008", title: "Fashion", role: "Meghna Mathur", note: "Madhur Bhandarkar. National Film Award for Best Actress.", kind: "Film" },
      { year: "2009", title: "Kaminey", role: "Sweety", note: "Vishal Bhardwaj.", kind: "Film" },
      { year: "2012", title: "Barfi!", role: "Jhilmil", note: "Anurag Basu. Ranbir Kapoor.", slug: "barfi", kind: "Film" },
      { year: "2014", title: "Mary Kom", role: "Mary Kom", note: "Omung Kumar. The boxing biopic.", kind: "Film" },
      { year: "2015", title: "Bajirao Mastani", role: "Kashibai", note: "Sanjay Leela Bhansali.", slug: "bajirao-mastani", kind: "Film" },
      { year: "2015", title: "Quantico", role: "Alex Parrish", note: "ABC series. Three seasons.", kind: "Show" },
    ],
  },
  "ranbir-kapoor": {
    paragraphs: [
      "Ranbir Kapoor, born 28 September 1982, is the son of Rishi Kapoor and Neetu Singh and the grand-son of Raj Kapoor. Saawariya (2007) was the debut and a commercial failure. Wake Up Sid, Rocket Singh, Rajneeti, Rockstar, Barfi! and Yeh Jawaani Hai Deewani made the career. Sanju (2018), the biopic of Sanjay Dutt directed by Rajkumar Hirani, was the biggest box-office film of that run.",
      "He is in the published cast of Ramayana: Part One, the Nitesh Tiwari film dated for November 2026, playing Rama. The exact day has been reported as both 5 and 6 November. This page does not pick one.",
    ],
    awards: [
      "Filmfare Award for Best Actor for Rockstar and for Sanju.",
      "A further Filmfare Best Actor critics citation is attached to Barfi! in published lists. The two Best Actor wins above are the ones repeated across his award record.",
    ],
    works: [
      { year: "2007", title: "Saawariya", role: "Ranbir Raj", note: "Sanjay Leela Bhansali. The debut.", kind: "Film" },
      { year: "2011", title: "Rockstar", role: "Jordan", note: "Imtiaz Ali. A. R. Rahman.", slug: "rockstar", kind: "Film" },
      { year: "2012", title: "Barfi!", role: "Barfi", note: "Anurag Basu. Priyanka Chopra.", slug: "barfi", kind: "Film" },
      { year: "2013", title: "Yeh Jawaani Hai Deewani", role: "Bunny", note: "Ayan Mukerji. Deepika Padukone.", slug: "yeh-jawaani-hai-deewani", kind: "Film" },
      { year: "2018", title: "Sanju", role: "Sanjay Dutt", note: "Rajkumar Hirani.", kind: "Film" },
      { year: "2026", title: "Ramayana: Part One", role: "Rama", note: "Nitesh Tiwari. November 2026. Day reported as 5 or 6.", slug: "ramayana-part-one", kind: "Film" },
    ],
  },
  "ranveer-singh": {
    paragraphs: [
      "Ranveer Singh, born 6 July 1985, debuted in Band Baaja Baaraat (2010). The films that made him more than a debutant are Lootera, Goliyon Ki Raasleela Ram-Leela, Bajirao Mastani, Padmaavat and Gully Boy. He plays loud period parts for Sanjay Leela Bhansali and, in Gully Boy, a Dharavi rapper for Zoya Akhtar. The two registers are the career.",
    ],
    awards: [
      "Filmfare Award for Best Actor for Bajirao Mastani.",
      "Filmfare Award for Best Actor, critics, for Gully Boy, alongside the popular-category attention the film received. Padmaavat brought him a Best Actor critics citation in published Filmfare lists as well.",
    ],
    works: [
      { year: "2010", title: "Band Baaja Baaraat", role: "Bittoo", note: "Maneesh Sharma. Anushka Sharma. The debut.", kind: "Film" },
      { year: "2015", title: "Bajirao Mastani", role: "Bajirao", note: "Sanjay Leela Bhansali.", slug: "bajirao-mastani", kind: "Film" },
      { year: "2018", title: "Padmaavat", role: "Alauddin Khilji", note: "Bhansali.", slug: "padmaavat", kind: "Film" },
      { year: "2019", title: "Gully Boy", role: "Murad", note: "Zoya Akhtar. Alia Bhatt.", slug: "gully-boy", kind: "Film" },
    ],
  },
  "alia-bhatt": {
    paragraphs: [
      "Alia Bhatt, born 15 March 1993, is the daughter of Mahesh Bhatt and Soni Razdan. Student of the Year (2012) was the debut. Highway, Humpty Sharma Ki Dulhania, Dear Zindagi and Badrinath Ki Dulhania made her a commercial lead. Raazi (2018) and Gangubai Kathiawadi (2022) are the two films her award record is built on. Gully Boy (2019) is the other performance people name.",
      "She is married to Ranbir Kapoor. Their daughter was born in 2022. The work is what this page is for.",
    ],
    awards: [
      "Filmfare Award for Best Actress for Raazi and for Gangubai Kathiawadi.",
      "National Film Award for Best Actress for Gangubai Kathiawadi.",
    ],
    works: [
      { year: "2012", title: "Student of the Year", role: "Shanaya", note: "Karan Johar. The debut.", kind: "Film" },
      { year: "2014", title: "Highway", role: "Veera", note: "Imtiaz Ali.", kind: "Film" },
      { year: "2018", title: "Raazi", role: "Sehmat", note: "Meghna Gulzar. The spy drama.", kind: "Film" },
      { year: "2019", title: "Gully Boy", role: "Safeena", note: "Zoya Akhtar.", slug: "gully-boy", kind: "Film" },
      { year: "2022", title: "Gangubai Kathiawadi", role: "Gangubai", note: "Sanjay Leela Bhansali. National Film Award for Best Actress.", kind: "Film" },
    ],
  },
  "kareena-kapoor": {
    paragraphs: [
      "Kareena Kapoor Khan, born 21 September 1980, is the younger sister of Karisma Kapoor and part of the Kapoor family. Refugee (2000) was the debut. Kabhi Khushi Kabhie Gham made her a national face. The films she is judged on are Jab We Met, Omkara (as Dolly), 3 Idiots and Bajrangi Bhaijaan. She took a break after the birth of her son Taimur in 2016 and returned with Veere Di Wedding and later work.",
    ],
    awards: [
      "Filmfare Award for Best Actress for Jab We Met.",
    ],
    works: [
      { year: "2001", title: "Kabhi Khushi Kabhie Gham", role: "Pooja", note: "Karan Johar.", slug: "kabhi-khushi-kabhie-gham", kind: "Film" },
      { year: "2006", title: "Omkara", role: "Dolly", note: "Vishal Bhardwaj’s Othello.", kind: "Film" },
      { year: "2007", title: "Jab We Met", role: "Geet", note: "Imtiaz Ali. Shahid Kapoor.", slug: "jab-we-met", kind: "Film" },
      { year: "2009", title: "3 Idiots", role: "Pia", note: "Rajkumar Hirani.", slug: "3-idiots", kind: "Film" },
      { year: "2015", title: "Bajrangi Bhaijaan", role: "Rasika", note: "Kabir Khan.", slug: "bajrangi-bhaijaan", kind: "Film" },
    ],
  },
  "ajay-devgn": {
    paragraphs: [
      "Ajay Devgn, born Vishal Veeru Devgan on 2 April 1969, debuted in Phool Aur Kaante (1991). The serious films in a long action career are Zakhm, Company, Omkara, and the Hindi Drishyam series. He is married to Kajol. Drishyam (2015), Drishyam 2 (2022) and Drishyam: The Conclusion, which opened on 2 October 2026, are the same family across three films. Tabu plays the police officer opposite him in the series.",
    ],
    awards: [
      "National Film Award for Best Actor for Zakhm (1998).",
      "A second National Film Award for Best Actor for The Legend of Bhagat Singh (2002).",
      "Padma Shri, 2016.",
    ],
    works: [
      { year: "1991", title: "Phool Aur Kaante", role: "Ajay", note: "The debut.", kind: "Film" },
      { year: "1998", title: "Zakhm", role: "Ajay", note: "Mahesh Bhatt. National Film Award for Best Actor.", kind: "Film" },
      { year: "2002", title: "The Legend of Bhagat Singh", role: "Bhagat Singh", note: "Rajkumar Santoshi. Second National Film Award for Best Actor.", kind: "Film" },
      { year: "2006", title: "Omkara", role: "Omkara", note: "Vishal Bhardwaj.", kind: "Film" },
      { year: "2015", title: "Drishyam", role: "Vijay Salgaonkar", note: "Nishikant Kamat. The first Hindi film.", slug: "drishyam", kind: "Film" },
      { year: "2022", title: "Drishyam 2", role: "Vijay Salgaonkar", note: "Abhishek Pathak.", kind: "Film" },
      { year: "2026", title: "Drishyam: The Conclusion", role: "Vijay Salgaonkar", note: "Opened 2 October 2026. Tabu and Akshaye Khanna return.", slug: "drishyam-the-conclusion", kind: "Film" },
    ],
  },
  "ayushmann-khurrana": {
    paragraphs: [
      "Ayushmann Khurrana, born 14 September 1984 in Chandigarh, came out of the first season of MTV Roadies and a music career before Vicky Donor (2012). The films after that kept putting him in subjects commercial Hindi cinema had treated as unspeakable: sperm donation, erectile dysfunction, baldness, caste, a fake-blind pianist. Andhadhun (2018) and Article 15 (2019) are the two on this site.",
    ],
    awards: [
      "Filmfare Award for Best Actor for Andhadhun.",
      "A National Film Award as a singer, for the song “Pani Da” from Vicky Donor, sits in his early record. It is a singing prize, not a Best Actor prize.",
    ],
    works: [
      { year: "2012", title: "Vicky Donor", role: "Vicky", note: "Shoojit Sircar. The debut as a lead.", kind: "Film" },
      { year: "2018", title: "Andhadhun", role: "Akash", note: "Sriram Raghavan. Tabu.", slug: "andhadhun", kind: "Film" },
      { year: "2019", title: "Article 15", role: "Ayan", note: "Anubhav Sinha.", slug: "article-15", kind: "Film" },
      { year: "2026", title: "Udta Teer", role: "Lead", note: "Dated 23 October 2026. Sara Ali Khan opposite him in the published cast.", slug: "udta-teer", kind: "Film" },
    ],
  },
  "rajkummar-rao": {
    paragraphs: [
      "Rajkummar Rao, born 31 August 1984, trained at the Film and Television Institute of India. Shahid (2013), as the lawyer Shahid Azmi, is the film that moved him from supporting parts. He then did Stree, Bareilly Ki Barfi, Badhaai Do and Stree 2, which is to say he can carry both a horror comedy and a legal drama. Newton (2017) is the other film his name is tied to.",
    ],
    awards: [
      "The National Award attached to Shahid in published lists is a Special Mention, not Best Actor. This page does not upgrade it.",
      "Filmfare lists cite him for Best Supporting Actor for Bareilly Ki Barfi, and for critics’ prizes for Shahid and Newton.",
    ],
    works: [
      { year: "2013", title: "Shahid", role: "Shahid Azmi", note: "Hansal Mehta.", kind: "Film" },
      { year: "2017", title: "Newton", role: "Newton", note: "Amit V. Masurkar. India’s Oscar submission that year.", kind: "Film" },
      { year: "2018", title: "Stree", role: "Vicky", note: "Amar Kaushik. The first film.", kind: "Film" },
      { year: "2024", title: "Stree 2", role: "Vicky", note: "Amar Kaushik.", slug: "stree-2", kind: "Film" },
      { year: "2013", title: "Queen", role: "Vijay", note: "The fiancé who cancels the wedding.", slug: "queen", kind: "Film" },
    ],
  },
  "yami-gautam": {
    paragraphs: [
      "Yami Gautam, born 28 November 1985, worked in television and advertisements before Vicky Donor (2012) opposite Ayushmann Khurrana. The later films that define her are Kaabil, Bala, A Thursday and the war film Uri: The Surgical Strike, in which she plays a supporting intelligence role opposite Vicky Kaushal. She is married to the director Aditya Dhar.",
    ],
    awards: [
      "No National Film Award for Best Actress is attached to her name. This page does not borrow one from a co-star’s film.",
    ],
    works: [
      { year: "2012", title: "Vicky Donor", role: "Ashima", note: "Shoojit Sircar.", kind: "Film" },
      { year: "2019", title: "Uri: The Surgical Strike", role: "Pallavi Sharma", note: "Aditya Dhar. Vicky Kaushal leads.", kind: "Film" },
      { year: "2022", title: "A Thursday", role: "Naina", note: "Behzad Khambata. A hostage thriller.", kind: "Film" },
    ],
  },
  "mahira-khan": {
    paragraphs: [
      "Mahira Hafeez Khan was born on 21 December 1984 in Karachi. Advertising came before acting. Humsafar (2011), as Khirad, made her the face of the drama boom. Shehr-e-Zaat (2012) and Sadqay Tumhare (2014–15) showed she was not only that one part. Bin Roye (2015) and Superstar (2019) are the Pakistani films. Raees (2017) is the Hindi film, opposite Shah Rukh Khan. Its release at home became a political fight separate from the performance.",
      "In 2026 she is on Green Entertainment in Mitti De Baway, as Billo, opposite Wahaj Ali. The photograph on this page is a 2024 Dolmen Mall frame under CC BY 3.0.",
    ],
    awards: [
      "Hum Awards and Lux Style Awards have both cited Humsafar-era work. Ceremony pages disagree on the exact trophy title from year to year, so this page does not pin a single statuette it has not re-opened the original winner list for.",
    ],
    works: [
      { year: "2011", title: "Humsafar", role: "Khirad", note: "Farhat Ishtiaq. Fawad Khan as Ashar. HUM. 23 episodes.", slug: "humsafar", kind: "Drama" },
      { year: "2012", title: "Shehr-e-Zaat", role: "Falak", note: "Umera Ahmed.", slug: "shehr-e-zaat", kind: "Drama" },
      { year: "2014", title: "Sadqay Tumhare", role: "Lead", note: "HUM. Adnan Malik.", slug: "sadqay-tumhare", kind: "Drama" },
      { year: "2015", title: "Bin Roye", role: "Saba", note: "Film. Humayun Saeed.", kind: "Film" },
      { year: "2017", title: "Raees", role: "Aasiya", note: "Rahul Dholakia. Opposite Shah Rukh Khan.", kind: "Film" },
      { year: "2019", title: "Superstar", role: "Noor", note: "Mohammed Ehteshamuddin. Bilal Ashraf.", kind: "Film" },
      { year: "2026", title: "Mitti De Baway", role: "Billo", note: "Green Entertainment. Wahaj Ali.", slug: "mitti-de-baway", kind: "Drama" },
    ],
  },
  "fawad-khan": {
    paragraphs: [
      "Fawad Afzal Khan was born on 29 November 1981 in Lahore. He was the singer of Entity Paradigm before he was an actor, and he studied at the National University of Computer and Emerging Sciences. Humsafar and Zindagi Gulzar Hai made him the Pakistani actor Indian audiences asked for by name. Dastaan, as Hassan, is the Partition serial. Khoobsurat (2014) and Kapoor & Sons (2016) were the Hindi films. After 2016 that work stopped.",
      "The Legend of Maula Jatt is the Pakistani film he was promoting in the 2022 photograph on this page. The picture is a Voice of America Urdu frame, public domain.",
    ],
    awards: [
      "Lux Style Awards have repeatedly named him for television. This page does not invent a fresh 2026 trophy.",
    ],
    works: [
      { year: "2010", title: "Dastaan", role: "Hassan", note: "HUM. Partition. Sanam Baloch as Bano.", slug: "dastaan", kind: "Drama" },
      { year: "2011", title: "Humsafar", role: "Ashar", note: "HUM. Mahira Khan.", slug: "humsafar", kind: "Drama" },
      { year: "2012", title: "Zindagi Gulzar Hai", role: "Zaroon", note: "HUM. Sanam Saeed. Umera Ahmed.", slug: "zindagi-gulzar-hai", kind: "Drama" },
      { year: "2014", title: "Khoobsurat", role: "Vikram", note: "Shashanka Ghosh. Sonam Kapoor.", kind: "Film" },
      { year: "2016", title: "Kapoor & Sons", role: "Rahul", note: "Shakun Batra. Alia Bhatt and Sidharth Malhotra.", kind: "Film" },
      { year: "2022", title: "The Legend of Maula Jatt", role: "Maula Jatt", note: "Bilal Lashari. The Punjabi film.", kind: "Film" },
    ],
  },
  "yumna-zaidi": {
    paragraphs: [
      "Yumna Zaidi works in Urdu television. Published award tallies credit her with seven Lux Style Awards, the most of any actress, and two Hum Awards. Early leads viewers still search include Rishtay Kuch Adhooray Se and Jugnoo. Dar Si Jaati Hai Sila brought a Hum Award for best actress. Bakhtawar won both the critics’ and the viewers’ Lux Style Awards for best television actress.",
      "Parizaad put her beside Ahmed Ali Akbar. Tere Bin, as Meerab opposite Wahaj Ali, made her the most searched Pakistani actress of that run. In 2024 she won the Lux Style Award for best television actress, viewers’ choice, for Tere Bin. Nayab is the film. The photograph on this page is a Voice of America Urdu picture, public domain.",
    ],
    awards: [
      "Seven Lux Style Awards and two Hum Awards, as published in her biography. ShowBuzz is not reprinting every nomination.",
      "Lux Style Award, best television actress, viewers’ choice, for Tere Bin (2024).",
      "Lux Style Awards, critics’ and viewers’ choice, for Bakhtawar.",
      "Hum Award, best actress, for Dar Si Jaati Hai Sila.",
    ],
    works: [
      { year: "2014", title: "Rishtay Kuch Adhooray Se", role: "Lead", note: "The serial that first put her in Hum Award nominations.", kind: "Drama" },
      { year: "2015", title: "Jugnoo", role: "Lead", note: "Comedy-drama.", kind: "Drama" },
      { year: "2018", title: "Dar Si Jaati Hai Sila", role: "Lead", note: "Hum Award, best actress.", kind: "Drama" },
      { year: "2021", title: "Parizaad", role: "Annie", note: "HUM. Hashim Nadeem. Ahmed Ali Akbar.", slug: "parizaad", kind: "Drama" },
      { year: "2022", title: "Bakhtawar", role: "Bakhtawar", note: "Lux Style Awards, both critics and viewers.", kind: "Drama" },
      { year: "2022", title: "Tere Bin", role: "Meerab", note: "Geo. Wahaj Ali as Murtasim. Nooran Makhdoom. Siraj-ul-Haque.", slug: "tere-bin", kind: "Drama" },
      { year: "2024", title: "Nayab", role: "Film lead", note: "The sports film attached to her later Lux Style film prize.", kind: "Film" },
    ],
  },
  "durefishan-saleem": {
    paragraphs: [
      "Durefishan Saleem was born in Lahore. Her father, Saleem-ul-Hassan, worked as a PTV director and producer. She studied for an LLB. Dil Ruba (2020) was a supporting debut. Bhaaras, the same year, was the first lead. Kaisi Teri Khudgarzi (2022), opposite Danish Taimoor, made her widely known. Ishq Murshid (2023–24), opposite Bilal Abbas Khan, made her a comic lead. In 2026 she plays Zaryab in Umera Ahmed’s Dar-e-Nijaat on ARY.",
      "The two stills on this page were supplied for ShowBuzz. They are not a Creative Commons release. The credit under each picture says so.",
    ],
    awards: [
      "A Hum Award is attached to her name in short biographies. This page does not invent the category.",
    ],
    works: [
      { year: "2020", title: "Dil Ruba", role: "Supporting", note: "HUM. The debut.", kind: "Drama" },
      { year: "2020", title: "Bhaaras", role: "Lead", note: "First lead.", kind: "Drama" },
      { year: "2022", title: "Kaisi Teri Khudgarzi", role: "Mehak", note: "ARY. Danish Taimoor.", slug: "kaisi-teri-khudgarzi", kind: "Drama" },
      { year: "2023", title: "Ishq Murshid", role: "Shibra Suleman", note: "HUM. Bilal Abbas Khan as Shahmeer and Fazal Bakhsh. Farooq Rind. Ended 5 May 2024.", slug: "ishq-murshid", kind: "Drama" },
      { year: "2026", title: "Dar-e-Nijaat", role: "Zaryab", note: "ARY. Umera Ahmed.", slug: "dar-e-nijaat", kind: "Drama" },
    ],
  },
  "hania-aamir": {
    paragraphs: [
      "Hania Aamir debuted in the film Janaan (2016). Television made her a lead. Kabhi Main Kabhi Tum (2024), as Sharjeena opposite Fahad Mustafa, was the highest-rated Pakistani serial of that run. Published 2026 biographies also place her on a Forbes Asia 30 Under 30 list.",
    ],
    awards: [
      "No National Award. The public honour this page will repeat is the Forbes Asia 30 Under 30 mention already in 2026 biographies, which is a list, not a acting prize.",
    ],
    works: [
      { year: "2016", title: "Janaan", role: "Film debut", note: "The first screen credit people cite.", kind: "Film" },
      { year: "2024", title: "Kabhi Main Kabhi Tum", role: "Sharjeena", note: "ARY. Fahad Mustafa. Highest-rated serial of that run.", slug: "kabhi-main-kabhi-tum", kind: "Drama" },
    ],
  },
  "sajal-aly": {
    paragraphs: [
      "Sajal Aly, born 17 January 1994, started on Geo’s sitcom Nadaaniyaan. Yaqeen Ka Safar (2017), as Dr Zubiya, and Alif (2019) are the two serials that define her. The government of Pakistan has given her the Tamgha-e-Imtiaz. In 2026 she led Zanjeerain on HUM as Rabiya. That serial ended on 10 September 2026.",
    ],
    awards: [
      "Tamgha-e-Imtiaz, a Pakistani civilian honour.",
      "Hum Awards for Yaqeen Ka Safar-era work are widely reported. The civilian honour is the one this page treats as settled.",
    ],
    works: [
      { year: "2017", title: "Yaqeen Ka Safar", role: "Dr Zubiya", note: "HUM. Farhat Ishtiaq. Ahad Raza Mir.", slug: "yaqeen-ka-safar", kind: "Drama" },
      { year: "2019", title: "Alif", role: "Lead", note: "Geo. Umera Ahmed. Hamza Ali Abbasi.", slug: "alif", kind: "Drama" },
      { year: "2026", title: "Zanjeerain", role: "Rabiya", note: "HUM. Ended 10 September 2026.", slug: "zanjeerain", kind: "Drama" },
    ],
  },
  "fahad-mustafa": {
    paragraphs: [
      "Fahad Salahuddin, known as Fahad Mustafa, was born on 26 June 1983 in Karachi. He has hosted Jeeto Pakistan on ARY Digital since 2014. He returned to acting in 2024 as Mustafa in Kabhi Main Kabhi Tum, which he also produced with Ali Kazmi under Big Bang Entertainment. A Jeeto Pakistan episode dated 4 October 2026 was on ARY Digital HD.",
    ],
    awards: [
      "He is a multiple Hum Award and Lux Style Award host and winner across hosting categories. This page does not list a 2026 acting trophy.",
    ],
    works: [
      { year: "2014–", title: "Jeeto Pakistan", role: "Host", note: "ARY. Latest confirmed episode on this desk: 4 October 2026.", slug: "jeeto-pakistan", kind: "Show" },
      { year: "2024", title: "Kabhi Main Kabhi Tum", role: "Mustafa", note: "ARY. He also produced it. Hania Aamir as Sharjeena.", slug: "kabhi-main-kabhi-tum", kind: "Drama" },
    ],
  },
  "wahaj-ali": {
    paragraphs: [
      "Wahaj Ali became a lead after smaller parts. Ehd-e-Wafa (2019) put him in the four-friend serial with Ahad Raza Mir, Osman Khalid Butt and Ahmed Ali Akbar. Tere Bin, as Murtasim opposite Yumna Zaidi’s Meerab, is the serial that made the name. He won the 2024 Lux Style Award for best television actor, viewers’ choice, for that part.",
      "In 2026 he is on Green Entertainment in Mitti De Baway opposite Mahira Khan’s Billo. The role name on the channel listings used for this update was not stable enough to print.",
    ],
    awards: [
      "Lux Style Award, best television actor, viewers’ choice, for Tere Bin (2024). He was also nominated in the critics’ choice.",
    ],
    works: [
      { year: "2019", title: "Ehd-e-Wafa", role: "One of the four friends", note: "HUM, PTV and ISPR. Mustafa Afridi. Character name not pinned on this page.", slug: "ehd-e-wafa", kind: "Drama" },
      { year: "2022", title: "Tere Bin", role: "Murtasim", note: "Geo. Yumna Zaidi as Meerab.", slug: "tere-bin", kind: "Drama" },
      { year: "2026", title: "Mitti De Baway", role: "Opposite Billo", note: "Green. Mahira Khan.", slug: "mitti-de-baway", kind: "Drama" },
    ],
  },
  "bilal-abbas-khan": {
    paragraphs: [
      "Bilal Abbas Khan is a television lead whose parts are usually sharper than the romance around them. O Rangreza, Balaa, Cheekh (as Wajih, beside Saba Qamar’s Mannat) and Ishq Murshid are the run people still search. In Ishq Murshid he plays Shahmeer Sikandar and the disguise Fazal Bakhsh, opposite Durefishan Saleem’s Shibra. Farooq Rind directed that serial. It ended on 5 May 2024.",
      "Earlier credits that interviews still name with him include Dunk, Pyaar Kay Sadqay and Qurbaan. Those are not given separate pages on ShowBuzz.",
    ],
    awards: [
      "Hum Award nominations are part of his published television record. This page does not upgrade a nomination into a win.",
    ],
    works: [
      { year: "2017", title: "O Rangreza", role: "Lead", note: "HUM.", kind: "Drama" },
      { year: "2018", title: "Balaa", role: "Lead", note: "ARY.", kind: "Drama" },
      { year: "2019", title: "Cheekh", role: "Wajih", note: "ARY. Saba Qamar as Mannat. Zanjabeel Asim Shah.", slug: "cheekh", kind: "Drama" },
      { year: "2023", title: "Ishq Murshid", role: "Shahmeer / Fazal Bakhsh", note: "HUM. Durefishan Saleem as Shibra. Ended 5 May 2024.", slug: "ishq-murshid", kind: "Drama" },
    ],
  },
  "humayun-saeed": {
    paragraphs: [
      "Humayun Saeed is an actor and a producer. Meray Paas Tum Ho (2019), opposite Ayeza Khan and Adnan Siddiqui, was the serial the country argued about in real time. Bin Roye (2015) is the film with Mahira Khan. He has also produced a long run of films under his own banner, including the Jawani Phir Nahi Ani comedies.",
    ],
    awards: [
      "Lux Style and Hum hosting and acting prizes appear across two decades. Meray Paas Tum Ho is the work, not a trophy.",
    ],
    works: [
      { year: "2015", title: "Bin Roye", role: "Lead", note: "Film. Mahira Khan.", kind: "Film" },
      { year: "2015", title: "Jawani Phir Nahi Ani", role: "Lead / producer", note: "The comedy franchise.", kind: "Film" },
      { year: "2019", title: "Meray Paas Tum Ho", role: "Lead", note: "ARY. Ayeza Khan. Adnan Siddiqui.", slug: "meray-paas-tum-ho", kind: "Drama" },
    ],
  },
  "ayeza-khan": {
    paragraphs: [
      "Ayeza Khan is the lead of Pyarey Afzal (as Farah, opposite Hamza Ali Abbasi) and of Meray Paas Tum Ho. She has been a Geo and ARY lead for more than a decade. The two serials on this site are the ones her name is still searched with.",
    ],
    awards: [
      "Hum Awards for Pyarey Afzal-era work are widely reported. This page names the serials rather than a trophy count.",
    ],
    works: [
      { year: "2013", title: "Pyarey Afzal", role: "Farah", note: "HUM. Hamza Ali Abbasi.", slug: "pyarey-afzal", kind: "Drama" },
      { year: "2019", title: "Meray Paas Tum Ho", role: "Lead", note: "ARY. Humayun Saeed.", slug: "meray-paas-tum-ho", kind: "Drama" },
    ],
  },
  "danish-taimoor": {
    paragraphs: [
      "Danish Taimoor is a television lead known for intense romantic parts. Kaisi Teri Khudgarzi (2022), opposite Durefishan Saleem, is the serial on this site. Deewangi and other ARY leads sit around it. He is also a producer.",
    ],
    awards: [
      "No civilian honour is claimed here.",
    ],
    works: [
      { year: "2022", title: "Kaisi Teri Khudgarzi", role: "Lead", note: "ARY. Durefishan Saleem.", slug: "kaisi-teri-khudgarzi", kind: "Drama" },
    ],
  },
  "sanam-saeed": {
    paragraphs: [
      "Sanam Saeed played Kashaf in Zindagi Gulzar Hai, the Umera Ahmed serial opposite Fawad Khan, directed by Sultana Siddiqui. She is also in Diyar-e-Dil. Those two HUM serials are why the name is still searched.",
    ],
    awards: [
      "Hum Award attention for Zindagi Gulzar Hai is part of the public record of that serial. The page for the serial carries the credits.",
    ],
    works: [
      { year: "2012", title: "Zindagi Gulzar Hai", role: "Kashaf", note: "HUM. Fawad Khan. Umera Ahmed.", slug: "zindagi-gulzar-hai", kind: "Drama" },
      { year: "2015", title: "Diyar-e-Dil", role: "Lead", note: "HUM. Farhat Ishtiaq.", slug: "diyar-e-dil", kind: "Drama" },
    ],
  },
  "hamza-ali-abbasi": {
    paragraphs: [
      "Hamza Ali Abbasi played Afzal in Pyarey Afzal and Qalb-e-Momin in Alif, the Umera Ahmed serial. He has also worked in films, including Waar. The two serials are the work this site is built around.",
    ],
    awards: [
      "Hum Awards for Pyarey Afzal are widely reported. Alif is the later, quieter credit.",
    ],
    works: [
      { year: "2013", title: "Pyarey Afzal", role: "Afzal", note: "HUM. Ayeza Khan as Farah.", slug: "pyarey-afzal", kind: "Drama" },
      { year: "2013", title: "Waar", role: "Film role", note: "Bilal Lashari’s action film.", kind: "Film" },
      { year: "2019", title: "Alif", role: "Qalb-e-Momin", note: "Geo. Sajal Aly. Umera Ahmed.", slug: "alif", kind: "Drama" },
    ],
  },
};
