import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View} from '@tarojs/components';
import './index.scss'
import "../../icon图标淘宝/font_5rhyeqzz879/iconfont.css"

class My extends Component {
  config: Config = {
      navigationBarTitleText: '个人中心'
    }

  state={
    
  }

  componentDidShow () {}

  componentDidHide () {}
   
  render () {
    
    return (
      <View className='wrap'>
        my
      </View>
    )
  }
}


export default My as ComponentClass;
