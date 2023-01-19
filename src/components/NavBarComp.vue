<template>
   

    <div>
        <nav class="navbar navbar-expand-lg navbar-dark navComp">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          <a class="navbar-brand" href="#"> <img class="mt-2" src="../assets/icon-logo.png" width="100px"></a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active" aria-current="page" href="#"> <img src="../assets/menu-activity.png" width="100px"></a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#"><img src="../assets/menu-rewards.png" width="100px"></a>
        </li>
        <li class="nav-item mx-2 ">
          <a class="nav-link " href="#" >
            <img src="../assets/menu-rule.png" width="100px">
          </a>
         
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true"> <img src="../assets/meneall.png" width="100px"></a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true"> <img src="../assets/menuhistory.png" width="100px"></a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">  <div class="d-flex flex-column">
                <img src="../assets/box-profile-name.png" width="100px">
                <img src="../assets/Group.png" width="100px">
            </div></a>
        </li>
        <li class="nav-item mx-2">
           <div class="d-flex flex-column">
               <a href="#"> <img src="../assets/change-language.png" width="60px"></a>
                <a href="#" class="m-auto"><img class="ml-1 m-auto" src="../assets/sound.png" width="44x"></a>
            </div>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<div class="container-fluid compInput">
    <div class="container inpContainer d-flex justify-content-center " >
        <input type="text"  class="form-control inp">
    </div>
</div>

    </div>



</template>

<script>



export default {
    name: 'NavBarComp',
    components: {

    }
}
</script>
<style scoped>
#navbarSupportedContent li{
    width: fit-content;
}
.navComp{
  background: #030303;
}

.compInput{
  background: #030303;
}
.inp{
 width: 92%;
 outline: red !important;
 border:1px solid red !important;
}
.nav-item:hover{
  transform:translateY(4px)
}
</style>
