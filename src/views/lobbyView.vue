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
            <div class="container  playerContainer ">
                <div class="row justify-content-center align-items-center">
                    <div class="col-6 col-md-3">
                        <img src="../assets/player1.png" width="200px">
                    </div>
                    <div class="col-12 col-md-3 d-flex justify-content-center">
                        <img src="../assets/player1.png" width="200px">
                    </div>
                    <div class="col-12 col-md-6  " id="tArea">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <textarea class="form-control " id="textAreaExample1" rows="4"></textarea>

                            </div>
                            <div class="row ">

                                <div class="col-6">
                                    <button class=" buttonP">
                                        Player
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class=" buttonP d-flex justify-content-evenly">
                                       view Password 
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

}

.buttonP {
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color: #fff;
    border-radius: 50px;
    border: none;
    padding: 20px;
    /* margin-left: 3px; */
    text-align: center;
    width: 70%;
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
    top: 0px;
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
    margin-top: 200px;
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

    .rButton {}
}
</style>
