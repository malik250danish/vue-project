<template>
    <div class="depo">
        <div class="container mb-5 d-flex justify-content-evenly ">
            
            <img class="mt-2" src="../assets/icon-logo.png" width="70px" style="width:120px !important">
           
            
        </div>
    <div class="deposit">

        <NavBarS/>
       
       
        <div class="container-fluid depositContainer d-flex justify-content-center p-4  m-4 flex-column">
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ธนาคาร">
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="เลขที่บัญชี">
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ชื่อบัญชี">
            <button class="withdrawl">ปุ่มยืนยัน</button>
        </div>
        
    </div>
</div>



</template>

<script>

import NavBarS from '@/components/NavBarS.vue';

export default {
    name: 'DepositWithView',
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
   background-repeat: no-repeat;
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
    width: 400px;
    height: 50px;
    border-radius: 5px;

}
.withdrawl {
    width:370px;
    height: 50px;
    color:#fff;
    background: linear-gradient(to right, #EE2623, #F78E1E);
     margin-top:5px;
     margin-top: 8px;
}


.withdrawl:hover{
    transform:translateY(4px)
}

@media only screen and (max-width: 600px) {
    .depositContainer input{
   
    width: 250px;
    height: 30px;

}
.rButton {
  

    padding:5px;
    margin-right:1px !important ;
}
.withdrawl{
    width:220px
}
    /*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px){
    .deposit {
   
    background-size: cover;
   height: 100vh;
    color: #fff;

}
	/*Small smartphones [325px -> 425px]*/
}
</style>
