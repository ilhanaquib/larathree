import User from "@/Models/User";
import { Inertia } from "@inertiajs/core";

export function useCurrentUser(){
    let user = new User(Inertia.page.props.auth.user);

}