import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'

type PageStateProps = {
    list: Array<{
        [key: string]: any
    }>
}
type PageDispatchProps = {
    getSignList: (params) => void
}

type PageOwnProps={

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
    props: IProps;
  }

type PageState = {
    status: number,
    page: number,
    pageSize: number
}

@connect(state => {
    return {
        list: state.sign.list
    }
}, dispatch => {
    return {
        getSignList: (params) => {
            dispatch(getSignListAction)
        }
    }
})


class SignList extends Component<{}, PageState>{

    config: Config = {
        navigationBarTitleText: "面试列表"
    }

    state = {
        status: 2,
        page: 1,
        pageSize: 10
    }

    componentDidShow() {
        let params = { ...this.state }
        if (params.status === 2) {
            delete params.status;
        }
        this.props.getSignList(params)
    }

    componentDidHide() {

    }

    render() {
        return (
            <View className="warp">
                <Text>66666</Text>
            </View>
        )
    }

}


export default SignList as ComponentClass