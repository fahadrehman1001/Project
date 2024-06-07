/* Create a business name generator by combining  list of adjectives and shop name and another word not using array

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another Word
Bros
Limited
Hub
*/
function business(str1, str2, str3) {
    let randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
      case 0:
        return str1;
      case 1:
        return str2;
      case 2:
        return str3;
    }
  }

  console.log(
    business("Crazy", "Amazing", "Fire"),
    business("Engine", "Garments", "Food"),
    business("Bros", "Limited", "Hub")
  );