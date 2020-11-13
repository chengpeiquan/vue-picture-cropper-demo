import { DefineComponent, Plugin } from 'vue';

declare const VueImageCropper: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default VueImageCropper;
