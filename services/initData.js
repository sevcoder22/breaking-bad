export const initData = (url, title) => {
  getData(url, title);
}

const getData = async (url, title) => {
  try {
  	  const response = await fetch(url);
	    const array = await response.json();
      // printData(array)
      clearBrokens(array, title);
  } catch (error) {
      console.log(error);
  }
}

const clearBrokens = (array, title) => {
  array.forEach(element => {
    if (element.nickname == "Holly") {
        element.img = `https://www.cidob.org/dass-2019041701/var/plain/storage/images/new_site/biografias_lideres_politicos/america_del_norte/estados_unidos/donald_trump/1993720-58-esl-ES/donald_trump_biography.jpg`
    } else if (element.nickname == "Lydia") {
        element.img = `https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Elon_Musk_Colorado_2022_%28cropped%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped%29.jpg`
    } else if (element.nickname == "Skinny") {
        element.img = `https://static.posters.cz/image/1300/art-photo/the-lord-of-the-rings-gandalf-i132723.jpg`
    }
  });
  // printData(array, title);
  filterData(array, title);
}

const filterData = (array, title) => {

  const filtered1 = array.filter(elem => elem.status == "Deceased");
  array.forEach(valor => {
    // console.log(valor.status)
  })

  printData(array, title);
}



const printData = (mappedArray, title) => {
  
  const galleryContent = document.querySelector(`.galleryContent`);
  const galleryTitle = document.querySelector(`.galleryTitle`);
  galleryTitle.innerHTML = title;
  galleryContent.innerHTML = ``;
  mappedArray.forEach(element => {
    const galleryContent = document.querySelector(`.galleryContent`);
    const galleryCard = ` 
            <button id="btn${element.char_id}" class="galleryItem">
              ${element.nickname}<br><br>
              <img src="${element.img}">
            </button>`
    galleryContent.innerHTML += galleryCard;
  });
  putListeners(mappedArray)
}

const putListeners = (mappedArray) => {
  mappedArray.forEach(element => {
    document.querySelector(`#btn${element.char_id}`).addEventListener("click", () => {printHero(element)})
  })
  printHero(mappedArray[0])
}

const printHero = (fullActiveElement) => {
  const heroCard = `
   <br>
   <div>
        <div class="heroTitle">
                ${fullActiveElement.nickname}
        </div><br>

        <div class="heroContent">
            <div class="heroText">
                Name: ${fullActiveElement.name}<br>
                Actor/Actress: ${fullActiveElement.portrayed}<br>
                Birthdate: ${fullActiveElement.birthday}<br>
                Occupation: ${fullActiveElement.occupation}<br>
                Series: ${fullActiveElement.category}<br>
                Status: ${fullActiveElement.status}<br>
                
            </div><br>
            <div class="heroImg">
                  <img src="${fullActiveElement.img}">
            </div>
        </div>

   </div>   
   `
  const hero = document.querySelector(`#hero`)
  hero.innerHTML = heroCard;
}