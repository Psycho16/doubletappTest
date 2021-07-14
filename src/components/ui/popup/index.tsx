import React, { FC } from 'react'

import * as SC from './styled'


export interface PopupProps {
    items: string[];
    hasIcon?: boolean;
    value: string;
    placeholder?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const PopupComponent: FC<PopupProps> = (props) => {
    const {
        items,
        hasIcon,
        value,
        placeholder,
        icon
    } = props
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
    function toggleVisiblePopup() {
      setVisiblePopup(!visiblePopup)
    }
    return (
        <SC.Base>
            <SC.PopupWrapper>
                <SC.PopupLabel onClick={toggleVisiblePopup}>
                    <SC.PopupSpan>{value}</SC.PopupSpan>
                    {icon && <SC.Icon>{React.createElement(icon)}</SC.Icon>}
                    {/* {hasIcon ? <SC.PopupLogo src={popupLogo} alt="popup-icon"/> : ''} */}
                </SC.PopupLabel>
                {visiblePopup ? (
                <SC.Popup>
                    <SC.PopupUl>
                    {items ? 
                    items.map((item: string) => <SC.PopupLi key={item}>{item}</SC.PopupLi>) : ''}
                    </SC.PopupUl>
                </SC.Popup>
                ) : (
                ''
                )}
            </SC.PopupWrapper>
            
        </SC.Base>
    )
}

export default PopupComponent

