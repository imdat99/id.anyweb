import { defineComponent, ref } from 'vue';
import { Button as ArcoButton } from '@arco-design/web-vue';
interface Props {
  msg: string;
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props: Props) {
    const count = ref(0);
    const inputValue = ref('dat-abc');
    return () => (
      <>
        <h1>{props.msg}</h1>
        <div class="card">
          <ArcoButton onClick={() => { 
            count.value++
            inputValue.value += count.value
            }}>
            count is {count.value}
          </ArcoButton>
          <p>
            Edit <code>components/HelloWorld.tsx</code> to test HMR {inputValue.value}
          </p>
        </div>
        <input
          v-model={inputValue.value}
          placeholder="Type something..."
        />
        <p>
          Check out
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
            create-vue
          </a>
          , the official Vue + Vite starter
        </p>
        <p>
          Learn more about IDE Support for Vue in the
          <a
            href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
            target="_blank"
          >
            Vue Docs Scaling up Guide
          </a>
          .
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
      </>
    );
  },
});

// Add the following to your global CSS or scoped CSS module
// .read-the-docs {
//   color: #888;
// }