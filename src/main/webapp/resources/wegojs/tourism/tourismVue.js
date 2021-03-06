"use strict"

var tourismVue = tourismVue || {}
tourismVue = {
		tourism_body : () => {
			return `<style>
			.modal{
			    display: grid;
			
			        grid-template-rows: 100px 630px;
			        width: 50%
			        height: 100%
			        border: 1px solid black; 
			        text-align: center;
			}

.tourList {

				background-repeat: no-repeat;

			  background-size: 100% 100%;
			    display:inline-table;
			     width: 50%;
			    height: 100%;
			    float: left;
			    border: 1px solid #bcbcbc; 
			}
			.tourInfo {


			  background-size: 100% 100%;
			    display:inline-table;
			     width: 50%;
			    height: 100%;
			    float: left;
			    border: 1px solid #bcbcbc; 
			}
.tourInfoTitle{
height:10%;
border: 1px solid #bcbcbc;
}	
.tourInfoImg{
background-repeat: no-repeat;
			  background-size: 100% 100%;
			    display:inline-table;
			    width:100%;
			    height:30%;
			    border: 1px solid #bcbcbc;
}
.tourInfoMain{
width:100%;
height:60%;
border: 1px solid #bcbcbc;
}
			
			
.starR.on{background-position:0 0;}
			.title{
			      width: inherit;
			    height: 100%; 
			    text-align: center;
			    float: left;
			  border: 1px solid #bcbcbc; 
			    }
			.head{

			    display:inline-flex;
			     width: 100%;
			    height: 10%;
			    border: 1px solid #bcbcbc; 
			}
			.main{
			    display:inline-flex;
			     width: 100%;
			    height: 90%;
			    border: 1px solid #bcbcbc; 
			}
			.content{
			     display:inline-table;
			     width: 100%;
			    height: 100%;

			    border: 1px solid #bcbcbc; 
			}
			.con{
			      width: inherit;
			    height: 100%; 
			    text-align: center;
			    float: left;
			  border: 1px solid #bcbcbc;   
			}
			
				.container{
		
					grid-template-columns: 0% 1fr;
				
					height: 100%
					border: 1px solid #bcbcbc; 
					grid-template-areas: 
					"header header"
					"side main"
					"footer footer"}
				.header{
					grid-area: header;
					margin: 0 auto;
					border: 1px solid #bcbcbc; 
				}
					.main{
					grid-area: main;
					display: grid;
				
					border: 1px solid #bcbcbc; 
				}
			
			.main1 {
				height: 600px;
			          font-weight: bold;
			          text-align: center;
			        background-color: rgba(255);
				border: 1px solid #bcbcbc;} ;
				.main2 {
				background-repeat: no-repeat;
				  background-attachment: fixed;
			  background-size: 100% 100%;	
			          font-weight: bold;
			          text-align: center;
			        background-color: #ffffff;
			        opacity: 0.9;
				border: 1px solid #bcbcbc; 
				}
			
				.main3 {
				background-repeat: no-repeat;
				  background-attachment: fixed;
			  background-size: 100% 100%;
			        font-weight: bold;
			          text-align: center;
			        background-color: #ffffff;
			        opacity: 0.9;
			        
				border: 1px solid #bcbcbc; 
				}

			.main_common2{
			    display:inline-table;
			    float: left;
			    width: 430px;
			    height: 300px;
			    border: 1px solid #bcbcbc; 
			}
			.main_common3{
			    width: 100%;
			    height: 100px;
			    border: 1px solid #bcbcbc;
			    margin-bottom: auto 0;
			}
			.calendar-container{
				 width: 100%;
			    height: 100%;
			}
			.content1{
				grid-area: main3;
				display: grid;
				grid-template-rows: 250px 250px
			    width: 50px;
			    height: 50px; 
			}
			.content2{
				border: 1px solid black; 
			    height: 250px; 
			}
			.inner {

				background-repeat: no-repeat;

			  background-size: 100% 100%;
			    display:inline-table;
			     width: 50%;
			    height: 100%;
			    float: left;
			    border: 1px solid #bcbcbc; 
			}
			.inner2 {

					background-repeat: no-repeat;

				  background-size: 100% 100%;
				    display:inline-table;
				     width: 50%;
				    height: 100%;
				    float: left;
				    border: 1px solid #bcbcbc; 
				}
			.content3{
				grid-area: main_2 main_common2;
				width: 100%;   
			    height: 100px;
			    border: 1px solid #bcbcbc; 
			}
			#star_grade a{
			        text-decoration: none;
			        color: gray;
			    }
			    #star_grade a.on{
			        color: red;
			    }
			#comments{  border: 1px solid #bcbcbc;}
			
.hotelnavi {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
			
			
			</style>
			 <!-- breadcrumb start-->
			    <section class="breadcrumb breadcrumb_bg">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-12">
			                    <div class="breadcrumb_iner">
			                        <div class="breadcrumb_iner_item text-center">
			                            <h2>TOURISM</h2>
		
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			<div><button id = "createtourism">생성</button></div>
			<div><button id = "dummy">dummy</button></div>
			<div><button id = "createlike">like생성</button></div>
			
			

			<body>
				<div class="container">
					<div class="header">
			   <div class="main">
			      <div class="main1" id="tourMap">
			      
			      </div>
			

			
			<div class="last_main" style="border: 1px solid #bcbcbc;">
			<div class="main5" id="main5" style="border: 1px solid #bcbcbc;">
			<ul class="hotelnavi">
								  <li><a id="tour" href="#home">관광지</a></li>
								  <li><a id="traffic" href="#contact">교통</a></li>
								  <li><a id="weather" href="#about">날씨</a></li>
								</ul>
			</div>

					<div class="main3" id="main3" style="height:1000px;">
					<div class="tourList" id="tourList">




					
	    									 </div>
					
					</div>
					<div class="tourInfo" style=" overflow:scroll;" >
					
		
 


					
					</div>
					
										
						 
										
										
										
										
				</div>
				
				
			</div>
					</div>
					</div>
				</div>
			</body>`
		}
}