<template>



    <NavBarComp />
    <div class="mainScreen">

        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-md-6 col-lg-3 align-items-center d-flex flex-column tScreen">
                    <div class="screen mt-4 bounce-enter-active ">
                        <h3 class="text-center">Heading</h3>
                    </div>
                    <div class="screen mt-4 ml-2 bounce-enter-active">
                        <h3 class="text-center">Heading</h3>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6 mt-4 d-flex flex-column align-items-center ">
                    <div class="vs p-4">
                        <img src="../assets/VS.png" width="100%">
                        <!-- <h3 class="text-center text-white">VS</h3> -->
                    </div>
                    <div class=" screen2 bounce-enter-active">

                    </div>
                    <div class="row mt-4 justify-content-center">
                        <div class="col-6 col-md-6 col-lg-3 mb-2">
                            <button class="buttonB" id="redBtn"><img src="../assets/redb.png" width="100px"></button>
                        </div>
                        <div class="col-12 col-md-12 col-lg-6">
                            <div class="row">
                                <div class="gradientBtn">
                                    <button class="gBtn">Text</button>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12 col-md-6 col-lg-3 mb-2 d-flex justify-content-center">
                                    <button class="btnF">btn</button>
                                </div>
                                <div class="col-12 col-md-12 col-lg-6 ">
                                    <div class="form-outline">
                                        <textarea class="form-control" id="textAreaExample1" rows="3"></textarea>
                                        
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3 mt-2  d-flex justify-content-center">
                                    <button class="btnF">btn</button>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <button class="btnp">+10</button>
                                <button class="btnp" >+10</button>
                                <button class="btnp">+10</button>
                                <button class="btnp">+10</button>
                                <button class="btnp">+10</button>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 col-lg-3 mt-3 mb-2">
                            <button class="buttonB" id="blueBtn"><img src="../assets/blueb.png" width="100px"></button>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-lg-3 col-md-6 mt-4 s3">
                    <div class=" Screen3 bounce-enter-active ">
                        <h3>Heading</h3>
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
}

.screen {
    width: 250px;
    height: 300px;
    background: #000;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1;
    border-radius: 5px;

}

.screen2 {
    width: 100%;
    height: 300px;
    background: #000;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1;
    border-radius: 5px;
}

.Screen3 {
    width: 220px;
    height: 500px;
    background: #000;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1;
    border-radius: 5px;
}

.screen h3 {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    padding: 5px;
    color:#fff
}
.Screen3 h3 {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    padding: 5px;
    color:#fff
}

.buttonB {
    width: fit-content;
    border: none;
}

.vs {
    /* background-image: linear-gradient(to right, #C62D21 , #0436FA);
    border-radius: 5px; */
}

.gradientBtn {
    background-image: linear-gradient(to right, #C62D21, #0436FA);
    border-radius: 5px;
    text-align: center;
    margin-top: 10px;
    height: 40px;
    position: relative;

}


.gBtn {
    height: 60px;
    width: 80px;
    background: #000;
    color: #fff;
    position: absolute;
    top: -10px;
    right: 100px;
    border-width: 4px;
    border-style: solid;

    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1;

}
.btnp{
    margin-top: 5px;
   border: none;
   padding: 10px;
   border-radius: 10px;
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color: #fff;
    
}

.btnF {
    border-width: 2px;
    border-style: solid;
    padding: 20px;
    /* padding-bottom: 10px; */
    border-image: linear-gradient(to right, #EE2623, #F78E1E);
    border-image-slice: 1;
    background: #000;
    /* height: 40px; */
    color: #fff;
    
}
#redBtn{
    background: #E51C24;
    width: fit-content;
    border-radius: 10px;
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
    width: 220px;
    height: 250px;
    text-align: center;
}
}

@media only screen and (max-width: 768px){
    .gBtn{
        right:200px !important;
    }
}
@media only screen and (max-width: 400px) {
    .gBtn{
        right:130px !important;
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
        width: 250px;
        height: 300px;
    }
    /* .gBtn{
        right:300px
    } */
    .screen{
        margin-left:10px}
    }
 @media only screen and (min-width: 1000px ) and (max-width:1196px )  {
    .gbtn{
        right:81px;
    }
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
