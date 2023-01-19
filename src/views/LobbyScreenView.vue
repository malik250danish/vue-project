<template>



    <NavBarComp />
    <div class="mainScreen">

        <div class="container">
            <div class="row  justify-content-center pb-4">
                <div class="col-12 col-md-6 col-lg-2 align-items-center d-flex flex-column tScreen">
                    <div class="screen mt-4 bounce-enter-active ">
                        <h5 class="text-center">การเดิมพันของคุณ</h5>
                    </div>
                    <div class="screen mt-4 ml-2 bounce-enter-active">
                        <h5 class="text-center"> คู่มวยอื่น </h5>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-8 d-flex flex-column justify-content-center align-items-center   ">
                    <div class="vs mx-auto mt-1 mb-1 ">
                        <img src="../assets/VS.png" width="70%" >
                        <!-- <h3 class="text-center text-white">VS</h3> -->
                    </div>
                    <div class=" screen2 bounce-enter-active mt-1">
           
                    </div>
                  <div class="col-12">
                    <div class="row mt-2 justify-content-center punchRow">
                        <div class="col-6 col-md-6 col-lg-2 mb-2">
                            <button class="btn" id="redBtn"><img src="../assets/redb.png" width="120px" style="border-radius:10px" ></button>
                        </div>
                        <div class="col-12 col-md-12 col-lg-8">
                            <div class="row d-flex justify-content-center">
                                <div class="gradientBtn">
                                    <button class="gBtn">อัตราจ่าย</button>
                                </div>
                            </div>
                            <div class="col-12 mt-3 d-flex justify-content-center">
                                <div class="row justify-content-center">
                                <div class="col-12 col-md-6 col-lg-2 mb-2 d-flex justify-content-center">
                                    <button class="btn"><img style="margin-top:-14px !important" src="../assets/lsb1.png" width="90px"></button>
                                </div>
                                <div class="col-12 col-md-12 col-lg-6 ">
                                    <div class="form-outline">
                                        <textarea class="form-control" id="textAreaExample1" rows="3" cols=""></textarea>
                                        
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-2  d-flex justify-content-center">
                                    <button class="btn" style=""><img src="../assets/lbs2.png" width="90px" style="margin-top:-14px !important" ></button>
                                </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <button class="btnp">+ 10</button>
                                <button class="btnp" >+ 50</button>
                                <button class="btnp">+ 100</button>
                                <button class="btnp">+ 500</button>
                                <button class="btnp">+ 1000</button>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 col-lg-2 mt-3 mb-2" style="position:relative">
                            <button class="buttonB" id="blueBtn"><img src="../assets/blueb.png" width="120px" style=" position:absolute; right:40px; top:-3px; border-radius:10px"></button>
                        </div>
                    </div>
                  </div>

                </div>
                <div class="col-12 col-lg-2 col-md-6 s3 mt-1">
                    <div class=" Screen3 mt-3 bounce-enter-active text-center">
                        <h5>การเดิมพันทั้งหมด</h5>
                    </div>
                </div>
            </div>
        </div>
       
    </div>



</template>

<script>

import NavBarComp from "../components/NavBarComp"

export default {
    name: 'LobbyScreenView',
    components: {
        NavBarComp
    }
}
</script>
<style scoped>
.mainScreen {
    background-image: url('../assets/Background.png');
    background-size: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
}

.screen {
    width: 250px;
    height: 270px;
    background: #000;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);

     border-image: linear-gradient(to right, #EE2623, #F78E1E);
     border-image-slice: 1 !important;
    border-radius: 5px; 

    border-image-slice: 1 !important;
    border-radius: 5px;


}

.screen2 {
    width: 70%;
    height: 300px;
    background: #000;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1 !important;
    border-radius: 20px !important;
}

.Screen3 {
    width: 230px;
    height: 80%;
    background: #000;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1 !important;

}

.screen h5 {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    padding: 5px;
    color:#fff
}
.Screen3 h5 {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    padding: 5px;
    color:#fff;

}

.buttonB {
    width: fit-content;
    border: none;
}

.vs img {
   margin-left:110px
}

.gradientBtn {
    background-image: linear-gradient(to right, #C62D21, #0436FA);
    border-radius: 5px;
    text-align: center;
    margin-top: 10px;
    height: 40px;
    position: relative;
    width: 80%;
   
    align-items: center;

}


.gBtn {
    height: 60px;
    width: 80px;
    background: #000;
    color: #fff;
    position: absolute;
    top: -10px;
    right: 160px;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1 !important;

}
.btnp{
    margin-top: 5px;
   border: none;
   padding: 10px;
   border-radius: 10px;
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color:#000;
    width: 100px;
    margin-left: 3px;
    font-weight: 700 !important;
    
}


.btnF {
    border-width: 2px;
    border-style: solid;
    padding: 20px;
    /* padding-bottom: 10px; */
    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1 !important;
    background: #000;
    /* height: 40px; */
    color: #fff;
    
}
#redBtn{
    /* background: #E51C24; */
    width: fit-content;
    border-radius: 10px;
    margin-left: 20px;
}
#blueBtn{
    background: #1C1A69;
    width: fit-content;
    border-radius:10px ;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (max-width: 600px) {
    .btnF{
        width: 100%;
    }
    .gBtn {
    /* height: 50px; */
    width: 100px;
   
    top: -10px;
    /* right: 5000px; */
   

}
.screen2 {
    width: 70%;
    height: 200px;
    text-align: center;
    
}
.Screen3 {
    width: auto;
    height: 250px;
    text-align: center;
}
}

@media only screen and (max-width: 768px){
    /* .gBtn{
        right:200px !important;
    } */
}
@media only screen and (max-width: 400px) {
    .gBtn{
        right:130px !important;
    }
    .vs img{
        margin-left: 52px !important;
    }
}

@media only screen and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
    .tScreen{
        flex-direction: row !important;
        justify-content: center;
    }
    .s3{
        display: flex;
        justify-content: center;
    }
    .Screen3{
        
        height: 100%;
    }
    .gBtn{
        right:200px
    }
    .screen{
        margin-left:10px}
        .punchRow{
            display: flex;
            align-items: end;
        }

    }
    @media only screen and (min-width: 1400px){
        .gBtn{
        right:196px
    }

    }

 @media only screen and (min-width: 1000px ) and (max-width:1196px )  {
    /* .gbtn{
        right:81px;
    } */
    #redBtn{
        width: 75px;

    }
    #blueBtn{
        width: 75px;
    }
    .screen2{
        width: 250px;
    }
}
</style>
