import { UserCredentials } from "./UserCredentials.interface";

export interface RegistrationData extends UserCredentials {
    name: string,
    lastname: string,
}