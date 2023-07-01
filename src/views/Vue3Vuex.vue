<template>
    <div>Vue3------Vuex复习</div>
    <div>使用模块中的state：{{ $store.state.uuidState.uuid }}</div>
    <div>使用模块中的getters：{{ $store.getters['uuidState/uuidToUpper'] }}</div>
    <div>使用非模块的state：{{ $store.state.code }}</div>
    <div>使用非模块的getters：{{ $store.getters.CODE }}</div>
</template>

<script setup>
import { nanoid } from 'nanoid'
import { useStore } from 'vuex';
const store = useStore()
// 使用mutations修改state中的的值
const saveuuid = () => {
    const uuid = nanoid()
    store.commit('uuidState/changeUuid', uuid)
}
// 获取state中的值
const getuuid = () => {
    return store.state.uuidState.uuid
}
// 使用actions异步修改state的值
const setStateTag = () => {
    store.dispatch('uuidState/CHANGE_TAG', '-----actions-----')
}
// 使用getters加工state的数据
const getUuidUpper = () => {
    return store.getters['uuidState/uuidToUpper']
}
// 初始化
const init = () => {
    saveuuid()
    setStateTag()
    // console.log('store', store);
    console.log('uuid', store.state.uuidState.uuid);
    console.log('state_tag', store.state.uuidState.state_tag);
    console.log('getter', store.getters['uuidState/uuidToUpper']);
}
init()
</script>

<style lang="scss" scoped>
</style>
