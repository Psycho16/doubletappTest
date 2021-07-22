export const specialties: string[] = ['mt', 'kb', 'kn', 'ft','ms']

export const rusSpecialties: string[] = [
  'Математика',
  'Компьютерная безопасность',
  'Компьютерные науки',
  'Фундаментальная информатика и информационные технологии',
  'Математическое обеспечение и администрирование информационных систем'
]

export const rusGroups: string[] = ['МТ', 'КБ', 'КН', 'ФИИТ', "Моаис"]

type ColorsOfLayout = {
  [key: string]: string
}

export const layoutColors: ColorsOfLayout = {
  green: '#83C872',
  blue: '#49C2E8',
  red: '#E25B5B',
  black: '#000000',
  yellow: '#F7FB53',
  orange: '#EFA637',
  rainbow: `linear-gradient(180deg, rgba(255,0,0,1) 
    0%, rgba(255,157,0,1) 
    17%, rgba(255,252,0,1) 
    41%, rgba(0,255,33,1) 
    59%, rgba(20,0,245,1) 
    76%, rgba(209,0,255,1) 100%)`
}