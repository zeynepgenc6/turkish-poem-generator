function genaratePoem(event){
    event.preventDefault();
    
    new Typewriter("#poem", {
      strings: "İkimiz birden sevinebiliriz göğe bakalım",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", genaratePoem);