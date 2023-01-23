import state from'./state'
import * as mutations from'./mutations'
import * as actions from'./actions'
import * as getters from'./getters'

const CustomUserView={
namespaced:true,
actions,state,getters,mutations
}

export default CustomUserView;