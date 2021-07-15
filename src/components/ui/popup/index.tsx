import React, { FC } from 'react'

import sort from '@assets/icons/sort.svg'

import * as SC from './styled'


export interface PopupProps {
    items: string[];
    hasIcon?: boolean;
    placeholder?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const PopupComponent: FC<PopupProps> = (props) => {
    const {
        items,
        hasIcon
    } = props

    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
    const [activeItem, setActiveItem] = React.useState<number>(0)
    const activeLabel = items[activeItem]
    
    const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
    }
    const changeActiveLabel = (index: number) =>{
        toggleVisiblePopup()
        setActiveItem(index)
    }
    return (
        <SC.Base>
            <SC.PopupWrapper>
                <SC.PopupLabel onClick={toggleVisiblePopup}>
                    <SC.PopupSpan>{activeLabel}</SC.PopupSpan>
                    {hasIcon ? <SC.Icon src={sort} alt="popup-icon" /> : ''}
                </SC.PopupLabel>
                {visiblePopup ? (
                <SC.Popup>
                    <SC.PopupUl>
                    {items ? 
                    items.map((item: string, index: number) =>
                        <SC.PopupLi key={item} onClick={() => 
                            changeActiveLabel(index)
                        }>{item}</SC.PopupLi>) 
                        : ''
                        }
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

