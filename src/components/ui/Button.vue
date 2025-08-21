<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  ':uno: inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          ':uno: bg-primary text-primary-foreground shadow hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-offset-1 ease-in-out duration-200 transition-width',
        destructive:
          ':uno: bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          ':uno: border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          ':uno: bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: ':uno: hover:bg-accent hover:text-accent-foreground',
        link: ':uno: text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  as?: string
}

// eslint-disable-next-line vue/define-macros-order
withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>