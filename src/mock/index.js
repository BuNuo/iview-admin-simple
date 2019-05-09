import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData, getDragList } from './data'
import { getMockMenuData } from './menu'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/get_drag_list/, getDragList)
Mock.mock(/\/save_error_logger/, 'success')
Mock.mock(/\/get_mock_menu_data/, getMockMenuData)

export default Mock
