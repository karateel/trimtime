<template>
  <UContainer class="bg-fcfcfc text-12161e h-full">
    <div class="bg-fcfcfc text-12161e h-screen overflow-y-auto relative">
      <div class="relative min-h-screen flex justify-center items-center box-border">
        <AppBackToLogin />
        <AppBackToHome />
        <div class="relative flex-grow">
          <div class="w-full my-0 mx-auto py-0 px-5 box-border">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
