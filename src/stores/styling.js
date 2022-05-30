import { writable, derived } from "svelte/store"

export const clrText = writable("#535d68")
export const clrAccent = writable("#004f9c")
export const clrDiscount = writable("#e00000")
export const clrButtons = writable("#009292")
export const clrLight = writable("#959595")

export const fsHeadline = writable(38)
export const lhHeadline = derived(
  fsHeadline,
  ($fsHeadline) => $fsHeadline * 1.2
)

export const fsText = writable(17)
export const lhText = derived(fsText, ($fsText) => $fsText * 1.5)
