<template>
    <footer class="hidden lg:fixed bottom-0 w-full lg:flex bg-mercury-200 dark:bg-tundora mt-4 max-h-[64px]">
        <div class="w-full mx-auto max-w-screen-xl p-4 grid grid-flow-col items-center">
            <div>
                <span class="text-tuna dark:text-slate-300">© {{ new Date().getFullYear() }}</span>
                <ULink to="/" active-class="text-primary hover:underline">
                    TrimTime
                </ULink>
            </div>
          <div class="justify-self-end">
            <ul class="grid grid-cols-[repeat(3,_150px)]">
              <li class="text-center">
                <UButton label="Documentation" variant="ghost"/>
              </li>
              <li class="text-center">
                <UButton label="Company" variant="ghost"/>
              </li>
              <li class="text-center">
                <UButton label="Support" variant="ghost"/>
              </li>
            </ul>
          </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
#footer {
    grid-area: footer;
}
</style>
