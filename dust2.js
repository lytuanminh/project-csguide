dust2.addEventListener('click', () => {
    let dust2Content = `<div>
    <a href="#d2smoke" id="d2smoke" onclick='videos()'>Smoke</a>
    <a href="#d2fl" id="d2flash">Flash</a>
    <a href="#d2moly" id="d2moly">Moly</a>
    <a href="#d2bonus" id="d2bonus">Bonus</a>
    </div>
    
    <div id="vid-container">
    </div>`
    pageContainer.innerHTML = dust2Content;
    pageContainer.style.backgroundColor = "bisque";
})

let d2Smoke = document.getElementById('d2smoke');


function videos(){
    let divVideo = document.getElementById('vid-container');
    let videos = `
    <video width="320" height="240" controls>
        <source src="https://giant.gfycat.com/FlamboyantIllfatedKitten.mp4" type="video/mp4">
        </video>
        `
    divVideo.innerHTML = videos;
}