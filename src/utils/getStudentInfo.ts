export function getRusSpecialty(
    specialty: string,
    rusSpecialties: string[],
    specialties: string[]
  ): string {
    return rusSpecialties[specialties.indexOf(specialty)]
  }
  
  export function getRusGroup(group: string, rusGroups: string[], specialties: string[]): string {
    const [abbr, num]: string[] = group.split('-')
    return `${rusGroups[specialties.indexOf(abbr)]}-${num}`
  }
  
  export function getAgeFromBirthday(birthday: string): number {
    const [year, month, day]: string[] = birthday.split('-')
    const today: Date = new Date()
    const dateBirthday: Date = new Date(+year, +month, +day)
    let age: number = today.getFullYear() - dateBirthday.getFullYear()
    const m: number = today.getMonth() - (dateBirthday.getMonth() - 1) 
    // вычитаем, т.к. в JSе отсчет месяцев начинается с 0
  
    return m < 0 || (m === 0 && today.getDate() < dateBirthday.getDate()) ? --age : age
  }
  
  export function fixAgeWord(number: number) {
    const titles: string[] = ['год', 'года', 'лет']
    const cases: number[] = [2, 0, 1, 1, 1, 2]
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }