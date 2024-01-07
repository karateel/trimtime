<template>
    <UTable  :columns="columns"
        :loading="state.loading"
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }">
        <template #empty-state>
            <div class="flex flex-col items-center justify-center py-6 gap-3">
                <span class="italic text-sm">No one here!</span>
                <UButton label="Add people" @click="openFormModal.toggleModal()"/>
            </div>
        </template>
        <template #actions-data="{ row }">
            <UDropdown :items="items(row)">
                <UButton variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
            </UDropdown>
        </template>
    </UTable>
  <SettingsTeamModal/>
</template>

<script setup lang="ts">
const openFormModal = useTeamFormStore()

const state = ref({
  loading: true
})

const getTeam = async () => {
  try {
    const response = await fetch('/api/get-team', {
      method: 'GET'
    })
    if (response.ok) {
      const data = await response.json();
      state.value = data
      state.value.loading = false
    } else {
      console.error('Error creating user:', response.statusText);
    }
  } catch (e) {
    console.error('Error:', e)
  }
}

onMounted(() => {
  getTeam()
})

const columns = [{
    key: 'name',
    label: 'Name'
}, {
    key: 'instagram',
    label: 'Instagram'
}, {
    key: 'role',
    label: 'Role'
}]
const items = (row) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => console.log('Edit', row.id)
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid'
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid'
    }]
]
</script>

<style scoped></style>
