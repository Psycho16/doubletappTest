import React, { FC } from 'react'

import sort from '@assets/icons/sort.svg'
import { useRootStore } from '@hooks/common/useStore'

import * as SC from './styled'


export interface PopupProps {
    items: string[];
    hasIcon?: boolean;
    placeholder?: string;
    type?: string;
}

const PopupComponent: FC<PopupProps> = (props) => {
    const {
        items,
        hasIcon,
        type
    } = props

    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
    const [activeItem, setActiveItem] = React.useState<number>(0)
    const activeLabel = items[activeItem]
    const {StudentsStore} = useRootStore()
    
    const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
    }
    const changeActiveLabel = (index: number) =>{
        toggleVisiblePopup()
        setActiveItem(index)
        if (type === "sort") {
            StudentsStore.setSortType(items[index])    
        }
    }
    return (
        <SC.Base>
            <SC.PopupWrapper>
                <SC.PopupLabel onClick={toggleVisiblePopup}>
                    <SC.PopupSpan >{activeLabel}</SC.PopupSpan>
                    {hasIcon ? <SC.Icon src={sort} alt="popup-icon" /> : ''}
                </SC.PopupLabel>

                {visiblePopup ? (
                <SC.Popup>
                    <SC.PopupUl>
                    {items ? 
                    items.map((item: string, index: number) =>
                        <SC.PopupLi key={item} onClick={() => 
                            changeActiveLabel(index)
                        }
                    >
                    {item}
                    </SC.PopupLi>) 
                        : ''}
                    </SC.PopupUl>
                </SC.Popup>
                ) : '' }
            </SC.PopupWrapper>
            
        </SC.Base>
    )
}

export default PopupComponent

