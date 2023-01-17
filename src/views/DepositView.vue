<template>
    <div class="depo">
        <div class="container mb-5 d-flex justify-content-evenly ">
            
            <img class="mt-2" src="../assets/icon-logo.png" style="width:120px !important" width="70px">
           
            
        </div>
    <div class="deposit mt-5">

       <NavBarS/>
       
        <div class="container-fluid depositContainer d-flex justify-content-center p-4  m-4 flex-column mt-5">
            <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ชื่อผู้ใช้ หรือ เบอร์มือถือ">
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="รหัสผ่าน">
          <a href=""><img class="mt-2" src="../assets/button-submit2.png" width="200px"></a>
        </div>
        
    </div>
</div>



</template>

<script>

import NavBarS from '@/components/NavBarS'

export default {
    name: 'DepositView',
    components: {
         NavBarS
    }
}
</script>
<style scoped>

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
    width: 470px;
    height: 50px;

}
.depositContainer button{
    width:200px;
    height: 50px;
    color:#fff;
    background: #2E3192;
     margin-top:5px;
     font-weight: 600;
}
.depositContainer button:hover{
    background-color: #fff;
    border: 3px solid;
    color: #2E3192;
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
    /*Big smartphones [426px -> 600px]*/
}
</style>
