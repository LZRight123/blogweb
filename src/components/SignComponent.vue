<template>
  <div class="sign wrap-box">
    <h3 class="title">{{ title }}</h3>
    <form class="sing-form">
      <div class="sing-form-group">
        <label for="username"></label>
        <input
          type="text"
          id="username"
          placeholder="账号"
          v-model="username"
        />
      </div>

      <div class="sing-form-group">
        <label for="password"></label>
        <input
          type="text"
          id="password"
          placeholder="密码"
          v-model="password"
        />
      </div>

      <div class="sing-form-group" v-if="type === 2">
        <label for="repassword"></label>
        <input
          type="text"
          id="repassword"
          placeholder="确认密码"
          v-model="repassword"
        />
      </div>

      <div class="sing-btn" type="confirm" @click.prevent="clickConfirm">
        Sign in
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "sign",
  props: {
    title: {
      type: String,
      default: "Weclome"
    },
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      username: "liangze",
      password: "123456",
      repassword: "123456"
    };
  },
  methods: {
    clickConfirm() {
      console.log(this.type);
      console.log(this.username);
      console.log(this.password);
      // console.log(this.default);
      this.$emit(
        "didClickConfirm",
        this.username,
        this.password,
        this.repassword
      );
    }
  }
};
</script>

<style lang="scss" scoped>
$input-height: 50px;
$input-width: 390px;
$outline-color: aqua;

@mixin ipbox($value: 15px) {
  border: 1px solid $line-color;
  border-radius: 4px;
  height: $input-height;
  width: $input-width;
  padding: 0 $value;
}

.sign {
  display: flex;
  flex-flow: column;
  align-items: center;
  .title {
    padding-top: 20px;

    font-size: $large-title;
    // text-align: center;
  }

  .sing-form {
    .sing-form-group {
      position: relative;
      margin: 22px 0;
      label {
        position: absolute;
        font-size: 15px;
        color: $fade-text-color;
        left: 15px;
        top: 0;
        height: $input-height;
        line-height: $input-height;
      }
      input {
        outline-color: $outline-color;

        @include ipbox;
      }
    }

    .sing-btn {
      @include ipbox;

      height: $input-height;
      line-height: $input-height;
      text-align: center;
      background-color: $main-color;
      border-color: transparent;

      color: white;
      height: $input-height;
      font-size: $title1;
      font-weight: bold;
    }
  }
}</style
>>
