export const specialties: string[] = ['mt', 'kb', 'kn', 'ft','ms']

export const rusSpecialties: string[] = [
  'Математика',
  'Компьютерная безопасность',
  'Компьютерные науки',
  'Фундаментальная информатика и информационные технологии',
  'Математическое обеспечение и администрирование информационных систем'
]

export const rusGroups: string[] = ['МТ', 'КБ', 'КН', 'ФИИТ', "МОАиС"]

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

export const namesOfMonths: ColorsOfLayout = {
  '01': 'Января',
  '02': 'Февраля',
  '03': 'Марта',
  '04': 'Апреля',
  '05': 'Мая',
  '06': 'Июня',
  '07': 'Июля',
  '08': 'Августа',
  '09': 'Сентября',
  10: 'Октября',
  11: 'Ноября'
}

export const namesOfColors: ColorsOfLayout = {
  blue: 'Синий',
  red:'Красный', 
  green:'Зеленый',
  yellow:'Желтый', 
  black:'Черный',
  orange:'Оранжевый',
  rainbow: 'Радужный'
}

export const groupsWithRusLabels = [
  {value:"mt-101", label:'МТ-101'},
  {value:"mt-102",label:'МТ-102'},
  {value:"mt-202",label:'МТ-202'},
  {value:"mt-201",label:'МТ-201'},
  {value:"mt-301",label:'МТ-301'},
  {value:"mt-302",label:'МТ-302'},
  {value:"mt-401",label:'МТ-401'},
  {value:"ft-101",label:'ФИИТ-101'},
  {value:"ft-201",label:'ФИИТ-201'},
  {value:"ft-301",label:'ФИИТ-301'},
  {value:"ft-401",label:'ФИИТ-401'},
  {value:"ms-101",label:'МОАиС-101'},
  {value:"ms-201",label:'МОАиС-201'},
  {value:"ms-301",label:'МОАиС-301'},
  {value:"ms-401",label:'МОАиС-401'},
  {value:"kn-101",label:'КН-101'},
  {value:"kn-201",label:'КН-201'},
  {value:"kn-301",label:'КН-301'},
  {value:"kn-401",label:'КН-401'},
  {value:"kb-101",label:'КБ-101'},
  {value:"kb-201",label:'КБ-201'},
  {value:"kb-301",label:'КБ-301'},
  {value:"kb-401",label:'КБ-401'},
  {value:"kb-501",label:'КБ-501'}
]

export const colorsWithRusLabels = [
  {value:'blue', label:'Синий'},
  {value:'red', label:'Красный'}, 
  {value:'green', label:'Зеленый'}, 
  {value:'yellow', label:'Желтый'}, 
  {value:'black', label:'Черный'}, 
  {value:'orange', label:'Оранжевый'},
  {value: 'rainbow', label: 'Радужный'}
]

export const specialtiesWithRusLabels = [
  {value: 'mt', label: 'Математика'},
  {value: 'kb', label: 'Компьютерная безопасность'},
  {value: 'ft', label: 'Фундаментальная информатика и информационные технологии'},
  {value: 'kn', label: 'Компьютерные науки'},
  {value: 'ms', label: 'Математическое обеспечение и администрирование информационных систем'}
]