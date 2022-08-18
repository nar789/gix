import './App.css';
import './assets/bootstrap.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
import WOW from 'wowjs';


function App() {

  useEffect(()=>{
    function init() {

      const wow = new WOW.WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       80,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
      }
      );
      wow.init();

      $('#k').click(()=>{
        alert('asdf');
      });

    }

    init();

  },[]);


  return (
    <div className='text-center'>
      <header className="cover cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1 className="wow fadeIn cover-heading dday" style={{textAlign:'right', marginTop:'0.5em', marginRight:'0.5em', fontSize:'2rem'}}>
              <span style={{letterSpacing:'-0.13em', marginRight:'0.3em'}}>⎽⎽</span><br/>
              11 <br/>
              月 <br/>
              28 <br/>
              日 <br/>
              <span  style={{letterSpacing:'-0.13em', marginRight:'0.3em'}}>⎺⎺</span>
          </h1>
      </header>
        
      <div className="wow fadeInUp">
            <p className="top-title">삼돌이 · 삼순이</p>
            <p className="top-title-sub">토요일 오전 11시</p>
            <p className="top-title-sub">R5 웨딩홀</p>
            <br/><br/><br/>
            <hr className="cover-container mx-auto  flex-column" />
            <br/>
      </div>

      <div className="wow fadeInUp">
            <p className="section1-title section1-main">
                예쁜 예감이 들었다 <br/>
                우리는 언제나 손을 잡고 있게 될 것이다.
                <br/><br/>
                - 이이체, 연인 -
            </p>
            <br/>
        </div>

      <div className="wow fadeInUp">
            <p className="section1-title section1-sub">
                사랑으로 물들어가는 계절,<br/>
                연인에서 부부라는 이름으로<br/>
                평생을 함께 하고자 합니다.<br/>
                귀한 걸음 하시어<br/>
                두 사람의 언약을 지켜봐 주시면<br/>
                더 없는 기쁨으로 간직하겠습니다.
            </p>
            <br/>
        </div>

        <div className="wow fadeInUp">
            <div className="section1-title section1-sub2">
                김재화 · 고복순<span className="small">의&nbsp;아들&nbsp;&nbsp;</span>삼돌이<br/>
                이신형 · 한정연<span className="small">의&nbsp;&nbsp;&nbsp;딸&nbsp;&nbsp;&nbsp;</span>삼순이
            </div>
            <br/><br/><br/><br/>
        </div>
        <hr className="cover-container"/>
        <br/>
        <p className="wow fadeInUp section2-title section2-main inner cover cover-container d-flex w-100 h-100 p-5 mx-auto flex-column">
            축하해 주시는<br/>
            모든 분들에게
        </p>
        <p className="wow fadeInUp section2-title section2-sub inner cover cover-container d-flex w-100 h-100 p-2 mx-auto flex-column">
            안녕하세요.<br/>
            <br/>

            결혼식을 진행하는 저희 마음과 같이<br/>
            초대받는 분들 마음도<br/>
            무거우실 거라 생각합니다.<br/>
            <br/>
            코로나19로 인해 결혼식 진행 여부에 대하여<br/>
            많은 고민을 했지만 종식을 예상할 수 없어<br/>
            식을 예정대로 진행하게 되었습니다.<br/>
            <br/>
            못 오시는 분들 소식에 서운해하지 않으니<br/>
            마음의 부담 갖지 않으시길 바랍니다.<br/>
            <br/>
            저희 두사람의 결혼 소식이<br/>
            불편한 마음으로 머물지 않고<br/>
            기분 좋은 소식이 되길 진심으로 바랍니다.<br/>
            <br/>
            신랑 삼돌이 신부 삼순이 올림
        </p>
        <br/><br/><br/><br/>
        <h1>갤러리 컴포넌트 자리</h1>



        <div className="wow fadeInUp inner cover-container d-flex w-100 h-100 mx-auto flex-column">
            <br/><br/>
            <p className="wow fadeInUp section6-title section6-main">Location</p>
            <div className="wow fadeInUp  section6-title">
                <p className="section6-location-main" >R5 웨딩홀</p>
                <p className="section6-location-sub text-center" >
                    서울특별시 강서구 양천로 476
                </p>
            </div>
            <br/>
         </div>
     


        <footer className="pt-5 text-muted text-center text-small section8">
            <p className="mb-1">© 2022 BLACKHOLE TEAM</p>
            <br/><br/>
            <br/><br/>
        </footer>
        
    </div>




    
  );
}

export default App;
