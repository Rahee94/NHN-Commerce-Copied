window.addEventListener("load", () => {
    /***********************
     * collapse 메뉴 구현
     ***********************/
    let wholeMenu = document.querySelector(".header-nav-whole-menu");
    let menuMap = document.querySelector(".header-nav-whole-menu-map");

    wholeMenu.addEventListener("click", () => {
        menuMap.classList.toggle("active");
        //menuMap.style.display = "block";
    });

    /**************************
     * 메인 카피라이팅 페이드효과
     **************************/
    let copyWrite = document.querySelector(".main-slider-change-copy");
    let changeCopy = ["인플루언서가", "스타트업이", "브랜드몰이", "1인 사장님이"];
    let index = 0
    
    setInterval(function () {
        //배열 안에 숫자 대신 인덱스를 대입, 인덱스넘버가 하나씩 커질때마다 출력되도록 해준다.
        //나머지 법칙을 이용해서 반복출력이 되도록 해주면 됨.
        copyWrite.textContent = changeCopy[index%4];
        copyWrite.style.animation = "3s changeText infinite";
        index++
        // copyWrite.style.opacity = "0";

    }, 3000);
    // setTimeout(changeText2, 1000);
    // function changeText () {
    //     copyWrite.style.opacity = "0";
    //     copyWrite.textContent = changeCopy[0];
    // }
    // function changeText2 () {
    //     copyWrite.textContent = changeCopy[0];
    //     copyWrite.style.opacity = "1";
    // }
});