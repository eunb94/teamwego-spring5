var introVue = introVue || {}
introVue={
	intro_body:x=>{
		  
		return `<div id="mArticle" class="introduce_vision">
                <h2 id="kakaoBody" class="screen_out">Wego 본문</h2>
                <h3 class="screen_out">비전</h3>
                <strong class="tit_intro">“WeGo To The Seoul” 서울여행은 WEGO와 함께</strong>
                <div class="wrap_slide kakao_slide">
                    <div class="list_slide">
                        <div class="thumb_slide">
                            <img src="${x.img}/seoul.png" class="img_thumb" alt="">
                        </div>
                    </div>
                </div>
                <div class="wrap_cont">
                    <div class="area_tit">
                        <h4 class="tit_corp">비전</h4>
                    </div>
                    <div class="area_cont">
                        <p class="desc_info">
                            WeGo는  편리하고 즐거운 서울여행을 꿈꿉니다. <br>
                    </div>
                </div>
            </div>`
			}
}