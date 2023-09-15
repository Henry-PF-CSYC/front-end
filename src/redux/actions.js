import { GETUSER } from "./action-types"

export const getUser = () => {
    return {
        type: GETUSER,
        payload: {
            name: 'Duvan',
            Surname: 'Ramirez'
        }
    }
}