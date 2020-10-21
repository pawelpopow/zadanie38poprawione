function numer (liczba1,liczba2) {
    let sum = liczba1 + liczba2; 
    let sub = liczba1 - liczba2; 
    let mul = liczba1 * liczba2;

    if(sum > 0) {
       console.log("Wynik dodawania wynosi " + sum);
    } else {
       console.log("Wynik dodawania jest nieprawidłowy");
    } 

    if(sub > 0) {
      console.log("Wynik odejmowania wynosi " + sub);
   } else {
      console.log("Wynik odejmowania jest nieprawidłowy");
   }

    if(mul > 0) {
       console.log("Wynik mnożenia wynosi " + mul);
    } else {
       console.log("Wynik  mnożenia jest nieprawidłowy");
    }

}  
   console.log(numer(2,4));