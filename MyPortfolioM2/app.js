/* Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};
 myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}*/
const slide = () => {
    const aboutShow = document.querySelector('.about-show');
    const about = document.querySelector('.about');
    const aboutS = document.getElementById('about-show');

    const skillsShow = document.querySelector('.skills-show');
    const skills = document.querySelector('.skills');
    const skillsS = document.getElementById('skills-show');

    const skillLi = document.querySelectorAll('.skills div div li');
    const skillH = document.querySelectorAll('.skills div div h2');
    const skillP = document.querySelectorAll('.skills div div p');

    const aboutH = document.querySelectorAll('.about div div h1');
    const aboutP = document.querySelectorAll('.about div div p');
    const aboutImg = document.querySelectorAll('.about div div img');


    aboutShow.addEventListener('click', () => {

        about.classList.toggle('about-active');
        
        aboutH.forEach((heada, index) => {
            if (heada.style.animation){
                heada.style.animation = '';
            }
            else{
                heada.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        aboutP.forEach((paragraph, index) => {
            if (paragraph.style.animation){
                paragraph.style.animation = '';
            }
            else{
                paragraph.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        aboutImg.forEach((image, index) => {
            if (image.style.animation){
                image.style.animation = '';
            }
            else{
                image.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });
    });
    

    skillsShow.addEventListener('click', () => {

        skills.classList.toggle('about-active');

        skillLi.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        skillH.forEach((head, index) => {
            if (head.style.animation){
                head.style.animation = '';
            }
            else{
                head.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        skillP.forEach((paragraph, index) => {
            if (paragraph.style.animation){
                paragraph.style.animation = '';
            }
            else{
                paragraph.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });
    });

    aboutS.addEventListener('click', () => {

        about.classList.toggle('about-active');

        aboutH.forEach((heada, index) => {
            if (heada.style.animation){
                heada.style.animation = '';
            }
            else{
                heada.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        aboutP.forEach((paragraph, index) => {
            if (paragraph.style.animation){
                paragraph.style.animation = '';
            }
            else{
                paragraph.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        aboutImg.forEach((image, index) => {
            if (image.style.animation){
                image.style.animation = '';
            }
            else{
                image.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });
        
    });

    skillsS.addEventListener('click', () => {

        skills.classList.toggle('about-active');

        skillLi.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        skillH.forEach((head, index) => {
            if (head.style.animation){
                head.style.animation = '';
            }
            else{
                head.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });

        skillP.forEach((paragraph, index) => {
            if (paragraph.style.animation){
                paragraph.style.animation = '';
            }
            else{
                paragraph.style.animation =`fade 1s ease forwards ${index / 7 + 0.5}s `;
            }
        });
    });
}


slide();

  