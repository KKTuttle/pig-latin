var vowels = ['a','e','i','o','u'];

$(function(){
  var toPigLatin = function(word) {
    var vowelPos = findVowel(word);
    if (vowelPos === 0) {
      return word + "ay";
    } else if (word.charAt(vowelPos-1) === 'q') {
      return word.slice(vowelPos+1) + word.slice(0,vowelPos+1) + "ay";
    } else {
      return word.slice(vowelPos) + word.slice(0,vowelPos) + "ay";
    }
  };

  var findVowel = function(word) {
    debugger;
    for (var i = 0; i < word.length; i++) {
      for (var j=0; j < vowels.length; j++) {
        if (word.charAt(i) === vowels[j]){
          return i;
        }
      }
    }
  };

  $("form#pigLatinForm").submit(function(event){
    var userWord = $("input#userWord").val();
    var result = toPigLatin(userWord);

    $("#result").text(result);

    event.preventDefault();
  });
});
