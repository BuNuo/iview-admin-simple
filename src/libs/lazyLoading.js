export default (name) => () => import(`@/view/${name}.vue`)
