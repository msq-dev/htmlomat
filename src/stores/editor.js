import { writable } from "svelte/store"

export const currentInputSection = writable("header")
export const previewMode = writable(false)
export const showResetButton = writable(true)
