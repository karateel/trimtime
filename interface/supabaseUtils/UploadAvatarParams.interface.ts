export interface UploadAvatarParams {
    files: FileList | null;
    emit: (eventName: string, ...args: any[]) => void;
  }