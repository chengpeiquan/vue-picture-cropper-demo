import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  onBeforeUnmount,
  watch
} from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'



/** 
 * 暴露一个实例，用于在父级组件操作实例的方法
 */
export const cropper = ref<any>(null);


/** 
 * 定义组件
 */
const VueImageCropper = defineComponent({
  name: 'VueImageCropper',
  props: {
    boxStyle: {
      type: Object,
      required: false
    },
    img: String,
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup (props) {
    const cropperImg = ref<any>(null);

    /** 
     * 初始化插件
     * 必须等待视图渲染完毕后再执行
     */
    const initCropper = (): void => {
      nextTick( () => {
        cropper.value = new Cropper(cropperImg.value, props.options);
        VueImageCropper.cropper = cropper.value;
      });
    };


    /** 
     * 监听图片来源的变化
     */
    watch( () => props.img, () => {
      cropper.value.destroy();
      initCropper();
    });


    /** 
     * 执行初始化
     */
    onMounted( () => {
      // 初始化
      initCropper();

      // 给实例绑定一个方法
      // VueImageCropper.cropper = cropper;
    });


    /** 
     * 组件销毁前记得把插件也销毁
     */
    onBeforeUnmount( () => {
      cropper.value.destroy();
    });
    

    /** 
     * 定义模板并渲染
     */
    return () => (
      <div
        class={ 'vue--image-cropper__wrap' }
        style={ props.boxStyle }
      >
        <img
          ref={ cropperImg }
          class={ 'vue--image-cropper__img' }
          src={ props.img }
        />
      </div>
    )
  }
})

export default VueImageCropper