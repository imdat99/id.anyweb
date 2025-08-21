import { IconEyeClosedSolid, IconEyeOpened } from '@kousum/semi-icons-vue';
import { defineComponent, h, type PropType } from "vue";

export default defineComponent({
  name: 'EyeBtn',
  props: {
    inputType: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      required: true,
    }
  },
  setup(props) {
    const {onClick} = props
    return () => (
      <button
        class="flex items-center justify-center mr-2 cursor-pointer"
        onClick={onClick}
        >
        {h(props.inputType === 'password' ? IconEyeClosedSolid : IconEyeOpened, { size: "large" })}
      </button>
    )
  }
});