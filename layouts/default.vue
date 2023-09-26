<template>
  <div class="flex h-screen">
    <header>
      <Navigation />
    </header>
    <main class="main-content flex flex-col w-full">
      <UContainer>
        <slot />
      </UContainer>
    </main>
  </div>
</template>
