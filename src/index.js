function genaratePoem(event){
    event.preventDefault();
    let poemElement=document.querySelector("#poem");
    new Typewriter("#poem", {
      strings: "İkimiz birden sevinebiliriz göğe bakalım",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    poemElement.innerHTML = "İkimiz birden sevinebiliriz göğe bakalım";
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", genaratePoem);