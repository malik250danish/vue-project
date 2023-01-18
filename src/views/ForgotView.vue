<template>
    <div class="depo">
        <div class="container mb-5 d-flex justify-content-evenly ">
            
            <img class="mt-2" src="../assets/icon-logo.png" width="70px">
           
            
        </div>
    <div class="deposit">

        
       
        <div class="container-fluid depositContainer d-flex justify-content-center p-4  mt-1 flex-column">
            <div class="forcontainer">
            <label><img src="../assets/fimg.png" width="320px"></label>
            <div class="d-flex">

            <i class="fa fa-phone me-4"  style="font-size:36px"></i>
          <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" เบอร์โทรศัพท์">
        </div>
            <button class="withdrawl">ปุ่มยืนยัน</button>
        </div>
        </div>
        
    </div>
</div>



</template>

<script>



export default {
    name: 'ForgotView',
    components: {

    }
}
</script>
<style scoped>
.rButton {
      background: linear-gradient(to right, #EE2623, #F78E1E);
    border: none;

    padding:12px;
    border-radius: 10px;
    color: #fff;
}
.rButton:hover{
    background:#EE2623;
    transition: 1s;
}
.depo{
    background: #000;
}
.deposit {
    background-image: url("../assets/Background.png");
   
    background-size: cover;
    height: 100vh;
  
    color: #fff;

}
.depositContainer{
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
   
}
.depositContainer input{
    margin-top:10px;
    width: 300px;
    height: 45px;

}
.withdrawl {
    width:350px;
    height: 50px;
    color:#fff;
    background: linear-gradient(to right, #EE2623, #F78E1E);
     margin-top:5px;
     margin-top: 8px;
}
.withdrawl:hover{
    background:#EE2623;
   
}

.buttons{
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color:#fff
}
/* .buttons:hover{
    background:#EE2623;
    transition: 1s;
} */

.forcontainer{
    margin-top:200px !important;
}


@media only screen and (max-width: 600px) {
    .depositContainer input{
   
    width: 307px;
    height: 36px;

}
.rButton {
  

    padding:5px;
    margin-right:1px !important ;
}
.withdrawl{
    width:220px
}
}
    /*Big smartphones [426px -> 600px]*/
    @media only screen and (max-width: 425px){
        .depositContainer input{
    margin-top:10px;
    width: 230px;
    height: 40px;

}
.withdrawl {
   width: 180px;
   height: 35px;
}
   
}
</style>
