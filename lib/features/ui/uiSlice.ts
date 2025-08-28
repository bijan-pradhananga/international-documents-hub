import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UiState {
  mobileMenuOpen: boolean
  activeSection: string
  isLoading: boolean
  notifications: Array<{
    id: string
    type: "success" | "error" | "info" | "warning"
    message: string
    timestamp: number
  }>
}

const initialState: UiState = {
  mobileMenuOpen: false,
  activeSection: "home",
  isLoading: false,
  notifications: [],
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    addNotification: (
      state,
      action: PayloadAction<{
        type: "success" | "error" | "info" | "warning"
        message: string
      }>,
    ) => {
      const notification = {
        id: Date.now().toString(),
        ...action.payload,
        timestamp: Date.now(),
      }
      state.notifications.push(notification)
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload)
    },
    clearNotifications: (state) => {
      state.notifications = []
    },
  },
})

export const {
  toggleMobileMenu,
  setActiveSection,
  setLoading,
  addNotification,
  removeNotification,
  clearNotifications,
} = uiSlice.actions
export default uiSlice.reducer
