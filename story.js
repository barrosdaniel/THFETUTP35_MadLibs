var name = prompt('What is your name?');
var personalQuality = prompt('Enter a personal characteristic that Daniel has.');
var swearWord = prompt('Enter your favourite swear word.');

message = 'Daniel is thinking about having pizza with ';
message += name + '.';
message += ' But he reckons ' + name + ' does not find he has ' + personalQuality + ' enough.';
message += ' He believes if he is nice to ' + name;
message += " he'll be shouted at like: " + "\"" + swearWord + "\"" + '.';
message += ' Daniel feels very sad because of that.';

document.write(message);