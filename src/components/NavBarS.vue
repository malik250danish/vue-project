<template>
   

    <div>
        <nav class="navbar navbar-expand-lg buttons ">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#"><img class="btnNav" src="../assets/menu-register.png"></a>
                            </li>
                           
                            <li class="nav-item">
                                <a href="#"><img class="btnNav" src="../assets/btn.png"></a>
                            </li>
                            <li class="nav-item">
                                <a href="#"><img class="btnNav" src="../assets/lobbybtn2.png"></a>
                            </li>
                            <li class="nav-item">
                                <a href="#"><img class="btnNav" src="../assets/lobbtbtn3.png"></a>
                            </li>
                            <li class="nav-item">
                                <a href="#"><img class="btnNav" src="../assets/lobbybtn4.png"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </div>



</template>

<script>



export default {
    name: 'NavBarS',
    components: {

    }
}
</script>
<style scoped>
.btnNav{
    margin-left:20px
}
.buttons {
    background: linear-gradient(to left, #EE2623, #F78E1E) !important;
    color: #fff
}

</style>
