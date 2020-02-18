import { observable } from 'mobx'

const counterStore = observable({
  counter: 0,
  targetList: [{title: "看一场私人电影",
      state:false
    },
    {
      title: "玩一场保龄球",
      state:false
    }]

})
export default counterStore