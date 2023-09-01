# 表单 - Form

## 基础用法
传入 model 属性设置数据模型

:::demo 传入 model 属性设置数据模型
```vue
<template>
  <YForm :model="model" layout="vertical" labelSize="lg" labelAlign="start">
    <YFormItem label="用户名：" field="user">
      <YInput v-model="model.user"/>
    </YFormItem>
  </YForm>
  {{model}}
</template>
<script>
  export default {
    data() {
      return {
        model: {
          user: 'tom'
        },
        rules: {
          user: [{
            require: true,
            message: 'Username is required'
          },
          ]
        }
      }
    }
  }
</script>
```
:::

## 表单样式
水平排列模式下，label-size可以设置label的宽度；label-align可以设置label的对齐方式。
label-size提供sm、md、lg三种大小，分别对应80px、100px、150px，默认为md；label-align可选值为start、center、end，默认为start。

:::demo
```vue
<template>
  <p>
    <span style="font-size:14px">labelSize:</span>
    <label>
      <input type="radio" value="sm" v-model="labelSize"/>
      sm
    </label>
    <label>
      <input type="radio" value="md" v-model="labelSize"/>
      md
    </label>
    <label>
      <input type="radio" value="lg" v-model="labelSize"/>
      lg
    </label>
  </p>
  <p>
    <span style="font-size:14px">labelAlign:</span>
    <label>
      <input type="radio" value="start" v-model="labelAlign"/>
      start
    </label>
    <label>
      <input type="radio" value="center" v-model="labelAlign"/>
      center
    </label>
    <label>
      <input type="radio" value="end" v-model="labelAlign"/>
      end
    </label>
  </p>
  <YForm :model="model" layout="horizontal" :labelAlign="labelAlign" :labelSize="labelSize">
    <YFormItem label="用户名：">
      <input/>
    </YFormItem>
    <YFormItem label="密码：">
      <input type="password"/>
    </YFormItem>
  </YForm>
  {{model}}
</template>
<script>
export default {
  data() {
    return {
      model: {
        user: 'tom',
        password: '',
      },
      labelSize: 'md',
      labelAlign: 'start',
    }
  }
}
</script>
```
:::

## 表单校验
:::demo
```vue
<template>
  <YForm
    :model="model"
    :rules="rules"
    layout="horizontal"
    @submit="onLogin"
    ref="loginForm"
  >
    <YFormItem label="用户名：" field="user">
      <YInput v-model="model.user"/>
    </YFormItem>
    <YFormItem label="密码：" field="pwd">
      <YInput type="password" v-model="model.pwd"/>
    </YFormItem>
    <YFormItem>
      <YButton>登录</YButton>
    </YFormItem>
  </YForm>
</template>
<script>
export default {
  data() {
    return {
      model: {
        user: '',
        pwd: ''
      },
      rules: {
        user: [{required: true, message: '用户名为必填项'}],
        pwd: [{required: true, message: '密码为必填项'}],
      }
    }
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert('校验成功')
        } else {
          alert('校验失败，请重试！')
        }
      })
    }
  }
}
</script>
```
:::