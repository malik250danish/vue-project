<template>
    <div class="loby">
        <div class="container mb-1 d-flex justify-content-evenly align-items-center nav1 ">
            <img class="mt-2" src="../assets/userP.png">
            <img class="mt-2" src="../assets/icon-logo.png" width="70px">
            <p class="mt-2">ออกจากระบบ</p>

        </div>
        <div class="lobby">


            <nav class="navbar navbar-expand-lg buttons ">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
                        <ul class="navbar-nav">
                           
                            <li class="nav-item">
                                <img class="btnNav" src="../assets/btn.png">
                            </li>
                            <li class="nav-item">
                                <img class="btnNav" src="../assets/lobbybtn2.png">
                            </li>
                            <li class="nav-item">
                                <img class="btnNav" src="../assets/lobbtbtn3.png">
                            </li>
                            <li class="nav-item">
                                <img class="btnNav" src="../assets/lobbybtn4.png">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container d-flex justify-content-center  playerContainer  ">
               
                    <div class="img">
                        <img src="../assets/3round.png" width="250px">
                    </div>
                    <div class="img">
                        <img src="../assets/player1.png" width="250px">
                    </div>
                            
                    <div class="  " id="tArea">
                        <div class="textImage">
                            <img src="../assets/text-image-current.png " width="200px">
                        </div>
                        <div class="">
                            <div class=" mb-2">
                                <textarea class="form-control " id="textAreaExample1" rows="4" cols="35"></textarea>

                            </div>
                            <div class="d-flex">

                                <div class="">
                                    <!-- <button class=" buttonP">
                                        Player
                                    </button> -->
                                    <button class="btn"><img src="../assets/lobbybl.png" width="150px"></button>
                                </div>
                                <div class="">
                                    <!-- <button class=" buttonP  " id="viewBtn">
                                       player 
                                       <i class="fa fa-eye"></i>
                                    </button> -->
                                    <button class="btn"><img src="../assets/lobbybr.png" width="150px"></button>
                                </div>
                            </div>
                        </div>
                        <img src="../assets/icon-refresh-credit.png" width="35px" id="rImage">
                    </div>
               
            </div>
        </div>
    </div>



</template>

<script>



export default {
    name: 'lobbyView',
    components: {

    }
}
</script>
<style scoped>
.btnNav{
    margin-left:20px;
    cursor: pointer;
    width: 150px;
}
.loby {
    background: #000;
    color: #fff;
}

#viewBtn{
    display: flex;
    justify-content: space-between;
    margin-left: 2pxgit;
}
.lobby {
    background: linear-gradient( rgba(0,0,0,0.4),rgba(0,0,0,0.4),rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("../assets/background2.png");
    position: relative;
   background-size:cover ;
    background-repeat:no-repeat ;
    color: #fff;
    height: 100vh;
    
  
}

.buttonP {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color: #fff;
    border-radius: 17px;
    border: none;
    padding: 10px;
    width: 130px;
    /* margin-left: 3px; */
    text-align: center;
    margin-left:9px;

}
.buttonP:hover{
    background: #EE2623 !important;
  cursor: pointer;
 

}

.buttons {
    background: linear-gradient(to left, #EE2623, #F78E1E) !important;
    color: #fff
}

.rButton {
    background: linear-gradient(to bottom, #EE2623, #f7921e);
    border: none;
     width:126px;
    padding: 12px;
    border-radius: 10px;
    color: #fff;
    box-shadow:1px 1px 1px 1px #000;
}
.rButton:hover{
    background: #EE2623 !important;
  cursor: pointer;


}

#textAreaExample1 {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    border: none;
    border-radius: 20px;

}

#tArea {
    position: relative;
}

#rImage {
    position: absolute;
    top: 25px;
    right: 20px;
}

.dbButton {
    width: 150px;
    height: 60px;
    border-radius: 10px;
    border: none;
    background: linear-gradient(to right, #EE2623, #F78E1E);
    margin-left: 40px;
    color: #fff;
}

.playerContainer {
    margin-top: 150px;
    
}
.img{
    margin-left: 20px;
}
.img:hover{
    transform: translateY(4px);
}

.btnNav:hover{
    transform: translateY(4px);
}
.nav1{
    cursor: pointer;
}

@media only screen and (max-width: 600px) {

    /*Big smartphones [426px -> 600px]*/
    .mydiv input {
        width: 200px !important;
        height: 30px !important;
    }

    .dButton {
        width: 200px;
        height: 50px;
    }

    .mainC {
        justify-content: center;
    }

    .playerContainer {
   flex-direction: column-reverse;
    
}
.img{
    text-align: center;
}
.lobby {
   
    height:auto;
  
}
}
</style>
