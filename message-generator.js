const phrases = ["The waitress was not amused when NNN VVV green eggs and ham.","I VVV NNN.","Iguanas were VVV out of the NNN.","He always VVV his NNN at night.","The tattered work gloves speak of the NNN he VVV throughout his life.","If I don’t like NNN, I’ll VVV it.","NNN doesn't VVV.","Andy loved to VVV on a NNN.","Behind the NNN was a reflection that only VVV.","NNN had the gift of being able to VVV songs.","Today we VVV NNN for my uncle's wedding.","As he looked out the window, he VVV a NNN.","As he waited for the NNN to warm, he noticed that he could VVV.","I love VVV NNN and tuna sandwiches.","The sky is clear; the NNN are VVV."];

const nouns = ["drawing","procedure","preparation","problem","uncle","queen","supermarket","resolution","teacher","connection","energy","direction","profession","language","device"];

const verbs = ["bow","persist","sleep","discharge","supervise","pick","owe","cut","struggle","explore","kick","tuck","greet","administer","last"];

//storing random entry from each array into variable phrase, noun, and verb
let phrase = phrases[Math.floor(Math.random()*phrases.length)];
let noun = nouns[Math.floor(Math.random()*nouns.length)];
let verb = verbs[Math.floor(Math.random()*verbs.length)];

//generate randome phrase; inject noun and verb into phrase using String replace
phrase = (phrase.replace('NNN', noun)).replace('VVV', verb);
console.log(phrase);