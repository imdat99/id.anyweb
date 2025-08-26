/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  type Props = { foo?: string; bar?: number };
  type Emits = 'click' | 'change';
  const component: DefineComponent<Props, {}, Emits>;
  export default component;
}
declare global {
    interface Window {
        APP_LANGUGE_SUPPORT: string[];
        APP_DEFAULT_LANGUAGE: string;
    }
}
export {};