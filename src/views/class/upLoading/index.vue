<template>
  <div class="components-container">
    <aside>This is based on
      <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload"> vue-image-crop-upload</a>.
      {{ $t('components.imageUploadTips') }}
    </aside>

    <pan-thumb :image="image" />

    <el-button type="primary" icon="el-icon-upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>

    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="http://123.206.55.50:11000/upload"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapState , mapActions} from 'vuex'
export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  computed:{
      ...mapState({
          userid:state=>state.user.userid
      })
  },
  methods: {
      ...mapActions({
          getupdataList:"user/getupdataList",
          getInfo:"user/getInfo"
      }),
      async cropSuccess(resData) {
      this.imagecropperShow = false
      console.log(resData)
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData[0].path

      await this.getupdataList({user_id:this.userid,avatar:resData[0].path})//更新数据
      await this.getInfo()
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style scoped>
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>