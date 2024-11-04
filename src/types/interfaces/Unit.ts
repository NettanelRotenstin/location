import LocationEnum from "../enums/LocationEnum"
import StatusEnum from "../enums/StatusEnum"

export default interface Unit{
    name:string
    location:LocationEnum
    status:StatusEnum
}