<script setup lang="ts">
import { Form, withField } from "@kousum/semi-ui-vue";
import Input from "src/components/ui/Input";
import WithFieldWrapper from "src/components/withField";
import { h, ref } from "vue";

// function onValueChange
// const handleValueChange = (values: any) => {
//   console.log(values);
// };
const jsxNode = h(withField(Input, { maintainCursor: true }), {
  field: "UserName",
  label: "用户名",
  style: { width: 80 },
});
</script>
<template>
  <Form layout="horizontal" @value-change="(v) => console.log(v)">
      <Form.Select field="Role" label="角色" :style="{ width: 176 }">
        <Form.SelectOption value="admin">管理员</Form.SelectOption>
        <Form.SelectOption value="user">普通用户</Form.SelectOption>
        <Form.SelectOption value="guest">访客</Form.SelectOption>
      </Form.Select>
      <WithFieldWrapper :is="'v-input'" :with-field-option="{ maintainCursor: true }" field="UserName" :placeholder="'123'" label="密码" :style="{ width: 176 }"  />
      <Form.Input field="Password" :placeholder="'123'" label="密码" :style="{ width: 176 }" />
  </Form>
</template>
