import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'
// import { AtActivityIndicator } from 'taro-ui'


type PageStateProps = {
    list: Array<{
        [key: string]: any
    }>
}
type PageDispatchProps = {
    getSignList: (params) => void
}
type PageOwnProps = {}

type PageState = {
    status: number,
    page: number,
    pageSize: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
    props: IProps;
}

@connect(state => {
    return {
        list: state.sign.data
    }
}, dispatch => {
    return {
        getSignList: (params) => {
            dispatch(getSignListAction(params))
        }
    }
})
class SignList extends Component<{}, PageState> {
    config: Config = {
        navigationBarTitleText: '面试列表'
    }

    state = {
        params: {
            status: 2,
            page: 1,
            pageSize: 10
        },
        // eslint-disable-next-line react/no-unused-state
        tabData: [{
            title: "未开始",
            id: 0
        }, {
            title: "已打卡",
            id: 1
        }, {
            title: "已放弃",
            id: 2
        }, {
            title: "全部",
            id: 3
        }],
        currentIndex: 0

    }

    componentDidShow() {
        let params = { ...this.state.params };
        if (params.status === 2) {
            delete params.status;
        }
        this.props.getSignList(params);

    }

    componentDidHide() { }

    tabClickFn(v) {
        this.setState({ currentIndex: v })
    }

    render() {
        console.log(this.props.list&&this.props.list,"000000000")
        return (
            <View className='wrap'>
                <View className='tab'>
                    {this.state.tabData.map((item, index) => {
                        return <Text className={this.state.currentIndex === index ? "active" : ''} key={index} onClick={this.tabClickFn.bind(this, index)}>{item.title}</Text>
                    })}
                </View>

                <View className='context'>
                   
                {
                    this.props.list&& this.props.list.map((ite, i) => {
                        return  <View className='content'>
                        <View className='text_title'><Text className='title'>{ite.company}</Text><Text className='text_start'>未开始</Text></View>
                        <View className='text_address'><Text>{ite.address}</Text></View>
                        <View className='text_time'><Text className='time'>面试时间：</Text><Text className='text_sleep'>未提醒</Text></View>
                    </View>
                    })
                }
                </View>
            </View>
        )
    }
}


export default SignList as ComponentClass;
