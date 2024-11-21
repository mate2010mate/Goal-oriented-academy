// წამოვიღოთ ელემენტები getElementById()'ის მეშვეობით
const image = document.getElementById('myImage');
const button = document.getElementById('resizeButton');

// მოვახდინოთ button'ის click ივენთის დამუშავება
button.addEventListener('click', () => {
    // ვცვლით ფოტოს სიგრძეს და სიგანეს
    image.style.width = '400px'; // ახალი სიგანე
    image.style.height = '300px'; // ახალი სიმაღლე
});
