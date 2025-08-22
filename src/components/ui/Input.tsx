import { Input } from "@kousum/semi-ui-vue";
import { propTypes } from "@kousum/semi-ui-vue/dist/input";
import { useVModel } from "@vueuse/core"
import { cn, omit } from "src/lib/utils";
import { defineComponent, h, ref } from "vue";


export type InputProps = InstanceType<typeof Input>["$props"] & {
    modelValue?: string | number
};
export default defineComponent({
    name: "Input",
    inheritAttrs: false, // quan trọng
    props: {
        ...propTypes, 
        modelValue: {
            type: [String, Number],
            default: "",
        }
    },
    setup(props: InputProps, { attrs, slots, emit, expose }) {
        const value = useVModel(props, "modelValue", emit, {
            passive: true,
            defaultValue: props.defaultValue,
        })
        const inputRef = ref<InstanceType<typeof Input> | null>(null);
        expose({
            focus: () => inputRef.value?.$el.focus?.(),
            blur: () => inputRef.value?.$el.blur?.(),
            getInputNode: () => inputRef.value?.$el.getInputNode?.(),
        });
        return () => (
            h(Input, {
                ref: inputRef,
                ...omit(props, "modelValue"),
                ...attrs,
                placeholder: typeof props.placeholder === "string" ? props.placeholder : (attrs.placeholder as string) ?? "",
                value: value.value,
                onChange: (val, e) => {
                    value.value = val;
                    props.onChange?.(val, e);
                },
                class: cn("!rounded-md !border-gray-300 !bg-transparent !focus-visible:focus_inp !focus-within:focus_inp transition-all duration-200", props.class ?? ""),
                prefix: slots?.prefix ? slots.prefix()[0] : props?.prefix ? props?.prefix : undefined,
                suffix: slots?.suffix ? slots.suffix()[0] : props?.suffix ? props?.suffix : undefined,
            })
        )
    }
})