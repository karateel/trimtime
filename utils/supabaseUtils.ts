import type { UploadAvatarParams } from "~/interface";

export async function uploadAvatar({files, emit}: UploadAvatarParams):Promise<void> {
    const supabase = useSupabaseClient();
    const uploading = ref(false);
    try {
      uploading.value = true;

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

      if (uploadError) throw uploadError;

      emit('update:path', filePath);
      emit('upload');
    } catch (error:any) {
      alert(error.message);
    } finally {
      uploading.value = false;
    }
  }

export async function downloadImage(imgSrc: {value:string}, path:{ value:string} ) {
    const client = useSupabaseClient()
    try {
        const { data, error } = await client.storage.from('avatars').download(path.value)
        if (error) return
        imgSrc.value = URL.createObjectURL(data)

    } catch (error:any) {
        console.error('Error downloading image: ', error.message)
    }
}

export async function logout() {
    const client = useSupabaseClient()
    const { error } = await client.auth.signOut()
    await navigateTo('/auth/login')
    if (error) {
        return alert('Something went wrong !')
    }
}
