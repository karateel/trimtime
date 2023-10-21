<template>
    <div>
        <img v-if="src" :src="src" alt="Avatar" class="avatar image" style="width: 10em; height: 10em;" />
        <UAvatar v-else icon="i-heroicons-photo" />
        <UFormGroup :label="uploading ? 'Uploading ...' : 'Upload'">
            <UInput type="file" id="single" accept="image/*" variant="outline" color="primary"
                @change="uploadAvatarFunction" :loading="uploading" />
        </UFormGroup>
    </div>
</template>

<script setup>
const props = defineProps(['path']);
const { path } = toRefs(props);

const emit = defineEmits(['update:path', 'upload']);

const uploading = ref(false);
const src = ref('');
const files = ref();

const uploadAvatarFunction = (evt) => {
    files.value = evt.target.files;
    uploadAvatar({ files: files.value, emit });
};

downloadImage(src, path);

watch(path, () => {
    if (path.value) {
        downloadImage(src, path);
    }
});
</script>