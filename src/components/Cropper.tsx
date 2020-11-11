
import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  onBeforeUnmount,
  watch
} from 'vue-demi'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default defineComponent({
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
  setup (props) {
    const cropper = ref<any>(null);
    const cropperImg = ref<any>(null);

    const initCropper = (): void => {
      console.log(cropper, cropperImg);
      
      // cropper.value = new Cropper(cropperImg.value, props.options);

      // console.log('props', props);
      // console.log(props.img);
      // console.log('cropper', cropper.value);
    }

    // const replace = (newImg: string, hasSameSize: boolean = false) => {
    //   return cropper.value.replace(newImg, hasSameSize);
    // };

    watch( () => props.img, () => {
      console.log('watch', props.img);
    });

    onMounted( () => {
      nextTick( () => {
        initCropper();
      });
    })

    onBeforeUnmount( () => {
      cropper.value.destroy();
    });

    // return {
    //   // 数据
    //   cropper,
    //   cropperImg,

    //   // 方法
    //   initCropper,
    //   replace
    // }
    

    return () => ( <div>

      <div
        class={ 'cropper-wrap' }
        style={ props.boxStyle }
      >
        <img
          ref="cropperImg"
          src={ props.img }
        />

        {/* <p v-if={ props }>
          a
        </p> */}
      </div>

    </div> )
  }
})