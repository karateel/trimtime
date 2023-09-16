<template>
    <div class="h-screen flex">
        <header class="main-header">
            <Navigation />
        </header>
        <main class="main-content">
            <slot />
        </main>
        <footer class="main-footer">
            Copyright &copy; 2023 My Company.
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>