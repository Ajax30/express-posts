String.prototype.toTitleCase = function() {
    const arr = this.split(' ');
    const x = arr.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return x.join(' ');
  }

  String.prototype.capitalizeSentence= function() {
    let wordsArray = this.toLowerCase().split(' ')
    let capsArray = []

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    });

    return capsArray.join(' ')
}