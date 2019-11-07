// test promgram
var pair = getDancers();
var maleDancers = pair[0];
var femaleDancers = pair[1];
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}

if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}
