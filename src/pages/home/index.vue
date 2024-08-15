<template>
    <div class="flex">
        <el-button type="primary" @click="getUserInfo">
            获取用户信息
        </el-button>
    </div>
</template>

<script setup lang="ts">
// import { API_GET_USER_INFO } from '~/api/config/common';

async function getUserInfo() {
    const res = await request(API_GET_USER_INFO({ name: 'test' }));
    ElMessage.success(res.data.data.name);
}
</script>

<style scoped></style>
