
const _apps = []

export const registerMicroApps = (apps) => {
  console.log(apps);
  // _apps = apps
}

export const start = () => {
  // 1.监视路由变化
  /**
   * hash: window.onhashchange
   * history: 
   *  history.go / history.back / history.forward 使用popstate事件
   *  pushState / replaceState 需要通过函数重写的方式进行劫持
   */
  window.addEventListener('popstate', () => {
    console.log('popstate');
  })

  // 重写pushState
  const rawPushState = window.history.pushState
  window.history.pushState = (...args) => {
    rawPushState.apply(window.history, args)
    console.log('pushState change');
  }
  // 重写replaceState
  const rawReplaceState = window.history.replaceState
  window.history.replaceState = (...args) => {
    rawReplaceState.apply(window.history, args)
    console.log('replaceState change');
  }
  // 2.匹配子应用
  // 3.加载子应用
  // 4.渲染子应用
}