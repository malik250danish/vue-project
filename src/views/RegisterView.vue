<template>
  <div class="home ">

    <div class="container c">
      <div class="text-center">
        <img class="" src="../assets/icon-logo.png">
      </div>
      <div class=" d-flex m-auto flex-lg-row flex-md-column flex-sm-column text-white justify-content-center mt-5 align-items-center  ">
        <div class="p1 d-flex flex-column  justify-content-between">
          <div class="">
            <label for="exampleInputEmail1" class="form-label"> เบอร์โทรศัพท์</label>
            <div class="d-flex">
              <i class="fa fa-phone me-4" style="font-size:36px"></i>
              <input type="text" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder=" เบอร์โทรศัพท์">
            </div>

          </div>
          <div class="">
            <label for="exampleInputEmail1" class="form-label">ยืนยันรหัสผ่าน</label>
            <div class="d-flex">
              <i class="fas fa-key me-4" style="font-size:36px"></i>
              <input type="password" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="ยืนยันรหัสผ่าน">
            </div>

          </div>
         
          <div class="">
            <label for="exampleInputEmail1" class="form-label">รหัสผ่าน</label>
            <div class="d-flex">
              <i class="fas fa-key me-4" style="font-size:36px"></i>
              <input type="text" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="รหัสผ่าน">
            </div>
            <div class="">
            <label for="exampleInputEmail1" class="form-label"> รหัสแนะนำ</label>
            <div class="d-flex">
              <i class="fa fa-user-friends me-4" style="font-size:36px"></i>
              <input type="text" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="รหัสแนะนำ">
            </div>

          </div>

           
          </div>
        </div>
        <div class="p2 d-flex flex-column">
          <div class="">
              <label for="exampleInputEmail1" class="form-label">เลขที่บัญชีธนาคาร</label>
              <div class="d-flex">
                <i class="fas fa-credit-card me-4" style="font-size:36px"></i>
                <input type="email" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="เลขที่บัญชีธนาคาร">
              </div>
            </div>
          <div class="">
            <label for="exampleInputEmail1" class="form-label"> บัญชีธนาคาร</label>
            <div class="d-flex">
              <i class="fas fa-credit-card me-4" style="font-size:36px"></i>
              <input type="text" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder=" บัญชีธนาคาร">
            </div>

          </div>
          
          <div class="">
            <label for="exampleInputEmail1" class="form-label"> ชื่อบัญชี</label>
            <div class="d-flex">
              <i class="fa fa-user me-4" style="font-size:36px"></i>
              <input type="text" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder=" ชื่อบัญชี">
            </div>

          </div>
         
          <div class="">
            <label for="exampleInputEmail1" class="form-label">กรุณากรอกข้อมูล</label>
            <div class="d-flex">
             <span>    </span>
              <input type="text" class="form-control f-input " id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="กรุณากรอกข้อมูล">
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <button class="submitBtn">Submit</button>
        <div class="rfire"></div>
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
.home {
  background-image: url("../assets/Background.png");
  /* background-size:cover ; */
  /* height: 100vh; */
  background-size: auto;
}

.submitBtn {
  background: linear-gradient(to right, #EE2623, #F78E1E);
  border: none;
  border-radius: 20px;
  color: White;
  padding: 10px;
  width: 370px
}

.submitBtn:hover {
  background: #EE2623 !important;
  cursor: pointer;

  transition: 1s;

}



.f-input {
  width: 300px;
  height: 50px
}

.p1 {
  margin-right: 80px;
}

 @media only screen and (max-width: 1200px) {
  .p1 {
    margin-right: 0px;
  }

  /*Tablets [601px -> 1200px]*/
}

@media only screen and (max-width: 600px) {
  /*Big smartphones [426px -> 600px]*/
  .p1 {
    margin-right: 0px;
  }
}

@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/
  .p1 {
    margin-right: 0px;
  }
}
</style>
