<template>
  
  <div>
    <div class="container-fluid  aboutMain ">
      <div class="text-center">
        <img class="mt-1 mb-1" src="../assets/icon-logo.png" width="110px" style="width:90px !important">
      </div>
     
    </div>
    <NavBarS/>
  <div class="about">

   
    <div class="container ">
     
      <div class="row mainC pt-5">
        <div class="col-6 col-md-6 col-lg-6 mt-5 mydiv">
          <input type="textr" class="form-control mb-1" id="inputPassword2" placeholder="ชื่อผู้ใช้ หรือ เบอร์มือถือ">
          <input type="text" class="form-control mb-1" id="inputPassword2" placeholder="รหัสผ่าน">
          <div class="row">
            <div class="col-12">
             <a href="#"><img src="../assets/login-button.png" width="200px"></a>
            <a href="#"><img src="../assets/forget-pass-button.png" width="200px"></a>
             
            </div>
            
            <div class="col-12 mt-1">
             <a href=""><img src="../assets/register-button.png" width="400px"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="downButtons    ">
      <a href="#"><img class="mx-1  dImage" src="../assets/d1.png" width="200px"></a>
    <a href="#"><img class="mx-1 dImage" src="../assets/d2.png" width="200px"></a>
    <a href="#"><img class="mx-1 dImage" src="../assets/d3.png" width="200px"></a>
 
    </div>
  </div>

</div>
</template>

<script>
// @ is an alias to /src
import NavBarS from '@/components/NavBarS'

export default {
  name: 'RegistorView',
  components: {
   NavBarS
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
 background-size: 100%;
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
  margin-top:100px !important;
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


.dImage:hover{
  transform: translateY(4px);
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
