import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components';
import './index.scss'
import "../../icon图标淘宝/font_5rhyeqzz879/iconfont.css"

class Login extends Component {
  config: Config = {
    navigationBarTitleText: '添加面试'
  }

  state = {

  }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (
      <View className='wrap'>
        <View className='title'>
           面试信息
        </View>
        <View className='wrapper'>
          <View>公司名称<input type="text" placeholder="请输入公司名称"/></View>
          <View>公司电话<input type="text" placeholder="请输入面试联系人电话"/></View>
          <View>面试时间</View>
          <View>面试地址<input type="text" placeholder="请选择面试地址"/></View>
        </View>
        <View className='title'>
           备注信息信息
        </View>
      </View>
    )
  }
}


export default Login as ComponentClass;
