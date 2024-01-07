<script setup lang="ts">
const openFormModal = useTeamFormStore()

const company = ref({
  name: undefined
})
const getCompany = async () => {
  try {
    const response = await fetch('/api/get-company', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        console.warn('Company not found.');
      } else {
        company.value = data;
      }
    } else {
      console.error('Error finding company:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

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
      <SettingsTeamForm v-if="!company"/>
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
