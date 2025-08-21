import { IconEyeClosedSolid, IconEyeOpened } from '@kousum/semi-icons-vue';
import { defineComponent, h, toRef } from "vue";

export default defineComponent({
  name: 'EyeBtn',
  props: {
    inputType: {
      type: String,
      default: 'password',
      required: true,
    }
  },
  setup(props) {
    const type = toRef(props.inputType); 
    return () => (
      <button
        class="flex items-center justify-center mr-2 cursor-pointer"
        onClick={() => {
          type.value = type.value === 'password' ? 'text' : 'password';
        }}
        >
        {h(type.value === 'password' ? IconEyeClosedSolid : IconEyeOpened, { size: "large" })}
      </button>
    )
  }
});