export const state = () => ({
  isSidebarOpen: false,
})

export const mutations = {
  openSidebar(state) {
    state.isSidebarOpen = true
  },
  closeSidebar(state) {
    state.isSidebarOpen = false
  },
}
