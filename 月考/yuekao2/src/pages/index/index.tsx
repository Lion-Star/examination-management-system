import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane,AtTabBar  } from 'taro-ui'

import { observer, inject } from '@tarojs/mobx'

import './index.scss'

type PageStateProps = {
  counterStore: {
    targetList,
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '有爱清单'
  }



  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  state = {
    current: 0,
    curIndex:0
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  tabbar (val) {
    this.setState({
      curIndex: val
    })
  }

  


  render() {
      console.log(this.props)
    let {counterStore:{targetList}} = this.props

    const tabList = [{ title: '目标' }, { title: '习惯' }]
    return (
      <View className='index'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className="target">
              多彩的周末生活
             {
                 targetList.map((item,index)=>{
                     return <view className='item' key={index}>
                         {index+1+""+item.title}
                     </view>
                 })
             }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style=' padding: 100px 50px;background-color: #f2f2f5;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
        </AtTabs>
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
          ]}
          onClick={this.tabbar.bind(this)}
          current={this.state.curIndex}
        />
      </View>
    )
  }
}

export default Index as ComponentType
