import { withField } from "@kousum/semi-ui-vue";
import type { WithFieldOption } from "@kousum/semi-ui-vue/dist/form";
import { defineComponent, getCurrentInstance, h, type DefineSetupFnComponent, type Component } from "vue";

export default defineComponent({
  name: "WithFieldWrapper",
  props: {
    withFieldOption: {
        type: Object as () => WithFieldOption,
        default: undefined,
        required: false,
    },
    field: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    style: {
      type: Object,
      default: () => ({}),
    },
    is: {
      type: [String, Object] as unknown as DefineSetupFnComponent<any>, // chỉ runtime check String/Object
      default: "input",
    },
  },
  setup(props, { attrs, slots }) {
    const instance = getCurrentInstance();
     const component: Component = (instance?.appContext.components[props.is] as Component) || props.is;
     const WrappedComponent = withField(props.is, props.withFieldOption);

    return () =>
      h(
        WrappedComponent,
        {
          ...attrs,         // forward tất cả props từ parent
          field: props.field,
          label: props.label,
          style: props.style,
        },
        slots
      );
  },
});
