<template>
    <div>
        <img v-if="src" :src="src" alt="Avatar" class="avatar image" style="width: 10em; height: 10em;" />
        <div v-else class="avatar no-image" :style="{ height: size, width: size }" />

        <div style="width: 10em; position: relative;">
            <label class="button primary block" for="single">
                {{ uploading ? 'Uploading ...' : 'Upload' }}
            </label>
            <input style="position: absolute; visibility: hidden;" type="file" id="single" accept="image/*"
                @change="uploadAvatarFunction" :disabled="uploading" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['path', 'size']);
const { path } = toRefs(props);

const emit = defineEmits(['update:path', 'upload']);

const uploading = ref(false);
const src = ref('');
const files = ref();

const uploadAvatarFunction = (evt) => {
    files.value = evt.target.files;
    uploadAvatar({files: files.value, emit});
};

downloadImage(src, path);

watch(path, () => {
    if (path.value) {
        downloadImage(src, path);
    }
});
</script>