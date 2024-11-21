// წამოვიღოთ ელემენტები getElementById()'ის მეშვეობით
const image = document.getElementById('myImage');
const button = document.getElementById('changeImageButton');

// მოვახდინოთ button'ის click ივენთის დამუშავება
button.addEventListener('click', () => {
    // ვცვლით ფოტოს src ატრიბუტს
    image.src = 'image2.jpg'; // აქ ჩაწერეთ ახალი სურათის ლინკი
});
