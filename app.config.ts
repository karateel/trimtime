export default defineAppConfig({
  ui: {
    primary: 'orange',
    gray: 'slate',
    verticalNavigation: {
      label: "truncate relative",
      active: "text-primary-500 dark:text-primary-500 before:bg-mercury dark:before:bg-tundora-700",
      inactive: "text-tuna dark:text-slate-300 hover:text-tuna dark:hover:text-slate-300 hover:before:bg-primary-500/80 dark:hover:before:bg-primary-500/80 drop-shadow-xl",
      icon: {
        base: 'flex-shrink-0 w-6 h-6',
        active: "text-tuna dark:text-primary-500",
        inactive: "text-tuna dark:text-slate-300 group-hover:text-tuna dark:group-hover:text-slate-300"
      },
    },
    button: {
      variant: {
        solid: 'shadow-sm text-tuna dark:text-neutral-50 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-500 dark:hover:bg-{color}-600 dark:disabled:bg-{color}-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
        link: 'text-{color}-500 hover:text-{color}-500 disabled:text-{color}-500 dark:text-{color}-500 dark:hover:text-{color}-500 dark:disabled:text-{color}-300 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'
      }
    },
    input: {
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 bg-neutral-200',
      placeholder: 'placeholder-tuna-100 dark:placeholder:neutral-200',
      variant: {
        outline: 'shadow-lg bg-neutral-200 transition duration-500 ease-in-out text-tuna ring-1 ring-inset ring-transparent focus:ring-2 focus:ring-{color}-500 dark:ring-transparent dark:focus:ring-{color}-400 '
      }
    },
    dropdown: {
      background: 'bg-mercury dark:bg-tundora',
      ring: 'ring-1 ring-tuna dark:ring-brown',
      divide: 'divide-y divide-tuna dark:divide-brown',
      item: {
        base: 'group flex items-center gap-2 w-full hover:bg-primary-500/80 dark:hover:bg-primary-600/50',
        padding: "px-2 py-1.5",
        active: "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",
        inactive: "text-gray-700 dark:text-gray-200",
        disabled: "cursor-not-allowed opacity-50",
        icon: {
          base: "flex-shrink-0 h-4 w-4",
          active: "text-gray-500 dark:text-gray-400",
          inactive: "text-gray-400 dark:text-gray-500"
        },
      },
    },
    avatar: {
      background: 'bg-white dark:bg-brown'
    }
  },
})  