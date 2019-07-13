<template>
  <div class="login">
    <div class="form-box"></div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #324152;
  .form-box {
    width: 580px;
    height: 436px;
    background: #fff;
    position: relative;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
  }
}
</style>
