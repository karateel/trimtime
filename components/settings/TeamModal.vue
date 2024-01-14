<script setup lang="ts">
const openFormModal = useTeamFormStore()

const company = ref({
  name: undefined
})
const getCompany = async () => {
  const { data, error } = await useFetch('/api/get-company', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if(data.value && !error.value) {
    company.value.name = data.value.name
  } else {
    console.log(error.value)
  }
}

onMounted(() => {
  getCompany()
})
</script>

<template>
  <UModal v-model="openFormModal.isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-tundora dark:divide-mercury' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6">
            Add a team member
          </h3>
        </div>
      </template>
      <SettingsTeamForm v-if="company"/>
      <SettingsCompanyForm v-else/>
      <template #footer>
        <div class="flex items-center justify-end">
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>
