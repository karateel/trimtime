export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    verticalNavigation: {
      label: "truncate relative",
      active: "text-primary-400 dark:text-primary-500 before:bg-gray-100 dark:before:bg-gray-800",
      inactive: "text-gray-500 dark:text-gray-400 hover:text-primary-900 dark:hover:text-white hover:before:bg-primary-50 dark:hover:before:bg-primary-800/50",
      icon: {
        active: "text-primary-700 dark:text-primary-400",
        inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
      },
    }
  },
})