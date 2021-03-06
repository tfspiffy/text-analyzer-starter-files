// your code here!

function getWords(string){
    var array = string.split(/[ ,]+/);
    return array
}

function wordCount(array){
    return array.length;
}

function wordUnique(array){
    var words = [];
    count = 0;
    while (count < array.length){
        if (words.includes(array[count])){
        }
        else {
            words.push(array[count]);
        }
        count = count + 1;
    }
    return words.length;
}

function avgWordLength(array){
    var total = array.length;
    var sum = 0;
    for (var value of array) {
        sum = sum + value.length;
    }
    return (sum / total);
}

function displayValues(count, unique, length){
    $('.container').find('dl').removeClass('hidden');
    var dd1 = $('dd').first()
    dd1.text(count)
    var dt2 = dd1.next()
    var dd2 = dt2.next()
    dd2.text(unique)
    var dd3 = $('dd').last()
    dd3.text(length)
}

function main(text) {
    var words = getWords(text);
    var count = wordCount(words);
    var unique = wordUnique(words);
    var length = avgWordLength(words);
    displayValues(count, unique, length);
}

function getText(){
    var text = "";
    $('button').click(function(event) {
        event.preventDefault();
        
        text = $('#user-text').val();
        main(text);        
    });
}

$(getText);