import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
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
    // setTime = (time): string => {

    //     const data = new Date(time)
    // //    console.log(data)

    //     //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        
    //         let y = data.getFullYear();
    //         let m = data.getMonth() + 1;
    //         m = m < 10 ? ('0' + m) : m;
    //         let d =data.getDate();
    //         d = d < 10 ? ('0' + d) : d;
    //         let h = data.getHours();
    //         h = h < 10 ? ('0' + h) : h;
    //         let minute = data.getMinutes();
    //         minute = minute < 10 ? ('0' + minute) : minute;
    //         return y + '/' + m + '/' + d + ' ' + h + ':' + minute;
       
    // }
    detailFn(i){
        console.log(i)
    }
    render() {
        console.log(this.props.list && this.props.list, "000000000")
        return (
            <View className='wrap'>
                <View className='tab'>
                    {this.state.tabData.map((item, index) => {
                        return <Text className={this.state.currentIndex === index ? "active" : ''} key={index} onClick={this.tabClickFn.bind(this, index)}>{item.title}</Text>
                    })}
                </View>

                <View className='context'>

                    {
                        this.props.list && this.props.list.map((ite, i) => {
                            return <View className='content' key={i} onClick={this.detailFn.bind(this,i)}>
                                <View className='text_title'><Text className='title'>{ite.company}</Text><Text className='text_start'>未开始</Text></View>
                                <View className='text_address'><Text>{JSON.parse(ite.address).title}</Text></View>
                                <View className='text_time'><Text className='time'>面试时间：{ite.create_time}</Text><Text className='text_sleep'>未提醒</Text></View>
                            </View>
                        })
                    }
                </View>
            </View>
        )
    }
}


export default SignList as ComponentClass;
