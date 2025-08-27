<script setup lang="ts">
import { IconClose, IconTick } from '@kousum/semi-icons-vue';
import { Pagination, SplitButtonGroup, Switch } from '@kousum/semi-ui-vue';

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
                <!-- Mật khẩu -->
                <div class="bg-white rounded-lg dark:bg-[#181818] security-card">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg leading-6 font-medium ">Mật khẩu</h3>
                                <p class="mt-1 text-sm text-gray-500">Thay đổi mật khẩu đăng nhập của bạn</p>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                                <s-button>
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

                <!-- Quản lý thiết bị -->
                <div class="bg-white rounded-lg security-card dark:bg-[#181818]">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg leading-6 font-medium ">Quản lý thiết bị</h3>
                                <p class="mt-1 text-sm text-gray-500">Xem và quản lý các thiết bị đã đăng nhập</p>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                                <SplitButtonGroup>
                                    <s-button type="danger"> 
                                        Đăng xuất tất cả thiết bị
                                    </s-button>
                                    <s-button>
                                    <i class="fas fa-sync-alt mr-1"></i> Làm mới
                                </s-button>
                                </SplitButtonGroup> 
                            </div>
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
                                                        <i class="fas fa-laptop text-blue-600"></i>
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

                <!-- Lịch sử đăng nhập -->
                <div class="bg-white rounded-lg security-card dark:bg-[#181818]">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg leading-6 font-medium ">Lịch sử đăng nhập</h3>
                                <p class="mt-1 text-sm text-gray-500">Xem hoạt động đăng nhập gần đây</p>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                                <div class="flex space-x-2">
                                    <button class="text-sm text-gray-500 hover:text-gray-700 font-medium">
                                        <i class="fas fa-filter mr-1"></i> Lọc
                                    </button>
                                    <button class="text-sm text-gray-500 hover:text-gray-700 font-medium">
                                        <i class="fas fa-download mr-1"></i> Tải xuống
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Tabs -->
                        <div class="mt-4 border-b border-gray-200 dark:border-[#242424] ">
                            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                <button class="tab-btn tab-active py-2 px-1 border-b-2 font-medium text-sm" data-tab="all">
                                    Tất cả
                                </button>
                                <button class="tab-btn py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="successful">
                                    Thành công
                                </button>
                                <button class="tab-btn py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="failed">
                                    Thất bại
                                </button>
                            </nav>
                        </div>
                        
                        <!-- Nội dung tab -->
                        <div class="mt-4">
                            <div id="all-tab" class="tab-content">
                                <ul class="divide-y divide-[#333]" id="loginHistoryList">
                                    <!-- Đăng nhập thành công -->
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                    <i class="fas fa-check text-green-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">Windows PC</p>
                                                <p class="text-sm text-gray-500">Hà Nội, Việt Nam • Hôm nay, 09:15</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Thành công
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <!-- Đăng nhập thất bại -->
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                                    <i class="fas fa-times text-red-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">Thiết bị không xác định</p>
                                                <p class="text-sm text-gray-500">Bắc Ninh, Việt Nam • Hôm nay, 07:42</p>
                                                <p class="text-xs text-red-500">Lý do: Sai mật khẩu</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Thất bại
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <!-- Đăng nhập thành công -->
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                    <i class="fas fa-check text-green-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">iPhone 13 Pro</p>
                                                <p class="text-sm text-gray-500">Đà Nẵng, Việt Nam • Hôm qua, 18:30</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Thành công
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <!-- Đăng nhập thành công -->
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                    <i class="fas fa-check text-green-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">iPad Pro</p>
                                                <p class="text-sm text-gray-500">TP. Hồ Chí Minh, Việt Nam • 3 ngày trước, 14:20</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Thành công
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <!-- Đăng nhập thất bại -->
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                                    <i class="fas fa-times text-red-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">Thiết bị không xác định</p>
                                                <p class="text-sm text-gray-500">Hà Nội, Việt Nam • 4 ngày trước, 22:15</p>
                                                <p class="text-xs text-red-500">Lý do: Tài khoản bị khóa tạm thời</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Thất bại
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                
                                <!-- Phân trang -->
                                <div class="mt-6 flex items-center justify-between">
                                    <div class="flex-1 flex justify-between sm:hidden">
                                        <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                            Trước
                                        </button>
                                        <button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                            Sau
                                        </button>
                                    </div>
                                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                        <div>
                                            <p class="text-sm text-gray-700">
                                                Hiển thị <span class="font-medium">1</span> đến <span class="font-medium">5</span> trong số <span class="font-medium">23</span> kết quả
                                            </p>
                                        </div>
                                        <div>
                                            <Pagination :total="80" showSizeChanger :style="{ marginBottom: '12px' }"></Pagination>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="successful-tab" class="tab-content hidden">
                                <ul class="divide-y divide-gray-200">
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                    <i class="fas fa-check text-green-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">Windows PC</p>
                                                <p class="text-sm text-gray-500">Hà Nội, Việt Nam • Hôm nay, 09:15</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Thành công
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                    <i class="fas fa-check text-green-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">iPhone 13 Pro</p>
                                                <p class="text-sm text-gray-500">Đà Nẵng, Việt Nam • Hôm qua, 18:30</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Thành công
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                                    <i class="fas fa-check text-green-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">iPad Pro</p>
                                                <p class="text-sm text-gray-500">TP. Hồ Chí Minh, Việt Nam • 3 ngày trước, 14:20</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Thành công
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div id="failed-tab" class="tab-content hidden">
                                <ul class="divide-y divide-gray-200">
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                                    <i class="fas fa-times text-red-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">Thiết bị không xác định</p>
                                                <p class="text-sm text-gray-500">Bắc Ninh, Việt Nam • Hôm nay, 07:42</p>
                                                <p class="text-xs text-red-500">Lý do: Sai mật khẩu</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Thất bại
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li class="login-item py-3 px-2 rounded cursor-pointer">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div class="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                                    <i class="fas fa-times text-red-600 text-sm"></i>
                                                </div>
                                            </div>
                                            <div class="ml-3 flex-1">
                                                <p class="text-sm font-medium ">Thiết bị không xác định</p>
                                                <p class="text-sm text-gray-500">Hà Nội, Việt Nam • 4 ngày trước, 22:15</p>
                                                <p class="text-xs text-red-500">Lý do: Tài khoản bị khóa tạm thời</p>
                                            </div>
                                            <div class="ml-4">
                                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Thất bại
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
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
                                    <div class="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <i class="fas fa-exclamation-triangle text-yellow-600"></i>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-sm font-medium text-yellow-800">Bảo mật trung bình</h4>
                                    <p class="mt-1 text-sm text-yellow-700">Tài khoản của bạn cần được bảo vệ tốt hơn</p>
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

                <!-- Khuyến nghị bảo mật -->
                <div class="bg-background dark:bg-[#181818] rounded-lg">
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

                <!-- Liên hệ hỗ trợ -->
                <div class="bg-white rounded-lg dark:bg-[#181818]">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium ">Cần hỗ trợ?</h3>
                        <div class="mt-4">
                            <p class="text-sm text-gray-500">Nếu bạn nghi ngờ tài khoản của mình bị xâm phạm hoặc có câu hỏi về bảo mật, hãy liên hệ với chúng tôi.</p>
                            <div class="mt-4 space-y-3">
                                <a href="#" class="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
                                    <i class="fas fa-envelope mr-2"></i>
                                    security@securesso.vn
                                </a>
                                <a href="#" class="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
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
        </div>
        </div>
    </div>

    
</template>