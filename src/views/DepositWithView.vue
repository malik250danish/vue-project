<template>
    <div class="depo">
        <div class="container mb-5 d-flex justify-content-evenly ">
            
            <img class="mt-2" src="../assets/icon-logo.png" width="70px">
           
            
        </div>
    <div class="deposit">

        
        <!-- <div class="buttons container-fluid  mb-5 d-flex justify-content-center">
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
        <div class="container-fluid depositContainer d-flex justify-content-center p-4  m-4 flex-column">
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ธนาคาร">
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="เลขที่บัญชี">
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ชื่อบัญชี">
            <button class="withdrawl">DepositWithdawl</button>
        </div>
        
    </div>
</div>



</template>

<script>



export default {
    name: 'DepositWithView',
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

.buttons{
    background: linear-gradient(to right, #EE2623, #F78E1E);
    color:#fff
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
