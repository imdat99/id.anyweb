/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  type Props = { foo?: string; bar?: number };
  type Emits = 'click' | 'change';
  const component: DefineComponent<Props, {}, Emits>;
  export default component;
}