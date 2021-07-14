// Common app data example

import { UserRole } from "@models/common/user.model"


interface UserRoleSelectItem {
  label: string;
  value: UserRole;
}

export const userRoleSelectData: UserRoleSelectItem[] = [
  {
    value: UserRole.ADMIN,
    label: 'Admin'
  },
  {
    value: UserRole.ARTIST,
    label: 'Artist'
  },
  {
    value: UserRole.EXPERT,
    label: 'Expert'
  }
]