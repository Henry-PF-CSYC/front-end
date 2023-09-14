import { GETUSER } from "./action-types"

const getUser = () => {
    return {
        type: GETUSER,
        payload: {
            name: 'Duvan',
            Surname: 'Ramirez'
        }
    }
}