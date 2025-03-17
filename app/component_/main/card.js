import * as Text from '@/app/component_/pseudo/text' 
import * as Icon from '@/app/component_/pseudo/icon'
import * as Images from '@/app/component_/pseudo/images'

export function createCard1() {
    return (
        <div>
            <div>
                <Icon.create1Icon/>
            </div>
            <div>
                <Text.createTertiaryHeading text='Baler sol'/>
                <Text.crateText text='Lorem ipsum set bet cat chat.'/>
            </div>
        </div>
    )
}

export function crateStaffCard() {
    return(
        <div>
            <Images.createImage1 src='' alt=''/>
            <div>
                <Text.createTertiaryHeading text=''/>
                <Text.crateText text=''/>
                {/* {Uncompleted} */}
            </div>
        </div>
    )
}

export function createNewsCard() {
    return(
        <div>
            <div>
                <Images.createImage2/>
            </div>
            <div>
                <Text.createTertiaryHeading/>
                <Text.crateText/>
            </div>
            <div>
                {/* uncompleted */}
            </div>
        </div>
    )
}

export function createEventCard() {
    return(
        <div>
            <div></div>
            <Images.createImage1/>
            <div>
                <Text.createSecondaryHeading/>
                <hr></hr>
                {/* uncompleted */}
                <Text.crateText/>
            </div>
        </div>
    )
}

export function crateSubscribeCard() {
    return(
        <div>
            <Text.createSecondaryHeading/>
            <Text.createTertiaryHeading/>
            <Text.crateText/>
            {/* uncompleted */}
        </div>
    )
}