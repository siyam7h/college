import * as Icon from '@/app/component_/pseudo/icon'
import * as Text from '@/app/component_/pseudo/text'

export function mailContact() {
    return(
        <div>
            <Icon.createContactIcon/>
            <Text.crateText/>
        </div>
    )
}

export function socialContact() {
    return(
        <div>
            <Icon.createContactIcon/>
            <Text.crateText/>
        </div>
    )
}

// address 
export function createAddress() {
    return(
        <address>Lorem street 54 New York</address>
    )
}