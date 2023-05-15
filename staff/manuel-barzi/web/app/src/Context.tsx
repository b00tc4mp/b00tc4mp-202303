import { createContext } from 'react'

export type TContext = { alert: Function, toggleTheme: Function }

export const Context = createContext<TContext>({ alert: function () { }, toggleTheme: function () { } })
