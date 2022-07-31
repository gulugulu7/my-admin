<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rule="loginRules"
    size="large"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="loginForm.password"
        placeholder="密码：123456"
        show-password
        autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button
      :icon="CircleClose"
      round
      @click="resetForm(loginFormRef)"
      size="large"
      >重置</el-button
    >
    <el-button
      :icon="UserFilled"
      round
      @click="login(loginFormRef)"
      size="large"
      type="primary"
      :loading="loading"
    >
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { InjectProps } from "../interface/index";
import { CircleClose, UserFilled } from "@/element-plus/icons-vue";
import type { ElForm } from "element-plus";
import { ElMessage } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/store";
import { MenuStore } from "@/store/modules/menu";
import { TabsStore } from "@/store/modeles/tabs";
import md5 from "js-md5";

const globalStore = GlobalStore();
const menuStore = MenuStore();
const tabStore = TabsStore();

//定义 formRef (校验规则)
type FormInstance = InstanceType<typeof ElForm>;
</script>
