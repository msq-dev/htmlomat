import { writable } from "svelte/store"

export const BASE_URL = window.location.origin

export const currentInputSection = writable("header")
export const previewMode = writable(false)
export const showResetButton = writable(true)
