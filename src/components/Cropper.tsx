
import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  onBeforeUnmount,
  watch,
  Plugin,
  getCurrentInstance,
  App
} from 'vue-demi'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export let hey = ref<any>(null);

// export default defineComponent({
const ImageCropper = defineComponent({
  name: 'Cropper',
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
  methods: {
    sayHi () {
      console.log('Hi');
    },
    sayHello () {
      console.log('Hello');
      console.log(this);
    },
    move (cropper: any) {
      console.log('move cropper', cropper);
      console.log('move cropper isImg', cropper.isImg);
      return cropper.isImg;
    }
  },
  setup (props) {
    const cropper = ref<any>(null);
    const cropperImg = ref<any>(null);
    const { proxy }: any = getCurrentInstance();

    

    /** 
     * 初始化插件
     */
    const initCropper = (): void => {
      // 必须等待试图渲染完毕后再执行初始化
      nextTick( () => {
        cropper.value = new Cropper(cropperImg.value, props.options);
        console.log(proxy);

        proxy.move(cropper.value);
        hey = cropper.value;
        console.log('hey',hey);
        
      });
    };

    const move = (x: number, y?: number) => {
      cropper.value.move(x, y);
    }

    // const sayHi = (): void => {
    //   console.log('Hi');
    // }


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
      initCropper();
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


ImageCropper.install = (app: App) => {
  app.component(ImageCropper.name, ImageCropper);
  return app;
}

// export default ImageCropper

// export default ImageCropper as any & Plugin

export default ImageCropper as typeof ImageCropper & Plugin & {
  readonly sayHi: any
}