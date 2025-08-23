import { defineComponent, onErrorCaptured, ref } from "vue";
import { RouterLink } from "vue-router";

export function withErrorBoundary(WrappedComponent: any) {
    return defineComponent({
        name: `WithErrorBoundary(${WrappedComponent.name})`,
        render() {
            if (this.hasError) {
                return (
                    <>
                        <div v-else class="flex flex-col items-center justify-center h-screen text-center">
                            <h1 class="text-3xl font-bold text-red-600 mb-4">Có lỗi xảy ra!</h1>
                            <button onClick={() => this.reset()}
                                class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Thử lại
                            </button>
                            <a
                                href="/"
                                class="mt-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                            >
                                Về trang chủ
                            </a>
                        </div>
                    </>
                );
            }
            return <WrappedComponent {...this.$props} v-slots={this.$slots} />;
        },
        setup() {
            const hasError = ref(false);
            const error = ref<Error | null>(null);
            onErrorCaptured((err) => {
                hasError.value = true;
                error.value = err as Error;
                console.error("Error captured in withErrorBoundary:", err);
                return false; // Prevent further propagation
            });
            return { hasError, error, reset: () => { hasError.value = false; error.value = null; } };
        },
    });
}