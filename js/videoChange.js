const widthButton = document.querySelector('.main-info button:nth-child(4)');
const locationButton = document.querySelector('.main-info button:nth-child(5)');
const videoSize = document.querySelector('.video');

widthButton.addEventListener('click', function(){
    if(videoSize.style.width === '80%'){
        videoSize.style.width = '50%';
    }else{
        videoSize.style.width = '80%';
    }
});

locationButton.addEventListener('click', function(){
    document.querySelector('.main-bottom').insertAdjacentHTML("afterbegin", `<div class="main-info">
        <span>SEADRONIX</span>
        <h3>영상 출력 화면 크기 및 위치 조정 기능</h3>
        <p>2. 다음의 기능을 포함하는 웹/App 페이지를 구현해 보시오. A. 영상 출력 (파일 또는 비디오 스트림 데이터 출력) B. 출력 영상에 Text 또는 이미지를 Blending하여 출력 C. 영상 출력 화면 크기 및 위치 조정 기능</p>
        <button>화면 크기 변동</button>
        <button>위치 조정 변동</button>
    </div>`);

    document.querySelector('.first').style.display = "none";
});