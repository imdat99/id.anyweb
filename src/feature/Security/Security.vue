<script setup lang="ts">
import { IconClose, IconTick, IconTiktokLogo } from '@kousum/semi-icons-vue';
import { Button, Form, Modal, Pagination, Popconfirm, SplitButtonGroup, Switch } from '@lethdat/semi-ui-vue';
import SessionTable from './SessionTable';
import { h, ref } from 'vue';
import confirm from './confirm';
const visible = ref(false)

const showDialog = () => {
    visible.value = true
}

const handleOk = () => {
    visible.value = false
    console.log('Ok button clicked')
}

const handleCancel = () => {
    visible.value = false
    console.log('Cancel button clicked')
}

const handleAfterClose = () => {
    console.log('After Close callback executed')
}
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
            <h1 class="text-2xl font-bold ">Cài đặt bảo mật</h1>
            <p class="mt-1 text-sm text-gray-500">Quản lý cài đặt bảo mật và quyền riêng tư của tài khoản</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Bảng điều khiển bảo mật -->
            <div class="md:col-span-2 space-y-6">
                

                <!-- Xác thực hai yếu tố -->
                <div class="bg-white rounded-lg security-card dark:bg-[#181818]">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg leading-6 font-medium ">Xác thực hai yếu tố (2FA)</h3>
                                <p class="mt-1 text-sm text-gray-500">Thêm lớp bảo mật bổ sung cho tài khoản của bạn</p>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                                <Switch @change="(v, e) => console.log(v)" aria-label="a switch for demo"></Switch>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                                        <IconClose class="text-red-600" size="large" />
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium ">2FA chưa được kích hoạt</p>
                                    <p class="text-sm text-gray-500">Tài khoản của bạn có nguy cơ bị xâm phạm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Lịch sử đăng nhập -->
                <div class="bg-white rounded-lg security-card dark:bg-[#181818]">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg leading-6 font-medium ">Lịch sử đăng nhập</h3>
                                <p class="mt-1 text-sm text-gray-500">Xem hoạt động đăng nhập gần đây</p>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                                <SplitButtonGroup>
                                    <Popconfirm title="Bạn có chắc chắn muốn thực hiện hành động này không?"
                                        content="Hành động này không thể hoàn tác" :onConfirm="console.log"
                                        :onCancel="console.log" position="topRight">
                                        <s-button type="danger">
                                            Đăng xuất tất cả thiết bị
                                        </s-button>
                                    </Popconfirm>
                                    <s-button>
                                        <i class="fas fa-sync-alt mr-1"></i> Làm mới
                                    </s-button>
                                </SplitButtonGroup>
                            </div>
                        </div>

                        <!-- Tabs -->
                        <div class="mt-4 border-b border-gray-200 dark:border-[#242424] ">
                            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                <button class="tab-btn tab-active py-2 px-1 border-b-2 font-medium text-sm"
                                    data-tab="all">
                                    Tất cả
                                </button>
                                <button
                                    class="tab-btn py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    data-tab="successful">
                                    Thành công
                                </button>
                                <button
                                    class="tab-btn py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    data-tab="failed">
                                    Thất bại
                                </button>
                            </nav>
                        </div>
                        <div class="mt-4">
                            <div class="flow-root">
                                <ul class="mb-2" id="devicesList">
                                    <!-- Thiết bị 1 -->
                                    <li class="device-card p-3 rounded-lg border border-gray-200 dark:border-[#242424] mb-3">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0">
                                                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <IconTiktokLogo class="fas fa-laptop text-blue-600" size="large"/>
                                                    </div>
                                                </div>
                                                <div class="ml-4">
                                                    <p class="text-sm font-medium ">Windows PC</p>
                                                    <p class="text-sm text-gray-500">Hà Nội, Việt Nam • Đang hoạt động</p>
                                                    <p class="text-xs text-gray-400">Đăng nhập lần cuối: Hôm nay, 09:15</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                                                    Thiết bị hiện tại
                                                </span>
                                                <s-button type="danger" theme="borderless" size="small">
                                                    Đăng xuất
                                                </s-button>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <!-- Thiết bị 2 -->
                                    <li class="device-card p-3 rounded-lg border border-gray-200 dark:border-[#242424] mb-3">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0">
                                                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <i class="fas fa-mobile-alt text-blue-600"></i>
                                                    </div>
                                                </div>
                                                <div class="ml-4">
                                                    <p class="text-sm font-medium ">iPhone 13 Pro</p>
                                                    <p class="text-sm text-gray-500">Đà Nẵng, Việt Nam • Hoạt động 2 giờ trước</p>
                                                    <p class="text-xs text-gray-400">Đăng nhập lần cuối: Hôm qua, 18:30</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center">
                                                <s-button type="danger" theme="borderless" size="small">
                                                    Đăng xuất
                                                </s-button>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <!-- Thiết bị 3 -->
                                    <li class="device-card p-3 rounded-lg border border-gray-200 dark:border-[#242424] mb-3">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0">
                                                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <i class="fas fa-tablet-alt text-blue-600"></i>
                                                    </div>
                                                </div>
                                                <div class="ml-4">
                                                    <p class="text-sm font-medium ">iPad Pro</p>
                                                    <p class="text-sm text-gray-500">TP. Hồ Chí Minh, Việt Nam • Hoạt động 3 ngày trước</p>
                                                    <p class="text-xs text-gray-400">Đăng nhập lần cuối: 3 ngày trước, 14:20</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center">
                                                <s-button type="danger" theme="borderless" size="small">
                                                    Đăng xuất
                                                </s-button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-4 flex justify-between items-center">
                                <p class="text-sm text-gray-500">Tổng cộng: 3 thiết bị</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Liên hệ hỗ trợ -->
                    <div class="bg-white rounded-lg dark:bg-[#181818]">
                        <div class="px-4 py-5 sm:p-6">
                            <h3 class="text-lg leading-6 font-medium ">Cần hỗ trợ?</h3>
                            <div class="mt-4">
                                <p class="text-sm text-gray-500">Nếu bạn nghi ngờ tài khoản của mình bị xâm phạm hoặc có
                                    câu hỏi về bảo mật, hãy liên hệ với chúng tôi.</p>
                                <div class="mt-4 space-y-3">
                                    <a href="#"
                                        class="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
                                        <i class="fas fa-envelope mr-2"></i>
                                        security@securesso.vn
                                    </a>
                                    <a href="#"
                                        class="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
                                        <i class="fas fa-phone-alt mr-2"></i>
                                        1900 1234
                                    </a>
                                </div>
                                <s-button class="mt-4 w-full">
                                    Trợ giúp bảo mật
                                </s-button>
                            </div>
                        </div>
                    </div>
            </div>

            <!-- Bảng thông tin bảo mật -->
            <div>
                <div class="space-y-6 sticky top-0 ">
                 
                    <!-- Trạng thái bảo mật -->
                    <div class="bg-white rounded-lg dark:bg-[#181818]">
                        <div class="px-4 py-5 sm:p-6">
                            <h3 class="text-lg leading-6 font-medium ">Trạng thái bảo mật</h3>
                            <div class="mt-5">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <i class="fas fa-exclamation-triangle text-yellow-600"></i>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-sm font-medium text-yellow-800">Bảo mật trung bình</h4>
                                        <p class="mt-1 text-sm text-yellow-700">Tài khoản của bạn cần được bảo vệ tốt
                                            hơn</p>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 65%"></div>
                                    </div>
                                    <div class="mt-1 text-xs text-gray-500 flex justify-between">
                                        <span>Yếu</span>
                                        <span>Trung bình</span>
                                        <span>Mạnh</span>
                                    </div>
                                </div>
                                <div class="mt-4 space-y-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                        <span class="text-sm text-gray-600">Mật khẩu mạnh</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-times-circle text-red-500 mr-2"></i>
                                        <span class="text-sm text-gray-600">Chưa bật 2FA</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                        <span class="text-sm text-gray-600">Thông tin khôi phục đã cập nhật</span>
                                    </div>
                                </div>
                                <s-button theme="solid" class="mt-4 w-full">
                                    Nâng cấp bảo mật
                                </s-button>
                            </div>
                        </div>
                    </div>
                       <!-- Mật khẩu -->
                <div class="bg-white rounded-lg dark:bg-[#181818] security-card">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg leading-6 font-medium ">Mật khẩu</h3>
                                <p class="mt-1 text-sm text-gray-500">Thay đổi mật khẩu đăng nhập của bạn</p>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                                <s-button @click="showDialog" theme="solid">
                                    Thay đổi
                                </s-button>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <IconTick class="text-green-600" size="large" />
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium ">Mật khẩu mạnh</p>
                                    <p class="text-sm text-gray-500">Đã cập nhật 3 tháng trước</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <!-- Khuyến nghị bảo mật -->
                    <div class="bg-white dark:bg-[#181818] rounded-lg">
                        <div class="px-4 py-5 sm:p-6">
                            <h3 class="text-lg leading-6 font-medium ">Khuyến nghị bảo mật</h3>
                            <div class="mt-4 space-y-4">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <i class="fas fa-shield-alt text-blue-500 mt-1"></i>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium ">Bật xác thực hai yếu tố</p>
                                        <p class="text-sm text-gray-500">Tăng cường bảo vệ tài khoản của bạn</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <i class="fas fa-key text-blue-500 mt-1"></i>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium ">Thay đổi mật khẩu định kỳ</p>
                                        <p class="text-sm text-gray-500">Nên thay đổi mỗi 3 tháng một lần</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <i class="fas fa-mobile-alt text-blue-500 mt-1"></i>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium ">Quản lý thiết bị đã đăng nhập</p>
                                        <p class="text-sm text-gray-500">Xóa các thiết bị không sử dụng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>

    <Modal :title="confirm" centered :visible="visible" @ok="handleOk" :afterClose="handleAfterClose"
        @cancel="handleCancel" :closeOnEsc="true" :footerFill="true">
        <Form>
            <template #default="{ formState, formApi, values }">


                <Form.Input label="Mật khẩu hiện tại" placeholder="Nhập mật khẩu hiện tại" field="currentPassword"
                    size="large" :rules="[{ required: true, message: $t('app:error.requireFiled') }]" mode="password" />
                <Form.Input label="Mật khẩu mới" placeholder="Nhập mật khẩu mới" field="newPassword" size="large"
                    :rules="[{ required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, message: 'Ít nhất 8 ký tự, gồm chữ, số và ký tự đặc biệt' }]"
                    mode="password" />
                <Form.Input label="Xác nhận mật khẩu mới" placeholder="Xác nhận mật khẩu mới" field="rePassword"
                    size="large" :rules="[{
                        required: true, validator(rule, value, callback, source, options) {
                            if (value !== formState.values.newPassword) {
                                callback(new Error('Mật khẩu xác nhận không khớp'));
                            } else {
                                callback();
                            }
                        },
                    }]" mode="password" />
            </template>
        </Form>
    </Modal>

</template>