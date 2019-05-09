import axios from '@/libs/api.request'

export const getMockMenuData = () => {
  return axios.request({
    url: 'get_mock_menu_data',
    method: 'get'
  })
}
