<template>
    <div class="loby">
        <div class="container mb-5 d-flex justify-content-evenly align-items-center ">
            <img class="mt-2" src="../assets/userP.png">
            <img class="mt-2" src="../assets/icon-logo.png" width="70px">
            <p>ออกจากระบบ</p>

        </div>
        <div class="lobby">


            <!-- <div class="buttons container-fluid  mb-5 d-flex justify-content-center">
            <button class="rButton m-2">Random</button>
            <button class="rButton m-2">Random</button>
            <button class="rButton m-2">Random</button>
            <button class="rButton m-2">Random</button>
            <button class="rButton m-2">Random</button>
        </div> -->
            <nav class="navbar navbar-expand-lg buttons ">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <button class="rButton m-2">Random</button>
                            </li>
                            <li class="nav-item">
                                <button class="rButton m-2">Random</button>
                            </li>
                            <li class="nav-item">
                                <button class="rButton m-2">Random</button>
                            </li>
                            <li class="nav-item">
                                <button class="rButton m-2">Random</button>
                            </li>
                            <li class="nav-item">
                                <button class="rButton m-2">Random</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container d-flex justify-content-center  playerContainer ">
               
                    <div class="img">
                        <img src="../assets/player1.png" width="200px">
                    </div>
                    <div class="img">
                        <img src="../assets/player1.png" width="200px">
                    </div>
                    <div class="  " id="tArea">
                        <div class="">
                            <div class=" mb-2">
                                <textarea class="form-control " id="textAreaExample1" rows="4" cols="35"></textarea>

                            </div>
                            <div class="d-flex">

                                <div class="">
                                    <button class=" buttonP">
                                        Player
                                    </button>
                                </div>
                                <div class="">
                                    <button class=" buttonP  ">
                                       player 
                                       <i class="fa fa-eye"></i>
                                    </button>
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
.loby {
    background: #000;
    color: #fff;
}

.lobby {
    background-image: url("../assets/background2.png");
    position: relative;
    background-size: cover;
    color: #fff;
    height: 77vh;
  
}

.buttonP {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color: #fff;
    border-radius: 50px;
    border: none;
    padding: 10px;
    width: 130px;
    /* margin-left: 3px; */
    text-align: center;

}
.buttonP:hover{
    background: #EE2623 !important;
  cursor: pointer;
 

}

.buttons {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color: #fff
}

.rButton {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    border: none;

    padding: 12px;
    border-radius: 10px;
    color: #fff;
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
    top: -16px;
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
    margin-top: 50px;
    
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
