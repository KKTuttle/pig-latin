var vowels = ['a','e','i','o','u','y', 'A', 'E', 'I', 'O', 'U'];

$(function() {
  var toPigLatin = function(word) {
    var vowelPos = findVowel(word);
    if ((word.charAt(vowelPos) !== 'y') && (vowelPos === 0)) {  //vowel is first letter [0] and not y
      return word + "ay";
    } else if ((word.charAt(vowelPos)==='y') && (vowelPos ===0)) {  //vowel is first letter [0] and is y
      return word.slice(vowelPos+1) + word.slice(0,vowelPos+1) + "ay";
    } else if (word.charAt(vowelPos-1) === 'q') { //is the letter before a vowel q
      return word.slice(vowelPos+1) + word.slice(0,vowelPos+1) + "ay";
    } else {  //any non-special word
      return word.slice(vowelPos) + word.slice(0,vowelPos) + "ay";
    }
  };

  var findVowel = function(word) {
    //finds index position of first vowel, returns that index
    for (var i = 0; i < word.length; i++) {
      for (var j=0; j < vowels.length; j++) {
        if (word.charAt(i) === vowels[j]){
          return i;
        }
      }
    }
  };

  var regExLatin = function(sentence) {
    sentence = sentence.replace(/\b([aeiou][a-z]*)\b/gi, "$1ay");
    sentence = sentence.replace(/\b([bcdfghjklmnpqrstvwxy]+)([a-z]*)\b/gi, "$2$1ay");
    return sentence;
  };

  $("form#pigLatinForm").submit(function(event){
    var userInput = $("input#userInput").val();
    var array = userInput.split(" ");
    var outputArray = [];

    for(var k = 0; k < array.length; k++) { //iterates over words in array
      outputArray.push(toPigLatin(array[k]));
    }
    var result = outputArray.join(" ");

    $("#hard-way").text(result);
    $("#easy-way").text(regExLatin(userInput));

    event.preventDefault();
  });
});
