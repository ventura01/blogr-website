import { Overpass, Ubuntu } from 'next/font/google'

export const overpass = Overpass({
  weight: ["300","600"],
  subsets: ["latin"],
})
export const ubuntu = Ubuntu({
  weight: ["400","500","700"],
  subsets: ["latin"],
})

// MENULINKS

export const menuLinks = [{name:"product", route:"#products"}, {name:"company", route:"#company"}, {name:"connect", route:"#connect"}]