import * as Text from '@/app/component_/pseudo/text'
import * as Contact from '@/app/component_/pseudo/contact'

export function footer() {
    return(
        <footer>
            <div>
                {/* 1st segment */}

                <Text.crateText/>
            </div>
            <div>
                {/* 2nd segment */}
                <Text.createTertiaryHeading text='Contact us'/>
                <Contact.createAddress/>
                <Contact.mailContact/>
                <Contact.socialContact/>
            </div>
            <div>
                {/* 3rd segment */}
            </div>
            <div>
                {/* 4th segment */}
            </div>

        </footer>
    )
}