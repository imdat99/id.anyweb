import type { DefineComponent } from "vue";
import type { Button } from "@kousum/semi-ui-vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // components trong src
    "v-button": typeof import("./ui/Button.vue").default;
    "s-button": typeof Button;
    "v-input": typeof import("./ui/Input").default;

    // components lấy ở lib ngoài
    // ví dụ từ "awesome-ui"
    AwesomeButton: DefineComponent<{ color?: string }, {}, any>;
  }
}

export {};