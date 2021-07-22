import React, { FC } from 'react'

import { useRootStore } from '@hooks/common/useStore'
import { useOutsideClick } from '@hooks/common/useOutsideClick'
import {ReactComponent as CheckIcon} from '@assets/icons/check.svg'

import * as SC from './styled'


export interface PopupProps {
    items: string[];
    placeholder?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    type?: string;
}

const PopupComponent: FC<PopupProps> = (props) => {
    const {
        items,
        icon,
        type,
        placeholder
    } = props

    const [isVisiblePopup, setIsVisiblePopup] = React.useState<boolean>(false)
    const [activeLabel, setActiveLabel] = React.useState<string>(placeholder || items[0])
    const {studentsStore} = useRootStore()
    const popupRef = React.useRef(null)

    useOutsideClick(popupRef, () => {
        setIsVisiblePopup(false)
    })

    const toggleVisiblePopup = () => {
      setIsVisiblePopup(!isVisiblePopup)
    }
    const changeActiveLabel = (index: number) =>{
        toggleVisiblePopup()
        setActiveLabel(items[index])
        if (type === "sort") {
            studentsStore.setSortType(items[index])    
        }
        
    }
    
    return (
        <SC.Base>
            <SC.PopupWrapper>
                <SC.PopupLabel onClick={toggleVisiblePopup} ref={popupRef}>
                    
                    <SC.PopupSpan >{activeLabel}</SC.PopupSpan>                    
                    {icon && <SC.Icon>{React.createElement(icon)}</SC.Icon>}
                </SC.PopupLabel>

                {isVisiblePopup ? (
                <SC.Popup>
                     <SC.PopupUl>
                        {items ? 
                        items.map((item: string, index: number) => 

                                item === activeLabel  ?
                                (
                                <SC.PopupLiActive
                                    title={item} 
                                    key={item} 
                                    onClick={() => changeActiveLabel(index)}
                                >
                                {activeLabel}
                                {type === "sort" ? <SC.IconActive>{React.createElement(CheckIcon)}</SC.IconActive> : ""}
                                </SC.PopupLiActive>
                                )
                                :

                                (<SC.PopupLi
                                    title={item} 
                                    key={item} 
                                    onClick={() => 
                                        changeActiveLabel(index)
                                    }
                                >
                                {item}
                                </SC.PopupLi>)
                        
                            ) 
                            : ''}
                    </SC.PopupUl>
                </SC.Popup>
                ) : '' }
            </SC.PopupWrapper>
            
        </SC.Base>
    )
}

export default PopupComponent

