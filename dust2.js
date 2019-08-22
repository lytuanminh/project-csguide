// dust2.addEventListener('click', () => {
//     let dust2Content = `<div>
//     <a href="#d2smoke" id="d2smoke" onclick='videos()'>Smoke</a>
//     <a href="#d2fl" id="d2flash">Flash</a>
//     <a href="#d2moly" id="d2moly">Moly</a>
//     <a href="#d2bonus" id="d2bonus">Bonus</a>
//     </div>
    
//     <div id="vid-container">
//     </div>`
//     pageContainer.innerHTML = dust2Content;
//     pageContainer.style.backgroundColor = "black";
// })

let d2Smoke = document.getElementById('d2smoke');

function videos(){
    let divVideo = document.getElementById('vid-container');
    let videos = `
    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/NegligibleSpanishBlackbuck.webm" type="video/webm">
        </video>
        <div id="video-description" style="width=100%">T-base to Xbox</div>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/InfantileGloomyGuppy.webm" type="video/webm">
        </video>
        <p id="video-description">Lower Tunnel to CT</p>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/JitteryPointlessCaecilian.webm" type="video/webm">
        </video>
        <p id="video-description">Lower Tunnel to Left-mid</p>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/PolishedRepentantErne.webm" type="video/webm">
        </video>
        <p id="video-description">Outside Tunnel to B-Window</p>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/AltruisticGeneralFritillarybutterfly.webm" type="video/webm">
        </video>
        <p id="video-description">CT-mid to Tunnel</p>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/FragrantSplendidGalapagosalbatross.webm" type="video/webm">
        </video>
        <p id="video-description">T-base to A-long</p>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/InsecureDazzlingIrrawaddydolphin.webm" type="video/webm">
        </video>
        <p id="video-description">A-car to A-ddor</p>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/QuaintFragrantEthiopianwolf.webm" type="video/webm">
        </video>
        <p id="video-description">A-short to CT</p>
    </div>

    <div id="video-panel">
    <video width="320" height="240" controls loop>
        <source src="https://giant.gfycat.com/CheapSphericalBlacklab.webm" type="video/webm">
        </video>
        <p id="video-description">A-door to CT-cross</p>
    </div>
    `
    divVideo.innerHTML = videos;
}