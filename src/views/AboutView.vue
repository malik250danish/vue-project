<template>
  <div>
    <div class="container-fluid  aboutMain ">
      <div class="text-center">
        <img class="" src="../assets/icon-logo.png" width="70px">
      </div>
      <!-- <div class="buttons container-fluid mt-1  d-flex justify-content-center">
        <button class="rButton m-2">Random</button>
        <button class="rButton m-2">Random</button>
        <button class="rButton m-2">Random</button>
        <button class="rButton m-2">Random</button>
        <button class="rButton m-2">Random</button>
      </div> -->
      <nav class="navbar navbar-expand-lg buttons ">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
    </div>
  <div class="about">

    
    <div class="container ">
     
      <div class="row mainC mt-5">
        <div class="col-6 col-md-6 col-lg-6 mt-5 mydiv">
          <input type="textr" class="form-control mb-1" id="inputPassword2" placeholder="ชื่อผู้ใช้ หรือ เบอร์มือถือ">
          <input type="text" class="form-control mb-1" id="inputPassword2" placeholder="รหัสผ่าน">
          <div class="row">
            <div class="col-12">
              <button class="rtbutton mt-1">button</button>
              <button class="ltbutton mt-1">button</button>
             
            </div>
            
            <div class="col-12 ">
              <button class="dButton mt-1">Down Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="downButtons mt-5   my-5">
      <button class="dbButton">Db button</button>
      <button class="dbButton">Db button</button>
      <button class="dbButton">Db button</button>
 
    </div>
  </div>

</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'RegistorView',
  components: {

  }
}
</script>
<style scoped>
.aboutMain{
  background: #000;
}
.about {
  background-image: url("../assets/bg.png");
  color: #fff;
 /* background-size: cover; */
 background-size: 200vh;
 /* height: cover; */
  /* height:200vh ;  */
 /* width: 100vh; */
 background-repeat: no-repeat;

}

.buttons {
    background: linear-gradient(to left, #EE2623, #F78E1E);
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
  
  transition: 1s;


}



.rtbutton {
  width: 200px;
  height: 50px;
  background-color: #2E3192;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
}
.rtbutton:hover{
  border: 4px solid #2E3192;
  background: #fff;
  color: #2E3192;
  cursor: pointer;
}

.ltbutton {
  width: 200px;
  height: 50px;
  background-color: #006837;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
}
.ltbutton:hover{
  border: 4px solid #006837;
  background: #fff;
  color:#006837;
  cursor: pointer;
}

.mydiv input {
  width: 400px !important;
  height: 50px !important;
}

.dButton {
  width: 400px;
  height: 50px;
  background:  #EE2623;
  border-radius: 5px;
  color: #fff;


}
.dbButton:hover{
  background: #EE2623 !important;
  cursor: pointer;
 
  transition: 1s;
}
.dButton:hover{
  background: #EE2623 !important;
  cursor: pointer;
 
  transition: 1s;
}

.downButtons {
  
  margin-top: 100px;
  color: #fff;
 margin-left: 20rem;
  margin-top:150px !important;
}

.dbButton {
  width: 150px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(to right, #EE2623, #F78E1E);
  margin-left: 40px;
  color: #fff;
  box-shadow: 1px 1px 1px 1px #000;
}











  @media only screen and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/.about{
    height: auto;
  
}
}
@media only screen and (max-width: 600px) {

  /*Big smartphones [426px -> 600px]*/
  .about{
    height: auto;
    background-repeat: no-repeat;
    background-size: auto;
  
  }
  .mydiv input {
    width: 300px !important;
    height: 50px !important;
  }

  .dButton {
    width: 190px !important;
    height: 60px;
   
  }

  .mainC {
    justify-content: center;
    margin-top: 50px !important;
  }

 
  .ltbutton {
  width: 190px !important;
  height: 30px;}
  .rtbutton {
  width: 190px !important;
  height: 30px;}
  .downButtons {
  
  margin-top: 100px;
  color: #fff;
 margin-left: 0;
  margin-top:100px !important;
  width:100px
}


}
@media only screen and (max-width: 425px){
  .mydiv input {
    width: 200px !important;
    height: 40px !important;
  }

	/*Small smartphones [325px -> 425px]*/
}

</style>
