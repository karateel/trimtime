<template>
    <header id="header"
        class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full text-sm py-2.5 sm:py-2
         bg-mercury-200 dark:bg-tundora flex-col gap-1">
        <nav class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
            <ULink class="mr-5 lg:mr-0 flex-none text-xl font-semibold dark:text-white" to="/">
                TrimTime
            </ULink>

            <div class="w-full flex items-center justify-end ml-auto sm:gap-x-3 sm:order-3">
                <div class="flex flex-row items-center justify-end gap-2">
                    <UserButton />
                </div>
            </div>
        </nav>
        <NavAppNavToggler />
    </header>
    <NavAppSidebar />
</template>

<script lang="ts" setup>

</script>

<style scoped>
#header {
    grid-area: header;
}
</style>